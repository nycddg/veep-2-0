// A single clock drives travel, ownership and playback controls, including handoffs.
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const shouldReduce = () => reduced.matches || document.documentElement.dataset.motionPreference==='reduce';
  const clamp = n => Math.max(0, Math.min(1,n));
  const atlas = {
    'waiting-work':['open'], 'capacity-limit':['open'], 'competing-priorities':['open'],
    'scope-edge':['open'], 'parallel-launch':['open','veep',80/288],
    'operator-joins':['client','veep',.5], 'paired-work':['client'],
    'evidence-gate':['event'], 'review-return':['veep'], 'decision-right':['veep','client',.56],
    'evidence-chain':['event'], 'one-bottleneck':['event'], 'trial-window':['event'],
    'repeat-demand':['event'], 'common-offer':['event'], 'parallel-mandates':['veep'],
    'handoff-point':['veep','client',.5], 'asset-after':['veep','client',96/288],
    'context-bridge':['event'], 'steady-state':['client']
  };
  function job(mark, from, to, mix) {
    const box=mark.querySelector('rect'), dot=mark.querySelector('circle');
    const color=(state,center)=>center ? (state==='veep'?'var(--job-blue,var(--blue,#4e7ad4))':'var(--signal,#d75c57)') : (state==='veep'?'var(--job-box,#0b111f)':'var(--paper,var(--v-surface,#fbfaf8))');
    const paint=center=>mix===0?color(from,center):mix===1?color(to,center):'color-mix(in srgb, '+color(to,center)+' '+(mix*100)+'%, '+color(from,center)+')';
    box.style.fill=paint(false);box.style.stroke='var(--ink,var(--v-text,#0b111f))';
    box.style.strokeDasharray=(mix===0?from:to)==='open'?'2.5 2.5':'none';
    dot.style.fill=paint(true);dot.style.stroke='none';
  }
  function prepare(fig) {
    const button=fig.querySelector('button'); if (!button||fig.dataset.timelineReady)return;
    fig.dataset.timelineReady='true';
    const marker=fig.querySelector('.travelling-mark'), path=fig.querySelector('.mv-route');
    const route=marker&&atlas[fig.dataset.concept], length=path?.getTotalLength();
    const initial=fig.querySelector('.initial-state');
    const transfer=fig.querySelectorAll('[data-transfer]');
    const beats=[...fig.querySelectorAll('.trace,.moment,.fd-trace,.fd-band,.timed-step')];
    const review=fig.id==='review-loop';
    if(review)beats.splice(1,3,beats[3],beats[1],beats[2]);
    const duration=route?4200:Math.max(2400,beats.length*650+700);
    function draw(t){
      if(initial)initial.style.visibility=t===1?'visible':'hidden';
      if(route){
        const [start,end=start,at=.5]=route;
        const moving=clamp((t-.10)/.80), changes=start!==end;
        const arrive=at*.72, depart=arrive+.28;
        const distance=!changes?moving:moving<arrive?moving/.72:moving<depart?at:at+(moving-depart)/.72;
        const pt=path.getPointAtLength(length*clamp(distance));marker.setAttribute('transform','translate('+pt.x+' '+pt.y+')');
        if(start!=='event')job(marker,start,end,clamp((moving-arrive)/.28));
      }
      for(const mark of transfer)job(mark,mark.dataset.transfer,mark.dataset.job,clamp((t-Number(mark.dataset.at || .18))/.19));
      beats.forEach((node,i)=>{
        const f=clamp((t*(beats.length+.6)-i)/1.3);
        if(node.matches('path:not(.moment)')){node.setAttribute('pathLength','1');node.style.strokeDasharray=f===1?'none':'1';node.style.strokeDashoffset=1-f}
        else if(node.matches('g.moment') && node.querySelector('circle,rect')){
          for(const body of node.querySelectorAll('circle,rect,path')) body.style.strokeOpacity=.22+.78*f;
        } else node.style.opacity=.22+.78*f;
      });
    }
    let state='Play',elapsed=0,previous=0,frame;
    function setState(next){state=next;button.textContent=next;button.setAttribute('aria-label',next+' '+fig.querySelector('h3').textContent)}
    function tick(now){elapsed+=now-previous;previous=now;draw(clamp(elapsed/duration));if(elapsed<duration)frame=requestAnimationFrame(tick);else setState('Replay')}
    function pause(){if(state==='Pause'){cancelAnimationFrame(frame);setState('Resume')}}
    function reset(){cancelAnimationFrame(frame);elapsed=0;draw(1);setState('Play');button.hidden=shouldReduce()}
    button.onclick=()=>{if(state==='Pause')return pause();if(state!=='Resume'){elapsed=0;draw(0)}previous=performance.now();setState('Pause');frame=requestAnimationFrame(tick)};
    reduced.addEventListener('change',reset);window.addEventListener('veep-motion-change',()=>{if(shouldReduce()!==button.hidden)reset()});document.addEventListener('visibilitychange',()=>{if(document.hidden)pause()});
    new IntersectionObserver(([e])=>{if(!e.isIntersecting)pause()}).observe(fig);reset();
  }
  const selector='.study,.mv-figure,.fd-figure';
  document.querySelectorAll(selector).forEach(prepare);
  const archive=document.querySelector('#archive');
  if(archive)new MutationObserver(()=>archive.querySelectorAll(selector).forEach(prepare)).observe(archive,{childList:true,subtree:true});
})();

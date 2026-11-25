(() => {
  const root = document.documentElement;
  const themeKey = 'veep-standards-theme', motionKey = 'veep-motion';
  const load = key => { try { return localStorage.getItem(key); } catch { return null; } };
  const save = (key,value) => { try { localStorage.setItem(key,value); } catch {} };
  let dark = load(themeKey) === 'dark', reduced = load(motionKey) === 'reduce';
  function applyPreferences() {
    root.dataset.theme = dark ? 'dark' : 'light';
    root.classList.toggle('light', !dark);
    root.dataset.motionPreference = reduced ? 'reduce' : 'system';
    document.querySelector('#theme')?.setAttribute('aria-pressed', String(dark));
    document.querySelector('#motion-preference')?.setAttribute('aria-pressed', String(reduced));
    window.dispatchEvent(new Event('veep-motion-change'));
    document.querySelectorAll('iframe.collection-frame').forEach(frame =>
      frame.contentWindow?.postMessage({type:'veep-display',dark,reduced}, '*'));
  }
  applyPreferences();
  window.addEventListener('storage', e => {
    if (e.key===themeKey || e.key===motionKey || e.key===null) {
      dark=load(themeKey)==='dark'; reduced=load(motionKey)==='reduce'; applyPreferences();
    }
  });
  if (window.self !== window.top) {
    window.addEventListener('message', e => {
      if (e.source!==parent || e.data?.type!=='veep-display') return;
      dark=e.data.dark===true; reduced=e.data.reduced===true; applyPreferences();
    });
    return;
  }
  document.querySelectorAll('iframe.collection-frame').forEach(frame=>frame.addEventListener('load',applyPreferences));
  const name = location.pathname.split('/').pop() || 'index.html';
  const guide = 'brand-guidelines.html', library = 'visual-library.html', spec = 'design-spec.html';
  const sections = (page, items) => items.map(([title,id]) => [title, page+'#'+id]);
  const groups = [
    ['Brand guidelines', [
      ['Start here', sections(guide,[['Identity','s0'],['Veep in use','brand-in-use'],['Stewardship','s7']])],
      ['Voice & message', sections(guide,[['Buyer and message','s1'],['Messaging map','messaging-map'],['Voice and tone','voice-and-tone'],['Voice in use','s2'],['Offer language','s3'],['Evidence','s4']])],
      ['Visual elements', [...sections(guide,[['Wordmark and imagery','s5'],['Typography and color','s6']]),...sections(library,[['Visual grammar','s0'],['Page compositions','applications']])]],
      ['Design spec',sections(spec,[['Semantic color','s0'],['Type and measure','s1'],['Grid and space','s2'],['Composition and Carbon','s3'],['Graphic treatments','graphic-treatments'],['Motion and release','s4']])]
    ]],
    ['Downloads', [
      ['Wordmarks',guide+'#wordmark-downloads'],['Concept marks',library+'#s1'],['Interface glyphs',library+'#s2'],['Editorial treatments',library+'#editorial'],['Illustrations and diagrams',library+'#s3'],['Motion catalog',library+'#s4'],['Asset release',library+'#s5']
    ]],
    ['Studies', [['Browse by collection',library+'#studies'],['View all studies','motion-study-archive.html']]]
  ];
  const make=(tag,cls,txt)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(txt)e.textContent=txt;return e};
  const link=(title,url)=>{const a=make('a','',title);a.href=url;return a};
  const main=document.querySelector('main'); if(!main)return;
  main.id ||= 'veep-content';
  const rail=make('aside','veep-rail'),top=make('div','rail-top'),logo=link('','index.html');
  logo.className='rail-brand';logo.setAttribute('aria-label','Veep brand standards home');
  for(const mode of ['day','night']){const img=make('img',mode);img.src='assets/navigation/'+mode+'.png';img.alt='';logo.append(img)}
  const mobile=make('button','rail-menu','Menu');mobile.type='button';mobile.setAttribute('aria-controls','rail-content');mobile.setAttribute('aria-expanded','false');
  const content=make('div','rail-content');content.id='rail-content';
  const skip=link('Skip to content','#'+main.id);skip.className='rail-skip';main.tabIndex=-1;
  top.append(logo,mobile);rail.append(top,content);document.body.prepend(skip,rail);
  const search=make('input','rail-search');search.type='search';search.placeholder='Search standards';search.setAttribute('aria-label','Search standards and assets');
  const results=make('div','rail-results'),status=make('div','rail-status');status.setAttribute('role','status');
  const nav=make('nav','rail-nav');nav.setAttribute('aria-label','Brand standards');const field=make('div','rail-field'),label=make('label','','Search standards'),clear=make('button','rail-clear');
  search.id='standards-search'; label.htmlFor=search.id; search.removeAttribute('placeholder');
  clear.type='button'; clear.hidden=true; clear.setAttribute('aria-label','Clear search');
  clear.onclick=()=>{search.value='';filter();search.focus()};
  field.append(search,clear);content.append(label,field,status,results,nav);
  const embeddedLinks=[];
  function add(parent,label,url){const a=link(label,url);parent.append(a);embeddedLinks.push(a)}
  for(const [label,items] of groups){const section=make('div','rail-group');section.append(make('p','rail-label',label));nav.append(section);
    for(const [title,target] of items){if(typeof target==='string'){add(section,title,target);continue}
      const details=make('details'),summary=make('summary','',title);details.append(summary);const list=make('div','rail-children');details.append(list);section.append(details);
      for(const [sub,url] of target)add(list,sub,url);
    }
  }
  const theme=document.querySelector('#theme') || make('button','','Dark theme');
  theme.id='theme';theme.type='button';theme.className='rail-theme';content.append(theme);
  theme.onclick=()=>{dark=!dark;save(themeKey,dark?'dark':'light');applyPreferences()};
  if (name===library || name==='motion-study-archive.html') {
    const motion=make('button','rail-motion','Reduce motion');motion.type='button';motion.id='motion-preference';
    motion.onclick=()=>{reduced=!reduced;save(motionKey,reduced?'reduce':'system');applyPreferences()};content.append(motion);
  }
  applyPreferences();
  const candidates=new Map(embeddedLinks.map(a=>[a.href,[a.textContent,a.getAttribute('href')]]));
  for(const [title,url] of window.veepTopics || [])candidates.set(new URL(url,location.href).href,[title,url]);
  function filter(){const words=search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);results.replaceChildren();status.textContent='';clear.hidden=!search.value;nav.hidden=!!words.length;if(!words.length)return;
    const aliases={logo:'wordmark',logos:'wordmark',fonts:'type',colors:'color',colours:'color'};
    const matches=[...candidates.values()].filter(([title,url])=>words.every(w=>(title+' '+url.replaceAll('-',' ')).toLowerCase().includes(aliases[w] || w)));
    status.textContent=matches.length?matches.length+' matching topics':'No matching topics. Try a shorter term or clear the search.';for(const [title,url] of matches){const a=link(title,url);const doc=url.split(/[\/#]/)[0].replace('.html','').replaceAll('-',' ');a.append(make('small','',doc==='assets'?'Editable master':doc==='motion study archive'?'Diagram studies':doc));results.append(a)}
  }
  search.addEventListener('input',filter);
  function toggle(open){mobile.setAttribute('aria-expanded',String(open));rail.classList.toggle('open',open)}
  mobile.onclick=()=>toggle(!rail.classList.contains('open'));
  rail.addEventListener('keydown',e=>{if(e.key==='Escape'){if(search.value){search.value='';filter();search.focus()}else if(rail.classList.contains('open')){toggle(false);mobile.focus()}}});
  rail.addEventListener('click',e=>{const a=e.target.closest('a');if(!a)return;if(rail.classList.contains('open')){toggle(false);if(a.pathname===location.pathname&&a.hash){const t=document.getElementById(decodeURIComponent(a.hash.slice(1)));if(t){t.tabIndex=-1;t.focus({preventScroll:true})}}}});
  function select(hash){let t=document.getElementById(hash.slice(1)),section=t?.closest('section[id]');let dest=name+(section?'#'+section.id:hash);
    let a=embeddedLinks.find(x=>x.getAttribute('href')===name+hash)||embeddedLinks.find(x=>x.getAttribute('href')===dest);
    if(!a)a=embeddedLinks.find(x=>x.getAttribute('href')===name);
    for(const x of embeddedLinks)x.removeAttribute('aria-current');
    logo.toggleAttribute('data-current', name==='index.html');if(name==='index.html')logo.setAttribute('aria-current','page');if(a){a.setAttribute('aria-current','location');const d=a.closest('details');if(d)d.open=true}
  }
  select(location.hash);window.addEventListener('hashchange',()=>select(location.hash));
  const chapters=[...main.querySelectorAll(':scope > section[id]')];let pending=false,last='';
  window.addEventListener('scroll',()=>{if(pending||!chapters.length)return;pending=true;requestAnimationFrame(()=>{pending=false;const current=chapters.filter(x=>x.getBoundingClientRect().top<Math.min(180,innerHeight*.22)).pop();if(current&&last!==current.id){last=current.id;select('#'+last)}})},{passive:true});
  document.body.classList.add('has-brand-nav');
})();

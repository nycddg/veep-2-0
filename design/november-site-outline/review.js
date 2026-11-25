(() => {
  const root = document.documentElement;
  root.classList.add("js");
  const themeButton = document.querySelector(".theme");
  function applyTheme(theme) {
    root.dataset.theme = theme;
    themeButton.setAttribute("aria-label", theme === "dark" ? "Use light theme" : "Use dark theme");
  }
  let theme = "light";
  try { theme = localStorage.getItem("veep-review-theme") || theme; } catch {}
  applyTheme(theme);
  themeButton.hidden = false;
  themeButton.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("veep-review-theme", next); } catch {}
  });

  const menu = document.querySelector(".menu");
  const nav = document.querySelector("#primary-nav");
  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  menu.hidden = false;
  menu.addEventListener("click", () => setMenu(menu.getAttribute("aria-expanded") !== "true"));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      menu.focus();
    }
  });

  const panel = document.querySelector(".brief-panel");
  if (panel) {
    const chooser = panel.querySelector(".buyer-switch");
    const buttons = [...chooser.querySelectorAll("[data-path]")];
    const output = panel.querySelector("#brief-output");
    const result = panel.querySelector("#brief-result");
    const status = panel.querySelector("#brief-status");
    const fields = ["outcome", "deadline", "owner"].map(name => panel.querySelector("#brief-" + name));

    function showPath(selected) {
      for (const button of buttons) {
        const active = button === selected;
        button.setAttribute("aria-pressed", String(active));
        panel.querySelector("#" + button.dataset.path).hidden = !active;
      }
    }
    for (const button of buttons) button.addEventListener("click", () => showPath(button));
    showPath(buttons[0]);
    chooser.hidden = false;
    panel.querySelector(".brief-actions").hidden = false;

    function briefText() {
      return ["Priority brief", "", ...fields.map((field, index) =>
        ["Outcome", "Deadline", "Current owner"][index] + ": " + field.value.trim()
      )].join("\n");
    }
    for (const field of fields) {
      field.required = true;
      field.addEventListener("input", () => {
        field.setCustomValidity("");
        result.hidden = true;
        status.textContent = "";
      });
    }
    panel.querySelector("#make-brief").addEventListener("click", () => {
      for (const field of fields) {
        field.setCustomValidity(field.value.trim() ? "" : "Add an answer to include in your brief.");
        if (!field.reportValidity()) return;
      }
      output.value = briefText();
      result.hidden = false;
      output.focus();
      status.textContent = "Your brief is ready to copy.";
    });
    panel.querySelector("#copy-brief").addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(output.value);
        status.textContent = "Brief copied.";
      } catch {
        output.focus();
        output.select();
        status.textContent = "Brief selected. Use your device’s Copy command.";
      }
    });
  }

  const figure = document.querySelector(".studio-figure");
  if (!figure || !Element.prototype.animate) return;
  const button = document.querySelector(".play");
  const label = button.querySelector("span");
  const preference = matchMedia("(prefers-reduced-motion: reduce)");
  let traces = [];
  let state = "ready";
  const icons = button.querySelectorAll(".mark");
  function setState(next) {
    state = next;
    label.textContent = {ready:"Trace the change", playing:"Pause", paused:"Resume", complete:"Replay"}[state];
    const activeIcon = {ready:"play", playing:"pause", paused:"play", complete:"replay"}[state];
    icons.forEach(icon => icon.toggleAttribute("hidden", icon.dataset.state !== activeIcon));
  }
  function clear() {
    for (const trace of traces) { trace.animation.cancel(); trace.path.remove(); }
    traces = [];
  }
  function pause() {
    if (state !== "playing") return;
    traces.forEach(trace => trace.animation.pause());
    setState("paused");
  }
  function play() {
    if (state === "playing") { pause(); return; }
    if (state === "paused") {
      traces.forEach(trace => trace.animation.play());
      setState("playing");
      return;
    }
    clear();
    setState("playing");
    figure.querySelectorAll(".route").forEach((route,index) => {
      const path = route.cloneNode(false);
      path.setAttribute("class","motion-trace");
      path.setAttribute("pathLength","1");
      path.style.strokeDasharray = "1";
      path.style.strokeDashoffset = "1";
      route.parentNode.append(path);
      const animation = path.animate([{strokeDashoffset:1},{strokeDashoffset:0}], {
        duration:500, delay:index < 3 ? index * 160 : 1150, fill:"both", easing:"ease-out"
      });
      traces.push({path,animation});
    });
    Promise.all(traces.map(trace => trace.animation.finished)).then(() => {
      clear();
      setState("complete");
    }).catch(() => {});
  }
  function syncPreference() {
    clear(); setState("ready"); button.hidden = preference.matches;
  }
  preference.addEventListener("change",syncPreference);
  button.addEventListener("click",play);
  document.addEventListener("visibilitychange",() => { if(document.hidden) pause(); });
  new IntersectionObserver(entries => { if(!entries[0].isIntersecting) pause(); }).observe(figure);
  syncPreference();
})();

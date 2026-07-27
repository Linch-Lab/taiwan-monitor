import{t as o,S as c,i as y}from"./panel-storage-C2uCSYbc.js";import{S as b}from"./user-location-B56vgcIE.js";import{c as C,A as p,V as L,d as u,h as T,k as P,l as k,m as _}from"./panels-mAavEITu.js";import{l as $,z as v,s as D}from"./widget-store-DdTXyzMy.js";import{s as w,t as S,e as g}from"./dom-utils-B8MVJOEB.js";import"./clerk-DvUNuV7p.js";import"./i18n-qlunRAMb.js";import"./persistent-cache-cT66YF0P.js";function F(i,e){if(i==="runtime-config")return o("modals.runtimeConfig.title");const l=`panels.${i.replace(/-([a-z])/g,(m,d)=>d.toUpperCase())}`,r=o(l);return r===l?e:r}function M(){var d;const i=document.getElementById("app");if(!i)return;document.title=`${o("header.settings")} - World Monitor`;const e=$(b.panels,C),E=new Set(Object.keys(p));for(const s of Object.keys(e))!E.has(s)&&s!=="runtime-config"&&delete e[s];const l=new Set(L[c]??[]);for(const s of Object.keys(p))s in e||(e[s]={...u(s,c),enabled:l.has(s)});const r=y();function m(){const A=Object.entries(e).filter(([t])=>(t!=="runtime-config"||r)&&(!t.startsWith("cw-")||v())).map(([t,n])=>{const a=p[t]?u(t,c):n;return`
        <div class="panel-toggle-item ${n.enabled?"active":""}" data-panel="${g(t)}">
          <div class="panel-toggle-checkbox">${n.enabled?"✓":""}</div>
          <span class="panel-toggle-label">${g(F(t,a.name??n.name))}</span>
        </div>
      `}).join(""),f=document.getElementById("panelToggles");f&&(w(f,S(A,"legacy direct innerHTML migration")),f.querySelectorAll(".panel-toggle-item").forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.panel,a=e[n];if(a){const h=p[n]?u(n,c):a;if(!a.enabled&&!T(n,h,v())||!a.enabled&&!v()&&P(n)&&k(e)>=_)return;a.enabled=!a.enabled,D(b.panels,e),m()}})}))}w(i,S(`
    <div class="settings-window-shell">
      <div class="settings-window-header">
        <div class="settings-window-header-text">
          <span class="settings-window-title">${g(o("header.settings"))}</span>
          <p class="settings-window-caption">${g(o("header.panelDisplayCaption"))}</p>
        </div>
        <button type="button" class="modal-close" id="settingsWindowClose">×</button>
      </div>
      <div class="panel-toggle-grid" id="panelToggles"></div>
    </div>
  `,"legacy direct innerHTML migration")),(d=document.getElementById("settingsWindowClose"))==null||d.addEventListener("click",()=>{window.close()}),m()}export{M as initSettingsWindow};

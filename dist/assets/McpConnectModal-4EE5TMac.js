import{aD as Y}from"./main-CG3PyaA_.js";import{t as o,d as D}from"./panel-storage-BkgfP2pL.js";import{e as a,s as C,t as L}from"./dom-utils-B8MVJOEB.js";import{p as ie}from"./panels-CaTxvkW1.js";import{q as pe}from"./gdelt-intel-BcCZRWmb.js";import"./clerk-DvUNuV7p.js";import"./embed-url-d-SgCBEn.js";import"./persistent-cache-vNsSKLQv.js";import"./widget-store-DjrqpRB3.js";import"./i18n-qlunRAMb.js";import"./debugbear-rum-CTwHbetR.js";import"./resilience-choropleth-utils-RzpthWna.js";import"./user-location-BRPOv4ju.js";import"./data-freshness-v918DPsZ.js";import"./cached-risk-scores-BBLrxa2-.js";import"./panel-gating-CwmhGqk4.js";import"./cross-domain-storage-BkfZ6fhr.js";import"./layout-batch-B9PC4ceT.js";import"./string-B04_ldoR.js";import"./continuous-Ds-kXw0U.js";import"./checkout-BnYNI1yA.js";import"./theme-manager-DLqLm68h.js";import"./font-settings-B6XmwZwl.js";const I=60;let f=null;function Z(p,t){const s=p.indexOf(":");if(s===-1)return{};const h=p.slice(0,s).trim(),b=p.slice(s+1).trim().replace("{key}",t.trim());return{[h]:b}}function Q(p,t){const s=t.indexOf(":");if(s===-1)return null;const h=t.slice(0,s).trim(),b=t.slice(s+1).trim(),i=p[h];if(!i)return null;const x=b.indexOf("{key}"),y=b.slice(0,x).trim();return y&&!i.startsWith(y)?null:i.slice(y?y.length+1:0).trim()||null}function X(p){const t=p.match(/\(([^)]+)\)\s*$/);return(t==null?void 0:t[1])??p}function Oe(p){var V,W;F();const t=p.existingSpec;f=document.createElement("div"),f.className="modal-overlay active";const s=document.createElement("div");s.className="modal mcp-connect-modal";const h=Y.map(e=>`
    <button class="mcp-preset-card" data-url="${a(e.serverUrl)}"
      data-tool="${a(e.defaultTool??"")}"
      data-args="${a(JSON.stringify(e.defaultArgs??{}))}"
      data-title="${a(e.defaultTitle??e.name)}"
      data-auth-note="${a(e.authNote??"")}"
      data-api-key-header="${a(e.apiKeyHeader??"")}">
      <span class="mcp-preset-icon">${e.icon}</span>
      <span class="mcp-preset-info">
        <span class="mcp-preset-name">${a(e.name)}</span>
        <span class="mcp-preset-desc">${a(e.description)}</span>
      </span>
      ${e.authNote?'<span class="mcp-preset-key-badge">🔑</span>':""}
    </button>
  `).join(""),b=(t==null?void 0:t.customHeaders)??{},i=t?Y.find(e=>e.serverUrl===t.serverUrl&&e.apiKeyHeader):void 0,x=i!=null&&i.apiKeyHeader?Q(b,i.apiKeyHeader):null,y=!t||!!x,te=x??"",se=y?"":ee(b);C(s,L(`
    <div class="modal-header">
      <span class="modal-title">${a(o("mcp.modalTitle"))}</span>
      <button class="modal-close" aria-label="${a(o("common.close"))}">✕</button>
    </div>
    <div class="mcp-connect-body">
      ${t?"":`
      <div class="mcp-presets-section">
        <label class="mcp-label">${a(o("mcp.quickConnect"))}</label>
        <div class="mcp-presets-list">${h}</div>
      </div>
      <div class="mcp-section-divider"><span>${a(o("mcp.or"))}</span></div>
      `}
      <div class="mcp-form-group">
        <label class="mcp-label">${a(o("mcp.serverUrl"))}</label>
        <input class="mcp-input mcp-server-url" type="url"
          placeholder="https://my-mcp-server.com/mcp"
          value="${a((t==null?void 0:t.serverUrl)??"")}" />
      </div>
      <div class="mcp-form-group mcp-api-key-group" style="${y?"":"display:none"}">
        <label class="mcp-label">${a(o("mcp.apiKey"))}</label>
        <input class="mcp-input mcp-api-key" type="text" autocomplete="off"
          placeholder="${a(o("mcp.apiKeyPlaceholder"))}"
          value="${a(te)}" />
        <span class="mcp-api-key-hint"></span>
        <button type="button" class="mcp-auth-mode-btn mcp-to-advanced">${a(o("mcp.useCustomHeaders"))}</button>
      </div>
      <div class="mcp-form-group mcp-auth-header-group" style="${y?"display:none":""}">
        <label class="mcp-label">${a(o("mcp.authHeader"))} <span class="mcp-optional">(${o("mcp.optional")})</span></label>
        <input class="mcp-input mcp-auth-header" type="text"
          placeholder="Authorization: Bearer token123; x-api-key: key456"
          value="${a(se)}" />
        <button type="button" class="mcp-auth-mode-btn mcp-to-simple" style="display:none">${a(o("mcp.useApiKey"))}</button>
      </div>
      <div class="mcp-connect-actions">
        <button class="btn btn-secondary mcp-connect-btn">${a(o("mcp.connectBtn"))}</button>
        <span class="mcp-connect-status"></span>
      </div>
      <div class="mcp-tools-section" style="display:none">
        <label class="mcp-label">${a(o("mcp.selectTool"))}</label>
        <div class="mcp-tools-list"></div>
      </div>
      <div class="mcp-tool-config" style="display:none">
        <div class="mcp-form-group">
          <label class="mcp-label">${a(o("mcp.toolArgs"))}</label>
          <textarea class="mcp-input mcp-tool-args" rows="3" placeholder="{}"></textarea>
          <span class="mcp-args-error" style="display:none;color:var(--red)"></span>
        </div>
        <div class="mcp-form-group">
          <label class="mcp-label">${a(o("mcp.panelTitle"))}</label>
          <input class="mcp-input mcp-panel-title" type="text"
            placeholder="${a(o("mcp.panelTitlePlaceholder"))}"
            value="${a((t==null?void 0:t.title)??"")}" />
        </div>
        <div class="mcp-form-group mcp-refresh-group">
          <label class="mcp-label">${a(o("mcp.refreshEvery"))}</label>
          <input class="mcp-input mcp-refresh-input" type="number" min="${I}" max="86400"
            value="${t?Math.round(t.refreshIntervalMs/1e3):I}" />
          <span class="mcp-refresh-unit">${a(o("mcp.seconds"))}</span>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-ghost mcp-cancel-btn">${a(o("common.cancel"))}</button>
      <button class="btn btn-primary mcp-add-btn" disabled>${a(o("mcp.addPanel"))}</button>
    </div>
  `,"legacy direct innerHTML migration")),f.appendChild(s),document.body.appendChild(f);let T=[],S=t?{name:t.toolName}:null;const J="Authorization: Bearer {key}";let u=(i==null?void 0:i.apiKeyHeader)??(y?J:"");const H=s.querySelector(".mcp-server-url"),$=s.querySelector(".mcp-api-key-group"),A=s.querySelector(".mcp-api-key"),E=s.querySelector(".mcp-api-key-hint"),ae=s.querySelector(".mcp-to-advanced"),k=s.querySelector(".mcp-auth-header-group"),K=s.querySelector(".mcp-auth-header"),g=s.querySelector(".mcp-to-simple"),U=s.querySelector(".mcp-connect-btn"),d=s.querySelector(".mcp-connect-status"),w=s.querySelector(".mcp-tools-section"),N=s.querySelector(".mcp-tools-list"),_=s.querySelector(".mcp-tool-config"),q=s.querySelector(".mcp-tool-args"),j=s.querySelector(".mcp-args-error"),M=s.querySelector(".mcp-panel-title"),ce=s.querySelector(".mcp-refresh-input"),O=s.querySelector(".mcp-add-btn");function le(){return $.style.display!=="none"}function R(){if(le()&&u){const e=A.value.trim();return e?Z(u,e):{}}return G(K.value)}function z(e){u=e.apiKeyHeader??"",$.style.display="",k.style.display="none",g.style.display="none",e.authNote?E.textContent=X(e.authNote):E.textContent=""}function oe(e=!0){e&&u&&A.value.trim()&&(K.value=ee(Z(u,A.value.trim()))),$.style.display="none",k.style.display="",u&&(g.style.display="")}ae.addEventListener("click",()=>oe(!0)),g.addEventListener("click",()=>{if(u){const e=G(K.value),c=Q(e,u);c&&(A.value=c)}$.style.display="",k.style.display="none",g.style.display="none"}),y&&(i!=null&&i.authNote)&&(E.textContent=X(i.authNote)),t||H.addEventListener("input",()=>{const e=H.value.trim(),c=Array.from(s.querySelectorAll(".mcp-preset-card")),l=c.find(n=>n.dataset.url===e);if(l){c.forEach(v=>v.classList.remove("selected")),l.classList.add("selected");const n=l.dataset.apiKeyHeader??"",r=l.dataset.authNote??"";n?z({apiKeyHeader:n,authNote:r}):(u="",$.style.display="none",E.textContent="",k.style.display="",g.style.display="none")}else c.forEach(n=>n.classList.remove("selected")),u=J,$.style.display="",E.textContent="",k.style.display="none",g.style.display="none"}),s.querySelectorAll(".mcp-preset-card").forEach(e=>{e.addEventListener("click",()=>{s.querySelectorAll(".mcp-preset-card").forEach(v=>v.classList.remove("selected")),e.classList.add("selected"),H.value=e.dataset.url??"";const c=e.dataset.apiKeyHeader??"",l=e.dataset.authNote??"";c?(z({apiKeyHeader:c,authNote:l}),A.value="",d.textContent="",d.className="mcp-connect-status"):(u="",$.style.display="none",k.style.display="",g.style.display="none",K.value="",l?(d.textContent=`🔑 ${l}`,d.className="mcp-connect-status mcp-status-info"):(d.textContent="",d.className="mcp-connect-status"));const n=e.dataset.tool,r=e.dataset.args,m=e.dataset.title;n&&(S={name:n,description:""},q.value=r||"{}",m&&(M.value=m),_.style.display="",O.disabled=!1,w.style.display="",C(N,L(`<div class="mcp-tool-item selected"><span class="mcp-tool-name">${a(n)}</span></div>`,"legacy direct innerHTML migration")))})}),t&&(q.value=Object.keys(t.toolArgs).length?JSON.stringify(t.toolArgs,null,2):"{}",_.style.display="",w.style.display="",C(N,L(`<div class="mcp-tool-item selected">${a(t.toolName)}</div>`,"legacy direct innerHTML migration")),O.disabled=!1);function G(e){const c=e.trim();if(!c)return{};const l={};for(const n of c.split(/;\s+(?=[A-Za-z0-9_-]+\s*:)/)){const r=n.indexOf(":");if(r===-1)continue;const m=n.slice(0,r).trim(),v=n.slice(r+1).trim();m&&(l[m]=v)}return l}function ne(e){C(N,L("","legacy direct innerHTML migration"));for(const c of e){const l=document.createElement("div");l.className="mcp-tool-item";const n=c.description?c.description.length>100?c.description.slice(0,97)+"…":c.description:"";C(l,L(`
        <span class="mcp-tool-name">${a(c.name)}</span>
        ${n?`<span class="mcp-tool-desc">${a(n)}</span>`:""}
      `,"legacy direct innerHTML migration")),l.addEventListener("click",()=>{N.querySelectorAll(".mcp-tool-item").forEach(m=>m.classList.remove("selected")),l.classList.add("selected"),S=c,M.value||(M.value=c.name);const r=c.inputSchema;if(r!=null&&r.properties){const m={};for(const[v,re]of Object.entries(r.properties)){const B=re;B.default!==void 0&&B.default!==null&&(m[v]=B.default)}q.value=Object.keys(m).length?JSON.stringify(m,null,2):"{}"}else q.value="{}";_.style.display="",O.disabled=!1}),N.appendChild(l)}}U.addEventListener("click",async()=>{const e=H.value.trim();if(e){D("mcp-connect-attempt"),d.textContent=o("mcp.connecting"),d.className="mcp-connect-status mcp-status-loading",U.disabled=!0;try{const c=R(),l=new URLSearchParams({serverUrl:e});Object.keys(c).length&&l.set("headers",JSON.stringify(c));const n=await pe(`${ie("/api/mcp-proxy")}?${l}`,{signal:AbortSignal.timeout(2e4)}),r=await n.json();if(!n.ok||r.error)throw new Error(r.error||`HTTP ${n.status}`);T=r.tools??[],d.textContent=o("mcp.foundTools",{count:String(T.length)}),d.className="mcp-connect-status mcp-status-ok",D("mcp-connect-success",{toolCount:T.length}),w.style.display="",ne(T)}catch(c){const l=c instanceof Error?c.message:String(c);d.textContent=`${o("mcp.connectFailed")}: ${l}`,d.className="mcp-connect-status mcp-status-error"}finally{U.disabled=!1}}}),O.addEventListener("click",()=>{if(!S)return;D("mcp-panel-add",{tool:S.name}),j.style.display="none";let e={};try{e=JSON.parse(q.value||"{}")}catch{j.textContent=o("mcp.invalidJson"),j.style.display="";return}const l={id:(t==null?void 0:t.id)??`mcp-${crypto.randomUUID()}`,title:M.value.trim()||S.name,serverUrl:H.value.trim(),customHeaders:R(),toolName:S.name,toolArgs:e,refreshIntervalMs:Math.max(I,parseInt(ce.value,10)||I)*1e3,createdAt:(t==null?void 0:t.createdAt)??Date.now(),updatedAt:Date.now()};F(),p.onComplete(l)});const P=()=>F();(V=s.querySelector(".modal-close"))==null||V.addEventListener("click",P),(W=s.querySelector(".mcp-cancel-btn"))==null||W.addEventListener("click",P),f.addEventListener("click",e=>{e.target===f&&P()})}function ee(p){const t=Object.entries(p);return t.length?t.map(([s,h])=>`${s}: ${h}`).join("; "):""}function F(){f==null||f.remove(),f=null}export{F as closeMcpConnectModal,Oe as openMcpConnectModal};

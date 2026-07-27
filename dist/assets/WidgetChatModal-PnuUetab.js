import{h as ge,j as pe,k as we}from"./widget-store-DjrqpRB3.js";import{g as ue}from"./clerk-DvUNuV7p.js";import{d as G,t as e}from"./panel-storage-BkgfP2pL.js";import{e as p,s as O,t as D}from"./dom-utils-B8MVJOEB.js";import{u as me,w as he}from"./panels-CaTxvkW1.js";import{wrapProWidgetHtml as ve,wrapWidgetHtml as fe}from"./widget-sanitizer-CMAgMQgV.js";import"./i18n-qlunRAMb.js";import"./persistent-cache-vNsSKLQv.js";import"./purify.es-bRchjNq8.js";const ye=["widgets.examples.oilGold","widgets.examples.cryptoMovers","widgets.examples.flightDelays","widgets.examples.conflictHotspots"],Ce=["widgets.proExamples.interactiveChart","widgets.proExamples.sortableTable","widgets.proExamples.animatedCounters","widgets.proExamples.tabbedComparison"];let w=null,E=null,x=null;async function ie(t){const s=ge(),i=pe(),r=we();if(s||i||r){const d={};return s&&(d["X-WorldMonitor-Key"]=s),{headers:d,usedTesterKey:!0}}const o=await ue();return o?{headers:{Authorization:`Bearer ${o}`},usedTesterKey:!1}:{headers:{},usedTesterKey:!1}}function Re(t){var Q,V,Z,ee;A(),G("widget-ai-open",{panelId:(Q=t.existingSpec)==null?void 0:Q.id});const s=t.tier??((V=t.existingSpec)==null?void 0:V.tier)??"basic",i=s==="pro";w=document.createElement("div"),w.className="modal-overlay active";const r=document.createElement("div");r.className="modal widget-chat-modal";const o=t.mode==="modify",d=o?e("widgets.modifyTitle"):e("widgets.chatTitle"),I=i?`<span class="widget-pro-badge">${p(e("widgets.proBadge"))}</span>`:"";O(r,D(`
    <div class="modal-header">
      <span class="modal-title">${p(d)}${I}</span>
      <button class="modal-close" aria-label="${p(e("common.close"))}">✕</button>
    </div>
    <div class="widget-chat-layout">
      <section class="widget-chat-sidebar">
        <div class="widget-chat-readiness"></div>
        <div class="widget-chat-messages"></div>
        <div class="widget-chat-examples">
          <div class="widget-chat-examples-label">${e("widgets.examplesTitle")}</div>
          <div class="widget-chat-examples-list"></div>
        </div>
        <div class="widget-chat-input-row">
          <textarea class="widget-chat-input" placeholder="${e("widgets.inputPlaceholder")}" rows="3"></textarea>
          <button class="widget-chat-send">${e("widgets.send")}</button>
        </div>
      </section>
      <section class="widget-chat-main">
        <div class="widget-chat-preview"></div>
      </section>
    </div>
    <div class="widget-chat-footer">
      <div class="widget-chat-footer-status"></div>
      <button class="widget-chat-action-btn" disabled>${o?e("widgets.applyChanges"):e("widgets.addToDashboard")}</button>
    </div>
  `,"legacy direct innerHTML migration")),w.appendChild(r),document.body.appendChild(w);const k=r.querySelector(".widget-chat-messages"),c=r.querySelector(".widget-chat-preview"),M=r.querySelector(".widget-chat-readiness"),re=r.querySelector(".widget-chat-examples-list"),l=r.querySelector(".widget-chat-footer-status"),$=r.querySelector(".widget-chat-input"),U=r.querySelector(".widget-chat-send"),j=r.querySelector(".widget-chat-action-btn"),ae=r.querySelector(".modal-close"),T=[...((Z=t.existingSpec)==null?void 0:Z.conversationHistory)??[]];let m=((ee=t.existingSpec)==null?void 0:ee.html)??null,P=!1,K=!1,_=null;if(t.initialMessage&&($.value=t.initialMessage),o&&t.existingSpec){for(const a of T)N(k,a.role,a.content);m&&J(c,m,t.existingSpec.title,e("widgets.phaseReadyToPrompt"),e("widgets.modifyHint"),i),k.scrollTop=k.scrollHeight,g(l,e("widgets.modifyHint"))}else u(c,"checking"),g(l,e("widgets.checkingConnection"));be(re,$,i),h(),ne(),ae.addEventListener("click",A),w.addEventListener("click",a=>{a.target===w&&A()});const Y=a=>{a.key==="Escape"&&A()};document.addEventListener("keydown",Y),j.addEventListener("click",()=>{_&&(t.onComplete(_),A())});async function ne(){W(M,"checking",e("widgets.checkingConnection"));try{const a=await ie(i),n=await fetch(me(),{headers:a.headers});let H=null;try{H=await n.json()}catch{}if(!n.ok){const y=Ee(n.status,H,i,a.usedTesterKey);K=!1,W(M,"error",y),g(l,y,"error"),m||u(c,"error",y),h();return}if(i&&(H==null?void 0:H.proKeyConfigured)===!1){const y=e("widgets.preflightProUnavailable");K=!1,W(M,"error",y),g(l,y,"error"),m||u(c,"error",y),h();return}K=!0,W(M,"ready",e("widgets.preflightConnected")),m||u(c,"ready_to_prompt"),g(l,m?e("widgets.modifyHint"):e("widgets.readyToGenerate")),h()}catch{K=!1;const a=e("widgets.preflightUnavailable");W(M,"error",a),g(l,a,"error"),m||u(c,"error",a),h()}}function h(){U.disabled=P||!K,U.textContent=P?e("widgets.generating"):e("widgets.send"),j.disabled=!_}const z=async()=>{const a=$.value.trim();if(!a||U.disabled)return;G("widget-ai-generate"),$.value="",P=!0,_=null,h(),N(k,"user",a),u(c,"fetching"),g(l,e("widgets.generating"));const n=t.existingSpec,H=JSON.stringify({prompt:a.slice(0,2e3),mode:t.mode,tier:s,currentHtml:m,conversationHistory:T.map(C=>({role:C.role,content:C.content.slice(0,500)}))});E=new AbortController,x=setTimeout(()=>{E==null||E.abort(),N(k,"assistant",e("widgets.requestTimedOut")),u(c,"error",e("widgets.requestTimedOut")),g(l,e("widgets.requestTimedOut"),"error"),P=!1,h()},i?12e4:6e4);try{const q={"Content-Type":"application/json",...(await ie(i)).headers},B=await fetch(he(),{method:"POST",signal:E.signal,headers:q,body:H});if(!B.ok||!B.body)throw new Error(e("widgets.serverError",{status:B.status}));let L="",b=(n==null?void 0:n.title)??"Custom Widget",S=null;const F=N(k,"assistant",""),R=document.createElement("span");R.className="widget-chat-radar",O(R,D('<span class="panel-loading-radar"><span class="panel-radar-sweep"></span><span class="panel-radar-dot"></span></span>',"legacy direct innerHTML migration")),F.appendChild(R);const oe=B.body.getReader(),de=new TextDecoder;let X="";for(;;){const{done:ce,value:le}=await oe.read();if(ce)break;X+=de.decode(le,{stream:!0});const te=X.split(`
`);X=te.pop()??"";for(const se of te){if(!se.startsWith("data: "))continue;let v;try{v=JSON.parse(se.slice(6))}catch{continue}if(v.type==="tool_call"){S||(S=document.createElement("span"),S.className="widget-chat-tool-badge",F.appendChild(S));const f=String(v.endpoint??"data");S.textContent=e("widgets.fetching",{target:f}),u(c,"fetching",f),g(l,e("widgets.fetching",{target:f}))}else if(v.type==="html_complete")L=String(v.html??""),m=L,J(c,L,b,e("widgets.phaseComposing"),e("widgets.previewComposingCopy"),i),g(l,e("widgets.previewComposingCopy"));else if(v.type==="done"){b=String(v.title??"Custom Widget"),R.remove(),G("widget-ai-success",{title:b});const f=e("widgets.generatedWidget",{title:b});T.push({role:"user",content:a},{role:"assistant",content:f}),T.length>10&&T.splice(0,T.length-10),_={id:(n==null?void 0:n.id)??`cw-${crypto.randomUUID()}`,title:b,html:L,prompt:a,tier:s,accentColor:(n==null?void 0:n.accentColor)??null,conversationHistory:[...T],createdAt:(n==null?void 0:n.createdAt)??Date.now(),updatedAt:Date.now()},F.textContent=e("widgets.ready",{title:b}),S&&S.remove(),J(c,L,b,e("widgets.phaseComplete"),e("widgets.previewReadyCopy"),i),g(l,e("widgets.readyToApply",{title:b})),j.textContent=o?e("widgets.applyChanges"):e("widgets.addToDashboard"),P=!1,h()}else if(v.type==="error"){const f=String(v.message??e("widgets.unknownError"));R.remove(),F.textContent=`${e("common.error")}: ${f}`,u(c,"error",f),g(l,f,"error")}}}}catch(C){if(C instanceof DOMException&&C.name==="AbortError")return;const q=C instanceof Error?C.message:e("widgets.unknownError");N(k,"assistant",`${e("common.error")}: ${q}`),u(c,"error",q),g(l,q,"error")}finally{x&&(clearTimeout(x),x=null),P=!1,h()}};U.addEventListener("click",()=>void z()),$.addEventListener("keydown",a=>{a.key==="Enter"&&(a.ctrlKey||a.metaKey)&&(a.preventDefault(),z())}),w._escHandler=Y,$.focus()}function A(){if(E&&(E.abort(),E=null),x&&(clearTimeout(x),x=null),w){const t=w;t._escHandler&&document.removeEventListener("keydown",t._escHandler),w.remove(),w=null}}function be(t,s,i){O(t,D("","legacy direct innerHTML migration"));const r=i?Ce:ye;for(const o of r){const d=document.createElement("button");d.type="button",d.className="widget-chat-example-chip",d.textContent=e(o),d.addEventListener("click",()=>{s.value=e(o),s.focus()}),t.appendChild(d)}}function Ee(t,s,i,r){return t===403?r?i?e("widgets.preflightInvalidProKey"):e("widgets.preflightInvalidKey"):i?e("widgets.preflightProSubscriptionRequired"):e("widgets.preflightProRequired"):t===503&&(s==null?void 0:s.proKeyConfigured)===!1?e("widgets.preflightProUnavailable"):(s==null?void 0:s.anthropicConfigured)===!1?e("widgets.preflightAiUnavailable"):e("widgets.preflightUnavailable")}function W(t,s,i){t.className=`widget-chat-readiness is-${s}`,t.textContent=i}function g(t,s,i="muted"){t.className=`widget-chat-footer-status is-${i}`,t.textContent=s}function u(t,s,i=""){const r=Te(s),o=i||He(s),d=s==="error";O(t,D(`
    <div class="widget-chat-preview-state is-${s}">
      <div class="widget-chat-preview-head">
        <div>
          <div class="widget-chat-preview-kicker">${p(e("widgets.previewTitle"))}</div>
          <div class="widget-chat-preview-heading">${p(r)}</div>
        </div>
        <span class="widget-chat-phase-badge">${p(ke(s))}</span>
      </div>
      <p class="widget-chat-preview-copy">${p(o)}</p>
      ${d?`
        <div class="widget-chat-preview-alert">${p(i||e("widgets.previewErrorCopy"))}</div>
      `:`
        <div class="widget-chat-preview-skeleton" aria-hidden="true">
          <span class="widget-chat-skeleton-line is-title"></span>
          <span class="widget-chat-skeleton-line"></span>
          <span class="widget-chat-skeleton-line is-short"></span>
          <div class="widget-chat-skeleton-grid">
            <span class="widget-chat-skeleton-card"></span>
            <span class="widget-chat-skeleton-card"></span>
            <span class="widget-chat-skeleton-card"></span>
          </div>
        </div>
      `}
    </div>
  `,"legacy direct innerHTML migration"))}function J(t,s,i,r,o="",d=!1){const I=d?ve(s):fe(s,"wm-widget-shell-preview");O(t,D(`
    <div class="widget-chat-preview-frame">
      <div class="widget-chat-preview-head">
        <div>
          <div class="widget-chat-preview-kicker">${p(e("widgets.previewTitle"))}</div>
          <div class="widget-chat-preview-heading">${p(i)}</div>
        </div>
        <span class="widget-chat-phase-badge">${p(r)}</span>
      </div>
      ${o?`<p class="widget-chat-preview-copy">${p(o)}</p>`:""}
      <div class="widget-chat-preview-render">
        ${I}
      </div>
    </div>
  `,"legacy direct innerHTML migration"))}function ke(t){switch(t){case"checking":return e("widgets.phaseChecking");case"ready_to_prompt":return e("widgets.phaseReadyToPrompt");case"fetching":return e("widgets.phaseFetching");case"composing":return e("widgets.phaseComposing");case"complete":return e("widgets.phaseComplete");case"error":return e("widgets.phaseError")}}function Te(t){switch(t){case"checking":return e("widgets.previewCheckingHeading");case"ready_to_prompt":return e("widgets.previewReadyHeading");case"fetching":return e("widgets.previewFetchingHeading");case"composing":return e("widgets.previewComposingHeading");case"complete":return e("widgets.previewReadyHeading");case"error":return e("widgets.previewErrorHeading")}}function He(t){switch(t){case"checking":return e("widgets.previewCheckingCopy");case"ready_to_prompt":return e("widgets.previewReadyCopy");case"fetching":return e("widgets.previewFetchingCopy");case"composing":return e("widgets.previewComposingCopy");case"complete":return e("widgets.previewReadyCopy");case"error":return e("widgets.previewErrorCopy")}}function N(t,s,i){const r=document.createElement("div");return r.className=`widget-chat-msg ${s}`,r.textContent=i,t.appendChild(r),t.scrollTop=t.scrollHeight,r}export{A as closeWidgetChatModal,Re as openWidgetChatModal};

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/embed-url-d-SgCBEn.js","assets/panel-storage-BkgfP2pL.js","assets/clerk-DvUNuV7p.js","assets/i18n-qlunRAMb.js","assets/persistent-cache-vNsSKLQv.js","assets/widget-store-DjrqpRB3.js","assets/debugbear-rum-CTwHbetR.js","assets/embed-url-cZ8MpeuV.css"])))=>i.map(i=>d[i]);
var he=Object.defineProperty;var me=(a,p,t)=>p in a?he(a,p,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[p]=t;var b=(a,p,t)=>me(a,typeof p!="symbol"?p+"":p,t);import{P as A}from"./Panel-BFS1c2Kk.js";import{BLS_METRO_IDS as Lt,getNationalDebtData as ve,getEurostatCountryData as fe}from"./index-Yw1ve9Ak.js";import{t as i,i as Z,q,f as lt,s as ge,l as Mt,h as _t}from"./panel-storage-BkgfP2pL.js";import{u as k,e as n,a as ee,s as I,t as F}from"./dom-utils-B8MVJOEB.js";import{Z as It,_ as be,$ as ye}from"./main-CG3PyaA_.js";import{s as at,m as $e}from"./sparkline-EyuwviXB.js";import{D as se,f as we,a as xe,b as Ce,c as Se,d as Te,e as ke,M as Pe,S as De,g as Ee}from"./index-5WITMg_r.js";import{o as Ft,t as Re,C as dt,u as Ae,s as Le}from"./gdelt-intel-BcCZRWmb.js";import{S as Bt,r as Me,g as _e}from"./index-DKD7mpnL.js";import{T as Ie}from"./transit-chart-C8y7XxXa.js";import{h as pt}from"./panel-gating-CwmhGqk4.js";import{g as Fe,r as Be}from"./china-activity-nowcast-view-99dxDqEp.js";import{G as X}from"./gulf-fdi-Brj4tDHY.js";import{t as Nt,n as Ne,b as Oe,p as Ue}from"./widget-store-DjrqpRB3.js";import{g as B,c as nt,M as Ge,a as rt,E as Dt,r as Et}from"./embed-url-d-SgCBEn.js";import{_ as H}from"./clerk-DvUNuV7p.js";import{n as He,h as ut,i as je,c as ze}from"./macro-tiles-china-BhXrGK1l.js";import{C as Ve}from"./ciss-staleness-BF7WkacN.js";function ae(a){return a<20?"#27ae60":a<40?"#f1c40f":a<60?"#e67e22":a<80?"#e74c3c":"#8e44ad"}function Ke(a,p){return a==="ICSA"?p>=1e3?(p/1e3).toFixed(0)+"K":p.toFixed(0):a==="VIXCLS"?p.toFixed(2):a==="STLFSI4"||a==="GSCPI"?p.toFixed(3):p.toFixed(2)}const Ot="wm:economic-stress:last-notified-level";function We(a){if(typeof Notification>"u"||Notification.permission!=="granted")return;const p=a>=85?2:a>=70?1:0;if(p!==0)try{const t=parseInt(sessionStorage.getItem(Ot)??"0",10);if(p<=t)return;sessionStorage.setItem(Ot,String(p)),new Notification("Economic Stress Alert",{body:`Composite stress index reached ${a.toFixed(1)} (${a>=85?"Critical":"Severe"})`,icon:"/favico/favicon-32x32.png",tag:"economic-stress"})}catch{}}function Ye(a){if(a.missing)return`<div style="background:rgba(255,255,255,0.02);border-radius:6px;padding:8px 10px;border:1px solid rgba(255,255,255,0.05)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
        <span style="font-size:9px;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.05em">${n(a.label)}</span>
        <span style="font-size:10px;color:#888">N/A</span>
      </div>
      <div style="font-size:9px;color:#666;font-style:italic">Data unavailable</div>
    </div>`;const p=ae(a.score),t=Math.min(100,Math.max(0,a.score)).toFixed(1),e=Ke(a.id,a.rawValue);return`<div style="background:rgba(255,255,255,0.04);border-radius:6px;padding:8px 10px;border:1px solid rgba(255,255,255,0.07)">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
      <span style="font-size:9px;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.05em">${n(a.label)}</span>
      <span style="font-size:10px;color:var(--text-dim)">${n(e)}</span>
    </div>
    <div style="display:flex;align-items:center;gap:6px">
      <div style="flex:1;background:rgba(255,255,255,0.07);border-radius:3px;height:5px;overflow:hidden">
        <div style="height:100%;width:${t}%;background:${p};border-radius:3px;transition:width 0.3s"></div>
      </div>
      <span style="font-size:10px;font-weight:600;color:${p};min-width:28px;text-align:right">${a.score.toFixed(0)}</span>
    </div>
  </div>`}function ht(a){return a.value===null?"N/A":a.unit==="$B"?`$${a.value.toLocaleString()}B`:`${a.value.toLocaleString()}${a.unit}`}function mt(a){if(a.change===null)return"No change";const p=a.change>0?"+":"";return a.unit==="$B"?`${a.change<0?"-$":`${p}$`}${Math.abs(a.change).toLocaleString()}B`:`${p}${a.change.toLocaleString()}${a.unit}`}function vt(a){return a===null||a===0?"neutral":a>0?"positive":"negative"}function Ze(a){var o,c,u,h;const p=new Map(a.map(f=>[f.id,f])),t=((o=p.get("VIXCLS"))==null?void 0:o.value)??null,e=((c=p.get("T10Y2Y"))==null?void 0:c.value)??null,s=((u=p.get("UNRATE"))==null?void 0:u.value)??null,r=((h=p.get("FEDFUNDS"))==null?void 0:h.value)??null;let l=0;return t!==null&&(l+=t>=25?2:t>=18?1:0),e!==null&&(l+=e<=0?2:e<.5?1:0),s!==null&&(l+=s>=4.5?1:0),r!==null&&(l+=r>=5?1:r<=2?-1:0),l>=4?{label:i("components.economic.pressure.stress"),detail:i("components.economic.pressure.stressDetail"),className:"macro-pressure-stress"}:l>=2?{label:i("components.economic.pressure.watch"),detail:i("components.economic.pressure.watchDetail"),className:"macro-pressure-watch"}:{label:i("components.economic.pressure.steady"),detail:i("components.economic.pressure.steadyDetail"),className:"macro-pressure-steady"}}class qe extends A{constructor(){super({id:"economic",title:i("panels.economic"),defaultRowSpan:2,infoTooltip:i("components.economic.infoTooltip")});b(this,"fredData",[]);b(this,"blsData",[]);b(this,"spendingData",null);b(this,"bisData",null);b(this,"stressData",null);b(this,"lastUpdate",null);b(this,"activeTab","indicators");b(this,"fredState","loading");b(this,"fredErrorMsg","");this.content.addEventListener("click",t=>{const e=t.target.closest(".panel-tab");e!=null&&e.dataset.tab&&(this.activeTab=e.dataset.tab,this.render())})}update(t){this.fredData=t,this.fredState="ok",this.fredErrorMsg="",this.lastUpdate=new Date,this.render()}setFredError(t){this.fredState="error",this.fredErrorMsg=t,this.render()}setFredRetrying(t){this.fredState="retrying",this.fredErrorMsg=t!==void 0?`${i("common.retrying")} (${t}s)`:i("common.retrying"),this.render()}updateSpending(t){this.spendingData=t,this.render()}updateBis(t){this.bisData=t,this.render()}updateBls(t){this.blsData=t,this.render()}updateStress(t){this.stressData=t,Number.isFinite(t.compositeScore)&&We(t.compositeScore),this.render()}setLoading(t){t&&(this.fredState="loading",this.fredErrorMsg="")}render(){var c,u;const t=this.spendingData&&((c=this.spendingData.awards)==null?void 0:c.length)>0,e=this.bisData&&((u=this.bisData.policyRates)==null?void 0:u.length)>0,s=this.blsData.length>0,r=`
      <div class="panel-tabs">
        <button class="panel-tab ${this.activeTab==="indicators"?"active":""}" data-tab="indicators">
          ${i("components.economic.indicators")}
        </button>
        ${t?`
          <button class="panel-tab ${this.activeTab==="spending"?"active":""}" data-tab="spending">
            Recent awards
          </button>
        `:""}
        ${e?`
          <button class="panel-tab ${this.activeTab==="centralBanks"?"active":""}" data-tab="centralBanks">
            ${i("components.economic.centralBanks")}
          </button>
        `:""}
        ${s?`
          <button class="panel-tab ${this.activeTab==="labor"?"active":""}" data-tab="labor">
            ${i("components.economic.laborMarket")}
          </button>
        `:""}
        <button class="panel-tab ${this.activeTab==="stress"?"active":""}" data-tab="stress">
          Stress Index
        </button>
      </div>
    `;let l="";switch(this.activeTab){case"indicators":l=this.renderIndicators();break;case"spending":l=this.renderSpending();break;case"centralBanks":l=this.renderCentralBanks();break;case"labor":l=this.renderLabor();break;case"stress":l=this.renderStress();break}const o=this.lastUpdate?this.lastUpdate.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"";this.setSafeContent(k(`
      ${r}
      <div class="economic-content">
        ${l}
      </div>
      <div class="economic-footer">
        <span class="economic-source">${this.getSourceLabel()} • ${o}</span>
      </div>
    `,"legacy Panel.setContent() migration"))}getSourceLabel(){switch(this.activeTab){case"indicators":return"FRED";case"spending":return"USASpending.gov";case"centralBanks":return"BIS";case"labor":return"BLS";case"stress":return"FRED"}}renderIndicators(){if(this.fredData.length===0){if(Z()&&!q("economicFred"))return`<div class="economic-empty">${i("components.economic.fredKeyMissing")}</div>`;if(this.fredState==="error"||this.fredState==="retrying"){const o=this.fredState==="retrying",c=o?i("common.upstreamUnavailable"):this.fredErrorMsg,u=c.includes("—")?c.slice(0,c.indexOf("—")).trimEnd():c,h=o?`<div class="panel-error-countdown">${n(this.fredErrorMsg)}</div>`:"";return`
          <div class="panel-error-state">
            <div class="panel-loading-radar panel-error-radar">
              <div class="panel-radar-sweep"></div>
              <div class="panel-radar-dot error"></div>
            </div>
            <div class="panel-error-msg">${n(u)}</div>
            ${h}
          </div>
        `}return`<div class="economic-empty">${i("components.economic.noIndicatorData")}</div>`}const t=Ze(this.fredData),e=["VIXCLS","T10Y2Y","FEDFUNDS","UNRATE"],s=this.fredData.filter(o=>e.includes(o.id)),r=this.fredData.filter(o=>!e.includes(o.id)),l=[...s,...r];return`
      <div class="economic-content-macro">
        <div class="macro-pressure-card ${t.className}">
          <div class="macro-pressure-label">${i("components.economic.pressure.label")}</div>
          <div class="macro-pressure-value">${n(t.label)}</div>
          <div class="macro-pressure-detail">${n(t.detail)}</div>
        </div>
        <div class="macro-summary-grid">
          ${s.map(o=>`
            <div class="macro-summary-card">
              <div class="macro-summary-head">
                <span class="indicator-name">${n(o.name)}</span>
                <span class="indicator-id">${n(o.id)}</span>
              </div>
              <div class="macro-summary-value">${n(ht(o))}</div>
              <div class="macro-summary-change ${vt(o.change)}">${n(mt(o))}</div>
            </div>
          `).join("")}
        </div>
        <div class="economic-indicators">
          ${l.map(o=>{var c;return`
            <div class="economic-indicator" data-series="${n(o.id)}">
              <div class="indicator-header">
                <span class="indicator-name">${n(o.name)}</span>
                <span class="indicator-id">${n(o.id)}</span>
              </div>
              <div class="indicator-value">
                <span class="value">${n(ht(o))}</span>
                <span class="change ${vt(o.change)}">${n(mt(o))}</span>
              </div>
              <div class="indicator-date">${n(o.date)}</div>
              ${at(((c=o.observations)==null?void 0:c.map(u=>u.value))??[],o.change!==null&&o.change>=0?"#4caf50":"#f44336",120,28,"display:block;margin:2px 0")}
            </div>
          `}).join("")}
        </div>
      </div>
    `}renderSpending(){var l;if(!this.spendingData||!((l=this.spendingData.awards)!=null&&l.length))return`<div class="economic-empty">${i("components.economic.noSpending")}</div>`;const{awards:t,totalAmount:e,periodStart:s,periodEnd:r}=this.spendingData;return`
      <div class="spending-summary">
        <div class="spending-total">
          ${n(It(e))} ${i("components.economic.in")} ${n(String(t.length))} ${i("components.economic.awards")}
          <span class="spending-period">${n(s)} / ${n(r)}</span>
        </div>
      </div>
      <div class="spending-list">
        ${t.slice(0,8).map(o=>`
          <div class="spending-award">
            <div class="award-header">
              <span class="award-icon">${n(be(o.awardType))}</span>
              <span class="award-amount">${n(It(o.amount))}</span>
            </div>
            <div class="award-recipient">${n(o.recipientName)}</div>
            <div class="award-agency">${n(o.agency)}</div>
            ${o.description?`<div class="award-desc">${n(o.description.slice(0,100))}${o.description.length>100?"...":""}</div>`:""}
          </div>
        `).join("")}
      </div>
    `}renderCentralBanks(){var u,h,f;if(!this.bisData||!((u=this.bisData.policyRates)!=null&&u.length))return`<div class="economic-empty">${i("components.economic.noBisData")}</div>`;const t=lt("--semantic-normal"),e=lt("--semantic-critical"),s=lt("--text-dim"),r=[...this.bisData.policyRates].sort((v,d)=>d.rate-v.rate),l=`
      <div class="bis-section">
        <div class="bis-section-title">${i("components.economic.policyRate")}</div>
        <div class="economic-indicators">
          ${r.map(v=>{const d=v.rate-v.previousRate,m=d<0?t:d>0?e:s,g=d<0?i("components.economic.cut"):d>0?i("components.economic.hike"):i("components.economic.hold"),$=d<0?"▼":d>0?"▲":"–";return`
              <div class="economic-indicator">
                <div class="indicator-header">
                  <span class="indicator-name">${n(v.centralBank)}</span>
                  <span class="indicator-id">${n(v.countryCode)}</span>
                </div>
                <div class="indicator-value">
                  <span class="value">${n(String(v.rate))}%</span>
                  <span class="change" style="color: ${n(m)}">${n($)} ${n(g)}</span>
                </div>
                <div class="indicator-date">${n(v.date)}</div>
              </div>`}).join("")}
        </div>
      </div>
    `;let o="";((h=this.bisData.exchangeRates)==null?void 0:h.length)>0&&(o=`
        <div class="bis-section">
          <div class="bis-section-title">${i("components.economic.realEer")}</div>
          <div class="economic-indicators">
            ${this.bisData.exchangeRates.map(v=>{const d=v.realChange>0?e:v.realChange<0?t:s,m=v.realChange>0?"▲":v.realChange<0?"▼":"–";return`
                <div class="economic-indicator">
                  <div class="indicator-header">
                    <span class="indicator-name">${n(v.countryName)}</span>
                    <span class="indicator-id">${n(v.countryCode)}</span>
                  </div>
                  <div class="indicator-value">
                    <span class="value">${n(String(v.realEer))}</span>
                    <span class="change" style="color: ${n(d)}">${n(m)} ${n(v.realChange>0?"+":"")}${n(String(v.realChange))}%</span>
                  </div>
                  <div class="indicator-date">${n(v.date)}</div>
                </div>`}).join("")}
          </div>
        </div>
      `);let c="";if(((f=this.bisData.creditToGdp)==null?void 0:f.length)>0){const v=[...this.bisData.creditToGdp].sort((d,m)=>m.creditGdpRatio-d.creditGdpRatio);c=`
        <div class="bis-section">
          <div class="bis-section-title">${i("components.economic.creditToGdp")}</div>
          <div class="economic-indicators">
            ${v.map(d=>{const m=d.creditGdpRatio-d.previousRatio,g=m>0?e:m<0?t:s,$=m>0?"▲":m<0?"▼":"–",w=m!==0?`${m>0?"+":""}${Math.round(m*10)/10}pp`:"–";return`
                <div class="economic-indicator">
                  <div class="indicator-header">
                    <span class="indicator-name">${n(d.countryName)}</span>
                    <span class="indicator-id">${n(d.countryCode)}</span>
                  </div>
                  <div class="indicator-value">
                    <span class="value">${n(String(d.creditGdpRatio))}%</span>
                    <span class="change" style="color: ${n(g)}">${n($)} ${n(w)}</span>
                  </div>
                  <div class="indicator-date">${n(d.date)}</div>
                </div>`}).join("")}
          </div>
        </div>
      `}return l+o+c}renderLabor(){if(this.blsData.length===0)return`<div class="economic-empty">${i("components.economic.noIndicatorData")}</div>`;const t=this.blsData.filter(r=>!Lt.has(r.id)),e=this.blsData.filter(r=>Lt.has(r.id)),s=r=>{var l;return`
      <div class="economic-indicator" data-series="${n(r.id)}">
        <div class="indicator-header">
          <span class="indicator-name">${n(r.name)}</span>
          <span class="indicator-id">${n(r.id)}</span>
        </div>
        <div class="indicator-value">
          <span class="value">${n(ht(r))}</span>
          <span class="change ${vt(r.change)}">${n(mt(r))}</span>
        </div>
        <div class="indicator-date">${n(r.date)}</div>
        ${at(((l=r.observations)==null?void 0:l.map(o=>o.value))??[],r.change!==null&&r.change>=0?"#4caf50":"#f44336",120,28,"display:block;margin:2px 0")}
      </div>`};return`
      <div class="economic-content-macro">
        <div class="economic-indicators">
          ${t.map(s).join("")}
        </div>
        ${e.length>0?`
          <div class="bis-section">
            <div class="bis-section-title">${i("components.economic.metroUnemployment")}</div>
            <div class="economic-indicators">
              ${e.map(s).join("")}
            </div>
          </div>
        `:""}
      </div>
    `}renderStress(){const t=this.stressData;if(!t||t.unavailable||!Number.isFinite(t.compositeScore))return'<div class="economic-empty">Stress index data unavailable</div>';const e=ae(t.compositeScore),s=Math.min(100,Math.max(0,t.compositeScore)).toFixed(1),r=t.components.map(o=>Ye(o)).join(""),l=t.seededAt?`<div style="font-size:9px;color:var(--text-dim);text-align:right;margin-top:8px">Updated ${new Date(t.seededAt).toLocaleDateString(void 0,{month:"short",day:"numeric"})}</div>`:"";return`<div style="padding:12px 14px">
      <div style="text-align:center;margin-bottom:12px">
        <div style="font-size:11px;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px">Composite Score</div>
        <div style="font-size:38px;font-weight:700;color:${e};line-height:1">${t.compositeScore.toFixed(1)}</div>
        <div style="display:inline-block;margin-top:6px;padding:3px 10px;border-radius:12px;background:${e}22;border:1px solid ${e}66;font-size:12px;font-weight:600;color:${e}">${n(t.label)}</div>
      </div>
      <div style="margin-bottom:16px">
        <div style="position:relative;height:12px;border-radius:6px;overflow:visible;background:linear-gradient(to right,#27ae60 0%,#f1c40f 20%,#e67e22 40%,#e74c3c 60%,#8e44ad 80%,#8e44ad 100%);margin-bottom:4px">
          <div style="position:absolute;top:-4px;left:calc(${s}% - 2px);width:4px;height:20px;background:#fff;border-radius:2px;box-shadow:0 0 4px rgba(0,0,0,0.6)"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:9px;color:var(--text-dim)">
          <span>Low</span><span>Moderate</span><span>Elevated</span><span>Severe</span><span>Critical</span>
        </div>
      </div>
      ${r?`<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:8px">${r}</div>`:""}
      ${l}
    </div>`}}const ma=Object.freeze(Object.defineProperty({__proto__:null,EconomicPanel:qe},Symbol.toStringTag,{value:"Module"})),ft={query:"",buyer:"",country:"",source:"",sort:"closing_soon",pageSize:25,cursor:"",minAutomationScore:0},Qe=30,Je=[["","All sources"],["sam","SAM.gov"],["ted","TED"],["contracts-finder","Contracts Finder"],["canada-buys","CanadaBuys"],["gets","GETS"],["world-bank","World Bank"]],Xe=[["closing_soon","Closing soon"],["newest","Newest"],["estimated_value","Estimated value"],["relevance","Technology relevance"]];function Ut(a,p){return a===p?" selected":""}function ts(a){if(!a)return null;const p=new Date(a);return Number.isFinite(p.getTime())?p:null}class es extends A{constructor(){super({id:"global-procurement",title:"Global Procurement",defaultRowSpan:2,showCount:!0,premium:"locked",infoTooltip:"Search active official procurement opportunities. Results are seed-backed and source health is reported explicitly."});b(this,"data",null);b(this,"filters",{...ft});b(this,"requestHandler",null);b(this,"loading",!1);this.showLoading("Loading procurement opportunities…"),this.content.addEventListener("submit",t=>{const e=t.target.closest("[data-procurement-filters]");e&&(t.preventDefault(),this.filters=this.readFilters(e),this.request({...this.filters,cursor:""},!1))}),this.content.addEventListener("click",t=>{var s;const e=t.target;if(e.closest("[data-procurement-load-more]")){const r=(s=this.data)==null?void 0:s.nextCursor;r&&this.request({...this.filters,cursor:r},!0);return}e.closest("[data-procurement-reset]")&&(this.filters={...ft},this.request({...this.filters},!1))})}setRequestHandler(t){this.requestHandler=t}setLoading(t,e=!1){if(this.loading=t,t&&!e&&!this.data){this.showLoading("Loading procurement opportunities…");return}this.render()}update(t,e=!1){if(this.loading=!1,e&&this.data){const s=new Map(this.data.tenders.map(r=>[r.id,r]));t.tenders.forEach(r=>s.set(r.id,r)),this.data={...t,tenders:[...s.values()]}}else this.data=t;this.setCount(this.data.total),this.render()}showUnavailable(){this.loading=!1,this.data=null,this.setCount(0),this.showError("Procurement opportunities are currently unavailable.",()=>this.request({...this.filters},!1),60)}clear(){this.data=null,this.filters={...ft},this.loading=!1,this.setCount(0),this.clearSensitiveContent()}request(t,e){!this.requestHandler||this.loading||(this.filters={...t,cursor:""},this.setLoading(!0,e),this.requestHandler(t,e))}readFilters(t){const e=new FormData(t);return{query:String(e.get("query")||"").trim(),buyer:String(e.get("buyer")||"").trim(),country:String(e.get("country")||"").trim().toUpperCase().slice(0,2),source:String(e.get("source")||""),sort:String(e.get("sort")||"closing_soon"),pageSize:25,cursor:"",minAutomationScore:e.get("techRelevant")?Qe:0}}render(){const t=this.data,e=this.renderControls();if(!t){this.setSafeContent(k(`${e}<div class="economic-empty">No procurement snapshot is available yet.</div>`,"global procurement controls"));return}const s=t.sourceStatuses.map(u=>{const h=u.lastSuccessfulAt?` · last success ${new Date(u.lastSuccessfulAt).toLocaleString()}`:"";return`${u.source}: ${u.state} (${u.recordCount})${h}`}).join(" · "),r=t.availability==="partial"?'<div class="economic-warning">Partial coverage — healthy sources remain visible while one or more sources are unavailable.</div>':t.availability==="stale"?'<div class="economic-warning">Showing stale last-good opportunities while all source refreshes are failing.</div>':t.availability==="empty"?'<div class="economic-empty">Official sources returned no matching open opportunities.</div>':t.dataAvailable?"":'<div class="economic-warning">The canonical procurement snapshot is unavailable.</div>',l=t.tenders.map(u=>this.renderTenderCard(u)).join(""),o=t.tenders.length,c=t.nextCursor?`<button type="button" class="debt-load-more" data-procurement-load-more${this.loading?" disabled":""}>${this.loading?"Loading…":"Load more"} <span class="debt-load-more-count">(${Math.max(0,t.total-o)} remaining)</span></button>`:"";this.setSafeContent(k(`
      ${e}
      ${r}
      <div class="global-procurement-summary">Showing ${o.toLocaleString()} of ${t.total.toLocaleString()} matching opportunities</div>
      ${l?`<div class="spending-list global-procurement-list">${l}</div>`:""}
      ${c}
      <div class="economic-footer"><span class="economic-source">${n(s)}${t.fetchedAt?` · snapshot ${n(new Date(t.fetchedAt).toLocaleString())}`:""}</span></div>
    `,"global procurement results"))}renderControls(){return`<form class="global-procurement-controls" data-procurement-filters>
      <input class="global-procurement-input" name="query" data-procurement-query type="search" value="${n(String(this.filters.query||""))}" placeholder="Search title or description" aria-label="Search procurement opportunities">
      <input class="global-procurement-input" name="buyer" type="search" value="${n(String(this.filters.buyer||""))}" placeholder="Buyer" aria-label="Filter by buyer">
      <input class="global-procurement-input global-procurement-country" name="country" data-procurement-country type="text" maxlength="2" value="${n(String(this.filters.country||""))}" placeholder="Country" aria-label="Filter by ISO country code">
      <select class="global-procurement-select" name="source" data-procurement-source aria-label="Filter by source">
        ${Je.map(([t,e])=>`<option value="${t}"${Ut(this.filters.source,t)}>${e}</option>`).join("")}
      </select>
      <select class="global-procurement-select" name="sort" data-procurement-sort aria-label="Sort opportunities">
        ${Xe.map(([t,e])=>`<option value="${t}"${Ut(this.filters.sort,t)}>${e}</option>`).join("")}
      </select>
      <label class="global-procurement-toggle" title="Shows only opportunities whose title, description, or categories matched technology keywords. Keyword relevance evidence only — not an indication of bidding eligibility.">
        <input type="checkbox" name="techRelevant" data-procurement-tech-relevant${(this.filters.minAutomationScore||0)>0?" checked":""}${this.loading?" disabled":""}>
        Technology relevant only
      </label>
      <button type="submit" class="global-procurement-apply"${this.loading?" disabled":""}>Apply</button>
      <button type="button" class="global-procurement-reset" data-procurement-reset${this.loading?" disabled":""}>Reset</button>
    </form>`}renderTenderCard(t){var h,f,v;const e=ee(t.officialUrl),s=ts(t.deadline),r=s?Math.ceil((s.getTime()-Date.now())/864e5):null,l=r!==null&&r>=0&&r<=3,o=(h=t.money)!=null&&h.amount&&t.money.amount>0?`${t.money.currency||""} ${t.money.amount.toLocaleString()}`.trim():"",c=[t.source,t.buyer,t.countryCode,o,s?`Closes ${s.toLocaleDateString()}`:"",l?"CLOSING SOON":""].filter(d=>!!d).map(d=>n(d)).join(" · "),u=(v=(f=t.automationFit)==null?void 0:f.matchReasons)!=null&&v.length?`<div class="award-agency">Technology relevance (keyword evidence, not bidding eligibility): ${n(t.automationFit.matchReasons.join(", "))}</div>`:"";return`<article class="spending-award global-procurement-card">
      <div class="award-header"><span class="award-amount">${n(t.status.toUpperCase())}</span><span class="award-icon">${l?"⏰":"📄"}</span></div>
      <div class="award-recipient">${n(t.title)}</div>
      <div class="award-agency">${c}</div>
      ${t.description?`<div class="award-desc">${n(t.description.slice(0,240))}${t.description.length>240?"…":""}</div>`:""}
      ${u}
      ${e?`<a href="${e}" target="_blank" rel="noopener noreferrer nofollow" class="award-agency">Official notice ↗</a>`:""}
    </article>`}}const va=Object.freeze(Object.defineProperty({__proto__:null,GlobalProcurementPanel:es},Symbol.toStringTag,{value:"Module"})),ie="wm-consumer-prices-v1",ss="wm-consumer-prices-settings-changed",Gt="wm-consumer-prices-open-tab",as=["overview","categories","movers","spread","health","world"],Ht={market:Ee,basket:se,range:"30d",tab:"overview",categoryFilter:null};function is(){try{const a=localStorage.getItem(ie);if(a)return{...Ht,...JSON.parse(a)}}catch{}return{...Ht}}function G(a){try{localStorage.setItem(ie,JSON.stringify(a)),window.dispatchEvent(new CustomEvent(ss,{detail:a}))}catch{}}function N(a,p=!1){if(a==null||a===0)return'<span class="cp-badge cp-badge--neutral">—</span>';const t=p?a>0?"cp-badge--red":"cp-badge--green":a>0?"cp-badge--green":"cp-badge--red",e=a>0?"+":"";return`<span class="cp-badge ${t}">${e}${a.toFixed(1)}%</span>`}function ns(a){return Math.abs(a)<.5?'<span class="cp-pressure cp-pressure--steady">Stable</span>':a>=2?'<span class="cp-pressure cp-pressure--stress">Rising</span>':a>.5?'<span class="cp-pressure cp-pressure--watch">Mild Rise</span>':'<span class="cp-pressure cp-pressure--green">Easing</span>'}function V(a){return a==null||a===0?"Unknown":a<60?`${a}m ago`:a<1440?`${Math.round(a/60)}h ago`:`${Math.round(a/1440)}d ago`}function K(a){return a==null?"cp-fresh--unknown":a<=60?"cp-fresh--ok":a<=240?"cp-fresh--warn":"cp-fresh--stale"}function rs(a){return a==null?"cp-infl--unknown":a>=10?"cp-infl--high":a>=5?"cp-infl--warn":a<0?"cp-infl--deflation":"cp-infl--ok"}function jt(a){return a==null?"—":`${a>=0?"+":""}${a.toFixed(1)}%`}class os extends A{constructor(){super({id:"consumer-prices",title:i("panels.consumerPrices"),defaultRowSpan:2,infoTooltip:i("components.consumerPrices.infoTooltip")});b(this,"overview",null);b(this,"categories",null);b(this,"movers",null);b(this,"spread",null);b(this,"freshness",null);b(this,"allMarkets",[]);b(this,"globalInflation",null);b(this,"inflationLoading",!1);b(this,"inflationFilter","");b(this,"settings",is());b(this,"loading",!1);b(this,"openTabHandler",t=>{var s;const e=(s=t.detail)==null?void 0:s.tab;!e||!as.includes(e)||(this.settings.tab=e,G(this.settings),this.render(),e==="world"&&this.globalInflation===null&&this.loadGlobalInflation())});this.content.addEventListener("click",t=>this.handleClick(t)),this.content.addEventListener("input",t=>this.handleInput(t)),typeof window<"u"&&window.addEventListener(Gt,this.openTabHandler)}destroy(){var t;typeof window<"u"&&window.removeEventListener(Gt,this.openTabHandler),(t=super.destroy)==null||t.call(this)}handleClick(t){const e=t.target,s=e.closest("[data-market]");if(s!=null&&s.dataset.market){const u=s.dataset.market;this.settings.market=u,this.settings.basket=u==="all"?se:`essentials-${u}`,this.settings.tab="overview",G(this.settings),this.fetchData();return}const r=e.closest(".panel-tab");if(r!=null&&r.dataset.tab){this.settings.tab=r.dataset.tab,G(this.settings),this.render();return}const l=e.closest("[data-category]");if(l!=null&&l.dataset.category){this.settings.categoryFilter=l.dataset.category,this.settings.tab="movers",G(this.settings),this.render();return}const o=e.closest("[data-range]");if(o!=null&&o.dataset.range){this.settings.range=o.dataset.range,G(this.settings),this.fetchData();return}e.closest("[data-clear-filter]")&&(this.settings.categoryFilter=null,G(this.settings),this.render())}handleInput(t){const e=t.target;if(!(e instanceof HTMLInputElement)||e.dataset.inflationFilter===void 0||(this.inflationFilter=e.value,this.globalInflation===null||this.globalInflation.length===0))return;const s=this.visibleInflationRows(),r=this.content.querySelector(".cp-world-table tbody");r&&I(r,F(this.inflationTbodyHtml(s),"escaped IMF inflation rows"));const l=this.content.querySelector(".cp-world-count");l&&(l.textContent=this.inflationCountText(s))}async loadGlobalInflation(){var t;if(!this.inflationLoading){this.inflationLoading=!0;try{const e=await ye();if(!((t=this.element)!=null&&t.isConnected))return;this.globalInflation=e,this.settings.tab==="world"&&this.render()}finally{this.inflationLoading=!1}}}async fetchData(){var h,f;if(this.loading)return;this.loading=!0,this.showLoading();const{market:t,basket:e,range:s}=this.settings;if(t==="all"){const v=await we();if(!((h=this.element)!=null&&h.isConnected)){this.loading=!1;return}this.allMarkets=v,this.loading=!1,this.render();return}const[r,l,o,c,u]=await Promise.all([xe(t,e),Ce(t,e,s),Se(t,s),Te(t,e),ke(t)]);if(!((f=this.element)!=null&&f.isConnected)){this.loading=!1;return}this.overview=r,this.categories=l,this.movers=o,this.spread=c,this.freshness=u,this.loading=!1,this.render()}render(){var m;const t=[{id:"overview",label:i("components.consumerPrices.tabs.overview")},{id:"categories",label:i("components.consumerPrices.tabs.categories")},{id:"movers",label:i("components.consumerPrices.tabs.movers")},{id:"spread",label:i("components.consumerPrices.tabs.spread")},{id:"health",label:i("components.consumerPrices.tabs.health")},{id:"world",label:i("components.consumerPrices.tabs.world")}],s=this.settings.market==="all"||this.settings.tab==="world"?t.filter(g=>g.id==="overview"||g.id==="world"):t;s.some(g=>g.id===this.settings.tab)||(this.settings.tab="overview");const{tab:r,range:l,categoryFilter:o,market:c}=this.settings,u=`
      <div class="panel-tabs">
        ${s.map(g=>`
          <button class="panel-tab${r===g.id?" active":""}" data-tab="${g.id}">
            ${n(g.label)}
          </button>
        `).join("")}
      </div>
    `,h=`
      <div class="cp-market-bar">
        ${Pe.map(g=>`
          <button class="cp-market-btn${c===g.code?" active":""}" data-market="${g.code}">${g.label}</button>
        `).join("")}
      </div>
    `,f=`
      <div class="cp-range-bar">
        ${["7d","30d","90d"].map(g=>`
          <button class="cp-range-btn${l===g?" active":""}" data-range="${g}">${g}</button>
        `).join("")}
      </div>
    `;if(r==="world"){this.setSafeContent(k(`
        <div class="consumer-prices-panel">
          ${u}
          <div class="cp-body">${this.renderWorldInflation()}</div>
        </div>
      `,"legacy Panel.setContent() migration"));return}if(c==="all"){this.setSafeContent(k(`
        <div class="consumer-prices-panel">
          ${h}
          ${u}
          <div class="cp-body">${this.renderGlobalOverview()}</div>
        </div>
      `,"legacy Panel.setContent() migration"));return}if((m=this.overview)==null?void 0:m.upstreamUnavailable){this.setSafeContent(k(`
        <div class="consumer-prices-panel">
          ${h}
          ${u}
          <div class="cp-body cp-seeding-state">
            <div class="cp-seeding-icon">📊</div>
            <div class="cp-seeding-title">Data collection in progress</div>
            <div class="cp-seeding-sub">Retail prices are being aggregated — check back in a few hours.</div>
          </div>
        </div>
      `,"legacy Panel.setContent() migration"));return}let d="";switch(r){case"overview":d=this.renderOverview();break;case"categories":d=f+this.renderCategories();break;case"movers":d=f+(o?`<div class="cp-filter-bar">Filtered: <strong>${n(o)}</strong> <button data-clear-filter>✕</button></div>`:"")+this.renderMovers();break;case"spread":d=this.renderSpread();break;case"health":d=this.renderHealth();break}this.setSafeContent(k(`
      <div class="consumer-prices-panel">
        ${h}
        ${u}
        <div class="cp-body">${d}</div>
      </div>
    `,"legacy Panel.setContent() migration"))}renderGlobalOverview(){return this.allMarkets.length===0?'<div class="cp-empty-state">Loading global data…</div>':`
      <table class="cp-global-table">
        <thead>
          <tr>
            <th>Market</th><th>Index</th><th>WoW</th><th>Spread</th><th>Updated</th>
          </tr>
        </thead>
        <tbody>${De.map(e=>{const s=this.allMarkets.find(c=>c.marketCode===e.code);if(!(s&&s.asOf&&s.asOf!=="0"&&!s.upstreamUnavailable))return`
          <tr class="cp-global-row" data-market="${e.code}">
            <td class="cp-global-flag">${e.label}</td>
            <td colspan="4" class="cp-global-pending">Pending data</td>
          </tr>`;const l=N(s.wowPct,!0),o=K(s.freshnessLagMin>0?s.freshnessLagMin:null);return`
        <tr class="cp-global-row" data-market="${e.code}">
          <td class="cp-global-flag">${e.label}</td>
          <td class="cp-global-index">${s.essentialsIndex>0?s.essentialsIndex.toFixed(1):"—"}</td>
          <td class="cp-global-wow">${l}</td>
          <td class="cp-global-spread">${s.retailerSpreadPct>0?`${s.retailerSpreadPct.toFixed(1)}%`:"—"}</td>
          <td class="cp-global-fresh ${o}">${s.freshnessLagMin>0?V(s.freshnessLagMin):"—"}</td>
        </tr>`}).join("")}</tbody>
      </table>
      <div class="cp-global-hint">Tap a market row to drill in</div>
    `}visibleInflationRows(){const t=this.globalInflation??[],e=this.inflationFilter.trim().toLowerCase();return e?t.filter(s=>s.name.toLowerCase().includes(e)||s.iso2.toLowerCase().includes(e)):t}inflationCountText(t){const e=t.length===1?i("components.consumerPrices.world.countSingular"):i("components.consumerPrices.world.countPlural");return`${t.length} ${e}`}inflationTbodyHtml(t){return t.length===0?`<tr><td colspan="4" class="cp-global-pending">${n(i("components.consumerPrices.world.noMatches"))}</td></tr>`:t.map(e=>{const s=rs(e.inflationPct);return`
        <tr class="cp-global-row">
          <td class="cp-global-flag">${n(e.name)}</td>
          <td class="cp-infl-yoy ${s}">${jt(e.inflationPct)}</td>
          <td class="cp-infl-eop">${jt(e.cpiEopPct)}</td>
          <td class="cp-infl-year">${e.year??"—"}</td>
        </tr>`}).join("")}renderWorldInflation(){if(this.globalInflation===null)return this.inflationLoading||this.loadGlobalInflation(),`<div class="cp-empty-state">${n(i("components.consumerPrices.world.loading"))}</div>`;if(this.globalInflation.length===0)return this.renderEmptyState(i("components.consumerPrices.world.empty"));const t=this.visibleInflationRows();return`
      <div class="cp-world-controls">
        <input type="search" class="cp-world-filter" data-inflation-filter
          placeholder="${n(i("components.consumerPrices.world.filterPlaceholder"))}"
          value="${n(this.inflationFilter)}" />
        <span class="cp-world-count">${n(this.inflationCountText(t))}</span>
      </div>
      <table class="cp-global-table cp-world-table">
        <thead>
          <tr>
            <th>${n(i("components.consumerPrices.world.country"))}</th>
            <th>${n(i("components.consumerPrices.world.inflationYoY"))}</th>
            <th>${n(i("components.consumerPrices.world.endOfPeriod"))}</th>
            <th>${n(i("components.consumerPrices.world.year"))}</th>
          </tr>
        </thead>
        <tbody>${this.inflationTbodyHtml(t)}</tbody>
      </table>
      <div class="cp-global-hint">${n(i("components.consumerPrices.world.source"))}</div>
    `}renderOverview(){var e;const t=this.overview;return!t||!t.asOf||t.asOf==="0"?this.renderEmptyState("No price data available yet"):`
      <div class="cp-overview-grid">
        <div class="cp-stat-card">
          <div class="cp-stat-label">Essentials Basket</div>
          <div class="cp-stat-value">${t.essentialsIndex>0?t.essentialsIndex.toFixed(1):"—"}</div>
          <div class="cp-stat-sub">Index (base 100)</div>
        </div>
        <div class="cp-stat-card">
          <div class="cp-stat-label">Value Basket</div>
          <div class="cp-stat-value">${t.valueBasketIndex>0?t.valueBasketIndex.toFixed(1):"—"}</div>
          <div class="cp-stat-sub">Index (base 100)</div>
        </div>
        <div class="cp-stat-card">
          <div class="cp-stat-label">Week-over-Week</div>
          <div class="cp-stat-value">${N(t.wowPct,!0)}</div>
          <div class="cp-stat-sub">${ns(t.wowPct)}</div>
        </div>
        <div class="cp-stat-card">
          <div class="cp-stat-label">Month-over-Month</div>
          <div class="cp-stat-value">${N(t.momPct,!0)}</div>
        </div>
        <div class="cp-stat-card">
          <div class="cp-stat-label">Retailer Spread</div>
          <div class="cp-stat-value">${t.retailerSpreadPct>0?`${t.retailerSpreadPct.toFixed(1)}%`:"—"}</div>
          <div class="cp-stat-sub">Cheapest vs most exp.</div>
        </div>
        <div class="cp-stat-card">
          <div class="cp-stat-label">Coverage</div>
          <div class="cp-stat-value">${t.coveragePct>0?`${t.coveragePct.toFixed(0)}%`:"—"}</div>
          <div class="cp-stat-sub ${K(t.freshnessLagMin)}">
            ${V(t.freshnessLagMin)}
          </div>
        </div>
      </div>
      ${(e=t.topCategories)!=null&&e.length?`
        <div class="cp-section-label">Top Category Movers</div>
        <div class="cp-category-mini">
          ${t.topCategories.slice(0,5).map(s=>this.renderCategoryMini(s)).join("")}
        </div>
      `:""}
    `}renderCategoryMini(t){var s;const e=(s=t.sparkline)!=null&&s.length?at(t.sparkline,"var(--accent)",40,16):"";return`
      <div class="cp-cat-mini-row" data-category="${n(t.slug)}">
        <span class="cp-cat-name">${n(t.name)}</span>
        <span class="cp-cat-spark">${e}</span>
        ${N(t.momPct,!0)}
      </div>
    `}renderCategories(){var e;const t=(e=this.categories)==null?void 0:e.categories;return t!=null&&t.length?`
      <table class="cp-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>WoW</th>
            <th>MoM</th>
            <th>Trend</th>
            <th>Coverage</th>
          </tr>
        </thead>
        <tbody>
          ${t.map(s=>{var r;return`
            <tr class="cp-cat-row" data-category="${n(s.slug)}">
              <td><strong>${n(s.name)}</strong></td>
              <td>${N(s.wowPct,!0)}</td>
              <td>${N(s.momPct,!0)}</td>
              <td>${(r=s.sparkline)!=null&&r.length?at(s.sparkline,"var(--accent)",48,18):"—"}</td>
              <td>${s.coveragePct>0?`${s.coveragePct.toFixed(0)}%`:"—"}</td>
            </tr>
          `}).join("")}
        </tbody>
      </table>
    `:this.renderEmptyState("No category data yet")}renderMovers(){const t=this.movers;if(!t)return this.renderEmptyState("No price movement data yet");const{categoryFilter:e}=this.settings,s=o=>!e||o.category===e,r=(t.risers??[]).filter(s).slice(0,8),l=(t.fallers??[]).filter(s).slice(0,8);return!r.length&&!l.length?this.renderEmptyState("No movers for this selection"):`
      <div class="cp-movers-grid">
        <div class="cp-movers-col">
          <div class="cp-col-header cp-col-header--up">Rising</div>
          ${r.map(o=>this.renderMoverRow(o,"up")).join("")||'<div class="cp-empty-col">None</div>'}
        </div>
        <div class="cp-movers-col">
          <div class="cp-col-header cp-col-header--down">Falling</div>
          ${l.map(o=>this.renderMoverRow(o,"down")).join("")||'<div class="cp-empty-col">None</div>'}
        </div>
      </div>
    `}renderMoverRow(t,e){const s=t.changePct>0?"+":"";return`
      <div class="cp-mover-row cp-mover-row--${e}">
        <div class="cp-mover-title">${n(t.title)}</div>
        <div class="cp-mover-meta">
          <span class="cp-mover-cat">${n(t.category)}</span>
          <span class="cp-mover-retailer">${n(t.retailerSlug)}</span>
        </div>
        <div class="cp-mover-pct">${s}${t.changePct.toFixed(1)}%</div>
      </div>
    `}renderSpread(){var e;const t=this.spread;return(e=t==null?void 0:t.retailers)!=null&&e.length?`
      <div class="cp-spread-header">
        <span>Spread: <strong>${t.spreadPct.toFixed(1)}%</strong></span>
        <span class="cp-spread-basket">${n(t.basketSlug)} · ${n(t.currencyCode)}</span>
      </div>
      <div class="cp-spread-list">
        ${t.retailers.map((s,r)=>this.renderSpreadRow(s,r,t.currencyCode)).join("")}
      </div>
    `:this.renderEmptyState("Retailer comparison starts once data is collected")}renderSpreadRow(t,e,s){const r=e===0;return`
      <div class="cp-spread-row ${r?"cp-spread-row--cheapest":""}">
        <div class="cp-spread-rank">#${e+1}</div>
        <div class="cp-spread-name">${n(t.name)}</div>
        <div class="cp-spread-total">${s} ${t.basketTotal.toFixed(2)}</div>
        <div class="cp-spread-delta">${r?'<span class="cp-badge cp-badge--green">Cheapest</span>':N(t.deltaVsCheapestPct,!0)}</div>
        <div class="cp-spread-items">${t.itemCount} items</div>
        <div class="cp-spread-fresh ${K(t.freshnessMin)}">${V(t.freshnessMin)}</div>
      </div>
    `}renderHealth(){var e;const t=this.freshness;return(e=t==null?void 0:t.retailers)!=null&&e.length?`
      <div class="cp-health-summary">
        <span>Overall freshness: <strong class="${K(t.overallFreshnessMin)}">${V(t.overallFreshnessMin)}</strong></span>
        ${t.stalledCount>0?`<span class="cp-stalled-badge">${t.stalledCount} stalled</span>`:""}
      </div>
      <div class="cp-health-list">
        ${t.retailers.map(s=>`
          <div class="cp-health-row">
            <span class="cp-health-name">${n(s.name)}</span>
            <span class="cp-health-status cp-health-status--${s.status}">${s.status}</span>
            <span class="cp-health-rate">${s.parseSuccessRate>0?`${s.parseSuccessRate.toFixed(0)}% parse`:"—"}</span>
            <span class="cp-health-fresh ${K(s.freshnessMin)}">${V(s.freshnessMin)}</span>
          </div>
        `).join("")}
      </div>
    `:this.renderEmptyState("Health data not yet available")}renderEmptyState(t){return`<div class="cp-empty-state">${n(t)}</div>`}}const fa=Object.freeze(Object.defineProperty({__proto__:null,ConsumerPricesPanel:os},Symbol.toStringTag,{value:"Module"}));class cs extends A{constructor(){super({id:"trade-policy",title:i("panels.tradePolicy"),defaultRowSpan:2,infoTooltip:i("components.tradePolicy.infoTooltip")});b(this,"restrictionsData",null);b(this,"tariffsData",null);b(this,"flowsData",null);b(this,"barriersData",null);b(this,"revenueData",null);b(this,"comtradeData",null);b(this,"activeTab","restrictions");this.content.addEventListener("click",t=>{const e=t.target.closest(".panel-tab");if(!e)return;const s=e.dataset.tab;s&&s!==this.activeTab&&(this.activeTab=s,this.render())})}updateRestrictions(t){this.restrictionsData=t,this.render()}updateTariffs(t){this.tariffsData=t,this.render()}updateFlows(t){this.flowsData=t,this.render()}updateBarriers(t){this.barriersData=t,this.render()}updateComtradeFlows(t){this.comtradeData=t,this.render()}updateRevenue(t){this.revenueData=t,Z()&&!q("wtoTrade")&&this.activeTab!=="revenue"&&(this.activeTab="revenue"),this.render()}render(){var m,g,$,w,P,C,T,R,y,x,S,D,_,L,M,ot,J,j,E;const t=!Z()||q("wtoTrade"),e=t&&this.tariffsData&&((m=this.tariffsData.datapoints)==null?void 0:m.length)>0,s=t&&this.flowsData&&((g=this.flowsData.flows)==null?void 0:g.length)>0,r=t&&this.barriersData&&(($=this.barriersData.barriers)==null?void 0:$.length)>0,l=this.revenueData&&((w=this.revenueData.months)==null?void 0:w.length)>0,o=this.comtradeData&&((P=this.comtradeData.flows)==null?void 0:P.length)>0;if(!t&&!l&&!o){this.setSafeContent(k(`<div class="economic-empty">${i("components.tradePolicy.apiKeyMissing")}</div>`,"legacy Panel.setContent() migration"));return}!t&&this.activeTab!=="revenue"&&this.activeTab!=="comtrade"&&(this.activeTab="revenue");const c=`
      <div class="panel-tabs">
        ${t?`<button class="panel-tab ${this.activeTab==="restrictions"?"active":""}" data-tab="restrictions">
          ${i("components.tradePolicy.overview")}
        </button>`:""}
        ${e?`<button class="panel-tab ${this.activeTab==="tariffs"?"active":""}" data-tab="tariffs">
          ${i("components.tradePolicy.tariffs")}
        </button>`:""}
        ${s?`<button class="panel-tab ${this.activeTab==="flows"?"active":""}" data-tab="flows">
          ${i("components.tradePolicy.flows")}
        </button>`:""}
        ${r?`<button class="panel-tab ${this.activeTab==="barriers"?"active":""}" data-tab="barriers">
          ${i("components.tradePolicy.barriers")}
        </button>`:""}
        ${l?`<button class="panel-tab ${this.activeTab==="revenue"?"active":""}" data-tab="revenue">
          ${i("components.tradePolicy.revenue")}
        </button>`:""}
        ${o?`<button class="panel-tab ${this.activeTab==="comtrade"?"active":""}" data-tab="comtrade">
          ${i("components.tradePolicy.strategicFlows")}
        </button>`:""}
      </div>
    `,u=this.activeTab==="restrictions"?(((T=(C=this.restrictionsData)==null?void 0:C.restrictions)==null?void 0:T.length)??0)>0:this.activeTab==="tariffs"?(((y=(R=this.tariffsData)==null?void 0:R.datapoints)==null?void 0:y.length)??0)>0:this.activeTab==="flows"?(((S=(x=this.flowsData)==null?void 0:x.flows)==null?void 0:S.length)??0)>0:this.activeTab==="barriers"?(((_=(D=this.barriersData)==null?void 0:D.barriers)==null?void 0:_.length)??0)>0:this.activeTab==="comtrade"?(((M=(L=this.comtradeData)==null?void 0:L.flows)==null?void 0:M.length)??0)>0:(((J=(ot=this.revenueData)==null?void 0:ot.months)==null?void 0:J.length)??0)>0,h=this.activeTab==="restrictions"?this.restrictionsData:this.activeTab==="tariffs"?this.tariffsData:this.activeTab==="flows"?this.flowsData:this.activeTab==="barriers"?this.barriersData:this.activeTab==="comtrade"?this.comtradeData:this.revenueData,f=!u&&(h!=null&&h.upstreamUnavailable)?`<div class="economic-warning">${this.activeTab==="revenue"?i("components.tradePolicy.treasuryUnavailable"):this.activeTab==="comtrade"?i("components.tradePolicy.comtradeUnavailable"):i("components.tradePolicy.upstreamUnavailable")}</div>`:"";let v="";switch(this.activeTab){case"restrictions":v=this.renderRestrictions();break;case"tariffs":v=this.renderTariffs();break;case"flows":v=this.renderFlows();break;case"barriers":v=this.renderBarriers();break;case"revenue":v=this.renderRevenue();break;case"comtrade":v=this.renderComtradeFlows();break}const d=this.activeTab==="comtrade"?i("components.tradePolicy.sourceComtrade"):this.activeTab==="revenue"?i("components.tradePolicy.sourceTreasury"):(this.activeTab==="tariffs"||this.activeTab==="restrictions")&&((E=(j=this.tariffsData)==null?void 0:j.effectiveTariffRate)!=null&&E.sourceName)?`${i("components.tradePolicy.sourceWto")} / ${this.tariffsData.effectiveTariffRate.sourceName}`:i("components.tradePolicy.sourceWto");this.setSafeContent(k(`
      ${c}
      ${f}
      <div class="economic-content">${v}</div>
      <div class="economic-footer">
        <span class="economic-source">${n(d)}</span>
      </div>
    `,"legacy Panel.setContent() migration"))}renderRestrictions(){var t;return!this.restrictionsData||!((t=this.restrictionsData.restrictions)!=null&&t.length)?`<div class="economic-empty">${i("components.tradePolicy.noOverviewData")}</div>`:`${this.renderRestrictionsContext()}
    <div class="trade-restrictions-list">
      ${this.restrictionsData.restrictions.map(e=>{const s=e.status==="high"?"status-active":e.status==="moderate"?"status-notified":"status-terminated",r=e.status==="high"?i("components.tradePolicy.highTariff"):e.status==="moderate"?i("components.tradePolicy.moderateTariff"):i("components.tradePolicy.lowTariff"),l=this.renderSourceUrl(e.sourceUrl);return`<div class="trade-restriction-card">
          <div class="trade-restriction-header">
            <span class="trade-country">${n(e.reportingCountry)}</span>
            <span class="trade-badge">${n(e.measureType)}</span>
            <span class="trade-status ${s}">${r}</span>
          </div>
          <div class="trade-restriction-body">
            <div class="trade-sector">${n(e.productSector)}</div>
            ${e.description?`<div class="trade-description">${n(e.description)}</div>`:""}
            ${this.renderRestrictionEffectiveContext(e.reportingCountry)}
            ${e.affectedCountry?`<div class="trade-affected">Affects: ${n(e.affectedCountry)}</div>`:""}
          </div>
          <div class="trade-restriction-footer">
            ${e.notifiedAt?`<span class="trade-date">${n(e.notifiedAt)}</span>`:""}
            ${l}
          </div>
        </div>`}).join("")}
    </div>`}renderRestrictionsContext(){const t=this.getEffectiveTariffGapSummary();if(!t)return`<div class="trade-policy-note">${i("components.tradePolicy.overviewNoteNoEffective")}</div>`;const e=t.gap>0?"+":"",s=this.renderSourceUrl(t.effectiveRate.sourceUrl);return`<div class="trade-policy-note">
      ${i("components.tradePolicy.usBaselineLabel")}: <strong>${t.baseline.tariffRate.toFixed(1)}%</strong>.
      ${i("components.tradePolicy.effectiveTariffRateLabel")}: <strong>${t.effectiveRate.tariffRate.toFixed(1)}%</strong>.
      ${i("components.tradePolicy.gapLabel")}: <strong>${e}${t.gap.toFixed(1)}pp</strong>.
      ${i("components.tradePolicy.overviewNoteTail")}
      ${s}
    </div>`}renderTariffs(){var o;if(!this.tariffsData||!((o=this.tariffsData.datapoints)!=null&&o.length))return`<div class="economic-empty">${i("components.tradePolicy.noTariffData")}</div>`;const t=[...this.tariffsData.datapoints].sort((c,u)=>u.year-c.year),e=t[0]??null,s=this.tariffsData.effectiveTariffRate??null,r=this.renderTariffSummary(e,s),l=t.map(c=>`<tr>
        <td>${c.year}</td>
        <td>${c.tariffRate.toFixed(1)}%</td>
        <td>${n(c.productSector||"—")}</td>
      </tr>`).join("");return`${r}
    <div class="trade-tariffs-table">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>${i("components.tradePolicy.mfnAppliedRate")}</th>
            <th>Sector</th>
          </tr>
        </thead>
        <tbody>${l}</tbody>
      </table>
    </div>`}renderTariffSummary(t,e){if(!t)return"";const s=i("components.tradePolicy.wtoBaselineMeta",{year:String(t.year)}),r=`
      <div class="trade-tariff-card">
        <div class="trade-tariff-label">${i("components.tradePolicy.baselineMfnTariff")}</div>
        <div class="trade-tariff-value">${t.tariffRate.toFixed(1)}%</div>
        <div class="trade-tariff-meta">${n(s)}</div>
      </div>
    `;if(!e)return`<div class="trade-tariff-summary">
        ${r}
        <div class="trade-tariff-card trade-tariff-card-muted">
          <div class="trade-tariff-label">${i("components.tradePolicy.effectiveTariffRateLabel")}</div>
          <div class="trade-tariff-value">—</div>
          <div class="trade-tariff-meta">${i("components.tradePolicy.noEffectiveCoverageForCountry")}</div>
        </div>
      </div>`;const l=e.tariffRate-t.tariffRate,o=l>0?"+":"",c=l>=0?"trade-tariff-gap-positive":"trade-tariff-gap-negative",u=[e.sourceName,e.observationPeriod,e.updatedAt?`Updated ${e.updatedAt}`:""].filter(Boolean),h=this.renderSourceUrl(e.sourceUrl);return`<div class="trade-tariff-summary">
      ${r}
      <div class="trade-tariff-card">
        <div class="trade-tariff-label">${i("components.tradePolicy.effectiveTariffRateLabel")}</div>
        <div class="trade-tariff-value">${e.tariffRate.toFixed(1)}%</div>
        <div class="trade-tariff-meta">
          ${n(u.join(" | "))}
          ${h?`<span class="trade-tariff-source">${h}</span>`:""}
        </div>
      </div>
      <div class="trade-tariff-card">
        <div class="trade-tariff-label">${i("components.tradePolicy.gapLabel")}</div>
        <div class="trade-tariff-value ${c}">${o}${l.toFixed(1)}pp</div>
        <div class="trade-tariff-meta">${i("components.tradePolicy.effectiveMinusBaseline")}</div>
      </div>
    </div>`}getLatestBaselineTariffPoint(){var t,e;return(e=(t=this.tariffsData)==null?void 0:t.datapoints)!=null&&e.length?[...this.tariffsData.datapoints].sort((s,r)=>r.year-s.year)[0]??null:null}getEffectiveTariffGapSummary(){var s;const t=this.getLatestBaselineTariffPoint(),e=((s=this.tariffsData)==null?void 0:s.effectiveTariffRate)??null;return!t||!e?null:{baseline:t,effectiveRate:e,gap:e.tariffRate-t.tariffRate}}renderRestrictionEffectiveContext(t){if(t!=="United States")return"";const e=this.getEffectiveTariffGapSummary();if(!e)return"";const s=e.gap>0?"+":"";return`<div class="trade-policy-inline-note">
      ${i("components.tradePolicy.effectiveTariffRateLabel")}: ${e.effectiveRate.tariffRate.toFixed(1)}%
      <span class="trade-policy-inline-sep">|</span>
      ${i("components.tradePolicy.gapVsMfnLabel")}: ${s}${e.gap.toFixed(1)}pp
    </div>`}renderFlows(){var t;return!this.flowsData||!((t=this.flowsData.flows)!=null&&t.length)?`<div class="economic-empty">${i("components.tradePolicy.noFlowData")}</div>`:`<div class="trade-flows-list">
      ${this.flowsData.flows.map(e=>{const s=e.yoyExportChange>=0?"▲":"▼",r=e.yoyImportChange>=0?"▲":"▼",l=e.yoyExportChange>=0?"change-positive":"change-negative",o=e.yoyImportChange>=0?"change-positive":"change-negative";return`<div class="trade-flow-card">
          <div class="trade-flow-year">${e.year}</div>
          <div class="trade-flow-metrics">
            <div class="trade-flow-metric">
              <span class="trade-flow-label">${i("components.tradePolicy.exports")}</span>
              <span class="trade-flow-value">$${e.exportValueUsd.toFixed(0)}M</span>
              <span class="trade-flow-change ${l}">${s} ${Math.abs(e.yoyExportChange).toFixed(1)}%</span>
            </div>
            <div class="trade-flow-metric">
              <span class="trade-flow-label">${i("components.tradePolicy.imports")}</span>
              <span class="trade-flow-value">$${e.importValueUsd.toFixed(0)}M</span>
              <span class="trade-flow-change ${o}">${r} ${Math.abs(e.yoyImportChange).toFixed(1)}%</span>
            </div>
          </div>
        </div>`}).join("")}
    </div>`}renderBarriers(){var t;return!this.barriersData||!((t=this.barriersData.barriers)!=null&&t.length)?`<div class="economic-empty">${i("components.tradePolicy.noBarriers")}</div>`:`<div class="trade-barriers-list">
      ${this.barriersData.barriers.map(e=>{const s=this.renderSourceUrl(e.sourceUrl);return`<div class="trade-barrier-card">
          <div class="trade-barrier-header">
            <span class="trade-country">${n(e.notifyingCountry)}</span>
            <span class="trade-badge">${n(e.measureType)}</span>
          </div>
          <div class="trade-barrier-body">
            <div class="trade-barrier-title">${n(e.title)}</div>
            ${e.productDescription?`<div class="trade-sector">${n(e.productDescription)}</div>`:""}
            ${e.objective?`<div class="trade-description">${n(e.objective)}</div>`:""}
          </div>
          <div class="trade-barrier-footer">
            ${e.dateDistributed?`<span class="trade-date">${n(e.dateDistributed)}</span>`:""}
            ${s}
          </div>
        </div>`}).join("")}
    </div>`}renderRevenue(){var R;if(!this.revenueData||!((R=this.revenueData.months)!=null&&R.length))return`<div class="economic-empty">${i("components.tradePolicy.noRevenueData")}</div>`;const t=this.revenueData.months,s=t[t.length-1].fiscalYear,r=t.filter(y=>y.fiscalYear===s),l=r.length,c=t.filter(y=>y.fiscalYear===s-1).slice(0,l),u=r.reduce((y,x)=>y+x.monthlyAmountBillions,0),h=c.reduce((y,x)=>y+x.monthlyAmountBillions,0),f=h>0?(u-h)/h*100:0,v=f>=0?"change-negative":"change-positive",d=f>=0?"▲":"▼",m=`
      <div class="trade-revenue-summary">
        <div class="trade-revenue-headline">
          <span class="trade-revenue-label">${i("components.tradePolicy.fytdLabel",{year:String(s)})}</span>
          <span class="trade-revenue-value">$${u.toFixed(1)}B</span>
        </div>
        <div class="trade-revenue-compare">
          ${i("components.tradePolicy.vsPriorFy",{year:String(s-1)})}: $${h.toFixed(1)}B
          <span class="${v}">${d} ${Math.abs(f).toFixed(0)}%</span>
        </div>
      </div>
    `,g=c.length>0?h/c.length:0,$=[...t].slice(-12),w=Math.max(...$.map(y=>y.monthlyAmountBillions),1),C=`<div class="trade-revenue-chart">${$.map(y=>{const x=Math.round(y.monthlyAmountBillions/w*100),S=y.recordDate.slice(0,7),D=y.monthlyAmountBillions>g*1.5;return`<div class="trade-chart-col" title="${S}: $${y.monthlyAmountBillions.toFixed(1)}B">
        <div class="trade-chart-bar${D?" trade-chart-spike":""}" style="height:${x}%"></div>
        <div class="trade-chart-label">${y.recordDate.slice(5,7)}</div>
      </div>`}).join("")}</div>`,T=[...t].reverse().slice(0,24).map(y=>`<tr${y.monthlyAmountBillions>g*2?' class="trade-revenue-spike"':""}>
        <td>${y.recordDate}</td>
        <td>$${y.monthlyAmountBillions.toFixed(1)}B</td>
        <td>$${y.fytdAmountBillions.toFixed(1)}B</td>
      </tr>`).join("");return`${m}
    ${C}
    <div class="trade-tariffs-table">
      <table>
        <thead>
          <tr>
            <th>${i("components.tradePolicy.colDate")}</th>
            <th>${i("components.tradePolicy.colMonthly")}</th>
            <th>${i("components.tradePolicy.colFytd")}</th>
          </tr>
        </thead>
        <tbody>${T}</tbody>
      </table>
    </div>`}renderComtradeFlows(){var u;const t=(u=this.comtradeData)==null?void 0:u.flows;if(!(t!=null&&t.length))return`<div class="economic-empty">${i("components.tradePolicy.noComtradeData")}</div>`;const e=t.filter(h=>h.partnerCode==="0"||h.partnerCode==="000"),s=e.length>0?e:t,r=new Map;for(const h of s){const f=`${h.reporterCode}:${h.cmdCode}:${h.year}`,v=r.get(f);(!v||h.tradeValueUsd>v.tradeValueUsd)&&r.set(f,h)}const l=new Map;for(const h of r.values()){const f=`${h.reporterCode}:${h.cmdCode}`,v=l.get(f);(!v||h.year>v.year)&&l.set(f,h)}const c=[...l.values()].sort((h,f)=>h.isAnomaly!==f.isAnomaly?h.isAnomaly?-1:1:Math.abs(f.yoyChange)-Math.abs(h.yoyChange)).map(h=>{const f=h.yoyChange>=0?"▲":"▼",v=h.yoyChange>=0?"change-positive":"change-negative",d=`${f} ${Math.abs(h.yoyChange*100).toFixed(0)}%`,m=h.tradeValueUsd>=1e9?`$${(h.tradeValueUsd/1e9).toFixed(1)}B`:`$${(h.tradeValueUsd/1e6).toFixed(0)}M`,g=h.isAnomaly?`<span style="margin-left:6px;font-size:9px;font-weight:600;letter-spacing:0.05em;padding:1px 5px;border-radius:3px;background:rgba(255,68,68,0.15);color:var(--red);vertical-align:middle;text-transform:uppercase">${i("components.tradePolicy.anomalyBadge")}</span>`:"";return`<tr class="${h.isAnomaly?"trade-anomaly-row":""}">
        <td>${n(h.reporterName)}${g}</td>
        <td>${n(h.cmdDesc)}</td>
        <td>${m} <span class="trade-flow-year">${h.year}</span></td>
        <td class="${v}">${d}</td>
      </tr>`}).join("");return`<div class="trade-tariffs-table">
      <table>
        <thead><tr>
          <th>${i("components.tradePolicy.colReporter")}</th>
          <th>${i("components.tradePolicy.colCommodity")}</th>
          <th>${i("components.tradePolicy.colTradeValue")}</th>
          <th>${i("components.tradePolicy.yoyChange")}</th>
        </tr></thead>
        <tbody>${c}</tbody>
      </table>
    </div>`}renderSourceUrl(t){if(!t)return"";try{const e=new URL(t);if(e.protocol==="http:"||e.protocol==="https:")return`<a href="${n(t)}" target="_blank" rel="noopener" class="trade-source-link">Source</a>`}catch{}return""}}const ga=Object.freeze(Object.defineProperty({__proto__:null,TradePolicyPanel:cs},Symbol.toStringTag,{value:"Module"}));class ls extends A{constructor(){super({id:"sanctions-pressure",title:i("components.sanctionsPressure.title"),showCount:!0,trackActivity:!0,defaultRowSpan:2,infoTooltip:i("components.sanctionsPressure.infoTooltip")});b(this,"data",null);this.showLoading(i("components.sanctionsPressure.loading"))}setData(t){this.data=t,this.setCount(t.totalCount),this.render()}render(){if(!this.data||this.data.totalCount===0){this.setSafeContent(k(`<div class="economic-empty">${n(i("components.sanctionsPressure.unavailable"))}</div>`,"legacy Panel.setContent() migration"));return}const t=this.data,e=`
      <div class="sanctions-summary">
        ${this.renderSummaryCard(i("components.sanctionsPressure.summary.new"),t.newEntryCount,t.newEntryCount>0?"highlight":"")}
        ${this.renderSummaryCard(i("components.sanctionsPressure.summary.vessels"),t.vesselCount)}
        ${this.renderSummaryCard(i("components.sanctionsPressure.summary.aircraft"),t.aircraftCount)}
      </div>
    `,s=t.countries.length>0?t.countries.slice(0,8).map(c=>this.renderCountryRow(c)).join(""):`<div class="economic-empty">${n(i("components.sanctionsPressure.empty.countries"))}</div>`,r=t.entries.length>0?t.entries.slice(0,10).map(c=>this.renderEntryRow(c)).join(""):`<div class="economic-empty">${n(i("components.sanctionsPressure.empty.entries"))}</div>`,l=t.programs.length>0?t.programs.slice(0,6).map(c=>this.renderProgramRow(c)).join(""):`<div class="economic-empty">${n(i("components.sanctionsPressure.empty.programs"))}</div>`,o=[i("components.sanctionsPressure.footer.updated",{time:t.fetchedAt.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),t.datasetDate?i("components.sanctionsPressure.footer.dataset",{date:t.datasetDate.toISOString().slice(0,10)}):"",i("components.sanctionsPressure.footer.source")].filter(Boolean).join(" · ");this.setSafeContent(k(`
      <div class="sanctions-panel-content">
        ${e}
        <div class="sanctions-sections">
          <div class="sanctions-section">
            <div class="sanctions-section-title">${n(i("components.sanctionsPressure.sections.countries"))}</div>
            <div class="sanctions-list">${s}</div>
          </div>
          <div class="sanctions-section">
            <div class="sanctions-section-title">${n(i("components.sanctionsPressure.sections.entries"))}</div>
            <div class="sanctions-list">${r}</div>
          </div>
          <div class="sanctions-section">
            <div class="sanctions-section-title">${n(i("components.sanctionsPressure.sections.programs"))}</div>
            <div class="sanctions-list">${l}</div>
          </div>
        </div>
        <div class="economic-footer">${n(o)}</div>
      </div>
    `,"legacy Panel.setContent() migration"))}renderSummaryCard(t,e,s=""){return`
      <div class="sanctions-summary-card ${s?`sanctions-summary-card-${s}`:""}">
        <span class="sanctions-summary-label">${n(t)}</span>
        <span class="sanctions-summary-value">${n(String(e))}</span>
      </div>
    `}renderCountryRow(t){const e=[];return t.newEntryCount>0&&e.push(`<span class="sanctions-pill sanctions-pill-new">${n(i("components.sanctionsPressure.pills.newCount",{count:t.newEntryCount}))}</span>`),t.vesselCount>0&&e.push(`<span class="sanctions-pill">🚢 ${t.vesselCount}</span>`),t.aircraftCount>0&&e.push(`<span class="sanctions-pill">✈ ${t.aircraftCount}</span>`),`
      <div class="sanctions-row">
        <div class="sanctions-row-main">
          <div class="sanctions-row-title">${n(t.countryName)}</div>
          <div class="sanctions-row-meta">${n(t.countryCode)} · ${n(i("components.sanctionsPressure.designations",{count:t.entryCount}))}</div>
        </div>
        <div class="sanctions-row-flags">${e.join("")}</div>
      </div>
    `}renderProgramRow(t){return`
      <div class="sanctions-row">
        <div class="sanctions-row-main">
          <div class="sanctions-row-title">${n(t.program)}</div>
          <div class="sanctions-row-meta">${n(i("components.sanctionsPressure.designations",{count:t.entryCount}))}</div>
        </div>
        <div class="sanctions-row-flags">
          ${t.newEntryCount>0?`<span class="sanctions-pill sanctions-pill-new">${n(i("components.sanctionsPressure.pills.newCount",{count:t.newEntryCount}))}</span>`:""}
        </div>
      </div>
    `}renderEntryRow(t){const e=t.countryNames[0]||t.countryCodes[0]||i("components.sanctionsPressure.fallbacks.unattributed"),s=t.programs[0]||i("components.sanctionsPressure.fallbacks.program"),r=t.note?`<div class="sanctions-entry-note">${n(t.note)}</div>`:"",l=t.effectiveAt?t.effectiveAt.toISOString().slice(0,10):i("components.sanctionsPressure.fallbacks.undated");return`
      <div class="sanctions-entry">
        <div class="sanctions-entry-top">
          <span class="sanctions-entry-name">${n(t.name)}</span>
          <span class="sanctions-pill sanctions-pill-type">${n(t.entityType)}</span>
          ${t.isNew?`<span class="sanctions-pill sanctions-pill-new">${n(i("components.sanctionsPressure.pills.new"))}</span>`:""}
        </div>
        <div class="sanctions-entry-meta">${n(e)} · ${n(s)} · ${n(l)}</div>
        ${r}
      </div>
    `}}const ba=Object.freeze(Object.defineProperty({__proto__:null,SanctionsPressurePanel:ls},Symbol.toStringTag,{value:"Module"})),ds=new Set(["hormuz_strait","malacca_strait","suez","bab_el_mandeb"]);class ps extends A{constructor(){super({id:"supply-chain",title:i("panels.supplyChain"),defaultRowSpan:2,infoTooltip:i("components.supplyChain.infoTooltip")});b(this,"shippingData",null);b(this,"chokepointData",null);b(this,"mineralsData",null);b(this,"stressData",null);b(this,"activeTab","chokepoints");b(this,"expandedChokepoint",null);b(this,"transitChart",new Ie);b(this,"chartObserver",null);b(this,"chartMountTimer",null);b(this,"historyCache",new Map);b(this,"historyInflight",new Set);b(this,"bypassUnsubscribe",null);b(this,"bypassGateTracked",!1);b(this,"onDismissScenario",null);b(this,"onScenarioActivate",null);b(this,"activeScenarioState",null);b(this,"scenarioPollController",null);this.content.addEventListener("click",t=>{const e=t.target.closest(".panel-tab");if(e){const l=e.dataset.tab;l&&l!==this.activeTab&&(this.clearTransitChart(),this.activeTab=l,this.render());return}const s=t.target.closest(".sc-scenario-trigger");if(s){t.stopPropagation();const l=s.querySelector(".sc-scenario-btn");l&&!l.disabled&&this.runScenario(s,l);return}const r=t.target.closest(".trade-restriction-card");if(r!=null&&r.dataset.cpId){const l=this.expandedChokepoint===r.dataset.cpId?null:r.dataset.cpId;l||this.clearTransitChart(),this.expandedChokepoint=l,this.render()}})}clearTransitChart(){this.chartMountTimer&&(clearTimeout(this.chartMountTimer),this.chartMountTimer=null),this.chartObserver&&(this.chartObserver.disconnect(),this.chartObserver=null),this.transitChart.destroy(),this.bypassUnsubscribe&&(this.bypassUnsubscribe(),this.bypassUnsubscribe=null),this.bypassGateTracked=!1}updateShippingRates(t){this.shippingData=t,this.render()}updateChokepointStatus(t){this.chokepointData=t,this.render()}updateCriticalMinerals(t){this.mineralsData=t,this.render()}updateShippingStress(t){this.stressData=t,this.render()}render(){var o,c,u,h,f,v,d,m,g,$,w,P;this.clearTransitChart();const t=`
      <div class="panel-tabs">
        <button class="panel-tab ${this.activeTab==="chokepoints"?"active":""}" data-tab="chokepoints">
          ${i("components.supplyChain.chokepoints")}
        </button>
        <button class="panel-tab ${this.activeTab==="shipping"?"active":""}" data-tab="shipping">
          ${i("components.supplyChain.shipping")}
        </button>
        <button class="panel-tab ${this.activeTab==="indicators"?"active":""}" data-tab="indicators">
          ${i("components.supplyChain.economicIndicators")}
        </button>
        <button class="panel-tab ${this.activeTab==="minerals"?"active":""}" data-tab="minerals">
          ${i("components.supplyChain.minerals")}
        </button>
        <button class="panel-tab ${this.activeTab==="stress"?"active":""}" data-tab="stress">
          Stress
        </button>
      </div>
    `,e=this.activeTab==="chokepoints"?(((c=(o=this.chokepointData)==null?void 0:o.chokepoints)==null?void 0:c.length)??0)>0:this.activeTab==="shipping"?(((h=(u=this.shippingData)==null?void 0:u.indices)==null?void 0:h.length)??0)>0||this.chokepointData!==null:this.activeTab==="indicators"?(((v=(f=this.shippingData)==null?void 0:f.indices)==null?void 0:v.length)??0)>0:this.activeTab==="stress"?(((m=(d=this.stressData)==null?void 0:d.carriers)==null?void 0:m.length)??0)>0:((($=(g=this.mineralsData)==null?void 0:g.minerals)==null?void 0:$.length)??0)>0,s=this.activeTab==="chokepoints"?this.chokepointData:this.activeTab==="shipping"||this.activeTab==="indicators"?this.shippingData:this.activeTab==="stress"?this.stressData:this.mineralsData,r=!e&&(s!=null&&s.upstreamUnavailable)?`<div class="economic-warning">${i("components.supplyChain.upstreamUnavailable")}</div>`:"";let l="";switch(this.activeTab){case"chokepoints":l=this.renderChokepoints();break;case"shipping":l=this.renderShipping();break;case"indicators":l=this.renderIndicators();break;case"minerals":l=this.renderMinerals();break;case"stress":l=this.renderStress();break}if(this.setSafeContent(k(`
      ${t}
      ${r}
      <div class="economic-content">${l}</div>
    `,"legacy Panel.setContent() migration")),this.activeTab==="chokepoints"&&this.expandedChokepoint){const C=this.expandedChokepoint,T=(P=(w=this.chokepointData)==null?void 0:w.chokepoints)==null?void 0:P.find(S=>S.name===C),R=()=>{const S=this.content.querySelector(`[data-chart-cp="${C}"]`);if(!S)return!1;const D=(T==null?void 0:T.id)??"";if(!D)return S.textContent=i("components.supplyChain.historyUnavailable")||"History unavailable",!0;const _=this.historyCache.get(D);return _&&_.length?(S.removeAttribute("style"),S.style.marginTop="8px",S.style.minHeight="200px",S.textContent="",this.transitChart.mount(S,_),!0):(this.historyInflight.has(D)||(this.historyInflight.add(D),Re(D).then(L=>{this.historyInflight.delete(D);const M=this.content.querySelector(`[data-chart-cp-id="${D}"]`);M&&(L.history.length?(this.historyCache.set(D,L.history),M.removeAttribute("style"),M.style.marginTop="8px",M.style.minHeight="200px",M.textContent="",this.transitChart.mount(M,L.history)):M.textContent=i("components.supplyChain.historyUnavailable")||"History unavailable")}).catch(()=>{this.historyInflight.delete(D);const L=this.content.querySelector(`[data-chart-cp-id="${D}"]`);L&&(L.textContent=i("components.supplyChain.historyUnavailable")||"History unavailable")})),!0)},y=()=>{const S=this.content.querySelector(`[data-bypass-cp="${(T==null?void 0:T.id)??""}"]`);return S?(this.renderBypassSection(S,(T==null?void 0:T.id)??""),!0):!1},x=()=>y()?(R(),!0):!1;this.chartObserver=new MutationObserver(()=>{var S;x()&&(this.chartMountTimer&&(clearTimeout(this.chartMountTimer),this.chartMountTimer=null),(S=this.chartObserver)==null||S.disconnect(),this.chartObserver=null)}),this.chartObserver.observe(this.content,{childList:!0,subtree:!0}),this.chartMountTimer=setTimeout(()=>{x()&&(this.chartObserver&&(this.chartObserver.disconnect(),this.chartObserver=null),this.chartMountTimer=null)},220)}this.activeScenarioState&&this.renderScenarioBanner()}renderBypassSection(t,e){if(!e)return;const s=()=>'<div class="sc-bypass-gate"><span class="sc-bypass-lock">🔒</span><span class="sc-bypass-gate-text">Bypass corridors available with PRO</span></div>',r=c=>{const u=c.slice(0,3);return u.length?`<table class="sc-bypass-table">
        <thead><tr><th>Corridor</th><th>+Days</th><th>+Cost</th><th>Risk</th></tr></thead>
        <tbody>${u.map(f=>{const v=f.addedTransitDays>0?`+${f.addedTransitDays}d`:"-",d=f.addedCostMultiplier>1?`+${((f.addedCostMultiplier-1)*100).toFixed(0)}%`:"-",g={WAR_RISK_TIER_UNSPECIFIED:"Normal",WAR_RISK_TIER_WAR_ZONE:"War Zone",WAR_RISK_TIER_CRITICAL:"Critical",WAR_RISK_TIER_HIGH:"High",WAR_RISK_TIER_ELEVATED:"Elevated",WAR_RISK_TIER_NORMAL:"Normal"}[f.bypassWarRiskTier]??f.bypassWarRiskTier;return`<tr><td>${n(f.name)}</td><td>${v}</td><td>${d}</td><td>${n(g)}</td></tr>`}).join("")}</tbody>
      </table>`:'<div class="sc-bypass-error">No bypass options available</div>'},l=(c,u)=>{if(!c){I(t,F(s(),"legacy direct innerHTML migration")),this.bypassGateTracked||(Mt("bypass-corridors"),this.bypassGateTracked=!0);return}u!==void 0&&I(t,F(r(u),"legacy direct innerHTML migration"))};if(!pt(_t())){l(!1),this.bypassUnsubscribe&&this.bypassUnsubscribe(),this.bypassUnsubscribe=ge(c=>{if(pt(c)){if(this.bypassUnsubscribe&&(this.bypassUnsubscribe(),this.bypassUnsubscribe=null),!this.content.contains(t))return;I(t,F('<div class="sc-bypass-loading">Loading bypass options…</div>',"legacy direct innerHTML migration")),Ft(e,"container",100).then(u=>{this.content.contains(t)&&I(t,F(r(u.options),"legacy direct innerHTML migration"))}).catch(()=>{this.content.contains(t)&&I(t,F('<div class="sc-bypass-error">Bypass data unavailable</div>',"legacy direct innerHTML migration"))})}});return}Ft(e,"container",100).then(c=>{this.content.contains(t)&&l(!0,c.options)}).catch(()=>{this.content.contains(t)&&I(t,F('<div class="sc-bypass-error">Bypass data unavailable</div>',"legacy direct innerHTML migration"))})}renderChokepoints(){var r,l,o;if(!this.chokepointData||!((r=this.chokepointData.chokepoints)!=null&&r.length))return`<div class="economic-empty">${i("components.supplyChain.noChokepoints")}</div>`;const t=(l=this.activeScenarioState)==null?void 0:l.result,e=new Set((t==null?void 0:t.affectedChokepointIds)??[]),s=((o=t==null?void 0:t.template)==null?void 0:o.disruptionPct)??null;return`<div class="trade-restrictions-list">
      ${[...this.chokepointData.chokepoints].sort((c,u)=>u.disruptionScore-c.disruptionScore).map(c=>{var j;const u=e.has(c.id),h=c.status==="red"?"status-active":c.status==="yellow"?"status-notified":"status-terminated",f=c.status==="red"?"sc-dot-red":c.status==="yellow"?"sc-dot-yellow":"sc-dot-green",v=c.aisDisruptions??(c.congestionLevel==="normal"?0:1),d=c.transitSummary,m=(d==null?void 0:d.wowChangePct)??0,g=d&&m!==0,$=g?`<span class="${m>=0?"change-positive":"change-negative"}">${m>=0?"▲":"▼"}${Math.abs(m).toFixed(1)}%</span>`:"",w=(d==null?void 0:d.disruptionPct)??0,P=w>10?"sc-disrupt-red":w>3?"sc-disrupt-yellow":"sc-disrupt-green",C=(d==null?void 0:d.riskLevel)==="critical"||(d==null?void 0:d.riskLevel)==="high"?"sc-disrupt-red":(d==null?void 0:d.riskLevel)==="elevated"||(d==null?void 0:d.riskLevel)==="moderate"?"sc-disrupt-yellow":"sc-disrupt-green",T=this.expandedChokepoint===c.name,R=T&&(d!=null&&d.riskReportAction)?`<div class="sc-routing-advisory">${n(d.riskReportAction)}</div>`:"",y=T&&(d==null?void 0:d.dataAvailable)!==!1?`<div data-chart-cp="${n(c.name)}" data-chart-cp-id="${n(c.id)}" style="margin-top:8px;min-height:200px;display:flex;align-items:center;justify-content:center;color:var(--text-dim,#888);font-size:12px">${i("components.supplyChain.loadingHistory")||"Loading transit history…"}</div>`:"",x=c.warRiskTier??"WAR_RISK_TIER_NORMAL",S={WAR_RISK_TIER_WAR_ZONE:"War Zone",WAR_RISK_TIER_CRITICAL:"Critical",WAR_RISK_TIER_HIGH:"High",WAR_RISK_TIER_ELEVATED:"Elevated",WAR_RISK_TIER_NORMAL:"Normal"},_=`<span class="sc-war-risk-badge sc-war-risk-badge--${{WAR_RISK_TIER_WAR_ZONE:"war",WAR_RISK_TIER_CRITICAL:"critical",WAR_RISK_TIER_HIGH:"high",WAR_RISK_TIER_ELEVATED:"elevated",WAR_RISK_TIER_NORMAL:"normal"}[x]??"normal"}">${S[x]??"Normal"}</span>`,L=T?`<div class="sc-bypass-section" data-bypass-cp="${n(c.id)}"><div class="sc-bypass-heading">Bypass Options</div><div class="sc-bypass-loading">Loading bypass options…</div></div>`:"",M=T?(()=>{var Rt;const E=Bt.find(At=>At.affectedChokepointIds.includes(c.id)&&At.type!=="tariff_shock");if(!E)return"";const U=pt(_t()),z=((Rt=this.activeScenarioState)==null?void 0:Rt.scenarioId)===E.id,ct=["sc-scenario-btn",U?"":"sc-scenario-btn--gated",z?"sc-scenario-btn--active":""].filter(Boolean).join(" "),pe=z?"Active":"Simulate Closure",ue=[U?"":'data-gated="1"',z?"disabled":""].filter(Boolean).join(" ");return`<div class="sc-scenario-trigger" data-scenario-id="${n(E.id)}" data-chokepoint-id="${n(c.id)}">
            <button class="${ct}" ${ue} aria-label="Simulate ${n(E.name)}">
              ${pe}
            </button>
          </div>`})():"",J=u&&s!=null&&s>c.disruptionScore?`<span class="trade-badge">${c.disruptionScore}/100</span> <span class="trade-badge trade-badge--projected" style="background:#7f1d1d;color:#fff;margin-left:4px">→ ${s}/100</span>`:`<span class="trade-badge">${c.disruptionScore}/100</span>`;return`<div class="trade-restriction-card${T?" expanded":""}${u?" scenario-affected":""}" data-cp-id="${n(c.name)}" style="cursor:pointer${u?";border-left:3px solid #dc2626":""}">
          <div class="trade-restriction-header">
            <span class="trade-country">${n(c.name)}</span>
            <span class="sc-status-dot ${f}"></span>
            ${J}
            <span class="trade-status ${h}">${n(c.status)}</span>
          </div>
          <div class="trade-restriction-body">
            ${u&&(t!=null&&t.template)?`<div class="sc-metric-row" style="background:#7f1d1d22;padding:4px 6px;border-radius:3px;margin-bottom:4px;font-size:11px">
              <span style="color:#fca5a5;font-weight:600">⚠ Projected under scenario: ${t.template.disruptionPct}% closure for ${t.template.durationDays} days${t.template.costShockMultiplier>1?` (+${Math.round((t.template.costShockMultiplier-1)*100)}% cost)`:""}</span>
            </div>`:""}
            <div class="sc-metric-row">
              <span>${c.activeWarnings} ${i("components.supplyChain.warnings")} · ${v} ${i("components.supplyChain.aisDisruptions")}</span>
              ${(j=c.directions)!=null&&j.length?`<span>${c.directions.map(E=>n(E)).join("/")}</span>`:""}
            </div>
            ${d&&d.dataAvailable===!1?`<div class="sc-metric-row" style="opacity:0.5;font-size:11px"><span>${i("components.supplyChain.transitDataUnavailable")||"Transit data unavailable (upstream partial)"}</span></div>`:""}
            ${d&&d.dataAvailable!==!1&&(d.todayTotal>0||g||w>0)?`<div class="sc-metric-row">
              ${d.todayTotal>0?`<span>${d.todayTotal} ${i("components.supplyChain.vessels")}</span>`:""}
              ${g?`<span>${i("components.supplyChain.wowChange")}: ${$}</span>`:""}
              ${w>0?`<span>${i("components.supplyChain.disruption")}: <span class="${P}">${w.toFixed(1)}%</span></span>`:""}
            </div>`:""}
            ${d!=null&&d.riskLevel?`<div class="sc-metric-row">
              <span>${i("components.supplyChain.riskLevel")}: <span class="${C}">${n(d.riskLevel)}</span></span>
              <span>${d.incidentCount7d} ${i("components.supplyChain.incidents7d")}</span>
            </div>`:""}
            <div class="sc-metric-row">${_}</div>
            ${c.flowEstimate?(()=>{const E=c.flowEstimate,U=Math.round(E.flowRatio*100),z=E.disrupted||U<85?"#ef4444":U<95?"#f59e0b":"var(--text-dim,#888)",ct=E.hazardAlertLevel&&E.hazardAlertName?` <span style="background:#ea580c;color:#fff;font-size:9px;padding:1px 5px;border-radius:3px;margin-left:4px">&#9888; ${n(E.hazardAlertName.toUpperCase())}</span>`:"";return`<div class="sc-metric-row" style="color:${z}">
                <span>~${E.currentMbd} mb/d <span style="opacity:0.7">(${U}% of ${E.baselineMbd} baseline)</span>${ct}</span>
              </div>`})():ds.has(c.id)?`<div class="sc-metric-row" style="color:var(--text-dim,#888);font-size:11px;opacity:0.7">
                <span>${i("components.supplyChain.flowUnavailable")}</span>
              </div>`:""}
            ${c.description?`<div class="trade-description">${n(c.description)}</div>`:""}
            <div class="trade-affected">${c.affectedRoutes.slice(0,3).map(E=>n(E)).join(", ")}</div>
            ${R}
            ${y}
            ${L}
            ${M}
          </div>
        </div>`}).join("")}
    </div>`}renderShipping(){var s,r;const t=(r=(s=this.shippingData)==null?void 0:s.indices)==null?void 0:r.length,e=this.renderDisruptionSnapshot();return!t&&!e?`<div class="economic-empty">${i("components.supplyChain.noShipping")}</div>`:`<div class="trade-restrictions-list">
      ${e}
      ${t?this.renderFredIndices():""}
    </div>`}renderDisruptionSnapshot(){if(this.chokepointData===null)return`<div class="trade-sector" style="padding:8px;opacity:0.6">${i("components.supplyChain.loadingCorridors")}</div>`;const t=this.chokepointData.chokepoints;if(!(t!=null&&t.length))return"";const e=[...t].sort((o,c)=>c.disruptionScore-o.disruptionScore),s=e.filter(o=>o.disruptionScore>0),l=(s.length>0?s:e.slice(0,5)).map(o=>{const c=o.transitSummary,u=o.status==="red"?"sc-dot-red":o.status==="yellow"?"sc-dot-yellow":"sc-dot-green",h=(c==null?void 0:c.wowChangePct)??0,f=h!==0?`<span class="${h>=0?"change-positive":"change-negative"}">${h>=0?"▲":"▼"}${Math.abs(h).toFixed(1)}%</span>`:"-",v=(c==null?void 0:c.disruptionPct)??0,d=v>10?"sc-disrupt-red":v>3?"sc-disrupt-yellow":"sc-disrupt-green",m=(c==null?void 0:c.riskLevel)||"-",g=m==="critical"||m==="high"?"sc-disrupt-red":m==="elevated"||m==="moderate"?"sc-disrupt-yellow":"";return`<tr>
        <td><span class="sc-status-dot ${u}"></span> ${n(o.name)}</td>
        <td>${(c==null?void 0:c.todayTotal)??0}</td>
        <td>${f}</td>
        <td><span class="${d}">${v>0?v.toFixed(1)+"%":"-"}</span></td>
        <td>${g?`<span class="${g}">${n(m)}</span>`:n(m)}</td>
      </tr>`}).join("");return`<div style="margin-bottom:8px">
      <div class="trade-sector" style="font-weight:600;margin-bottom:4px">${i("components.supplyChain.corridorDisruption")}</div>
      <table class="sc-disruption-table">
        <thead><tr>
          <th>${i("components.supplyChain.corridor")}</th>
          <th>${i("components.supplyChain.vessels")}</th>
          <th>${i("components.supplyChain.wowChange")}</th>
          <th>${i("components.supplyChain.disruption")}</th>
          <th>${i("components.supplyChain.risk")}</th>
        </tr></thead>
        <tbody>${l}</tbody>
      </table>
    </div>`}renderFredIndices(){var o,c;if(Z()&&!q("supplyChain")||!((c=(o=this.shippingData)==null?void 0:o.indices)!=null&&c.length))return"";const t=new Set(["SCFI","CCFI"]),e=new Set(["BDI","BCI","BPI","BSI","BHSI"]),s=this.shippingData.indices.filter(u=>t.has(u.indexId)),r=this.shippingData.indices.filter(u=>e.has(u.indexId)),l=(u,h)=>{if(!h.length)return"";const f=h.map(v=>{const d=v.changePct>=0?"change-positive":"change-negative",m=v.changePct>=0?"▲":"▼",g=this.renderSparkline(v.history.map(w=>w.value),v.history.map(w=>w.date));return`<div class="trade-restriction-card">
          ${v.spikeAlert?`<div class="economic-warning">${i("components.supplyChain.spikeAlert")}</div>`:""}
          <div class="trade-restriction-header">
            <span class="trade-country">${n(v.name)}</span>
            <span class="trade-badge">${v.currentValue.toFixed(0)} ${n(v.unit)}</span>
            <span class="trade-flow-change ${d}">${m} ${Math.abs(v.changePct).toFixed(1)}%</span>
          </div>
          <div class="trade-restriction-body">
            ${g}
          </div>
        </div>`}).join("");return`<div class="trade-sector" style="font-weight:600;margin:8px 0 4px">${n(u)}</div>${f}`};return[l(i("components.supplyChain.containerRates"),s),l(i("components.supplyChain.bulkShipping"),r)].join("")}renderIndicators(){var l,o;if(Z()&&!q("supplyChain"))return"";if(!((o=(l=this.shippingData)==null?void 0:l.indices)!=null&&o.length))return`<div class="economic-empty">${i("components.supplyChain.noShipping")}</div>`;const t=new Set(["SCFI","CCFI"]),e=new Set(["BDI","BCI","BPI","BSI","BHSI"]),s=this.shippingData.indices.filter(c=>!t.has(c.indexId)&&!e.has(c.indexId));return s.length?`<div class="trade-restrictions-list">${s.map(c=>{const u=c.changePct>=0?"change-positive":"change-negative",h=c.changePct>=0?"▲":"▼",f=this.renderSparkline(c.history.map(d=>d.value),c.history.map(d=>d.date));return`<div class="trade-restriction-card">
          ${c.spikeAlert?`<div class="economic-warning">${i("components.supplyChain.spikeAlert")}</div>`:""}
          <div class="trade-restriction-header">
            <span class="trade-country">${n(c.name)}</span>
            <span class="trade-badge">${c.currentValue.toFixed(0)} ${n(c.unit)}</span>
            <span class="trade-flow-change ${u}">${h} ${Math.abs(c.changePct).toFixed(1)}%</span>
          </div>
          <div class="trade-restriction-body">
            ${f}
          </div>
        </div>`}).join("")}</div>`:`<div class="economic-empty">${i("components.supplyChain.noShipping")}</div>`}renderStress(){var h;if(!this.stressData||!((h=this.stressData.carriers)!=null&&h.length))return'<div class="economic-empty">Shipping stress data unavailable</div>';const{stressScore:t,stressLevel:e,carriers:s}=this.stressData,r=e==="critical"?"#e74c3c":e==="elevated"?"#e67e22":e==="moderate"?"#f1c40f":"#27ae60",l=Math.round(Math.min(100,Math.max(0,t))),c=`<div style="margin-bottom:12px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
        <span style="font-size:11px;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.06em">Composite Stress Score</span>
        <span style="font-size:11px;font-weight:700;padding:2px 7px;border-radius:3px;background:${e==="critical"?"rgba(231,76,60,0.15)":e==="elevated"?"rgba(230,126,34,0.15)":e==="moderate"?"rgba(241,196,15,0.15)":"rgba(39,174,96,0.15)"};color:${r}">${n(e.toUpperCase())}</span>
      </div>
      <div style="position:relative;height:6px;border-radius:3px;background:rgba(255,255,255,0.08)">
        <div style="position:absolute;left:0;top:0;height:100%;width:${l}%;border-radius:3px;background:${r};transition:width 0.4s"></div>
      </div>
      <div style="text-align:right;font-size:10px;color:var(--text-dim);margin-top:2px">${t.toFixed(1)}/100</div>
    </div>`,u=s.map(f=>{var $;const v=f.changePct>=0?"change-positive":"change-negative",d=f.changePct>=0?"▲":"▼",m=f.carrierType==="etf"?"ETF":f.carrierType==="index"?"IDX":"CARR",g=(($=f.sparkline)==null?void 0:$.length)>=2?this.renderSparkline(f.sparkline):"";return`<div class="trade-restriction-card">
        <div class="trade-restriction-header">
          <span class="trade-country" style="font-size:11px">${n(f.symbol)}</span>
          <span style="font-size:9px;padding:1px 5px;border-radius:2px;background:rgba(255,255,255,0.06);color:var(--text-dim)">${m}</span>
          <span class="trade-badge">${f.price.toFixed(2)}</span>
          <span class="trade-flow-change ${v}">${d} ${Math.abs(f.changePct).toFixed(2)}%</span>
        </div>
        <div class="trade-restriction-body" style="font-size:10px;color:var(--text-dim)">${n(f.name)}${g}</div>
      </div>`}).join("");return`<div class="trade-restrictions-list">${c}${u}</div>`}renderSparkline(t,e){if(t.length<2)return"";const s=Math.min(...t),l=Math.max(...t)-s||1,o=200,c=40,u=e!=null&&e.length?c+14:c,h=t.map((v,d)=>{const m=d/(t.length-1)*o,g=c-(v-s)/l*(c-4)-2;return`${m.toFixed(1)},${g.toFixed(1)}`}).join(" "),f=e!=null&&e.length?`
      <text x="0" y="${u-1}" fill="var(--text-dim,#888)" font-size="9" text-anchor="start">${n(e[0].slice(0,7))}</text>
      <text x="${o}" y="${u-1}" fill="var(--text-dim,#888)" font-size="9" text-anchor="end">${n(e[e.length-1].slice(0,7))}</text>
    `:"";return`<svg width="${o}" height="${u}" viewBox="0 0 ${o} ${u}" style="display:block;margin:4px 0">
      <polyline points="${h}" fill="none" stroke="var(--accent-primary, #4fc3f7)" stroke-width="1.5" />
      ${f}
    </svg>`}renderMinerals(){var e;if(!this.mineralsData||!((e=this.mineralsData.minerals)!=null&&e.length))return`<div class="economic-empty">${i("components.supplyChain.noMinerals")}</div>`;const t=this.mineralsData.minerals.map(s=>{const r=s.riskRating==="critical"?"sc-risk-critical":s.riskRating==="high"?"sc-risk-high":s.riskRating==="moderate"?"sc-risk-moderate":"sc-risk-low",l=s.topProducers.slice(0,3).map(o=>`${n(o.country)} ${o.sharePct.toFixed(0)}%`).join(", ");return`<tr>
        <td>${n(s.mineral)}</td>
        <td>${l}</td>
        <td>${s.hhi.toFixed(0)}</td>
        <td><span class="${r}">${n(s.riskRating)}</span></td>
      </tr>`}).join("");return`<div class="trade-tariffs-table">
      <table>
        <thead>
          <tr>
            <th>${i("components.supplyChain.mineral")}</th>
            <th>${i("components.supplyChain.topProducers")}</th>
            <th>HHI</th>
            <th>${i("components.supplyChain.risk")}</th>
          </tr>
        </thead>
        <tbody>${t}</tbody>
      </table>
    </div>`}showScenarioSummary(t,e){this.activeScenarioState={scenarioId:t,result:e},this.render()}renderScenarioBanner(){var w,P;const t=this.activeScenarioState;if(!t)return;const{scenarioId:e,result:s}=t;(w=this.content.querySelector(".sc-scenario-banner"))==null||w.remove();const l=s.topImpactCountries.slice(0,5).map(C=>`<span class="sc-scenario-country">${n(C.iso2)} <em>${C.impactPct.toFixed(0)}%</em></span>`).join(" · "),o=document.createElement("div");o.className="sc-scenario-banner";const c=((P=Bt.find(C=>C.id===e))==null?void 0:P.name)??e.replace(/-/g," "),u=s.template,h=u?`${u.durationDays}d`:null,f=u?`${u.disruptionPct}% closure`:null,v=u?Math.round((u.costShockMultiplier-1)*100):null,d=v!=null&&v>0?`+${v}% cost`:null,m=[h,d].filter(Boolean).map(C=>`<span class="sc-scenario-param">${n(C)}</span>`).join(" · "),g=[h,f,d].filter(Boolean).join(" / "),$=g?`<div class="sc-scenario-tagline">Simulating ${n(g)} on ${s.affectedChokepointIds.length} chokepoint${s.affectedChokepointIds.length===1?"":"s"}. Chokepoint card below shows projected score; map highlights disrupted routes.</div>`:"";I(o,F(['<div class="sc-scenario-top">','<span class="sc-scenario-icon">⚠</span>',`<span class="sc-scenario-name">${n(c)}</span>`,m?`<span class="sc-scenario-params">${m}</span>`:"",`<span class="sc-scenario-countries">${l}</span>`,'<button class="sc-scenario-dismiss" aria-label="Dismiss scenario">×</button>',"</div>",$].join(""),"legacy direct innerHTML migration")),o.querySelector(".sc-scenario-dismiss").addEventListener("click",()=>{var C;return(C=this.onDismissScenario)==null?void 0:C.call(this)}),this.content.prepend(o)}hideScenarioSummary(){this.activeScenarioState=null,this.render()}setOnDismissScenario(t){this.onDismissScenario=t}setOnScenarioActivate(t){this.onScenarioActivate=t}async runScenario(t,e){var o,c;if(e.dataset.gated==="1"){Mt("scenario-engine");return}(o=this.scenarioPollController)==null||o.abort(),this.scenarioPollController=new AbortController;const{signal:s}=this.scenarioPollController,r=t.dataset.scenarioId;e.disabled=!0,e.textContent="Computing…";const l=u=>{e.isConnected&&(e.textContent=u,e.disabled=!1)};try{const u=AbortSignal.any([s,AbortSignal.timeout(2e4)]),f=(await Me({scenarioId:r,iso2:""},{signal:u})).jobId;let v=null;for(let d=0;d<60;d++){if(s.aborted){l("Simulate Closure");return}if(!this.content.isConnected)return;d>0&&await new Promise(g=>setTimeout(g,1e3));const m=await _e(f,{signal:s});if(m.status==="done"){const g=m.result;if(!g||!Array.isArray(g.topImpactCountries))throw new Error("done without valid result");v=g;break}if(m.status==="failed")throw new Error("Scenario failed")}if(!v)throw new Error("Timeout — scenario worker may be down");if(s.aborted){l("Simulate Closure");return}if(!this.content.isConnected)return;(c=this.onScenarioActivate)==null||c.call(this,r,v)}catch(u){if(u instanceof Error&&u.name==="AbortError"){l("Simulate Closure");return}console.error("[scenario] run failed:",u),l("Error — retry")}}}const ya=Object.freeze(Object.defineProperty({__proto__:null,SupplyChainPanel:ps},Symbol.toStringTag,{value:"Module"})),ne={port:"Ports",aviation:"Aviation",hazard:"Hazards",power_energy:"Power / energy",strategic_industry:"Strategic industry",trade:"Trade"},Ct={available:"Available",partial:"Partial",stale:"Stale",unavailable:"Unavailable"},us="The active map renderer centers this corridor but cannot draw its boundary or nodes. Use the WebGL 2D map on a supported device to view the overlay.";function gt(a,p){if(!a||!Number.isFinite(Date.parse(a)))return"Time unavailable";const t=new Date(a);return p==="year"?String(t.getUTCFullYear()):p==="month"?t.toLocaleString(void 0,{year:"numeric",month:"short",timeZone:"UTC"}):p==="day"?t.toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"}):new Date(a).toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",timeZone:"UTC",timeZoneName:"short"})}function hs(a){var e;const p=a.sourceUrl?ee(a.sourceUrl):"",t=p?`<a href="${n(p)}" target="_blank" rel="noopener noreferrer">${n(a.publisher.name)}</a>`:n(a.publisher.name);return`
    <li class="china-corridor-source" data-source-availability="${a.availability}">
      <div class="china-corridor-source__summary">${n(a.summary)}</div>
      <div class="china-corridor-source__meta">
        <span>${t}</span>
        <span>source ${n(a.availability)}</span>
        <span>observed ${n(gt(a.observationTime,a.observationTimePrecision))} (${n(a.observationTimePrecision)})</span>
        <span>released ${n(gt(a.releaseTime,a.releaseTimePrecision))} (${n(a.releaseTimePrecision)})</span>
        <span>retrieved ${n(gt(a.retrievalTime,a.retrievalTimePrecision))} (${n(a.retrievalTimePrecision)})</span>
        <span>transport ${n(a.transportFreshness)}</span>
        <span>content ${n(a.contentFreshness)}</span>
        <span>revision ${n(((e=a.revision)==null?void 0:e.state)??"unknown")}</span>
      </div>
    </li>`}function ms(a){const p=a.sourceSignals.length>0?`<ul class="china-corridor-sources">${a.sourceSignals.map(hs).join("")}</ul>`:`<p class="china-corridor-missing">${n(a.reason??"No reviewed source signal is available.")}</p>`;return`
    <article class="china-corridor-condition" data-family="${a.family}" data-availability="${a.availability}">
      <header>
        <h4>${n(ne[a.family])}</h4>
        <span class="china-corridor-status china-corridor-status--${a.availability}">
          ${n(Ct[a.availability])}
        </span>
      </header>
      <div class="china-corridor-provider">Provider family: ${n(a.providerId)}</div>
      ${p}
    </article>`}function vs(){if(document.getElementById("china-corridor-panel-styles"))return;const a=document.createElement("style");a.id="china-corridor-panel-styles",a.textContent=`
    .china-corridor-panel { display: grid; gap: 12px; min-width: 0; }
    .china-corridor-compare { display: grid; grid-template-columns: repeat(auto-fit,minmax(150px,1fr)); gap: 8px; }
    .china-corridor-compare button { min-height: 64px; text-align: left; padding: 8px; color: var(--text); background: color-mix(in srgb,var(--panel-bg) 80%,transparent); border: 1px solid var(--border); border-radius: 6px; cursor: pointer; }
    .china-corridor-compare button[aria-selected="true"] { border-color: var(--accent); box-shadow: inset 0 0 0 1px var(--accent); }
    .china-corridor-compare strong,.china-corridor-compare small { display: block; }
    .china-corridor-compare small { margin-top: 4px; color: var(--text-dim); }
    .china-corridor-filters { display: flex; flex-wrap: wrap; gap: 6px; }
    .china-corridor-filters button { min-height: 36px; padding: 5px 9px; border: 1px solid var(--border); border-radius: 999px; background: transparent; color: var(--text-dim); cursor: pointer; }
    .china-corridor-filters button[aria-pressed="true"] { color: var(--text); border-color: var(--accent); background: color-mix(in srgb,var(--accent) 14%,transparent); }
    .china-corridor-detail__heading { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; }
    .china-corridor-detail__heading h3 { margin: 0; font-size: 14px; }
    .china-corridor-description { margin: 4px 0 0; color: var(--text-dim); font-size: 11px; line-height: 1.45; }
    .china-corridor-conditions { display: grid; grid-template-columns: repeat(auto-fit,minmax(210px,1fr)); gap: 8px; margin-top: 10px; }
    .china-corridor-condition { min-width: 0; padding: 9px; border: 1px solid var(--border); border-radius: 6px; }
    .china-corridor-condition header { display: flex; justify-content: space-between; gap: 8px; align-items: center; }
    .china-corridor-condition h4 { margin: 0; font-size: 12px; }
    .china-corridor-status { font: 700 9px/1 var(--font-mono); letter-spacing: .05em; text-transform: uppercase; }
    .china-corridor-status--available { color: #39c77a; }
    .china-corridor-status--partial,.china-corridor-status--stale { color: #e5a742; }
    .china-corridor-status--unavailable { color: var(--text-dim); }
    .china-corridor-provider { margin-top: 5px; color: var(--text-dim); font-size: 9px; overflow-wrap: anywhere; }
    .china-corridor-sources { list-style: none; padding: 0; margin: 8px 0 0; display: grid; gap: 7px; }
    .china-corridor-source { padding-top: 7px; border-top: 1px solid var(--border); }
    .china-corridor-source__summary { font-size: 11px; line-height: 1.4; overflow-wrap: anywhere; }
    .china-corridor-source__meta { display: flex; flex-wrap: wrap; gap: 3px 8px; margin-top: 5px; color: var(--text-dim); font-size: 9px; overflow-wrap: anywhere; }
    .china-corridor-source__meta a { color: var(--accent); }
    .china-corridor-missing { margin: 8px 0 0; color: var(--text-dim); font-size: 11px; line-height: 1.4; }
    .china-corridor-renderer-hint { margin: 8px 0 0; color: var(--warning); font-size: 11px; line-height: 1.4; }
    @media (max-width: 520px) {
      .china-corridor-compare { grid-template-columns: 1fr 1fr; }
      .china-corridor-conditions { grid-template-columns: 1fr; }
      .china-corridor-detail__heading { display: block; }
    }
  `,document.head.appendChild(a)}class fs extends A{constructor(){super({id:"china-corridors",title:"China Logistics Corridors",className:"panel-wide",defaultRowSpan:2,infoTooltip:"Transparent control towers for four reviewed China logistics corridors. Each condition retains its own source, time, availability, and freshness; no aggregate risk score is produced."});b(this,"response",{generatedAt:"",corridors:[]});b(this,"selectedId",null);b(this,"selectedFamilies",new Set(dt));b(this,"onCorridorSelect",null);b(this,"showRendererHint",!1);vs(),this.content.addEventListener("click",t=>this.handleClick(t)),this.content.addEventListener("keydown",t=>this.handleKeydown(t))}setOnCorridorSelect(t){this.onCorridorSelect=t}setRendererSupportsOverlay(t){const e=!t;e!==this.showRendererHint&&(this.showRendererHint=e,this.selectedId!==null&&this.render())}async fetchData(){this.showLoading();const t=await Ae();return t.corridors.length===0?(this.showError("China corridor data unavailable",()=>void this.fetchData()),!1):(this.setData(t),!0)}setData(t){var e;this.response=t,this.selectedId??(this.selectedId=((e=t.corridors[0])==null?void 0:e.id)??null),this.render()}selectedCorridor(){return this.response.corridors.find(t=>t.id===this.selectedId)??null}selectCorridor(t,e=!1){var l;const s=this.response.corridors.find(o=>o.id===t);if(!s)return;this.selectedId=s.id;const r=(l=this.onCorridorSelect)==null?void 0:l.call(this,s);this.showRendererHint=r===!1,this.render(()=>{var o;e&&((o=this.content.querySelector(`[role="tab"][data-corridor-id="${s.id}"]`))==null||o.focus())})}handleClick(t){const e=t.target,s=e.closest("[data-corridor-id]");if(s!=null&&s.dataset.corridorId){this.selectCorridor(s.dataset.corridorId);return}const r=e.closest("[data-family-filter]"),l=r==null?void 0:r.dataset.familyFilter;!l||!dt.includes(l)||(this.selectedFamilies.has(l)?this.selectedFamilies.delete(l):this.selectedFamilies.add(l),this.render())}handleKeydown(t){const e=t.target.closest('[role="tab"][data-corridor-id]');if(!e||!["ArrowRight","ArrowLeft","Home","End"].includes(t.key))return;const s=this.response.corridors.map(o=>o.id),r=s.indexOf(e.dataset.corridorId);if(r<0)return;t.preventDefault();let l;if(t.key==="Home")l=s[0];else if(t.key==="End")l=s[s.length-1];else{const o=t.key==="ArrowRight"?1:-1;l=s[(r+o+s.length)%s.length]}l&&this.selectCorridor(l,!0)}render(t){const e=this.selectedCorridor();if(!e)return;const s=this.response.corridors.map(o=>{const c=o.conditions.filter(u=>u.availability==="available").length;return`<button id="china-corridor-tab-${o.id}" role="tab" data-corridor-id="${o.id}" aria-selected="${o.id===e.id}" aria-controls="china-corridor-tabpanel" tabindex="${o.id===e.id?"0":"-1"}">
        <strong>${n(o.name)}</strong>
        <small>${c}/${o.conditions.length} families available · ${n(Ct[o.availability])}</small>
      </button>`}).join(""),r=dt.map(o=>`<button type="button" data-family-filter="${o}" aria-pressed="${this.selectedFamilies.has(o)}">${n(ne[o])}</button>`).join(""),l=e.conditions.filter(o=>this.selectedFamilies.has(o.family)).map(ms).join("");this.setSafeContent(k(`
      <div class="china-corridor-panel">
        <div class="china-corridor-compare" role="tablist" aria-label="Compare China logistics corridors">${s}</div>
        <div class="china-corridor-filters" role="group" aria-label="Signal-family filters">${r}</div>
        <section id="china-corridor-tabpanel" role="tabpanel" aria-labelledby="china-corridor-tab-${e.id}">
          <div class="china-corridor-detail__heading">
            <div>
              <h3>${n(e.name)}</h3>
              <p class="china-corridor-description">${n(e.description)}</p>
            </div>
            <span class="china-corridor-status china-corridor-status--${e.availability}">${n(Ct[e.availability])}</span>
          </div>
          ${this.showRendererHint?`<p class="china-corridor-renderer-hint" role="status">${n(us)}</p>`:""}
          <div class="china-corridor-conditions">${l||'<p class="china-corridor-missing">Select at least one signal family.</p>'}</div>
        </section>
      </div>
    `,"China corridor values are escaped before rendering"),t)}}const $a=Object.freeze(Object.defineProperty({__proto__:null,ChinaCorridorPanel:fs},Symbol.toStringTag,{value:"Module"})),zt="china-activity-nowcast-panel-styles";function gs(){if(document.getElementById(zt))return;const a=document.createElement("style");a.id=zt,a.textContent=`
    .china-nowcast-view { display: grid; gap: 12px; color: var(--text-primary); }
    .china-nowcast-summary, .china-nowcast-official, .china-nowcast-method {
      border: 1px solid var(--border-color); background: color-mix(in srgb, var(--panel-bg) 88%, transparent);
    }
    .china-nowcast-summary {
      display: grid; grid-template-columns: minmax(0, 1fr) minmax(180px, .38fr);
      gap: 14px; align-items: center; padding: 14px;
      border-left: 3px solid var(--text-muted);
    }
    .china-nowcast-summary--agreement { border-left-color: var(--success-color, #45bd7d); }
    .china-nowcast-summary--proxy_leading_divergence,
    .china-nowcast-summary--official_leading_divergence { border-left-color: var(--warning-color, #e3a94f); }
    .china-nowcast-summary--mixed_signals { border-left-color: #8f7bd6; }
    .china-nowcast-summary--insufficient_data { border-left-color: var(--text-muted); }
    .china-nowcast-eyebrow, .china-nowcast-family {
      display: block; color: var(--text-muted); font-size: 10px; font-weight: 700;
      letter-spacing: .11em; text-transform: uppercase;
    }
    .china-nowcast-summary h3, .china-nowcast-official h4,
    .china-nowcast-contribution h4, .china-nowcast-method h4 { margin: 4px 0; }
    .china-nowcast-summary p, .china-nowcast-official p,
    .china-nowcast-contribution p, .china-nowcast-method p {
      margin: 5px 0; color: var(--text-secondary); line-height: 1.45;
    }
    .china-nowcast-confidence { display: grid; gap: 3px; padding: 10px; background: var(--surface-hover); }
    .china-nowcast-confidence > span {
      width: max-content; padding: 2px 7px; border: 1px solid currentColor;
      color: var(--text-secondary); font-size: 10px; text-transform: uppercase;
    }
    .china-nowcast-confidence small { color: var(--text-muted); line-height: 1.35; }
    .china-nowcast-official { padding: 12px 14px; }
    .china-nowcast-official dl, .china-nowcast-contribution dl { margin: 8px 0 0; }
    .china-nowcast-official dl { display: flex; flex-wrap: wrap; gap: 8px 18px; }
    .china-nowcast-official dl div, .china-nowcast-contribution dl div { min-width: 0; }
    .china-nowcast-official dt, .china-nowcast-contribution dt {
      color: var(--text-muted); font-size: 10px; text-transform: uppercase;
    }
    .china-nowcast-official dd, .china-nowcast-contribution dd {
      margin: 2px 0 0; overflow-wrap: anywhere; color: var(--text-secondary);
    }
    .china-nowcast-contributions {
      display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px;
    }
    .china-nowcast-contribution {
      min-width: 0; padding: 11px; border: 1px solid var(--border-color);
      background: var(--surface-bg, var(--panel-bg));
    }
    .china-nowcast-contribution--strengthening { border-top: 2px solid var(--success-color, #45bd7d); }
    .china-nowcast-contribution--weakening { border-top: 2px solid var(--danger-color, #df6969); }
    .china-nowcast-contribution--unchanged { border-top: 2px solid #8f7bd6; }
    .china-nowcast-contribution--excluded { border-top: 2px solid var(--text-muted); opacity: .86; }
    .china-nowcast-contribution__heading {
      display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 8px; align-items: start;
    }
    .china-nowcast-contribution__state {
      max-width: 190px; color: var(--text-secondary); font-size: 11px; text-align: right;
    }
    .china-nowcast-contribution dl { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 7px 12px; }
    .china-nowcast-contribution a { color: var(--accent-color); }
    .china-nowcast-method summary {
      padding: 11px 13px; cursor: pointer; font-weight: 650; color: var(--text-secondary);
    }
    .china-nowcast-method__grid {
      display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 14px; padding: 0 13px 13px;
    }
    .china-nowcast-method ul { margin: 7px 0 0; padding-left: 18px; color: var(--text-secondary); }
    .china-nowcast-method li { margin: 4px 0; line-height: 1.4; }
    .china-nowcast-method li span { display: block; color: var(--text-muted); font-size: 11px; }
    @media (max-width: 720px) {
      .china-nowcast-summary, .china-nowcast-contributions,
      .china-nowcast-method__grid { grid-template-columns: minmax(0, 1fr); }
      .china-nowcast-contribution__heading { grid-template-columns: minmax(0, 1fr); }
      .china-nowcast-contribution__state { max-width: none; text-align: left; }
    }
  `,document.head.appendChild(a)}class bs extends A{constructor(){super({id:"china-activity-nowcast",title:"China Activity Nowcast",className:"panel-wide",defaultRowSpan:2,infoTooltip:"A deterministic directional comparison of revision-aware official activity and reviewed proxy families. Missing and stale inputs are excluded; this is not a replacement GDP estimate."});b(this,"response",null);gs()}async fetchData(){this.showLoading();const t=await Fe();return this.setData(t),t.state!=="insufficient_data"}setData(t){this.response=t,this.render()}render(){this.response!==null&&this.setSafeContent(k(Be(this.response),"China activity nowcast renderer escapes every dynamic value before constructing markup"))}}const wa=Object.freeze(Object.defineProperty({__proto__:null,ChinaActivityNowcastPanel:bs},Symbol.toStringTag,{value:"Module"}));function Vt(a){return{ports:i("components.investments.sectors.ports"),pipelines:i("components.investments.sectors.pipelines"),energy:i("components.investments.sectors.energy"),datacenters:i("components.investments.sectors.datacenters"),airports:i("components.investments.sectors.airports"),railways:i("components.investments.sectors.railways"),telecoms:i("components.investments.sectors.telecoms"),water:i("components.investments.sectors.water"),logistics:i("components.investments.sectors.logistics"),mining:i("components.investments.sectors.mining"),"real-estate":i("components.investments.sectors.realEstate"),manufacturing:i("components.investments.sectors.manufacturing")}[a]||a}const ys={operational:"#22c55e","under-construction":"#f59e0b",announced:"#60a5fa",rumoured:"#a78bfa",cancelled:"#ef4444",divested:"#6b7280"},$s={SA:"🇸🇦",UAE:"🇦🇪"};function ws(a){return a===void 0?i("components.investments.undisclosed"):a>=1e5?`$${(a/1e3).toFixed(0)}B`:a>=1e3?`$${(a/1e3).toFixed(1)}B`:`$${a.toLocaleString()}M`}class xs extends A{constructor(t){super({id:"gcc-investments",title:i("panels.gccInvestments"),showCount:!0,infoTooltip:i("components.investments.infoTooltip")});b(this,"filters",{investingCountry:"ALL",sector:"ALL",entity:"ALL",status:"ALL",search:""});b(this,"sortKey","assetName");b(this,"sortAsc",!0);b(this,"filtersExpanded",!1);b(this,"onInvestmentClick");this.onInvestmentClick=t,this.setupEventDelegation(),this.render()}getFiltered(){const{investingCountry:t,sector:e,entity:s,status:r,search:l}=this.filters,o=l.toLowerCase();return X.filter(c=>!(t!=="ALL"&&c.investingCountry!==t||e!=="ALL"&&c.sector!==e||s!=="ALL"&&c.investingEntity!==s||r!=="ALL"&&c.status!==r||o&&!c.assetName.toLowerCase().includes(o)&&!c.targetCountry.toLowerCase().includes(o)&&!c.description.toLowerCase().includes(o)&&!c.investingEntity.toLowerCase().includes(o))).sort((c,u)=>{const h=this.sortKey,f=c[h]??"",v=u[h]??"",d=f<v?-1:f>v?1:0;return this.sortAsc?d:-d})}render(){const t=this.getFiltered(),e=Nt(X.map(d=>d.investingEntity)),s=Nt(X.map(d=>d.sector)),r=d=>this.sortKey===d?"fdi-sort fdi-sort-active":"fdi-sort",l=(d,m)=>this.sortKey===d?`${m} ${this.sortAsc?"↑":"↓"}`:m,o=this.filters.investingCountry!=="ALL"||this.filters.sector!=="ALL"||this.filters.entity!=="ALL"||this.filters.status!=="ALL",c=t.map(d=>{const m=ys[d.status]||"#6b7280",g=$s[d.investingCountry]||"",$=Vt(d.sector),w=d.yearAnnounced??d.yearOperational??"—";return`
        <div class="fdi-row" data-id="${n(d.id)}">
          <div class="fdi-row-line1">
            <span class="fdi-flag">${g}</span>
            <span class="fdi-asset-name">${n(d.assetName)}</span>
            <span class="fdi-entity-sub">${n(d.investingEntity)}</span>
            <span class="fdi-usd">${n(ws(d.investmentUSD))}</span>
          </div>
          <div class="fdi-row-line2">
            <span class="fdi-country">${n(d.targetCountry)}</span>
            <span class="fdi-sector-badge">${n($)}</span>
            <span class="fdi-status-label"><span class="fdi-status-dot" style="background:${m}"></span>${n(d.status)}</span>
            <span class="fdi-year">${w}</span>
          </div>
        </div>`}).join(""),u=this.filtersExpanded||o?"fdi-filter-toggle fdi-filters-active":"fdi-filter-toggle",h=this.filtersExpanded?"fdi-filters fdi-filters-open":"fdi-filters",f=d=>this.filters.status===d?" selected":"",v=`
      <div class="fdi-search-row">
        <input class="fdi-search" type="text"
          placeholder="${i("components.investments.searchPlaceholder")}"
          value="${n(this.filters.search)}"/>
        <button class="${u}" data-action="toggle-filters" title="Filters" aria-label="Toggle filters" aria-pressed="${this.filtersExpanded}">⚙</button>
      </div>
      <div class="${h}">
        <select class="fdi-filter" data-filter="investingCountry">
          <option value="ALL">🌐 ${i("components.investments.allCountries")}</option>
          <option value="SA"${this.filters.investingCountry==="SA"?" selected":""}>🇸🇦 ${i("components.investments.saudiArabia")}</option>
          <option value="UAE"${this.filters.investingCountry==="UAE"?" selected":""}>🇦🇪 ${i("components.investments.uae")}</option>
        </select>
        <select class="fdi-filter" data-filter="sector">
          <option value="ALL">${i("components.investments.allSectors")}</option>
          ${s.map(d=>`<option value="${d}"${this.filters.sector===d?" selected":""}>${n(Vt(d))}</option>`).join("")}
        </select>
        <select class="fdi-filter" data-filter="entity">
          <option value="ALL">${i("components.investments.allEntities")}</option>
          ${e.map(d=>`<option value="${n(d)}"${this.filters.entity===d?" selected":""}>${n(d)}</option>`).join("")}
        </select>
        <select class="fdi-filter" data-filter="status">
          <option value="ALL">${i("components.investments.allStatuses")}</option>
          <option value="operational"${f("operational")}>${i("components.investments.operational")}</option>
          <option value="under-construction"${f("under-construction")}>${i("components.investments.underConstruction")}</option>
          <option value="announced"${f("announced")}>${i("components.investments.announced")}</option>
          <option value="rumoured"${f("rumoured")}>${i("components.investments.rumoured")}</option>
          <option value="divested"${f("divested")}>${i("components.investments.divested")}</option>
        </select>
        <div class="fdi-sort-pills">
          <button class="${r("assetName")}" data-sort="assetName">${l("assetName",i("components.investments.asset"))}</button>
          <button class="${r("investmentUSD")}" data-sort="investmentUSD">${l("investmentUSD",i("components.investments.investment"))}</button>
          <button class="${r("targetCountry")}" data-sort="targetCountry">${l("targetCountry",i("components.investments.country"))}</button>
          <button class="${r("yearAnnounced")}" data-sort="yearAnnounced">${l("yearAnnounced",i("components.investments.year"))}</button>
        </div>
      </div>
      <div class="fdi-list">
        ${c||`<div class="fdi-empty">${i("components.investments.noMatch")}</div>`}
      </div>`;this.setSafeContent(k(v,"legacy Panel.setContent() migration")),this.countEl&&(this.countEl.textContent=String(t.length))}setupEventDelegation(){this.content.addEventListener("input",t=>{const e=t.target;e.classList.contains("fdi-search")&&(this.filters.search=e.value,this.render())}),this.content.addEventListener("change",t=>{const e=t.target.closest(".fdi-filter");if(e){const s=e.dataset.filter;this.filters[s]=e.value,this.render()}}),this.content.addEventListener("click",t=>{const e=t.target;if(e.closest('[data-action="toggle-filters"]')){this.filtersExpanded=!this.filtersExpanded,this.render();return}const r=e.closest(".fdi-sort");if(r){const o=r.dataset.sort;this.sortKey===o?this.sortAsc=!this.sortAsc:(this.sortKey=o,this.sortAsc=!0),this.render();return}const l=e.closest(".fdi-row");if(l){const o=X.find(c=>c.id===l.dataset.id);o&&this.onInvestmentClick&&this.onInvestmentClick(o)}})}}const xa=Object.freeze(Object.defineProperty({__proto__:null,InvestmentsPanel:xs},Symbol.toStringTag,{value:"Module"})),Kt=nt(()=>new Ge(rt(),{fetch:Le}));function bt(a,p){if(p.length===0)return"";const t=p.map(e=>`
    <div class="market-item">
      <div class="market-info">
        <span class="market-name">${e.flag} ${n(e.name)}</span>
        <span class="market-symbol">${n(e.country||e.symbol)}</span>
      </div>
      <div class="market-data">
        ${$e(e.sparkline,e.change)}
        <span class="market-price">${Ne(e.price)}</span>
        <span class="market-change ${Oe(e.change)}">${Ue(e.change)}</span>
      </div>
    </div>
  `).join("");return`<div class="gulf-section"><div class="gulf-section-title">${n(a)}</div>${t}</div>`}class Cs extends A{constructor(){super({id:"gulf-economies",title:i("panels.gulfEconomies"),infoTooltip:i("components.gulfEconomies.infoTooltip")})}async fetchData(){var p,t,e,s;try{const r=B("gulfQuotes");if((p=r==null?void 0:r.quotes)!=null&&p.length){if(!((t=this.element)!=null&&t.isConnected))return;this.renderGulf(r),Kt().listGulfQuotes({}).then(o=>{var c,u;!((c=this.element)!=null&&c.isConnected)||!((u=o.quotes)!=null&&u.length)||this.renderGulf(o)}).catch(()=>{});return}const l=await Kt().listGulfQuotes({});if(!((e=this.element)!=null&&e.isConnected))return;this.renderGulf(l)}catch(r){if(this.isAbortError(r)||!((s=this.element)!=null&&s.isConnected))return;this.showError(i("common.failedMarketData"),()=>void this.fetchData())}}renderGulf(p){var l;if(!((l=p.quotes)!=null&&l.length)){const o=p.rateLimited?i("common.rateLimitedMarket"):i("common.failedMarketData");this.showError(o,()=>void this.fetchData());return}const t=p.quotes.filter(o=>o.type==="index"),e=p.quotes.filter(o=>o.type==="currency"),s=p.quotes.filter(o=>o.type==="oil"),r=bt(i("panels.gulfIndices"),t)+bt(i("panels.gulfCurrencies"),e)+bt(i("panels.gulfOil"),s);this.setSafeContent(k(r,"legacy Panel.setContent() migration"))}}const Ca=Object.freeze(Object.defineProperty({__proto__:null,GulfEconomiesPanel:Cs},Symbol.toStringTag,{value:"Module"})),Wt=nt(()=>new Dt(rt(),{fetch:Et}));class Ss extends A{constructor(){super({id:"grocery-basket",title:i("panels.groceryBasket"),infoTooltip:i("components.groceryBasket.infoTooltip")})}async fetchData(){var p,t,e,s;try{const r=B("groceryBasket");if((p=r==null?void 0:r.countries)!=null&&p.length){if(!((t=this.element)!=null&&t.isConnected))return;this.renderBasket(r),Wt().listGroceryBasketPrices({}).then(o=>{var c,u;!((c=this.element)!=null&&c.isConnected)||!((u=o.countries)!=null&&u.length)||this.renderBasket(o)}).catch(()=>{});return}const l=await Wt().listGroceryBasketPrices({});if(!((e=this.element)!=null&&e.isConnected))return;this.renderBasket(l)}catch(r){if(this.isAbortError(r)||!((s=this.element)!=null&&s.isConnected))return;this.showError(i("common.failedMarketData"),()=>void this.fetchData())}}renderBasket(p){var h,f,v;if(!((h=p.countries)!=null&&h.length)){this.showError(i("common.failedMarketData"),()=>void this.fetchData());return}const t=p.countries,e=((v=(f=t[0])==null?void 0:f.items)==null?void 0:v.map(d=>d.itemId))??[],s=t.map(d=>`<th class="gb-country-header" title="${n(d.name)}">${n(d.flag)}<br><span class="gb-country-name">${n(d.name)}</span></th>`).join(""),r=e.map(d=>{var T,R;const m=(R=(T=t[0])==null?void 0:T.items)==null?void 0:R.find(y=>y.itemId===d),g=t.map(y=>{var x,S;return(S=(x=y.items)==null?void 0:x.find(D=>D.itemId===d))==null?void 0:S.usdPrice}).filter(y=>y!=null&&y>0),$=g.length>1?Math.min(...g):null,w=g.length>1?Math.max(...g):null,P=.001,C=t.map(y=>{var L;const x=(L=y.items)==null?void 0:L.find(M=>M.itemId===d);if(!(x!=null&&x.available)||!x.usdPrice||!x.localPrice)return'<td class="gb-cell gb-na">—</td>';const S=w!==null&&Math.abs(x.usdPrice-w)<P;return`<td class="gb-cell ${$!==null&&Math.abs(x.usdPrice-$)<P?"gb-cheapest":S?"gb-priciest":""}">$${x.usdPrice.toFixed(2)}<span class="gb-local">${x.localPrice.toFixed(2)} ${n(y.currency)}</span></td>`}).join("");return`<tr><td class="gb-item-name">${n((m==null?void 0:m.itemName)??d)}<span class="gb-unit">${n((m==null?void 0:m.unit)??"")}</span></td>${C}</tr>`}).join(""),l=`<tr class="gb-total-row"><td class="gb-item-name"><strong>Total</strong></td>${t.map(d=>{const m=d.code===p.cheapestCountry,g=d.code===p.mostExpensiveCountry,$=m?"gb-cheapest":g?"gb-priciest":"";let w="";if(d.wowPct!=null){const P=d.wowPct>=0?"▲":"▼";w=`<span class="gb-wow ${d.wowPct>=0?"bm-wow-up":"bm-wow-down"}">${P}${Math.abs(d.wowPct).toFixed(1)}%</span>`}return`<td class="gb-cell gb-total ${$}"><strong>$${d.totalUsd.toFixed(2)}</strong>${w}</td>`}).join("")}</tr>`;let o="";if(p.wowAvailable&&p.wowAvgPct!==void 0){const d=p.wowAvgPct,m=d>=0?"▲":"▼";o=`<div class="bm-wow-summary">Basket avg: <span class="${d>=0?"bm-wow-up":"bm-wow-down"}">${m}${Math.abs(d).toFixed(1)}% WoW</span></div>`}const c=p.fetchedAt?new Date(p.fetchedAt).toLocaleDateString():"",u=`
      <div class="gb-wrapper">
        ${o}
        <div class="gb-scroll">
          <table class="gb-table">
            <thead><tr><th class="gb-item-col">${i("panels.groceryItem")}</th>${s}</tr></thead>
            <tbody>${r}${l}</tbody>
          </table>
        </div>
        ${c?`<div class="gb-updated">${i("components.status.updatedAt",{time:c})}</div>`:""}
      </div>
    `;this.setSafeContent(k(u,"legacy Panel.setContent() migration"))}}const Sa=Object.freeze(Object.defineProperty({__proto__:null,GroceryBasketPanel:Ss},Symbol.toStringTag,{value:"Module"})),Yt=nt(()=>new Dt(rt(),{fetch:Et}));class Ts extends A{constructor(){super({id:"bigmac",title:i("panels.bigmac"),infoTooltip:i("components.bigmac.infoTooltip")})}async fetchData(){var p,t,e,s;try{const r=B("bigmac");if((p=r==null?void 0:r.countries)!=null&&p.length){if(!((t=this.element)!=null&&t.isConnected))return;this.renderIndex(r),Yt().listBigMacPrices({}).then(o=>{var c,u;!((c=this.element)!=null&&c.isConnected)||!((u=o.countries)!=null&&u.length)||this.renderIndex(o)}).catch(()=>{});return}const l=await Yt().listBigMacPrices({});if(!((e=this.element)!=null&&e.isConnected))return;this.renderIndex(l)}catch(r){if(this.isAbortError(r)||!((s=this.element)!=null&&s.isConnected))return;this.showError(i("common.failedMarketData"),()=>void this.fetchData())}}renderIndex(p){var f,v,d;if(!((f=p.countries)!=null&&f.length)){this.showError(i("common.failedMarketData"),()=>void this.fetchData());return}const t=[...p.countries].filter(m=>m.usdPrice!=null&&m.usdPrice>0).sort((m,g)=>g.usdPrice-m.usdPrice),e=(v=t[0])==null?void 0:v.code,s=(d=t[t.length-1])==null?void 0:d.code,r=p.wowAvailable&&p.wowAvgPct!==void 0,l=r?`<th class="gb-cell">${i("panels.bigmacWow")}</th>`:"",o=t.map(m=>{const g=m.code===s?"gb-cheapest":m.code===e?"gb-priciest":"";let $="";if(r){const w=m.wowPct??null;if(w==null)$='<td class="gb-cell gb-na">—</td>';else{const P=w>=0?"▲":"▼";$=`<td class="gb-cell ${w>=0?"bm-wow-up":"bm-wow-down"}">${P}${Math.abs(w).toFixed(1)}%</td>`}}return`<tr>
        <td class="gb-item-name">${n(m.flag)} ${n(m.name)}</td>
        <td class="gb-cell ${g}">$${m.usdPrice.toFixed(2)}</td>
        ${$}
      </tr>`}).join("");let c="";if(r){const m=p.wowAvgPct,g=m>=0?"▲":"▼";c=`<div class="bm-wow-summary">Global avg: <span class="${m>=0?"bm-wow-up":"bm-wow-down"}">${g}${Math.abs(m).toFixed(1)}% ${i("panels.bigmacWow")}</span></div>`}const u=p.fetchedAt?new Date(p.fetchedAt).toLocaleDateString():"",h=`
      <div class="gb-wrapper">
        ${c}
        <div class="gb-scroll">
          <table class="gb-table">
            <thead><tr>
              <th class="gb-item-col">${i("panels.bigmacCountry")}</th>
              <th class="gb-cell">USD</th>
              ${l}
            </tr></thead>
            <tbody>${o}</tbody>
          </table>
        </div>
        ${u?`<div class="gb-updated">${i("components.status.updatedAt",{time:u})}</div>`:""}
      </div>
    `;this.setSafeContent(k(h,"legacy Panel.setContent() migration"))}}const Ta=Object.freeze(Object.defineProperty({__proto__:null,BigMacPanel:Ts},Symbol.toStringTag,{value:"Module"})),Zt=nt(()=>new Dt(rt(),{fetch:Et})),St=480,Tt=140,Q=36,re=12,oe=8,ce=20,qt=St-Q-re,Qt=Tt-oe-ce,kt=[{key:"ffpi",color:"#f5a623",label:"Food"},{key:"cereals",color:"#7ed321",label:"Cereals"},{key:"meat",color:"#e86c6c",label:"Meat"},{key:"dairy",color:"#74c8e8",label:"Dairy"},{key:"oils",color:"#b57ce8",label:"Oils"},{key:"sugar",color:"#f0c36a",label:"Sugar"}];function le(a,p){return p<=1?Q+qt/2:Q+a/(p-1)*qt}function de(a,p,t){const e=t-p||1;return oe+Qt-(a-p)/e*Qt}function ks(a,p,t,e){return a.map((r,l)=>{const o=r[p];return!Number.isFinite(o)||o<=0?null:`${le(l,a.length).toFixed(1)},${de(o,t,e).toFixed(1)}`}).filter(Boolean).join(" ")}function Ps(a){if(!a.length)return"";const p=[];for(const o of a)for(const c of kt){const u=o[c.key];Number.isFinite(u)&&u>0&&p.push(u)}const t=Math.floor(Math.min(...p)*.96),e=Math.ceil(Math.max(...p)*1.02),s=[0,1,2,3].map(o=>{const c=t+(e-t)/3*o,u=de(c,t,e);return`
      <line x1="${Q}" y1="${u.toFixed(1)}" x2="${St-re}" y2="${u.toFixed(1)}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <text x="${(Q-3).toFixed(0)}" y="${u.toFixed(1)}" text-anchor="end" fill="rgba(255,255,255,0.35)" font-size="8" dominant-baseline="middle">${c.toFixed(0)}</text>`}).join(""),r=a.map((o,c)=>{if(c%3!==0&&c!==a.length-1)return"";const u=le(c,a.length),h=o.date;return`<text x="${u.toFixed(1)}" y="${Tt-ce+12}" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="7">${n(h)}</text>`}).join(""),l=kt.map(o=>{const c=ks(a,o.key,t,e);return c?`<polyline points="${c}" fill="none" stroke="${o.color}" stroke-width="${o.key==="ffpi"?2:1.2}" opacity="${o.key==="ffpi"?1:.7}"/>`:""}).join("");return`<svg viewBox="0 0 ${St} ${Tt}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">${s}${r}${l}</svg>`}function Ds(){return kt.map(a=>`<span class="fao-legend-item"><span class="fao-legend-dot" style="background:${a.color}"></span>${n(i(`components.faoFoodPriceIndex.${a.key}`))}</span>`).join("")}class Es extends A{constructor(){super({id:"fao-food-price-index",title:i("panels.faoFoodPriceIndex"),infoTooltip:i("components.faoFoodPriceIndex.infoTooltip")})}async fetchData(){var p,t,e,s;try{const r=B("faoFoodPriceIndex");if((p=r==null?void 0:r.points)!=null&&p.length){if(!((t=this.element)!=null&&t.isConnected))return;this.renderChart(r),Zt().getFaoFoodPriceIndex({}).then(o=>{var c,u;!((c=this.element)!=null&&c.isConnected)||!((u=o.points)!=null&&u.length)||this.renderChart(o)}).catch(()=>{});return}const l=await Zt().getFaoFoodPriceIndex({});if(!((e=this.element)!=null&&e.isConnected))return;this.renderChart(l)}catch(r){if(this.isAbortError(r)||!((s=this.element)!=null&&s.isConnected))return;this.showError(i("common.failedMarketData"),()=>void this.fetchData())}}renderChart(p){var f;if(!((f=p.points)!=null&&f.length)){this.showError(i("common.failedMarketData"),()=>void this.fetchData());return}const t=p.momPct>=0?"+":"",e=p.yoyPct>=0?"+":"",s=p.momPct>=0?"fao-up":"fao-down",r=p.yoyPct>=0?"fao-up":"fao-down",l=p.points[p.points.length-1],o=`
      <div class="fao-headline">
        <div class="fao-headline-primary">
          <span class="fao-index-value">${p.currentFfpi.toFixed(1)}</span>
          <span class="fao-index-label">${n(i("components.faoFoodPriceIndex.indexLabel"))}</span>
        </div>
        <div class="fao-headline-changes">
          <span class="fao-change ${s}">${t}${p.momPct.toFixed(1)}% ${n(i("components.faoFoodPriceIndex.mom"))}</span>
          <span class="fao-change ${r}">${e}${p.yoyPct.toFixed(1)}% ${n(i("components.faoFoodPriceIndex.yoy"))}</span>
        </div>
        <div class="fao-as-of">${n(i("components.faoFoodPriceIndex.asOf"))} ${n((l==null?void 0:l.date)??"")}</div>
      </div>`,c=Ps(p.points),u=`<div class="fao-legend">${Ds()}</div>`,h=`<div class="fao-base-note">${n(i("components.faoFoodPriceIndex.baseNote"))}</div>`;this.setSafeContent(k(`<div class="fao-food-price-index-panel">${o}${c}${u}${h}</div>`,"legacy Panel.setContent() migration"))}}const ka=Object.freeze(Object.defineProperty({__proto__:null,FaoFoodPriceIndexPanel:Es},Symbol.toStringTag,{value:"Module"})),Rs={AFG:"🇦🇫",ALB:"🇦🇱",DZA:"🇩🇿",AGO:"🇦🇴",ARG:"🇦🇷",ARM:"🇦🇲",AUS:"🇦🇺",AUT:"🇦🇹",AZE:"🇦🇿",BHS:"🇧🇸",BHR:"🇧🇭",BGD:"🇧🇩",BLR:"🇧🇾",BEL:"🇧🇪",BLZ:"🇧🇿",BEN:"🇧🇯",BTN:"🇧🇹",BOL:"🇧🇴",BIH:"🇧🇦",BWA:"🇧🇼",BRA:"🇧🇷",BRN:"🇧🇳",BGR:"🇧🇬",BFA:"🇧🇫",BDI:"🇧🇮",CPV:"🇨🇻",KHM:"🇰🇭",CMR:"🇨🇲",CAN:"🇨🇦",CAF:"🇨🇫",TCD:"🇹🇩",CHL:"🇨🇱",CHN:"🇨🇳",COL:"🇨🇴",COM:"🇰🇲",COD:"🇨🇩",COG:"🇨🇬",CRI:"🇨🇷",CIV:"🇨🇮",HRV:"🇭🇷",CYP:"🇨🇾",CZE:"🇨🇿",DNK:"🇩🇰",DJI:"🇩🇯",DOM:"🇩🇴",ECU:"🇪🇨",EGY:"🇪🇬",SLV:"🇸🇻",GNQ:"🇬🇶",ERI:"🇪🇷",EST:"🇪🇪",SWZ:"🇸🇿",ETH:"🇪🇹",FJI:"🇫🇯",FIN:"🇫🇮",FRA:"🇫🇷",GAB:"🇬🇦",GMB:"🇬🇲",GEO:"🇬🇪",DEU:"🇩🇪",GHA:"🇬🇭",GRC:"🇬🇷",GTM:"🇬🇹",GIN:"🇬🇳",GNB:"🇬🇼",GUY:"🇬🇾",HTI:"🇭🇹",HND:"🇭🇳",HKG:"🇭🇰",HUN:"🇭🇺",ISL:"🇮🇸",IND:"🇮🇳",IDN:"🇮🇩",IRN:"🇮🇷",IRQ:"🇮🇶",IRL:"🇮🇪",ISR:"🇮🇱",ITA:"🇮🇹",JAM:"🇯🇲",JPN:"🇯🇵",JOR:"🇯🇴",KAZ:"🇰🇿",KEN:"🇰🇪",KOR:"🇰🇷",KWT:"🇰🇼",KGZ:"🇰🇬",LAO:"🇱🇦",LVA:"🇱🇻",LBN:"🇱🇧",LSO:"🇱🇸",LBR:"🇱🇷",LBY:"🇱🇾",LTU:"🇱🇹",LUX:"🇱🇺",MAC:"🇲🇴",MDG:"🇲🇬",MWI:"🇲🇼",MYS:"🇲🇾",MDV:"🇲🇻",MLI:"🇲🇱",MLT:"🇲🇹",MRT:"🇲🇷",MUS:"🇲🇺",MEX:"🇲🇽",MDA:"🇲🇩",MNG:"🇲🇳",MNE:"🇲🇪",MAR:"🇲🇦",MOZ:"🇲🇿",MMR:"🇲🇲",NAM:"🇳🇦",NPL:"🇳🇵",NLD:"🇳🇱",NZL:"🇳🇿",NIC:"🇳🇮",NER:"🇳🇪",NGA:"🇳🇬",MKD:"🇲🇰",NOR:"🇳🇴",OMN:"🇴🇲",PAK:"🇵🇰",PAN:"🇵🇦",PNG:"🇵🇬",PRY:"🇵🇾",PER:"🇵🇪",PHL:"🇵🇭",POL:"🇵🇱",PRT:"🇵🇹",QAT:"🇶🇦",ROU:"🇷🇴",RUS:"🇷🇺",RWA:"🇷🇼",SAU:"🇸🇦",SEN:"🇸🇳",SRB:"🇷🇸",SLE:"🇸🇱",SGP:"🇸🇬",SVK:"🇸🇰",SVN:"🇸🇮",SOM:"🇸🇴",ZAF:"🇿🇦",SSD:"🇸🇸",ESP:"🇪🇸",LKA:"🇱🇰",SDN:"🇸🇩",SUR:"🇸🇷",SWE:"🇸🇪",CHE:"🇨🇭",TWN:"🇹🇼",TJK:"🇹🇯",TZA:"🇹🇿",THA:"🇹🇭",TLS:"🇹🇱",TGO:"🇹🇬",TTO:"🇹🇹",TUN:"🇹🇳",TUR:"🇹🇷",TKM:"🇹🇲",UGA:"🇺🇬",UKR:"🇺🇦",ARE:"🇦🇪",GBR:"🇬🇧",USA:"🇺🇸",URY:"🇺🇾",UZB:"🇺🇿",VEN:"🇻🇪",VNM:"🇻🇳",YEM:"🇾🇪",ZMB:"🇿🇲",ZWE:"🇿🇼"},As={AFG:"Afghanistan",ALB:"Albania",DZA:"Algeria",AGO:"Angola",ARG:"Argentina",ARM:"Armenia",AUS:"Australia",AUT:"Austria",AZE:"Azerbaijan",BHS:"Bahamas",BHR:"Bahrain",BGD:"Bangladesh",BLR:"Belarus",BEL:"Belgium",BLZ:"Belize",BEN:"Benin",BTN:"Bhutan",BOL:"Bolivia",BIH:"Bosnia & Herzegovina",BWA:"Botswana",BRA:"Brazil",BRN:"Brunei",BGR:"Bulgaria",BFA:"Burkina Faso",BDI:"Burundi",CPV:"Cabo Verde",KHM:"Cambodia",CMR:"Cameroon",CAN:"Canada",CAF:"Central African Rep.",TCD:"Chad",CHL:"Chile",CHN:"China",COL:"Colombia",COM:"Comoros",COD:"Dem. Rep. Congo",COG:"Congo",CRI:"Costa Rica",CIV:"Cote d'Ivoire",HRV:"Croatia",CYP:"Cyprus",CZE:"Czech Republic",DNK:"Denmark",DJI:"Djibouti",DOM:"Dominican Rep.",ECU:"Ecuador",EGY:"Egypt",SLV:"El Salvador",GNQ:"Equatorial Guinea",ERI:"Eritrea",EST:"Estonia",SWZ:"Eswatini",ETH:"Ethiopia",FJI:"Fiji",FIN:"Finland",FRA:"France",GAB:"Gabon",GMB:"Gambia",GEO:"Georgia",DEU:"Germany",GHA:"Ghana",GRC:"Greece",GTM:"Guatemala",GIN:"Guinea",GNB:"Guinea-Bissau",GUY:"Guyana",HTI:"Haiti",HND:"Honduras",HKG:"Hong Kong SAR",HUN:"Hungary",ISL:"Iceland",IND:"India",IDN:"Indonesia",IRN:"Iran",IRQ:"Iraq",IRL:"Ireland",ISR:"Israel",ITA:"Italy",JAM:"Jamaica",JPN:"Japan",JOR:"Jordan",KAZ:"Kazakhstan",KEN:"Kenya",KOR:"Korea (South)",KWT:"Kuwait",KGZ:"Kyrgyzstan",LAO:"Laos",LVA:"Latvia",LBN:"Lebanon",LSO:"Lesotho",LBR:"Liberia",LBY:"Libya",LTU:"Lithuania",LUX:"Luxembourg",MAC:"Macao SAR",MDG:"Madagascar",MWI:"Malawi",MYS:"Malaysia",MDV:"Maldives",MLI:"Mali",MLT:"Malta",MRT:"Mauritania",MUS:"Mauritius",MEX:"Mexico",MDA:"Moldova",MNG:"Mongolia",MNE:"Montenegro",MAR:"Morocco",MOZ:"Mozambique",MMR:"Myanmar",NAM:"Namibia",NPL:"Nepal",NLD:"Netherlands",NZL:"New Zealand",NIC:"Nicaragua",NER:"Niger",NGA:"Nigeria",MKD:"North Macedonia",NOR:"Norway",OMN:"Oman",PAK:"Pakistan",PAN:"Panama",PNG:"Papua New Guinea",PRY:"Paraguay",PER:"Peru",PHL:"Philippines",POL:"Poland",PRT:"Portugal",QAT:"Qatar",ROU:"Romania",RUS:"Russia",RWA:"Rwanda",SAU:"Saudi Arabia",SEN:"Senegal",SRB:"Serbia",SLE:"Sierra Leone",SGP:"Singapore",SVK:"Slovakia",SVN:"Slovenia",SOM:"Somalia",ZAF:"South Africa",SSD:"South Sudan",ESP:"Spain",LKA:"Sri Lanka",SDN:"Sudan",SUR:"Suriname",SWE:"Sweden",CHE:"Switzerland",TWN:"Taiwan",TJK:"Tajikistan",TZA:"Tanzania",THA:"Thailand",TLS:"Timor-Leste",TGO:"Togo",TTO:"Trinidad & Tobago",TUN:"Tunisia",TUR:"Turkey",TKM:"Turkmenistan",UGA:"Uganda",UKR:"Ukraine",ARE:"United Arab Emirates",GBR:"United Kingdom",USA:"United States",URY:"Uruguay",UZB:"Uzbekistan",VEN:"Venezuela",VNM:"Vietnam",YEM:"Yemen",ZMB:"Zambia",ZWE:"Zimbabwe"};function Ls(a){return Rs[a]??"🌐"}function Jt(a){return As[a]??a}function tt(a){return!Number.isFinite(a)||a<=0?"$0":a>=1e12?`$${(a/1e12).toFixed(1)}T`:a>=1e9?`$${(a/1e9).toFixed(1)}B`:a>=1e6?`$${(a/1e6).toFixed(1)}M`:`$${Math.round(a).toLocaleString()}`}function Y(a){if(!a.perSecondRate||!a.baselineTs)return a.debtUsd??0;const p=(Date.now()-Number(a.baselineTs))/1e3;return(a.debtUsd??0)+a.perSecondRate*p}function Ms(a,p){const t=[...a];return p==="total"?t.sort((e,s)=>Y(s)-Y(e)):p==="gdp-ratio"?t.sort((e,s)=>(s.debtToGdp??0)-(e.debtToGdp??0)):p==="growth"&&t.sort((e,s)=>(s.annualGrowth??0)-(e.annualGrowth??0)),t}const W=20,it=class it extends A{constructor(){super({id:"national-debt",title:"National Debt Clock",showCount:!0,infoTooltip:"Live national debt estimates for 150+ countries. Data anchored at 2024-01-01 and accruing using IMF deficit projections."});b(this,"entries",[]);b(this,"filteredEntries",[]);b(this,"sortMode","total");b(this,"searchQuery","");b(this,"loading",!1);b(this,"lastFetch",0);b(this,"visibleCount",W);b(this,"tickerInterval",null);b(this,"tickerElements",new Map);b(this,"lastTickerValues",new Map);b(this,"connectRefreshQueued",!1);b(this,"connectionObserver",null);b(this,"connectRetryFrames",0);b(this,"REFRESH_INTERVAL",360*60*1e3);this.content.addEventListener("click",t=>{const e=t.target,s=e.closest("[data-sort]");if(s!=null&&s.dataset.sort){this.sortMode=s.dataset.sort,this.visibleCount=W,this.applyFilters(),this.render(),this.restartTicker();return}e.closest(".debt-load-more")&&(this.visibleCount+=W,this.render(),this.restartTicker())}),this.content.addEventListener("input",t=>{const e=t.target;e.classList.contains("debt-search")&&(this.searchQuery=e.value,this.visibleCount=W,this.applyFilters(),this.render(),this.restartTicker())})}async refresh(){var t,e,s;if(!this.loading&&!(Date.now()-this.lastFetch<this.REFRESH_INTERVAL&&this.entries.length>0)){if(!((t=this.element)!=null&&t.isConnected)){this.queueRefreshWhenConnected();return}this.loading=!0,this.showLoadingState();try{const r=await ve();if(!((e=this.element)!=null&&e.isConnected)){this.queueRefreshWhenConnected();return}this.entries=r.entries??[],this.lastFetch=Date.now(),this.applyFilters(),this.setCount(this.filteredEntries.length),this.render(),this.startTicker()}catch(r){if(!((s=this.element)!=null&&s.isConnected))return;console.error("[NationalDebtPanel] Error fetching data:",r),this.showError("Failed to load national debt data")}finally{this.loading=!1}}}queueRefreshWhenConnected(){if(this.connectRefreshQueued)return;this.connectRefreshQueued=!0;const t=()=>{var s,r;return(s=this.element)!=null&&s.isConnected?(this.connectRefreshQueued=!1,this.connectRetryFrames=0,(r=this.connectionObserver)==null||r.disconnect(),this.connectionObserver=null,this.refresh(),!0):!1};if(t())return;if(typeof MutationObserver<"u"){const s=document.body??document.documentElement;if(s){const r=new MutationObserver(()=>{t()});r.observe(s,{childList:!0,subtree:!0}),this.connectionObserver=r;return}}(typeof requestAnimationFrame=="function"?requestAnimationFrame:s=>(globalThis.setTimeout(()=>s(Date.now()),0),0))(()=>{var s;if(this.connectRefreshQueued=!1,(s=this.element)!=null&&s.isConnected){this.connectRetryFrames=0,this.refresh();return}if(this.connectRetryFrames>=it.MAX_CONNECT_RETRY_FRAMES){this.connectRetryFrames=0;return}this.connectRetryFrames+=1,this.queueRefreshWhenConnected()})}showLoadingState(){this.setSafeContent(k(`
      <div style="display:flex;align-items:center;justify-content:center;height:80px;color:var(--text-dim);font-size:13px;">
        Loading debt data from IMF...
      </div>
    `,"legacy Panel.setContent() migration"))}applyFilters(){const t=this.searchQuery.toLowerCase().trim(),e=t?this.entries.filter(s=>s.iso3.toLowerCase().includes(t)||Jt(s.iso3).toLowerCase().includes(t)):this.entries;this.filteredEntries=Ms(e,this.sortMode)}get deficitCount(){return this.entries.filter(t=>t.perSecondRate>0).length}get surplusCount(){return this.entries.filter(t=>t.perSecondRate===0).length}getGlobalDebt(){return this.entries.reduce((t,e)=>t+Y(e),0)}getSourceLabel(){var e;let t="";for(const s of this.entries){const r=(e=s.source)==null?void 0:e.trim();r&&r.length>t.length&&(t=r)}return t||"IMF WEO"}render(){if(this.entries.length===0){this.showError("No data available");return}const t=`
      <div class="debt-panel-container">
        <div class="debt-summary">
          <div class="debt-summary-card debt-summary-card-deficit debt-summary-card-world">
            <span class="debt-summary-label">World Debt</span>
            <span class="debt-summary-value debt-global-ticker">${n(tt(this.getGlobalDebt()))}</span>
          </div>
          <div class="debt-summary-card debt-summary-card-warning">
            <span class="debt-summary-label">In Deficit</span>
            <span class="debt-summary-value">${this.deficitCount}</span>
          </div>
          <div class="debt-summary-card debt-summary-card-surplus">
            <span class="debt-summary-label">Running Surplus</span>
            <span class="debt-summary-value">${this.surplusCount}</span>
          </div>
        </div>
        <div class="debt-controls">
          <div class="debt-sort-tabs">
            <button class="debt-tab${this.sortMode==="total"?" active":""}" data-sort="total">Total Debt</button>
            <button class="debt-tab${this.sortMode==="gdp-ratio"?" active":""}" data-sort="gdp-ratio">Debt/GDP</button>
            <button class="debt-tab${this.sortMode==="growth"?" active":""}" data-sort="growth">1Y Growth</button>
          </div>
          <input class="debt-search" type="text" placeholder="Search country..." value="${n(this.searchQuery)}">
        </div>
        <div class="debt-list">
          ${this.filteredEntries.slice(0,this.visibleCount).map((e,s)=>this.renderRow(e,s+1)).join("")}
        </div>
        ${this.visibleCount<this.filteredEntries.length?`
        <button class="debt-load-more">
          Load ${Math.min(W,this.filteredEntries.length-this.visibleCount)} more
          <span class="debt-load-more-count">(${this.filteredEntries.length-this.visibleCount} remaining)</span>
        </button>`:""}
        <div class="debt-footer">
          <span class="debt-source">Source: ${n(this.getSourceLabel())}</span>
          <span class="debt-updated">Updated: ${new Date(this.lastFetch).toLocaleDateString()}</span>
        </div>
      </div>
    `;this.setSafeContent(k(t,"legacy Panel.setContent() migration"))}renderRow(t,e){const s=Y(t),r=n(Jt(t.iso3)),l=Ls(t.iso3),o=tt(s),c=Number.isFinite(t.debtToGdp)&&t.debtToGdp>0?`${t.debtToGdp.toFixed(1)}%`:"—",u=Number.isFinite(t.annualGrowth)&&t.annualGrowth!==0?`${t.annualGrowth>0?"+":""}${t.annualGrowth.toFixed(1)}%`:"—",h=t.annualGrowth>5?"debt-growth-high":t.annualGrowth>0?"debt-growth-mid":"";return`
      <div class="debt-row" data-iso3="${n(t.iso3)}">
        <div class="debt-rank">${e}</div>
        <div class="debt-flag">${l}</div>
        <div class="debt-info">
          <div class="debt-name">${r}</div>
          <div class="debt-meta">
            <span class="debt-ratio">${c} of GDP</span>
            <span class="debt-growth ${h}">${u} YoY</span>
          </div>
        </div>
        <div class="debt-ticker" data-iso3="${n(t.iso3)}">${n(o)}</div>
      </div>
    `}startTicker(){if(this.stopTicker(),this.filteredEntries.length===0)return;this.tickerElements.clear(),this.lastTickerValues.clear();const t=this.content.querySelector(".debt-global-ticker");t&&this.tickerElements.set("__global__",t);const e=this.content.querySelector(".debt-list");if(e)for(const s of this.filteredEntries.slice(0,this.visibleCount)){const r=e.querySelector(`.debt-ticker[data-iso3="${s.iso3}"]`);r&&this.tickerElements.set(s.iso3,r)}this.tickerInterval=setInterval(()=>{const s=this.tickerElements.get("__global__");if(s){const r=tt(this.getGlobalDebt());this.lastTickerValues.get("__global__")!==r&&(s.textContent=r,this.lastTickerValues.set("__global__",r))}for(const r of this.filteredEntries.slice(0,this.visibleCount)){const l=this.tickerElements.get(r.iso3);if(!l)continue;const o=tt(Y(r));this.lastTickerValues.get(r.iso3)!==o&&(l.textContent=o,this.lastTickerValues.set(r.iso3,o))}},1e3)}stopTicker(){this.tickerInterval!==null&&(clearInterval(this.tickerInterval),this.tickerInterval=null),this.tickerElements.clear(),this.lastTickerValues.clear()}restartTicker(){this.stopTicker(),this.startTicker()}destroy(){var t;(t=this.connectionObserver)==null||t.disconnect(),this.connectionObserver=null,this.connectRefreshQueued=!1,this.connectRetryFrames=0,this.stopTicker(),super.destroy()}};b(it,"MAX_CONNECT_RETRY_FRAMES",8);let Pt=it;const Pa=Object.freeze(Object.defineProperty({__proto__:null,NationalDebtPanel:Pt},Symbol.toStringTag,{value:"Module"}));let yt=null;async function _s(){if(!yt){const{EconomicServiceClient:a}=await H(async()=>{const{EconomicServiceClient:t}=await import("./rpc-client-economic-v1-CiTVyyWU.js");return{EconomicServiceClient:t}},[]),{getRpcBaseUrl:p}=await H(async()=>{const{getRpcBaseUrl:t}=await import("./embed-url-d-SgCBEn.js").then(e=>e.a3);return{getRpcBaseUrl:t}},__vite__mapDeps([0,1,2,3,4,5,6,7]));yt=new a(p(),{fetch:(...t)=>globalThis.fetch(...t)})}return yt}function O(a){return`${a.toFixed(1)}%`}function Is(a){return`$${a.toLocaleString(void 0,{maximumFractionDigits:0})}B`}function Fs(a){if(a.length<13)return{value:null,prior:null,date:""};const p=a[a.length-1],t=a[a.length-13],e=a[a.length-2],s=a[a.length-14]??a[a.length-13];if(!p||!t)return{value:null,prior:null,date:""};const r=t.value>0?(p.value-t.value)/t.value*100:null,l=s&&e&&s.value>0?(e.value-s.value)/s.value*100:null;return{value:r,prior:l,date:p.date}}function et(a){const p=a[a.length-1];if(!a.length||!p)return{value:null,prior:null,date:""};const t=a[a.length-2];return{value:p.value,prior:(t==null?void 0:t.value)??null,date:p.date}}function Bs(a,p,t){return t||a===0?"var(--text-dim)":(p?a<0:a>0)?"#27ae60":"#e74c3c"}function Xt(a){const p=a.value!==null?n(a.format(a.value)):"N/A",t=a.value!==null&&a.prior!==null?a.value-a.prior:null,e=a.deltaFormat??a.format,s=t!==null?`${t>=0?"+":""}${e(t)} vs prior`:"",r=t!==null?Bs(t,a.lowerIsBetter,a.neutral??!1):"var(--text-dim)";return`<div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:6px;padding:14px 12px;display:flex;flex-direction:column;gap:4px">
    <div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.07em">${n(a.label)}</div>
    <div style="font-size:28px;font-weight:700;color:var(--text);line-height:1.1;font-variant-numeric:tabular-nums">${p}</div>
    ${s?`<div style="font-size:11px;color:${r}">${n(s)}</div>`:""}
    <div style="font-size:10px;color:var(--text-dim)">${n(a.date)}</div>
  </div>`}const Ns=["DE","FR","IT","ES"];function Os(a){if(!a)return"";const p=/^(\d{4})-(\d{2})$/.exec(a);if(p){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][parseInt(p[2]??"0",10)-1];return e?`${e} ${p[1]??a}`:a}return a}function $t(a,p){var o;const t=[],e=[];let s="";for(const c of Ns){const u=(o=a.countries[c])==null?void 0:o[p];u&&typeof u.value=="number"&&Number.isFinite(u.value)&&(t.push(u.value),(!s||u.date>s)&&(s=u.date)),u!=null&&u.hasPrior&&Number.isFinite(u.priorValue)&&e.push(u.priorValue)}if(t.length===0)return{value:null,prior:null,date:""};const r=Math.round(t.reduce((c,u)=>c+u,0)/t.length*100)/100,l=e.length===t.length?Math.round(e.reduce((c,u)=>c+u,0)/e.length*100)/100:null;return{value:r,prior:l,date:Os(s)}}class Us extends A{constructor(){super({id:"macro-tiles",title:"Macro Indicators",showCount:!1,infoTooltip:i("components.macroTiles.infoTooltip")});b(this,"_hasData",!1);b(this,"_tab","us");b(this,"_usTiles",[]);b(this,"_eurostat",null);b(this,"_estrObs",[]);b(this,"_china",null);this.content.addEventListener("click",t=>{const e=t.target.closest("[data-tab]");((e==null?void 0:e.dataset.tab)==="us"||(e==null?void 0:e.dataset.tab)==="eu"||(e==null?void 0:e.dataset.tab)==="cn")&&(this._tab=e.dataset.tab,this._render())}),this.content.addEventListener("keydown",t=>{if(!(t instanceof KeyboardEvent))return;const e=t.target.closest('[role="tab"][data-tab]');if(!e||!["ArrowRight","ArrowLeft","Home","End"].includes(t.key))return;const s=this._availableTabs(),r=s.indexOf(e.dataset.tab);if(r<0)return;t.preventDefault();const l=t.key==="Home"?s[0]:t.key==="End"?s[s.length-1]:s[(r+(t.key==="ArrowRight"?1:-1)+s.length)%s.length];l&&(this._tab=l,this._render(()=>{var o;(o=this.content.querySelector(`[data-tab="${l}"]`))==null||o.focus()}))})}async fetchData(){var t,e,s,r,l;this.showLoading();try{const o=await _s(),c=B("chinaMacro"),u=B("chinaReleaseCalendar"),h=He(c,u),[f,v,d]=await Promise.allSettled([o.getFredSeriesBatch({seriesIds:["CPIAUCSL","UNRATE","GDP","FEDFUNDS","ESTR"],limit:14}),fe(),h??o.getChinaMacroSnapshot({})]),m=f.status==="fulfilled"?f.value.results??{}:{};this._estrObs=((t=m.ESTR)==null?void 0:t.observations)??[],v.status==="fulfilled"&&!v.value.unavailable&&(this._eurostat=v.value),this._china=d.status==="fulfilled"?d.value:null;const g=Fs(((e=m.CPIAUCSL)==null?void 0:e.observations)??[]),$=et(((s=m.UNRATE)==null?void 0:s.observations)??[]),w=et(((r=m.GDP)==null?void 0:r.observations)??[]),P=et(((l=m.FEDFUNDS)==null?void 0:l.observations)??[]);this._usTiles=[{id:"cpi",label:"CPI (YoY)",...g,lowerIsBetter:!0,format:O,deltaFormat:y=>y.toFixed(2)},{id:"unrate",label:"Unemployment",...$,lowerIsBetter:!0,format:O},{id:"gdp",label:"GDP (Billions)",...w,lowerIsBetter:!1,format:Is,deltaFormat:y=>`${y.toLocaleString(void 0,{maximumFractionDigits:0})}B`},{id:"fed",label:"Fed Funds Rate",...P,lowerIsBetter:!1,neutral:!0,format:O}];const C=this._usTiles.some(y=>y.value!==null),T=this._eurostat!==null,R=ut(this._china);return!C&&!T&&!R?(this._hasData||this.showError("Macro data unavailable",()=>void this.fetchData()),!1):(!C&&this._tab==="us"&&(this._tab=R?"cn":"eu"),!R&&this._tab==="cn"&&(this._tab=C?"us":"eu"),this._hasData=!0,this._render(),!0)}catch(o){return this._hasData||this.showError(o instanceof Error?o.message:"Failed to load",()=>void this.fetchData()),!1}}_render(t){const e=this._availableTabs(),s={us:"US",eu:"Euro Area",cn:"China"},r=`<div role="tablist" aria-label="Macro economy" style="display:flex;gap:4px;margin-bottom:10px;overflow-x:auto">
      ${e.map(c=>`<button id="macro-tiles-tab-${c}" role="tab" aria-selected="${this._tab===c}" aria-controls="macro-tiles-tabpanel" tabindex="${this._tab===c?"0":"-1"}" class="panel-tab${this._tab===c?" active":""}" data-tab="${c}" style="font-size:11px;padding:6px 10px;min-height:44px">${s[c]}</button>`).join("")}
    </div>`;let l;this._tab==="us"?l=`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px">${this._usTiles.map(Xt).join("")}</div>`:this._tab==="eu"?l=this._buildEuBody():l=this._buildChinaBody();const o=`macro-tiles-tab-${this._tab}`;this.setSafeContent(k(`${r}<div id="macro-tiles-tabpanel" role="tabpanel" aria-labelledby="${o}">${l}</div>`,"legacy Panel.setContent() migration"),t)}_availableTabs(){return ut(this._china)?["us","eu","cn"]:["us","eu"]}_buildChinaBody(){if(!ut(this._china)||!this._china)return'<div style="padding:8px;color:var(--text-dim);font-size:12px">China macro data unavailable</div>';const t=je(this._china)?"":'<div style="margin-bottom:8px;padding:7px 9px;border:1px solid #f39c12;border-radius:5px;color:#f39c12;font-size:10px">Official China macro pulse is degraded; stale or delayed observations remain visible below.</div>',e=this._china.indicators.map(ze).join(""),s=new Date().toISOString().slice(0,10),r=this._china.releaseEvents.filter(o=>o.countryCode==="CN"&&o.releaseDate>=s).sort((o,c)=>o.releaseDate.localeCompare(c.releaseDate)).slice(0,3),l=r.length>0?`<div style="margin-top:10px;border-top:1px solid var(--border);padding-top:8px">
          <div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.07em;margin-bottom:5px">China release calendar</div>
          ${r.map(o=>`<div style="display:flex;justify-content:space-between;gap:8px;font-size:10px;color:var(--text-dim);margin-top:3px"><span>${n(o.event)}</span><span>${n(o.releaseDate)} · ${n(o.status)}</span></div>`).join("")}
        </div>`:'<div style="margin-top:8px;font-size:10px;color:var(--text-dim)">China release calendar unavailable</div>';return`${t}<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px">${e}</div>${l}`}_buildEuBody(){if(!this._eurostat)return'<div style="padding:8px;color:var(--text-dim);font-size:12px">Euro Area data unavailable</div>';const t=$t(this._eurostat,"cpi"),e=$t(this._eurostat,"unemployment"),s=$t(this._eurostat,"gdpGrowth"),r=et(this._estrObs),l=[{id:"eu-cpi",label:"HICP (YoY)",value:t.value,prior:t.prior,date:t.date,lowerIsBetter:!0,format:O},{id:"eu-un",label:"Unemployment",value:e.value,prior:e.prior,date:e.date,lowerIsBetter:!0,format:O},{id:"eu-gdp",label:"GDP Growth (QoQ)",value:s.value,prior:s.prior,date:s.date,lowerIsBetter:!1,format:O},{id:"eu-estr",label:"€STR (ECB Rate)",...r,lowerIsBetter:!1,neutral:!0,format:O}];return l.some(o=>o.value!==null)?`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px">${l.map(Xt).join("")}</div>
      <div style="margin-top:8px;font-size:9px;color:var(--text-dim)">Eurostat · ECB · avg DE, FR, IT, ES</div>`:'<div style="padding:8px;color:var(--text-dim);font-size:12px">Euro Area data unavailable</div>'}}const Da=Object.freeze(Object.defineProperty({__proto__:null,MacroTilesPanel:Us},Symbol.toStringTag,{value:"Module"}));let wt=null;async function Gs(){if(!wt){const{MarketServiceClient:a}=await H(async()=>{const{MarketServiceClient:t}=await import("./rpc-client-market-v1-_8hoR3DZ.js");return{MarketServiceClient:t}},[]),{getRpcBaseUrl:p}=await H(async()=>{const{getRpcBaseUrl:t}=await import("./embed-url-d-SgCBEn.js").then(e=>e.a3);return{getRpcBaseUrl:t}},__vite__mapDeps([0,1,2,3,4,5,6,7]));wt=new a(p(),{fetch:(...t)=>globalThis.fetch(...t)})}return wt}let xt=null;async function Hs(){if(!xt){const{EconomicServiceClient:a}=await H(async()=>{const{EconomicServiceClient:t}=await import("./rpc-client-economic-v1-CiTVyyWU.js");return{EconomicServiceClient:t}},[]),{getRpcBaseUrl:p}=await H(async()=>{const{getRpcBaseUrl:t}=await import("./embed-url-d-SgCBEn.js").then(e=>e.a3);return{getRpcBaseUrl:t}},__vite__mapDeps([0,1,2,3,4,5,6,7]));xt=new a(p(),{fetch:(...t)=>globalThis.fetch(...t)})}return xt}function js(a){return a==="Low Stress"?"#27ae60":a==="Moderate Stress"?"#f39c12":a==="Elevated Stress"?"#e67e22":"#c0392b"}function zs(a){return a==="Low Stress"?i("components.fsi.interpretation.low"):a==="Moderate Stress"?i("components.fsi.interpretation.moderate"):a==="Elevated Stress"?i("components.fsi.interpretation.elevated"):i("components.fsi.interpretation.severe")}function Vs(a){return a==="Low Stress"?i("components.fsi.labels.lowStress"):a==="Moderate Stress"?i("components.fsi.labels.moderateStress"):a==="Elevated Stress"?i("components.fsi.labels.elevatedStress"):a==="Severe Stress"?i("components.fsi.labels.severeStress"):a}function Ks(a){return a==="Low"?i("components.fsi.cissLabels.low"):a==="Moderate"?i("components.fsi.cissLabels.moderate"):a==="Elevated"?i("components.fsi.cissLabels.elevated"):a==="High"?i("components.fsi.cissLabels.high"):a}function te(a){return a==="Low"?"#27ae60":a==="Moderate"?"#f39c12":a==="Elevated"?"#e67e22":"#c0392b"}function Ws(a){const p=Date.parse(a);return Number.isFinite(p)?Date.now()-p>Ve:!1}function st(a,p){return`<div style="background:rgba(255,255,255,0.04);border-radius:6px;padding:8px 10px;border:1px solid rgba(255,255,255,0.07)">
    <div style="font-size:9px;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px">${n(a)}</div>
    <div style="font-size:16px;font-weight:600;color:var(--text)">${n(p)}</div>
  </div>`}class Ys extends A{constructor(){super({id:"fsi",title:i("components.fsi.title"),showCount:!1,infoTooltip:i("components.fsi.infoTooltip")});b(this,"_hasData",!1)}async fetchData(){var t,e,s,r;this.showLoading();try{const l=B("fearGreedIndex");let o=0,c="",u=0,h=0,f=0,v=0;if(l&&!l.unavailable){const m=l.headerMetrics??{};o=Number(((t=m==null?void 0:m.fsi)==null?void 0:t.value)??0),c=String(((e=m==null?void 0:m.fsi)==null?void 0:e.label)??""),f=Number(((s=m==null?void 0:m.vix)==null?void 0:s.value)??0),v=Number(((r=m==null?void 0:m.hySpread)==null?void 0:r.value)??0)}if(o<=0){const g=await(await Gs()).getFearGreedIndex({});!g.unavailable&&g.fsiValue>0&&(o=g.fsiValue,c=g.fsiLabel,u=g.hygPrice,h=g.tltPrice,f=g.vix,v=g.hySpread)}if(o<=0)return this._hasData||this.showError(i("components.fsi.errors.unavailable"),()=>void this.fetchData()),!1;let d=null;try{const m=B("euFsi");if(m&&!m.unavailable&&Number.isFinite(m.latestValue))d=m;else{const $=await(await Hs()).getEuFsi({});!$.unavailable&&Number.isFinite($.latestValue)&&(d=$)}}catch{}return this._hasData=!0,this.render({fsiValue:o,fsiLabel:c,hygPrice:u,tltPrice:h,vix:f,hySpread:v},d),!0}catch(l){return this._hasData||this.showError(l instanceof Error?l.message:i("components.fsi.errors.failedToLoad"),()=>void this.fetchData()),!1}}render(t,e){const{fsiValue:s,fsiLabel:r,hygPrice:l,tltPrice:o,vix:c,hySpread:u}=t,h=js(r),f=Math.min(Math.max(s/2.5*100,0),100),v=zs(r),d=e?e.stale||Ws(e.latestDate):!1,m=e?`<div style="margin-top:12px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.07)">
          <div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:8px">${n(i("components.fsi.cissTitle"))}</div>
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
            <div style="font-size:28px;font-weight:700;color:${te(e.label)};line-height:1">${e.latestValue.toFixed(4)}</div>
            <div>
              <div style="font-size:12px;font-weight:600;color:${te(e.label)}">${n(Ks(e.label))}</div>
              <div style="font-size:10px;color:${d?"#e67e22":"var(--text-dim)"}">${n(e.latestDate?new Date(e.latestDate).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}):"")}</div>
            </div>
          </div>
          ${d?`<div style="font-size:9px;color:#e67e22;background:rgba(230,126,34,0.1);border-radius:4px;padding:4px 6px;margin-bottom:8px">⚠ ${n(i("components.fsi.cissStale"))}</div>`:""}
          <div style="background:rgba(255,255,255,0.07);border-radius:4px;height:6px;overflow:hidden">
            <div style="height:100%;width:${(e.latestValue*100).toFixed(1)}%;background:linear-gradient(90deg,#27ae60,#f39c12,#c0392b);border-radius:4px"></div>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:9px;color:var(--text-dim);margin-top:3px">
            <span>${n(i("components.fsi.scale.noStress"))}</span><span>${n(i("components.fsi.scale.extremeStress"))}</span>
          </div>
        </div>`:"",g=`<div style="padding:12px 14px">
      <div style="text-align:center;margin-bottom:16px">
        <div style="font-size:11px;color:var(--text-dim);margin-bottom:4px">${n(i("components.fsi.usFsiValue"))}</div>
        <div style="font-size:36px;font-weight:700;color:${h};line-height:1">${s.toFixed(4)}</div>
        <div style="font-size:13px;font-weight:600;color:${h};margin-top:4px">${n(Vs(r))}</div>
      </div>
      <div style="margin:0 0 12px">
        <div style="display:flex;justify-content:space-between;font-size:9px;color:var(--text-dim);margin-bottom:3px">
          <span>${n(i("components.fsi.scale.highStress"))}</span><span>${n(i("components.fsi.scale.lowStress"))}</span>
        </div>
        <div style="background:rgba(255,255,255,0.07);border-radius:4px;height:8px;overflow:hidden">
          <div style="height:100%;width:${f.toFixed(1)}%;background:linear-gradient(90deg,#c0392b,#f39c12,#27ae60);border-radius:4px"></div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:12px">
        ${st(i("components.fsi.metrics.vix"),c>0?c.toFixed(2):i("components.fsi.notAvailable"))}
        ${st(i("components.fsi.metrics.hySpread"),u>0?u.toFixed(2)+"%":i("components.fsi.notAvailable"))}
        ${st(i("components.fsi.metrics.hygPrice"),l>0?"$"+l.toFixed(2):i("components.fsi.notAvailable"))}
        ${st(i("components.fsi.metrics.tltPrice"),o>0?"$"+o.toFixed(2):i("components.fsi.notAvailable"))}
      </div>
      <div style="font-size:11px;color:var(--text-dim);background:rgba(255,255,255,0.03);border-radius:6px;padding:8px 10px;border-left:3px solid ${h}">
        ${n(v)}
      </div>
      ${m}
    </div>`;this.setSafeContent(k(g,"legacy Panel.setContent() migration"))}}const Ea=Object.freeze(Object.defineProperty({__proto__:null,FSIPanel:Ys},Symbol.toStringTag,{value:"Module"}));export{Ta as B,fa as C,ma as E,ka as F,va as G,xa as I,Da as M,Pa as N,ba as S,ga as T,ya as a,$a as b,wa as c,Ca as d,Sa as e,Ea as f};

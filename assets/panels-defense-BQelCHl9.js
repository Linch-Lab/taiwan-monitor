var G=Object.defineProperty;var Z=(h,m,t)=>m in h?G(h,m,{enumerable:!0,configurable:!0,writable:!0,value:t}):h[m]=t;var c=(h,m,t)=>Z(h,typeof m!="symbol"?m+"":m,t);import{P as D}from"./Panel-7nZQI8-8.js";import{t as s,p as J,f as E,i as X}from"./panel-storage-C2uCSYbc.js";import{d as tt,a as et}from"./embed-url-DQf_jd4F.js";import{b as j,h as v,a as Q,e as o,s as y,t as $,u as P,f as S,j as H}from"./dom-utils-B8MVJOEB.js";import{calculateStrategicRiskOverview as st,getRecentAlerts as it,getAlertCount as at}from"./cross-module-integration-CkVefHzb.js";import{d as nt,f as rt,t as ot,a as ct}from"./cached-risk-scores-Bilwk5qW.js";import{d as N,g as V,a as lt}from"./data-freshness-BbcT_SU1.js";import{P as dt,ab as pt,ac as ht,ad as ut,ae as mt}from"./main-CmSp9Hyk.js";import{r as A}from"./military-surge-BuVVsT0s.js";import{b as gt}from"./news-context-CqnvrXzz.js";import{fetchAirportOpsSummary as U,fetchGoogleDates as vt,fetchGoogleFlights as ft,fetchAviationNews as yt,fetchFlightStatus as $t,fetchAircraftPositions as I,fetchCarrierOps as bt,fetchAirportFlights as kt}from"./index-Co9HysWY.js";import{a as q}from"./watchlist-C6DjXZJj.js";function St(h){switch(h){case"H04B":return s("components.defensePatents.cpcLabels.H04B");case"H01L":return s("components.defensePatents.cpcLabels.H01L");case"F42B":return s("components.defensePatents.cpcLabels.F42B");case"G06N":return s("components.defensePatents.cpcLabels.G06N");case"C12N":return s("components.defensePatents.cpcLabels.C12N");default:return h}}const wt=["H04B","H01L","F42B","G06N","C12N"],Tt={H04B:"📡",H01L:"💾",F42B:"💣",G06N:"🤖",C12N:"🧬"};let R=null;function Ct(){return R||(R=new tt(et(),{fetch:(...h)=>globalThis.fetch(...h)})),R}class Et extends D{constructor(){super({id:"defense-patents",title:s("components.defensePatents.title"),showCount:!0,infoTooltip:s("components.defensePatents.infoTooltip")});c(this,"viewMode","all");c(this,"patents",[]);c(this,"loading",!0);c(this,"error",null);this.element.classList.add("panel-tall"),this.fetchPatents()}async fetchPatents(){var t,e;this.loading=!0,this.error=null,this.render();try{const a=await Ct().listDefensePatents({cpcCode:"",assignee:"",limit:100});if(!((t=this.element)!=null&&t.isConnected))return;this.patents=a.patents??[],this.setCount(a.total??this.patents.length),this.error=null}catch(a){if(this.isAbortError(a)||!((e=this.element)!=null&&e.isConnected))return;this.error=s("components.defensePatents.error"),console.error("[DefensePatents] Fetch error:",a)}this.loading=!1,this.render()}render(){if(this.loading){j(this.content,v("div",{className:"defense-patents-loading"},v("div",{className:"loading-spinner"}),v("span",null,s("components.defensePatents.loading"))));return}if(this.error){this.showError(this.error,()=>this.refresh());return}this.setErrorState(!1);const t=[["all",s("components.defensePatents.tabs.all")],...wt.map(a=>[a,St(a)])],e=this.getFiltered();j(this.content,v("div",{className:"defense-patents-panel"},v("div",{className:"panel-tabs"},...t.map(([a,n])=>v("button",{className:`panel-tab ${this.viewMode===a?"active":""}`,onClick:()=>{this.viewMode=a,this.render()}},n))),v("div",{className:"defense-patents-list"},...e.length>0?e.map(a=>this.buildRow(a)):[v("div",{className:"empty-state"},s("components.defensePatents.empty"))])))}getFiltered(){return this.viewMode==="all"?this.patents.slice(0,50):this.patents.filter(t=>t.cpcCode===this.viewMode).slice(0,30)}buildRow(t){const e=t.date?new Date(t.date).toLocaleDateString(J(),{month:"short",day:"numeric",year:"numeric"}):"",a=Tt[t.cpcCode]??"🔬",n=Q(t.url||"");return v("div",{className:"defense-patent-row"},v("div",{className:"patent-icon",title:t.cpcDesc||t.cpcCode},a),v("div",{className:"patent-body"},v("div",{className:"patent-header"},v("span",{className:"patent-assignee"},t.assignee),n?v("a",{href:n,target:"_blank",rel:"noopener",className:"patent-link",title:s("components.defensePatents.viewOnUspto")},"↗"):!1),v("div",{className:"patent-title"},t.title),v("div",{className:"patent-meta"},v("span",{className:`patent-cpc cpc-${t.cpcCode}`},t.cpcDesc||t.cpcCode),e?v("span",{className:"patent-date"},e):!1,t.patentId?v("span",{className:"patent-id"},t.patentId):!1)))}refresh(){this.fetchPatents()}}const ee=Object.freeze(Object.defineProperty({__proto__:null,DefensePatentsPanel:Et},Symbol.toStringTag,{value:"Module"})),O=[{min:81,levelKey:"critical",colorVar:"--semantic-critical"},{min:66,levelKey:"high",colorVar:"--semantic-high"},{min:51,levelKey:"elevated",colorVar:"--semantic-elevated"},{min:31,levelKey:"normal",colorVar:"--semantic-normal"},{min:0,levelKey:"low",colorVar:"--semantic-low"}];class Pt extends D{constructor(){super({id:"strategic-risk",title:s("panels.strategicRisk"),showCount:!1,trackActivity:!0,infoTooltip:s("components.strategicRisk.infoTooltip")});c(this,"overview",null);c(this,"alerts",[]);c(this,"convergenceAlerts",[]);c(this,"freshnessSummary",null);c(this,"unsubscribeFreshness",null);c(this,"onLocationClick");c(this,"breakingAlerts",new Map);c(this,"boundOnBreaking",null);c(this,"breakingExpiryTimer",null);c(this,"lastRiskFingerprint","");this.init()}async init(){this.showLoading();try{let t=null;this.unsubscribeFreshness=N.subscribe(()=>{t&&clearTimeout(t),t=setTimeout(()=>{this.refresh()},500)}),this.boundOnBreaking=e=>{const a=e.detail;if(!(a!=null&&a.id))return;const n=a.threatLevel;n!=="critical"&&n!=="high"||(this.breakingAlerts.set(a.id,{threatLevel:n,timestamp:Date.now()}),this.refresh())},document.addEventListener("wm:breaking-news",this.boundOnBreaking),await this.refresh()}catch(t){console.error("[StrategicRiskPanel] Init error:",t),this.showError(s("common.failedRiskOverview"),()=>void this.refresh())}}async refresh(){var T,C,L;this.freshnessSummary=N.getSummary(),this.convergenceAlerts=nt();const t=1800*1e3,e=Date.now(),a=e-t,n=[];for(const[k,x]of this.breakingAlerts)x.timestamp<a&&n.push(k);for(const k of n)this.breakingAlerts.delete(k);if(this.breakingExpiryTimer&&clearTimeout(this.breakingExpiryTimer),this.breakingAlerts.size>0){let k=1/0;for(const B of this.breakingAlerts.values())B.timestamp<k&&(k=B.timestamp);const x=k+t-e+500;this.breakingExpiryTimer=setTimeout(()=>this.refresh(),Math.max(1e3,x))}let i=0;for(const k of this.breakingAlerts.values())i+=k.threatLevel==="critical"?15:8;i=Math.min(15,i);const r=dt(),l=r==null?void 0:r.postures,d=r!=null&&r.stale?.5:1,g=await rt(this.signal);if(!((T=this.element)!=null&&T.isConnected))return!1;if(!g)return this.overview=null,this.alerts=[],this.setDataBadge("unavailable"),this.showError(s("common.failedRiskOverview"),()=>void this.refresh()),console.warn("[StrategicRiskPanel] Canonical backend risk scores unavailable"),!1;const f=st(this.convergenceAlerts,l??void 0,i,d);this.overview=f,this.alerts=it(24),this.applyCachedRiskOverview(g,f),console.log("[StrategicRiskPanel] Using cached scores from backend");const p=this.freshnessSummary?s("components.strategicRisk.sourcesDetail",{active:this.freshnessSummary.activeSources,total:this.freshnessSummary.totalSources}):void 0;this.setDataBadge("cached",p),this.render();const u=this.alerts.map(k=>k.id).sort().join(","),w=`${(C=this.overview)==null?void 0:C.compositeScore}|${(L=this.overview)==null?void 0:L.trend}|${u}`,b=w!==this.lastRiskFingerprint;return this.lastRiskFingerprint=w,b}cachedTrendToOverviewTrend(t){return t==="rising"||t==="escalating"?"escalating":t==="falling"||t==="de-escalating"?"de-escalating":"stable"}cachedTimestamp(t){const e=t.strategicRisk.lastUpdated??t.computedAt;if(!e)return null;const a=new Date(e);return Number.isNaN(a.getTime())?null:a}cachedTopRisks(t,e){const a=t.strategicRisk.contributors.filter(n=>n.score>0).slice(0,5).map(n=>`${n.country}: ${n.score} (${n.level})`);return a.length>0?a:e.filter(n=>n.score>0).slice(0,5).map(n=>`${n.name}: ${n.score} (${n.level})`)}applyCachedRiskOverview(t,e){var n;const a=t.cii.map(ot).sort((i,r)=>r.score-i.score);this.overview={...e,avgCIIDeviation:((n=a[0])==null?void 0:n.score)??t.strategicRisk.score,compositeScore:Math.max(0,Math.min(100,Math.round(t.strategicRisk.score))),trend:this.cachedTrendToOverviewTrend(t.strategicRisk.trend),topRisks:this.cachedTopRisks(t,a),unstableCountries:a.filter(i=>ct(i.score)).slice(0,5),timestamp:this.cachedTimestamp(t),degraded:t.degraded,stale:t.stale}}getScoreColor(t){return E(this.getFallbackScoreBand(t).colorVar)}getScoreLevel(t){return s(`countryBrief.levels.${this.getFallbackScoreBand(t).levelKey}`)}getFallbackScoreBand(t){return O.find(e=>t>=e.min)??O[O.length-1]}getTrendEmoji(t){switch(t){case"escalating":return"📈";case"de-escalating":return"📉";default:return"➡️"}}getTrendColor(t){switch(t){case"escalating":return E("--semantic-critical");case"de-escalating":return E("--semantic-normal");default:return E("--text-dim")}}getPriorityColor(t){switch(t){case"critical":return E("--semantic-critical");case"high":return E("--semantic-high");case"medium":return E("--semantic-elevated");case"low":return E("--semantic-normal")}}getPriorityEmoji(t){switch(t){case"critical":return"🔴";case"high":return"🟠";case"medium":return"🟡";case"low":return"🟢"}}getTypeEmoji(t){switch(t){case"convergence":return"🎯";case"cii_spike":return"📊";case"cascade":return"🔗";case"sanctions":return"🚫";case"radiation":return"☢️";case"composite":return"⚠️";default:return"📍"}}renderFullData(){if(!this.overview||!this.freshnessSummary)return"";const t=this.overview.compositeScore,e=this.getScoreColor(t),a=this.getScoreLevel(t),n=Math.round(t/100*270);return`
      <div class="strategic-risk-panel">
        ${this.renderCachedRiskStateBanner()}

        <div class="risk-gauge">
          <div class="risk-score-container">
            <div class="risk-score-ring" style="--score-color: ${e}; --score-deg: ${n}deg;">
              <div class="risk-score-inner">
                <div class="risk-score" style="color: ${e}">${t}</div>
                <div class="risk-level" style="color: ${e}">${a}</div>
              </div>
            </div>
          </div>
          <div class="risk-trend-container">
            <span class="risk-trend-label">${s("components.strategicRisk.trend")}</span>
            <div class="risk-trend" style="color: ${this.getTrendColor(this.overview.trend)}">
              ${this.getTrendEmoji(this.overview.trend)} ${this.overview.trend==="escalating"?s("components.strategicRisk.trends.escalating"):this.overview.trend==="de-escalating"?s("components.strategicRisk.trends.deEscalating"):s("components.strategicRisk.trends.stable")}
            </div>
          </div>
        </div>

        ${this.renderMetrics()}
        ${this.renderFreshnessSurface()}
        ${this.renderTopRisks()}
        ${this.renderRecentAlerts()}

        <div class="risk-footer">
          <span class="risk-updated">${s("components.strategicRisk.updated",{time:this.formatOverviewTimestamp()})}</span>
          <button class="risk-refresh-btn">${s("components.strategicRisk.refresh")}</button>
        </div>
      </div>
    `}renderCachedRiskStateBanner(){if(!this.overview||!this.overview.degraded&&!this.overview.stale)return"";const t=[this.overview.degraded?s("components.strategicRisk.sourceStates.degraded"):"",this.overview.stale?s("components.strategicRisk.sourceStates.stale"):""].filter(Boolean);return`<div class="risk-status-banner risk-status-cached">
      <span class="risk-status-icon">!</span>
      <span class="risk-status-text">${s("components.strategicRisk.cachedCiiStatus",{states:t.join(" · ")})}</span>
    </div>`}renderFreshnessSurface(){if(!this.freshnessSummary)return"";const t=N.getAllSources().filter(e=>e.status!=="no_data"&&e.status!=="disabled").sort((e,a)=>{const n={error:0,very_stale:1,stale:2,fresh:3};return(n[e.status]??4)-(n[a.status]??4)}).slice(0,6);return t.length===0?"":`
      <div class="risk-section">
        <div class="risk-section-title">${s("components.strategicRisk.dataFreshness")}</div>
        <div class="risk-sources-compact">
          ${t.map(e=>`
            <span class="risk-source-chip" title="${o(e.healthStatus||e.status)}" style="border-color: ${V(e.status)}">
              <span class="risk-source-dot" style="color: ${V(e.status)}">${lt(e.status)}</span>
              <span class="risk-source-name">${o(e.name)}</span>
              <span class="risk-source-time">${o(N.getTimeSince(e.id))}</span>
            </span>
          `).join("")}
        </div>
      </div>
    `}renderMetrics(){if(!this.overview)return"";const t=at();return`
      <div class="risk-metrics">
        <div class="risk-metric">
          <span class="risk-metric-value">${this.overview.convergenceAlerts}</span>
          <span class="risk-metric-label">${s("components.strategicRisk.convergenceMetric")}</span>
        </div>
        <div class="risk-metric">
          <span class="risk-metric-value">${this.overview.avgCIIDeviation.toFixed(1)}</span>
          <span class="risk-metric-label">${s("components.strategicRisk.ciiDeviation")}</span>
        </div>
        <div class="risk-metric">
          <span class="risk-metric-value">${this.overview.infrastructureIncidents}</span>
          <span class="risk-metric-label">${s("components.strategicRisk.infraEvents")}</span>
        </div>
        <div class="risk-metric">
          <span class="risk-metric-value">${t.critical+t.high}</span>
          <span class="risk-metric-label">${s("components.strategicRisk.highAlerts")}</span>
        </div>
      </div>
    `}renderTopRisks(){if(!this.overview||this.overview.topRisks.length===0)return`<div class="risk-empty">${s("components.strategicRisk.noRisks")}</div>`;const t=this.overview.topConvergenceZones[0];return`
      <div class="risk-section">
        <div class="risk-section-title">${s("components.strategicRisk.topRisks")}</div>
        <div class="risk-list">
          ${this.overview.topRisks.map((e,a)=>a===0&&e.startsWith("Convergence:")&&t?`
                <div class="risk-item risk-item-clickable" data-lat="${t.lat}" data-lon="${t.lon}">
                  <span class="risk-rank">${a+1}.</span>
                  <span class="risk-text">${o(e)}</span>
                  <span class="risk-location-icon">↗</span>
                </div>
              `:`
              <div class="risk-item">
                <span class="risk-rank">${a+1}.</span>
                <span class="risk-text">${o(e)}</span>
              </div>
            `).join("")}
        </div>
      </div>
    `}renderRecentAlerts(){if(this.alerts.length===0)return"";const t=this.alerts.slice(0,5);return`
      <div class="risk-section">
        <div class="risk-section-title">${s("components.strategicRisk.recentAlerts",{count:String(this.alerts.length)})}</div>
        <div class="risk-alerts">
          ${t.map(e=>{var r;const a=((r=e.location)==null?void 0:r.lat)&&e.location.lon,n=a?"risk-alert-clickable":"",i=a?`data-lat="${e.location.lat}" data-lon="${e.location.lon}"`:"";return`
              <div class="risk-alert ${n}" style="border-left: 3px solid ${this.getPriorityColor(e.priority)}" ${i}>
                <div class="risk-alert-header">
                  <span class="risk-alert-type">${this.getTypeEmoji(e.type)}</span>
                  <span class="risk-alert-priority">${this.getPriorityEmoji(e.priority)}</span>
                  <span class="risk-alert-title">${o(e.title)}</span>
                  ${a?'<span class="risk-location-icon">↗</span>':""}
                </div>
                <div class="risk-alert-summary">${o(e.summary)}</div>
                <div class="risk-alert-time">${this.formatTime(e.timestamp)}</div>
              </div>
            `}).join("")}
        </div>
      </div>
    `}formatTime(t){const a=new Date().getTime()-t.getTime(),n=Math.floor(a/6e4),i=Math.floor(n/60);return n<1?s("components.strategicRisk.time.justNow"):n<60?s("components.strategicRisk.time.minutesAgo",{count:String(n)}):i<24?s("components.strategicRisk.time.hoursAgo",{count:String(i)}):t.toLocaleDateString()}formatOverviewTimestamp(){var t;return(t=this.overview)!=null&&t.timestamp?this.overview.timestamp.toLocaleTimeString():"&mdash;"}render(){this.freshnessSummary=N.getSummary();try{if(!this.overview){this.showLoading();return}y(this.content,$(this.renderFullData(),"legacy direct innerHTML migration")),this.attachEventListeners()}catch(t){console.error("[StrategicRiskPanel] Render error:",t),this.showError(s("common.failedRiskOverview"),()=>this.refresh())}}attachEventListeners(){const t=this.content.querySelector(".risk-refresh-btn");t&&t.addEventListener("click",()=>this.refresh()),this.content.querySelectorAll(".risk-source-enable").forEach(r=>{r.addEventListener("click",l=>{const d=l.target.dataset.panel;d&&this.emitEnablePanel(d)})}),this.content.querySelectorAll(".risk-action-btn").forEach(r=>{r.addEventListener("click",l=>{const d=l.target.dataset.action;d==="enable-core"?this.emitEnablePanels(["protests","intel","live-news"]):d==="enable-all"&&this.emitEnablePanels(["protests","intel","live-news","military","shipping"])})}),this.content.querySelectorAll(".risk-item-clickable").forEach(r=>{r.addEventListener("click",()=>{const l=parseFloat(r.dataset.lat||"0"),d=parseFloat(r.dataset.lon||"0");this.onLocationClick&&!Number.isNaN(l)&&!Number.isNaN(d)&&this.onLocationClick(l,d)})}),this.content.querySelectorAll(".risk-alert-clickable").forEach(r=>{r.addEventListener("click",()=>{const l=parseFloat(r.dataset.lat||"0"),d=parseFloat(r.dataset.lon||"0");this.onLocationClick&&!Number.isNaN(l)&&!Number.isNaN(d)&&this.onLocationClick(l,d)})})}emitEnablePanel(t){window.dispatchEvent(new CustomEvent("enable-panel",{detail:{panelId:t}}))}emitEnablePanels(t){t.forEach(e=>this.emitEnablePanel(e))}destroy(){this.boundOnBreaking&&(document.removeEventListener("wm:breaking-news",this.boundOnBreaking),this.boundOnBreaking=null),this.breakingExpiryTimer&&(clearTimeout(this.breakingExpiryTimer),this.breakingExpiryTimer=null),this.unsubscribeFreshness&&this.unsubscribeFreshness(),super.destroy()}getOverview(){return this.overview}getAlerts(){return this.alerts}setLocationClickHandler(t){this.onLocationClick=t}}const se=Object.freeze(Object.defineProperty({__proto__:null,StrategicRiskPanel:Pt},Symbol.toStringTag,{value:"Module"}));class Dt extends D{constructor(t){super({id:"strategic-posture",title:s("panels.strategicPosture"),showCount:!1,trackActivity:!0,infoTooltip:s("components.strategicPosture.infoTooltip"),defaultRowSpan:2});c(this,"postures",[]);c(this,"vesselTimeouts",[]);c(this,"loadingElapsedInterval",null);c(this,"loadingStartTime",0);c(this,"onLocationClick");c(this,"lastTimestamp","");c(this,"isStale",!1);this.getLatestNews=t,this.init()}init(){this.showLoading(),this.fetchAndRender(),this.vesselTimeouts.push(setTimeout(()=>this.reaugmentVessels(),30*1e3)),this.vesselTimeouts.push(setTimeout(()=>this.reaugmentVessels(),60*1e3)),this.vesselTimeouts.push(setTimeout(()=>this.reaugmentVessels(),90*1e3)),this.vesselTimeouts.push(setTimeout(()=>this.reaugmentVessels(),120*1e3))}isPanelVisible(){return!this.element.classList.contains("hidden")}async reaugmentVessels(){var t;!this.isPanelVisible()||this.postures.length===0||(console.log("[StrategicPosturePanel] Re-augmenting with vessels..."),await this.augmentWithVessels(),(t=this.element)!=null&&t.isConnected&&this.render())}showLoading(){this.loadingStartTime=Date.now(),this.setSafeContent(P(`
      <div class="posture-panel">
        <div class="posture-loading">
          <div class="posture-loading-radar">
            <div class="posture-radar-sweep"></div>
            <div class="posture-radar-dot"></div>
          </div>
          <div class="posture-loading-title">${s("components.strategicPosture.scanningTheaters")}</div>
          <div class="posture-loading-stages">
            <div class="posture-stage active">
              <span class="posture-stage-dot"></span>
              <span>${s("components.strategicPosture.positions")}</span>
            </div>
            <div class="posture-stage pending">
              <span class="posture-stage-dot"></span>
              <span>${s("components.strategicPosture.navalVesselsLoading")}</span>
            </div>
            <div class="posture-stage pending">
              <span class="posture-stage-dot"></span>
              <span>${s("components.strategicPosture.theaterAnalysis")}</span>
            </div>
          </div>
          <div class="posture-loading-tip">${s("components.strategicPosture.connectingStreams")}</div>
          <div class="posture-loading-elapsed">${s("components.strategicPosture.elapsed",{elapsed:"0"})}</div>
          <div class="posture-loading-note">${s("components.strategicPosture.initialLoadNote")}</div>
        </div>
      </div>
    `,"legacy Panel.setContent() migration")),this.startLoadingTimer()}startLoadingTimer(){this.loadingElapsedInterval&&clearInterval(this.loadingElapsedInterval),this.loadingElapsedInterval=setInterval(()=>{const t=Math.floor((Date.now()-this.loadingStartTime)/1e3),e=this.content.querySelector(".posture-loading-elapsed");e&&(e.textContent=s("components.strategicPosture.elapsed",{elapsed:String(t)}))},1e3)}stopLoadingTimer(){this.loadingElapsedInterval&&(clearInterval(this.loadingElapsedInterval),this.loadingElapsedInterval=null)}showLoadingStage(t){const e=this.content.querySelectorAll(".posture-stage");e.length!==0&&e.forEach((a,n)=>{a.classList.remove("active","complete"),t==="aircraft"&&n===0?a.classList.add("active"):t==="vessels"?n===0?a.classList.add("complete"):n===1&&a.classList.add("active"):t==="analysis"&&(n<=1?a.classList.add("complete"):n===2&&a.classList.add("active"))})}async fetchAndRender(){var t,e,a;if(this.isPanelVisible())try{this.showLoadingStage("aircraft");const n=await pt(this.signal);if(!((t=this.element)!=null&&t.isConnected))return;if(!n||!((e=n.postures)!=null&&e.length)){this.showNoData();return}if(this.postures=n.postures.map(i=>({...i,byOperator:{...i.byOperator}})),this.lastTimestamp=n.timestamp,this.isStale=n.stale||!1,this.showLoadingStage("vessels"),await this.augmentWithVessels(),!((a=this.element)!=null&&a.isConnected))return;this.showLoadingStage("analysis"),this.updateBadges(),this.render(),this.isStale&&setTimeout(()=>{this.fetchAndRender()},3e3)}catch(n){if(this.isAbortError(n))return;console.error("[StrategicPosturePanel] Fetch error:",n),this.showFetchError()}}async augmentWithVessels(){try{const{fetchMilitaryVessels:t}=await ht(),{vessels:e}=await t();if(console.log(`[StrategicPosturePanel] Got ${e.length} total military vessels`),e.length===0){this.restoreVesselCounts(),A(this.postures);return}for(const a of this.postures){if(!a.bounds)continue;const n=e.filter(i=>i.lat>=a.bounds.south&&i.lat<=a.bounds.north&&i.lon>=a.bounds.west&&i.lon<=a.bounds.east);a.destroyers=n.filter(i=>i.vesselType==="destroyer").length,a.frigates=n.filter(i=>i.vesselType==="frigate").length,a.carriers=n.filter(i=>i.vesselType==="carrier").length,a.submarines=n.filter(i=>i.vesselType==="submarine").length,a.patrol=n.filter(i=>i.vesselType==="patrol").length,a.auxiliaryVessels=n.filter(i=>i.vesselType==="auxiliary"||i.vesselType==="special"||i.vesselType==="amphibious"||i.vesselType==="icebreaker"||i.vesselType==="research"||i.vesselType==="unknown").length,a.totalVessels=n.length,n.length>0&&console.log(`[StrategicPosturePanel] ${a.shortName}: ${n.length} vessels`,n.map(i=>i.vesselType));for(const i of n){const r=i.operator||"unknown";a.byOperator[r]=(a.byOperator[r]||0)+1}}this.cacheVesselCounts(),A(this.postures),console.log("[StrategicPosturePanel] Augmented with",e.length,"vessels, posture levels recalculated")}catch(t){if(ut(t))return;console.warn("[StrategicPosturePanel] Failed to fetch vessels:",t),this.restoreVesselCounts(),A(this.postures)}}cacheVesselCounts(){try{const t={};for(const e of this.postures)e.totalVessels>0&&(t[e.theaterId]={destroyers:e.destroyers||0,frigates:e.frigates||0,carriers:e.carriers||0,submarines:e.submarines||0,patrol:e.patrol||0,auxiliaryVessels:e.auxiliaryVessels||0,totalVessels:e.totalVessels||0});localStorage.setItem("wm:vesselPosture",JSON.stringify({counts:t,ts:Date.now()}))}catch{}}restoreVesselCounts(){try{const t=localStorage.getItem("wm:vesselPosture");if(!t)return;const{counts:e,ts:a}=JSON.parse(t);if(Date.now()-a>1800*1e3)return;for(const n of this.postures){const i=e[n.theaterId];i&&(n.destroyers=i.destroyers,n.frigates=i.frigates,n.carriers=i.carriers,n.submarines=i.submarines,n.patrol=i.patrol,n.auxiliaryVessels=i.auxiliaryVessels,n.totalVessels=i.totalVessels)}console.log("[StrategicPosturePanel] Restored cached vessel counts")}catch{}}updatePostures(t){var e;if(!t||!((e=t.postures)!=null&&e.length)){this.showNoData();return}this.postures=t.postures.map(a=>({...a,byOperator:{...a.byOperator}})),this.lastTimestamp=t.timestamp,this.isStale=t.stale||!1,this.augmentWithVessels().then(()=>{var a;(a=this.element)!=null&&a.isConnected&&(this.updateBadges(),this.render())})}updateBadges(){const t=this.postures.some(a=>a.postureLevel==="critical"),e=this.postures.some(a=>a.postureLevel==="elevated");t?this.setNewBadge(1,!0):e?this.setNewBadge(1,!1):this.clearNewBadge()}async refresh(){return this.fetchAndRender()}showNoData(){this.stopLoadingTimer(),this.setSafeContent(P(`
      <div class="posture-panel">
        <div class="posture-no-data">
          <div class="posture-no-data-icon pulse">📡</div>
          <div class="posture-no-data-title">${s("components.strategicPosture.acquiringData")}</div>
          <div class="posture-no-data-desc">
            ${s("components.strategicPosture.acquiringDesc")}
          </div>
          <div class="posture-data-sources">
            <div class="posture-source">
              <span class="posture-source-icon connecting">✈️</span>
              <span>${s("components.strategicPosture.openSkyAdsb")}</span>
            </div>
            <div class="posture-source">
              <span class="posture-source-icon waiting">🚢</span>
              <span>${s("components.strategicPosture.aisVesselStream")}</span>
            </div>
          </div>
          <button class="posture-retry-btn" data-panel-retry>↻ ${s("components.strategicPosture.retryNow")}</button>
        </div>
      </div>
    `,"legacy Panel.setContent() migration")),this.setRetryCallback(()=>this.refresh())}showFetchError(){this.stopLoadingTimer(),this.setSafeContent(P(`
      <div class="posture-panel">
        <div class="posture-no-data">
          <div class="posture-no-data-icon">⚠️</div>
          <div class="posture-no-data-title">${s("components.strategicPosture.feedRateLimited")}</div>
          <div class="posture-no-data-desc">
            ${s("components.strategicPosture.rateLimitedDesc")}
          </div>
          <div class="posture-error-hint">
            <strong>${s("components.strategicPosture.rateLimitedTip")}</strong>
          </div>
          <button class="posture-retry-btn" data-panel-retry>↻ ${s("components.strategicPosture.tryAgain")}</button>
        </div>
      </div>
    `,"legacy Panel.setContent() migration")),this.setRetryCallback(()=>this.refresh())}getPostureBadge(t){switch(t){case"critical":return`<span class="posture-badge posture-critical">${s("components.strategicPosture.badges.critical")}</span>`;case"elevated":return`<span class="posture-badge posture-elevated">${s("components.strategicPosture.badges.elevated")}</span>`;default:return`<span class="posture-badge posture-normal">${s("components.strategicPosture.badges.normal")}</span>`}}getTrendIcon(t,e){switch(t){case"increasing":return`<span class="posture-trend trend-up">↗ +${e}%</span>`;case"decreasing":return`<span class="posture-trend trend-down">↘ ${e}%</span>`;default:return`<span class="posture-trend trend-stable">→ ${s("components.strategicPosture.trendStable")}</span>`}}theaterDisplayName(t){const e=`components.strategicPosture.theaters.${t.theaterId}`,a=s(e);return a!==e?a:t.theaterName}renderTheater(t){const e=t.postureLevel!=="normal",a=this.theaterDisplayName(t);if(!e){const d=[];return t.totalAircraft>0&&d.push(`<span class="posture-chip air">✈️ ${t.totalAircraft}</span>`),t.totalVessels>0&&d.push(`<span class="posture-chip naval">⚓ ${t.totalVessels}</span>`),`
        <div class="posture-theater posture-compact" data-lat="${t.centerLat}" data-lon="${t.centerLon}" title="${s("components.strategicPosture.clickToView",{name:o(a)})}">
          <span class="posture-name">${o(t.shortName)}</span>
          <div class="posture-chips">${d.join("")}</div>
          ${this.getPostureBadge(t.postureLevel)}
        </div>
      `}const n=[];t.fighters>0&&n.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.fighters")}">✈️ ${t.fighters}</span>`),t.tankers>0&&n.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.tankers")}">⛽ ${t.tankers}</span>`),t.awacs>0&&n.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.awacs")}">📡 ${t.awacs}</span>`),t.reconnaissance>0&&n.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.recon")}">🔍 ${t.reconnaissance}</span>`),t.transport>0&&n.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.transport")}">📦 ${t.transport}</span>`),t.bombers>0&&n.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.bombers")}">💣 ${t.bombers}</span>`),t.drones>0&&n.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.drones")}">🛸 ${t.drones}</span>`),n.length===0&&t.totalAircraft>0&&n.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.aircraft")}">✈️ ${t.totalAircraft}</span>`);const i=[];t.carriers>0&&i.push(`<span class="posture-stat carrier" title="${s("components.strategicPosture.units.carriers")}">🚢 ${t.carriers}</span>`),t.destroyers>0&&i.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.destroyers")}">⚓ ${t.destroyers}</span>`),t.frigates>0&&i.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.frigates")}">🛥️ ${t.frigates}</span>`),t.submarines>0&&i.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.submarines")}">🦈 ${t.submarines}</span>`),t.patrol>0&&i.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.patrol")}">🚤 ${t.patrol}</span>`),t.auxiliaryVessels>0&&i.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.auxiliary")}">⚓ ${t.auxiliaryVessels}</span>`),i.length===0&&t.totalVessels>0&&i.push(`<span class="posture-stat" title="${s("components.strategicPosture.units.navalVessels")}">⚓ ${t.totalVessels}</span>`);const r=n.length>0,l=i.length>0;return`
      <div class="posture-theater posture-expanded ${t.postureLevel}" data-lat="${t.centerLat}" data-lon="${t.centerLon}" title="${s("components.strategicPosture.clickToViewMap")}">
        <div class="posture-theater-header">
          <span class="posture-name">${o(a)}</span>
          ${this.getPostureBadge(t.postureLevel)}
        </div>

        <div class="posture-forces">
          ${r?`<div class="posture-force-row"><span class="posture-domain">${s("components.strategicPosture.domains.air")}</span><div class="posture-stats">${n.join("")}</div></div>`:""}
          ${l?`<div class="posture-force-row"><span class="posture-domain">${s("components.strategicPosture.domains.sea")}</span><div class="posture-stats">${i.join("")}</div></div>`:""}
        </div>

        <div class="posture-footer">
          ${t.strikeCapable?`<span class="posture-strike">⚡ ${s("components.strategicPosture.strike")}</span>`:""}
          ${this.getTrendIcon(t.trend,t.changePercent)}
          ${t.targetNation?`<span class="posture-focus">→ ${o(t.targetNation)}</span>`:""}
          ${X()?`<button class="posture-deduce-btn" title="Deduce Situation with AI" style="background: none; border: none; cursor: pointer; opacity: 0.7; font-size: 1.1em; transition: opacity 0.2s; margin-left: auto;" data-theater='${o(JSON.stringify(t))}'>🧠</button>`:""}
        </div>
      </div>
    `}render(){this.stopLoadingTimer();const t=[...this.postures].sort((i,r)=>{const l={critical:0,elevated:1,normal:2};return(l[i.postureLevel]??2)-(l[r.postureLevel]??2)}),e=this.lastTimestamp?new Date(this.lastTimestamp).toLocaleTimeString():new Date().toLocaleTimeString(),n=`
      <div class="posture-panel">
        ${this.isStale?`<div class="posture-stale-warning">⚠️ ${s("components.strategicPosture.staleWarning")}</div>`:""}

        <details class="posture-emoji-key">
          <summary>💡 ${s("components.strategicPosture.emojiKeyLabel")}</summary>
          <div class="posture-emoji-key-body">
            <div class="posture-emoji-key-section">${s("components.strategicPosture.emojiKeyAir")}</div>
            <div class="posture-emoji-key-item"><span>✈️</span><span>${s("components.strategicPosture.units.fighters")}</span></div>
            <div class="posture-emoji-key-item"><span>⛽</span><span>${s("components.strategicPosture.units.tankers")}</span></div>
            <div class="posture-emoji-key-item"><span>📡</span><span>${s("components.strategicPosture.units.awacs")}</span></div>
            <div class="posture-emoji-key-item"><span>🔍</span><span>${s("components.strategicPosture.units.recon")}</span></div>
            <div class="posture-emoji-key-item"><span>📦</span><span>${s("components.strategicPosture.units.transport")}</span></div>
            <div class="posture-emoji-key-item"><span>💣</span><span>${s("components.strategicPosture.units.bombers")}</span></div>
            <div class="posture-emoji-key-item"><span>🛸</span><span>${s("components.strategicPosture.units.drones")}</span></div>
            <div class="posture-emoji-key-section">${s("components.strategicPosture.emojiKeyNaval")}</div>
            <div class="posture-emoji-key-item"><span>🚢</span><span>${s("components.strategicPosture.units.carriers")}</span></div>
            <div class="posture-emoji-key-item"><span>⚓</span><span>${s("components.strategicPosture.units.destroyers")}</span></div>
            <div class="posture-emoji-key-item"><span>🛥️</span><span>${s("components.strategicPosture.units.frigates")}</span></div>
            <div class="posture-emoji-key-item"><span>🦈</span><span>${s("components.strategicPosture.units.submarines")}</span></div>
            <div class="posture-emoji-key-item"><span>🚤</span><span>${s("components.strategicPosture.units.patrol")}</span></div>
            <div class="posture-emoji-key-item"><span>⚓</span><span>${s("components.strategicPosture.units.auxiliary")}</span></div>
          </div>
        </details>

        ${t.map(i=>this.renderTheater(i)).join("")}

        <div class="posture-footer">
          <span class="posture-updated">${this.isStale?"⚠️ ":""}${s("components.strategicPosture.updated")} ${e}</span>
          <button class="posture-refresh-btn" title="${s("components.strategicPosture.refresh")}" aria-label="${s("components.strategicPosture.refresh")}">↻</button>
        </div>
      </div>
    `;this.setSafeContent(P(n,"legacy Panel.setContent() migration")),this.attachEventListeners()}attachEventListeners(){var a;(a=this.content.querySelector(".posture-refresh-btn"))==null||a.addEventListener("click",()=>{this.refresh()}),this.content.querySelectorAll(".posture-theater").forEach(n=>{n.addEventListener("click",i=>{var d;if(i.target.closest(".posture-deduce-btn"))return;const r=parseFloat(n.dataset.lat||"0"),l=parseFloat(n.dataset.lon||"0");console.log("[StrategicPosturePanel] Theater clicked:",{lat:r,lon:l,dataLat:n.dataset.lat,dataLon:n.dataset.lon,element:(d=n.textContent)==null?void 0:d.slice(0,30),hasHandler:!!this.onLocationClick}),this.onLocationClick&&!Number.isNaN(r)&&!Number.isNaN(l)?(console.log("[StrategicPosturePanel] Calling onLocationClick with:",r,l),this.onLocationClick(r,l)):console.warn("[StrategicPosturePanel] No handler or invalid coords!",{hasHandler:!!this.onLocationClick,lat:r,lon:l})})}),this.content.querySelectorAll(".posture-deduce-btn").forEach(n=>{n.addEventListener("click",i=>{i.stopPropagation();try{const r=n.dataset.theater;if(!r)return;const l=JSON.parse(r),d=`What is the expected strategic impact of the current military posture in the ${l.shortName} theater?`;let g=`Theater: ${l.shortName} (${l.theaterName}). Military Assets: ${l.totalAircraft} aircraft, ${l.totalVessels} naval vessels. Readiness Level: ${l.postureLevel}. Assets breakdown: ${l.fighters} fighters, ${l.bombers} bombers, ${l.carriers} carriers, ${l.submarines} submarines. Focus/Target: ${l.targetNation||"Unknown"}.`;if(this.getLatestNews){const p=gt(this.getLatestNews);p&&(g+=`

${p}`)}const f={query:d,geoContext:g,autoSubmit:!0};document.dispatchEvent(new CustomEvent("wm:deduct-context",{detail:f}))}catch(r){console.error("[StrategicPosturePanel] Failed to dispatch deduction event",r)}})})}setLocationClickHandler(t){console.log("[StrategicPosturePanel] setLocationClickHandler called, handler:",typeof t),this.onLocationClick=t,console.log("[StrategicPosturePanel] Handler stored, onLocationClick now:",typeof this.onLocationClick)}getPostures(){return this.postures}show(){const t=this.element.classList.contains("hidden");super.show(),t&&this.fetchAndRender()}destroy(){this.stopLoadingTimer(),this.vesselTimeouts.forEach(t=>clearTimeout(t)),this.vesselTimeouts=[],super.destroy()}}const ie=Object.freeze(Object.defineProperty({__proto__:null,StrategicPosturePanel:Dt},Symbol.toStringTag,{value:"Module"})),K=["state-based","non-state","one-sided"],_={"state-based":"UCDP_VIOLENCE_TYPE_STATE_BASED","non-state":"UCDP_VIOLENCE_TYPE_NON_STATE","one-sided":"UCDP_VIOLENCE_TYPE_ONE_SIDED"};function Lt(h){return K.reduce((m,t)=>{var e;return m+(((e=h[_[t]])==null?void 0:e.count)??0)},0)}class Nt extends D{constructor(){super({id:"ucdp-events",title:s("panels.ucdpEvents"),showCount:!0,trackActivity:!0,infoTooltip:s("components.ucdpEvents.infoTooltip"),defaultRowSpan:2});c(this,"events",[]);c(this,"aggregates");c(this,"hasLoadedEvents",!1);c(this,"activeTab","state-based");c(this,"onEventClick");this.showLoading(s("common.loadingUcdpEvents")),this.content.addEventListener("click",t=>{var n;const e=t.target.closest(".panel-tab");if(e!=null&&e.dataset.tab){this.activeTab=e.dataset.tab,this.renderContent();return}const a=t.target.closest(".ucdp-row");if(a){const i=Number(a.dataset.lat),r=Number(a.dataset.lon);Number.isFinite(i)&&Number.isFinite(r)&&((n=this.onEventClick)==null||n.call(this,i,r))}})}setEventClickHandler(t){this.onEventClick=t}setEvents(t,e){this.events=t,this.aggregates=e,this.hasLoadedEvents=!0,this.setCount(e?Lt(e):t.length),this.renderContent()}hasData(){return this.hasLoadedEvents}getEvents(){return this.events}renderContent(){var g,f;const t=this.events.filter(p=>p.type_of_violence===this.activeTab),e=[{key:"state-based",label:s("components.ucdpEvents.stateBased")},{key:"non-state",label:s("components.ucdpEvents.nonState")},{key:"one-sided",label:s("components.ucdpEvents.oneSided")}],a={"state-based":0,"non-state":0,"one-sided":0};if(this.aggregates)for(const p of K)a[p]=((g=this.aggregates[_[p]])==null?void 0:g.count)??0;else for(const p of this.events)a[p.type_of_violence]+=1;const n=this.aggregates?((f=this.aggregates[_[this.activeTab]])==null?void 0:f.totalDeaths)??0:t.reduce((p,u)=>p+u.deaths_best,0),i=e.map(p=>`<button class="panel-tab ${p.key===this.activeTab?"active":""}" data-tab="${p.key}">${p.label} <span class="ucdp-tab-count">${a[p.key]}</span></button>`).join(""),r=t.slice(0,50);let l;if(r.length===0)l=`<div class="panel-empty">${s("common.noEventsInCategory")}</div>`;else{const p=r.map(u=>{const w=u.type_of_violence==="state-based"?"ucdp-deaths-state":u.type_of_violence==="non-state"?"ucdp-deaths-nonstate":"ucdp-deaths-onesided",b=u.deaths_best>0?`<span class="${w}">${u.deaths_best}</span> <small class="ucdp-range">(${u.deaths_low}-${u.deaths_high})</small>`:'<span class="ucdp-deaths-zero">0</span>',T=`${o(u.side_a)} vs ${o(u.side_b)}`;return`<tr class="ucdp-row" data-lat="${u.latitude}" data-lon="${u.longitude}">
          <td class="ucdp-country">${o(u.country)}</td>
          <td class="ucdp-deaths">${b}</td>
          <td class="ucdp-date">${u.date_start}</td>
          <td class="ucdp-actors">${T}</td>
        </tr>`}).join("");l=`
        <table class="ucdp-table">
          <thead>
            <tr>
              <th>${s("components.ucdpEvents.country")}</th>
              <th>${s("components.ucdpEvents.deaths")}</th>
              <th>${s("components.ucdpEvents.date")}</th>
              <th>${s("components.ucdpEvents.actors")}</th>
            </tr>
          </thead>
          <tbody>${p}</tbody>
        </table>`}const d=t.length>50?`<div class="panel-more">${s("components.ucdpEvents.moreNotShown",{count:t.length-50})}</div>`:"";this.setSafeContent(P(`
      <div class="ucdp-panel-content">
        <div class="ucdp-header">
          <div class="panel-tabs">${i}</div>
          ${n>0?`<span class="ucdp-total-deaths">${s("components.ucdpEvents.deathsCount",{count:n.toLocaleString()})}</span>`:""}
        </div>
        ${l}
        ${d}
      </div>
    `,"legacy Panel.setContent() migration"))}}const ae=Object.freeze(Object.defineProperty({__proto__:null,UcdpEventsPanel:Nt},Symbol.toStringTag,{value:"Module"})),xt={spike:"spike",persistent:"persistent",elevated:"elevated",normal:"normal"};class At extends D{constructor(){super({id:"thermal-escalation",title:s("components.thermalEscalation.title"),showCount:!0,trackActivity:!0,infoTooltip:s("components.thermalEscalation.infoTooltip")});c(this,"clusters",[]);c(this,"fetchedAt",null);c(this,"summary",{clusterCount:0,elevatedCount:0,spikeCount:0,persistentCount:0,conflictAdjacentCount:0,highRelevanceCount:0});c(this,"onLocationClick");this.showLoading(s("components.thermalEscalation.loading")),this.content.addEventListener("click",t=>{var i;const e=t.target.closest(".te-card");if(!e)return;const a=Number(e.dataset.lat),n=Number(e.dataset.lon);Number.isFinite(a)&&Number.isFinite(n)&&((i=this.onLocationClick)==null||i.call(this,a,n))})}setLocationClickHandler(t){this.onLocationClick=t}setData(t){this.clusters=t.clusters,this.fetchedAt=t.fetchedAt,this.summary=t.summary,this.setCount(t.clusters.length),this.render()}render(){if(this.clusters.length===0){this.setSafeContent(P(`<div class="panel-empty">${o(s("components.thermalEscalation.empty"))}</div>`,"legacy Panel.setContent() migration"));return}const t=this.fetchedAt&&this.fetchedAt.getTime()>0?s("components.thermalEscalation.footer.updated",{time:this.fetchedAt.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}):"";this.setSafeContent(P(`
      <div class="te-panel">
        ${this.renderSummary()}
        <div class="te-list">
          ${this.clusters.map(e=>this.renderCard(e)).join("")}
        </div>
        ${t?`<div class="te-footer">${o(t)}</div>`:""}
      </div>
    `,"legacy Panel.setContent() migration"))}renderSummary(){const{clusterCount:t,elevatedCount:e,spikeCount:a,persistentCount:n,conflictAdjacentCount:i,highRelevanceCount:r}=this.summary,l=[{val:e,label:s("components.thermalEscalation.summary.elevated"),cls:"te-stat-elevated"},{val:a,label:s("components.thermalEscalation.summary.spikes"),cls:"te-stat-spike"},{val:n,label:s("components.thermalEscalation.summary.persist"),cls:"te-stat-persistent"},{val:i,label:s("components.thermalEscalation.summary.conflict"),cls:"te-stat-conflict"},{val:r,label:s("components.thermalEscalation.summary.strategic"),cls:"te-stat-strategic"}].filter(d=>d.val>0);return`
      <div class="te-summary">
        <div class="te-stat">
          <span class="te-stat-val">${t}</span>
          <span class="te-stat-label">${o(s("components.thermalEscalation.summary.total"))}</span>
        </div>
        ${l.map(d=>`
        <div class="te-stat ${d.cls}">
          <span class="te-stat-val">${d.val}</span>
          <span class="te-stat-label">${o(d.label)}</span>
        </div>`).join("")}
      </div>
    `}renderCard(t){const e=xt[t.status]??"normal",a=t.persistenceHours>=24?`${Math.round(t.persistenceHours/24)}d`:`${Math.round(t.persistenceHours)}h`,n=t.totalFrp>=1e3?`${(t.totalFrp/1e3).toFixed(1)}k`:t.totalFrp.toFixed(0),i=t.countDelta>0?"+":"",r=t.countDelta>0?"pos":t.countDelta<0?"neg":"",l=t.context==="conflict_adjacent"?`<span class="te-badge te-badge-conflict">${o(s("components.thermalEscalation.badges.conflictAdjacent"))}</span>`:t.context==="energy_adjacent"?`<span class="te-badge te-badge-energy">${o(s("components.thermalEscalation.badges.energyAdjacent"))}</span>`:t.context==="industrial"?`<span class="te-badge te-badge-industrial">${o(s("components.thermalEscalation.badges.industrial"))}</span>`:"",d=[`<span class="te-badge te-badge-${e}">${o(t.status)}</span>`,l,t.strategicRelevance==="high"?`<span class="te-badge te-badge-strategic">${o(s("components.thermalEscalation.badges.strategic"))}</span>`:""].filter(Boolean).join(""),g=It(t.lastDetectedAt);return`
      <div class="te-card te-card-${e}" data-lat="${t.lat}" data-lon="${t.lon}">
        <div class="te-card-accent"></div>
        <div class="te-card-body">
          <div class="te-region">${o(t.regionLabel)}</div>
          <div class="te-meta">${o(s("components.thermalEscalation.observations",{count:t.observationCount}))} · ${o(s("components.thermalEscalation.sources",{count:t.uniqueSourceCount}))}</div>
          <div class="te-badges">${d}</div>
        </div>
        <div class="te-metrics">
          <div class="te-frp">${o(n)} <span class="te-frp-unit">MW</span></div>
          <div class="te-delta ${r}">${o(`${i}${Math.round(t.countDelta)}`)} · z${t.zScore.toFixed(1)}</div>
          <div class="te-persist">${o(a)}</div>
          <div class="te-last">${o(g)}</div>
        </div>
      </div>
    `}}function It(h){const m=Date.now()-h.getTime();if(m<3600*1e3){const e=Math.max(1,Math.floor(m/6e4));return s("components.thermalEscalation.age.minutesAgo",{count:e})}if(m<1440*60*1e3){const e=Math.max(1,Math.floor(m/36e5));return s("components.thermalEscalation.age.hoursAgo",{count:e})}const t=Math.floor(m/(1440*60*1e3));return t<30?s("components.thermalEscalation.age.daysAgo",{count:t}):h.toISOString().slice(0,10)}const ne=Object.freeze(Object.defineProperty({__proto__:null,ThermalEscalationPanel:At},Symbol.toStringTag,{value:"Module"})),Rt=50,Ot=3600*1e3,Mt=180*1e3;class Ft extends D{constructor(){super({id:"oref-sirens",title:s("panels.orefSirens"),showCount:!0,trackActivity:!0,infoTooltip:s("components.orefSirens.infoTooltip")});c(this,"alerts",[]);c(this,"historyCount24h",0);c(this,"totalHistoryCount",0);c(this,"historyWaves",[]);c(this,"historyFetchInFlight",!1);c(this,"historyLastFetchAt",0);this.showLoading(s("components.orefSirens.checking"))}setData(t){if(!t.configured){this.setSafeContent(S`<div class="panel-empty">${s("components.orefSirens.notConfigured")}</div>`),this.setCount(0);return}const e=this.alerts.length;this.alerts=t.alerts||[],this.historyCount24h=t.historyCount24h||0,this.totalHistoryCount=t.totalHistoryCount||0,this.setCount(this.alerts.length||this.historyCount24h||this.totalHistoryCount),e===0&&this.alerts.length>0&&this.setNewBadge(this.alerts.length),this.render(),this.loadHistory()}loadHistory(){this.historyFetchInFlight||Date.now()-this.historyLastFetchAt<Mt||(this.historyFetchInFlight=!0,this.historyLastFetchAt=Date.now(),mt().then(t=>{var e;(e=t.history)!=null&&e.length&&(this.historyWaves=t.history,this.render())}).catch(t=>{console.warn("[OrefSirensPanel] History fetch failed:",t)}).finally(()=>{this.historyFetchInFlight=!1}))}formatAlertTime(t){try{const e=new Date(t).getTime();if(!Number.isFinite(e))return"";const a=Date.now()-e;if(a<6e4)return s("components.orefSirens.justNow");const n=Math.floor(a/6e4);if(n<60)return`${n}m`;const i=Math.floor(n/60);return i<24?`${i}h`:`${Math.floor(i/24)}d`}catch{return""}}formatWaveTime(t){try{const e=new Date(t);return Number.isFinite(e.getTime())?e.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})+" "+e.toLocaleDateString(void 0,{month:"short",day:"numeric"}):""}catch{return""}}renderHistoryWaves(){if(!this.historyWaves.length)return this.historyCount24h>0?S`<div class="oref-history-section">
          <div class="oref-history-title">${s("components.orefSirens.historySummary",{count:String(this.historyCount24h),waves:"..."})}</div>
          <div class="oref-wave-list" style="opacity:0.5;text-align:center;padding:8px">${s("components.orefSirens.loadingHistory",{defaultValue:"Loading history..."})}</div>
        </div>`:S``;const t=Date.now(),e=this.historyWaves.map(i=>({wave:i,ts:new Date(i.timestamp).getTime()}));e.sort((i,r)=>r.ts-i.ts);const a=e.slice(0,Rt),n=H(a.map(({wave:i,ts:r})=>{const l=t-r<Ot,d=l?"oref-wave-row oref-wave-recent":"oref-wave-row",g=l?S`<span class="oref-recent-badge">RECENT</span>`:S``,f=i.alerts.map(b=>b.title||b.cat),p=[...new Set(f)],u=i.alerts.reduce((b,T)=>{var C;return b+(((C=T.data)==null?void 0:C.length)||0)},0),w=p.join(", ")+(u>0?` - ${u} areas`:"");return S`<div class="${d}">
        <div class="oref-wave-header">
          <span class="oref-wave-time">${this.formatWaveTime(i.timestamp)}</span>
          ${g}
        </div>
        <div class="oref-wave-summary">${w}</div>
      </div>`}));return S`<div class="oref-history-section">
      <div class="oref-history-title">${s("components.orefSirens.historySummary",{count:String(this.historyCount24h),waves:String(a.length)})}</div>
      <div class="oref-wave-list">${n}</div>
    </div>`}render(){const t=this.renderHistoryWaves();if(this.alerts.length===0){this.setSafeContent(S`
        <div class="oref-panel-content">
          <div class="oref-status oref-ok">
            <span class="oref-status-icon">&#x2705;</span>
            <span>${s("components.orefSirens.noAlerts")}</span>
          </div>
          ${t}
        </div>
      `);return}const e=H(this.alerts.slice(0,20).map(a=>{const n=(a.data||[]).join(", "),i=this.formatAlertTime(a.alertDate);return S`<div class="oref-alert-row">
        <div class="oref-alert-header">
          <span class="oref-alert-title">${a.title||a.cat}</span>
          <span class="oref-alert-time">${i}</span>
        </div>
        <div class="oref-alert-areas">${n}</div>
      </div>`}));this.setSafeContent(S`
      <div class="oref-panel-content">
        <div class="oref-status oref-danger">
          <span class="oref-pulse"></span>
          <span>${s("components.orefSirens.activeSirens",{count:String(this.alerts.length)})}</span>
        </div>
        <div class="oref-list">${e}</div>
        ${t}
      </div>
    `)}}const re=Object.freeze(Object.defineProperty({__proto__:null,OrefSirensPanel:Ft},Symbol.toStringTag,{value:"Module"})),_t={normal:"var(--color-success, #22c55e)",minor:"#f59e0b",moderate:"#f97316",major:"#ef4444",severe:"#dc2626",unknown:"#9ca3af"},z={scheduled:"#6b7280",boarding:"#3b82f6",departed:"#8b5cf6",airborne:"#22c55e",landed:"#14b8a6",arrived:"#0ea5e9",cancelled:"#ef4444",diverted:"#f59e0b",unknown:"#6b7280"};function W(h){return h==null?"—":String(Math.round(h))}function M(h){return h?h.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}):"—"}function Y(h){return h?h<60?`${h}m`:`${Math.floor(h/60)}h ${h%60}m`:"—"}function F(){const h=new Date;return`${h.getFullYear()}-${String(h.getMonth()+1).padStart(2,"0")}-${String(h.getDate()).padStart(2,"0")}`}const Bt=["ops","flights","airlines","tracking","news","prices"],jt={ops:"Ops",flights:"Flights",airlines:"Airlines",tracking:"Track",news:"News",prices:"Prices"};class Ht extends D{constructor(){var n;super({id:"airline-intel",title:s("panels.airlineIntel"),trackActivity:!0,infoTooltip:s("components.airlineIntel.infoTooltip")});c(this,"activeTab","ops");c(this,"airports");c(this,"opsData",[]);c(this,"flightsData",[]);c(this,"carriersData",[]);c(this,"trackingData",[]);c(this,"trackingFlightData",[]);c(this,"trackingQuery","");c(this,"newsData",[]);c(this,"googleFlightsData",[]);c(this,"datesData",[]);c(this,"pricesMode","search");c(this,"pricesCabin","ECONOMY");c(this,"pricesDegraded",!1);c(this,"pricesError","");c(this,"pricesOrigin","IST");c(this,"pricesDest","");c(this,"pricesDep","");c(this,"datesStart","");c(this,"datesEnd","");c(this,"datesTripDuration",7);c(this,"datesRoundTrip",!0);c(this,"loading",!1);c(this,"refreshTimer",null);c(this,"liveIndicator");c(this,"tabBar");const t=q.get();this.airports=t.airports.slice(0,8);const e=t.routes[0];if(e){const i=e.split("-");i[0]&&(this.pricesOrigin=i[0]),i[1]&&(this.pricesDest=i[1])}else this.pricesOrigin=this.airports[0]??"IST",this.pricesDest=this.airports[1]??"";const a=document.createElement("button");a.className="icon-btn",a.title=s("common.refresh"),a.textContent="↻",a.addEventListener("click",()=>this.refresh()),this.header.appendChild(a),this.liveIndicator=document.createElement("span"),this.liveIndicator.className="live-badge",this.liveIndicator.textContent="● LIVE",this.liveIndicator.style.cssText="display:none;color:#22c55e;font-size:10px;font-weight:700;margin-left:8px;letter-spacing:0.5px;",(n=this.header.querySelector(".panel-title"))==null||n.appendChild(this.liveIndicator),this.tabBar=document.createElement("div"),this.tabBar.className="panel-tabs",Bt.forEach(i=>{const r=document.createElement("button");r.className=`panel-tab${i===this.activeTab?" active":""}`,r.textContent=jt[i],r.dataset.tab=i,r.addEventListener("click",()=>this.switchTab(i)),this.tabBar.appendChild(r)}),this.element.insertBefore(this.tabBar,this.content),this.content.classList.add("airline-intel-content"),this.content.addEventListener("click",i=>{const r=i.target,l=r.closest("[data-price-mode]");if(l){this.pricesMode=l.dataset.priceMode,this.pricesError="",this.pricesDegraded=!1,this.renderTab();return}(r.id==="priceSearchBtn"||r.closest("#priceSearchBtn"))&&this.handleFlightSearch(),(r.id==="datesSearchBtn"||r.closest("#datesSearchBtn"))&&this.handleDatesSearch(),(r.id==="trackSearchBtn"||r.closest("#trackSearchBtn"))&&this.handleTrackSearch(),(r.id==="trackClearBtn"||r.closest("#trackClearBtn"))&&(this.trackingQuery="",this.trackingFlightData=[],this.trackingData=[],this.loadTab("tracking"))}),this.content.addEventListener("keydown",i=>{i.key==="Enter"&&i.target.id==="trackQueryInput"&&this.handleTrackSearch()}),this.runWhenConnected(()=>{this.refresh(),this.refreshTimer=setInterval(()=>void this.refresh(),5*6e4)})}toggle(t){this.element.style.display=t?"":"none"}destroy(){this.refreshTimer&&clearInterval(this.refreshTimer),super.destroy()}updateLivePositions(t){this.trackingQuery||(this.trackingData=t,this.activeTab==="tracking"&&this.renderTab())}setLiveMode(t){this.liveIndicator.style.display=t?"":"none"}handleFlightSearch(){var d,g,f,p;const t=(((d=this.content.querySelector("#priceFromInput"))==null?void 0:d.value)||"").toUpperCase().trim(),e=(((g=this.content.querySelector("#priceToInput"))==null?void 0:g.value)||"").toUpperCase().trim(),a=((f=this.content.querySelector("#priceDepInput"))==null?void 0:f.value)||"",n=((p=this.content.querySelector("#priceCabinSelect"))==null?void 0:p.value)||"ECONOMY",i=this.content.querySelector("#priceInlineErr"),r=/^[A-Z]{3}$/;if(!r.test(t)||!r.test(e)){i&&(i.textContent="Enter valid 3-letter IATA codes");return}const l=F();if(a&&a<l){i&&(i.textContent="Departure date must be today or future");return}i&&(i.textContent=""),this.pricesOrigin=t,this.pricesDest=e,this.pricesDep=a,this.pricesCabin=n,this.loadTab("prices")}handleDatesSearch(){var p,u,w,b,T,C,L;const t=(((p=this.content.querySelector("#datesFromInput"))==null?void 0:p.value)||"").toUpperCase().trim(),e=(((u=this.content.querySelector("#datesToInput"))==null?void 0:u.value)||"").toUpperCase().trim(),a=((w=this.content.querySelector("#datesStartInput"))==null?void 0:w.value)||"",n=((b=this.content.querySelector("#datesEndInput"))==null?void 0:b.value)||"",i=((T=this.content.querySelector("#datesRoundTripCheck"))==null?void 0:T.checked)??!0,r=parseInt(((C=this.content.querySelector("#datesTripDurInput"))==null?void 0:C.value)||"7",10),l=((L=this.content.querySelector("#datesCabinSelect"))==null?void 0:L.value)||"ECONOMY",d=this.content.querySelector("#datesInlineErr"),g=/^[A-Z]{3}$/;if(!g.test(t)||!g.test(e)){d&&(d.textContent="Enter valid 3-letter IATA codes");return}if(!a||!n){d&&(d.textContent="Enter start and end dates");return}if(a<F()){d&&(d.textContent="Start date must be today or future");return}if(a>=n){d&&(d.textContent="Start date must be before end date");return}if(i&&(Number.isNaN(r)||r<1)){d&&(d.textContent="Trip duration must be at least 1 day");return}const f=(new Date(n).getTime()-new Date(a).getTime())/864e5;d&&(d.textContent=f>90?"Range exceeds 90 days — results may be incomplete":""),this.pricesOrigin=t,this.pricesDest=e,this.datesStart=a,this.datesEnd=n,this.datesRoundTrip=i,this.datesTripDuration=Number.isNaN(r)?7:r,this.pricesCabin=l,this.loadTab("prices")}handleTrackSearch(){var e;const t=(((e=this.content.querySelector("#trackQueryInput"))==null?void 0:e.value)||"").trim().toUpperCase();this.trackingQuery=t,this.trackingFlightData=[],this.trackingData=[],this.loadTab("tracking")}switchTab(t){this.activeTab=t,this.tabBar.querySelectorAll(".panel-tab").forEach(e=>{e.classList.toggle("active",e.dataset.tab===t)}),this.renderTab(),(t==="ops"&&!this.opsData.length||t==="flights"&&!this.flightsData.length||t==="airlines"&&!this.carriersData.length||t==="tracking"&&!this.trackingData.length||t==="news"&&!this.newsData.length)&&this.loadTab(t)}async refresh(){const t=this.activeTab!=="prices";if(!this.element.isConnected){this.runWhenConnected(()=>{this.refresh()});return}this.activeTab!=="ops"&&this.loadOps(),t&&this.loadTab(this.activeTab)}async loadOps(){this.opsData=await U(this.airports),this.activeTab==="ops"&&this.renderTab()}async loadTab(t){this.loading=!0,this.renderTab();try{switch(t){case"ops":this.opsData=await U(this.airports);break;case"flights":this.flightsData=await kt(this.airports[0]??"IST","both",30);break;case"airlines":this.carriersData=await bt(this.airports);break;case"tracking":this.trackingQuery?/^[A-Z]{2}\d{1,4}$/.test(this.trackingQuery)?this.trackingFlightData=await $t(this.trackingQuery):/^[0-9A-F]{6}$/i.test(this.trackingQuery)?this.trackingData=await I({icao24:this.trackingQuery.toLowerCase()}):this.trackingData=await I({callsign:this.trackingQuery}):this.trackingData=await I({});break;case"news":{const e=[...this.airports,...q.get().airlines];this.newsData=await yt(e,24,20);break}case"prices":{if(this.pricesMode==="dates"){const e=await vt({origin:this.pricesOrigin,destination:this.pricesDest,startDate:this.datesStart,endDate:this.datesEnd,tripDuration:this.datesTripDuration,isRoundTrip:this.datesRoundTrip,cabinClass:this.pricesCabin});this.datesData=e.dates,this.pricesDegraded=e.degraded,this.pricesError=e.error}else{const e=this.pricesDep||new Date(Date.now()+6048e5).toISOString().slice(0,10),a=await ft({origin:this.pricesOrigin,destination:this.pricesDest,departureDate:e,cabinClass:this.pricesCabin});this.googleFlightsData=a.flights,this.pricesDegraded=a.degraded,this.pricesError=a.error}break}}}catch{}this.loading=!1,this.renderTab()}renderLoading(){y(this.content,$(`<div class="panel-loading">${s("common.loading")}</div>`,"legacy direct innerHTML migration"))}renderTab(){if(this.loading){this.renderLoading();return}switch(this.activeTab){case"ops":this.renderOps();break;case"flights":this.renderFlights();break;case"airlines":this.renderAirlines();break;case"tracking":this.renderTracking();break;case"news":this.renderNews();break;case"prices":this.renderPrices();break}}renderOps(){if(!this.opsData.length){y(this.content,$(`<div class="no-data">${s("components.airlineIntel.noOpsData")}</div>`,"legacy direct innerHTML migration"));return}const t=this.opsData.map(e=>`
      <div class="ops-row">
        <div class="ops-iata">${o(e.iata)}</div>
        <div class="ops-name">${o(e.name||e.iata)}</div>
        <div class="ops-severity" style="color:${_t[e.severity]??"#aaa"}">${e.severity.toUpperCase()}</div>
        <div class="ops-delay">${e.avgDelayMinutes>0?`+${e.avgDelayMinutes}m`:"—"}</div>
        <div class="ops-cancel">${e.cancellationRate>0?`${e.cancellationRate.toFixed(1)}% cxl`:""}</div>
        ${e.closureStatus?'<div class="ops-closed">CLOSED</div>':""}
        ${e.notamFlags.length?'<div class="ops-notam">⚠️ NOTAM</div>':""}
      </div>`).join("");y(this.content,$(`<div class="ops-grid">${t}</div>`,"legacy direct innerHTML migration"))}renderFlights(){if(!this.flightsData.length){y(this.content,$(`<div class="no-data">${s("components.airlineIntel.noFlights")}</div>`,"legacy direct innerHTML migration"));return}const t=this.flightsData.map(e=>{const a=z[e.status]??"#6b7280";return`
        <div class="flight-row">
          <div class="flight-num">${o(e.flightNumber)}</div>
          <div class="flight-route">${o(e.origin.iata)} → ${o(e.destination.iata)}</div>
          <div class="flight-time">${M(e.scheduledDeparture)}</div>
          <div class="flight-delay" style="color:${e.delayMinutes>0?"#f97316":"#aaa"}">${e.delayMinutes>0?`+${e.delayMinutes}m`:""}</div>
          <div class="flight-status" style="color:${a}">${e.status}</div>
        </div>`}).join("");y(this.content,$(`<div class="flights-list">${t}</div>`,"legacy direct innerHTML migration"))}renderAirlines(){if(!this.carriersData.length){y(this.content,$(`<div class="no-data">${s("components.airlineIntel.noCarrierData")}</div>`,"legacy direct innerHTML migration"));return}const t=this.carriersData.slice(0,15).map(e=>`
      <div class="carrier-row">
        <div class="carrier-name">${o(e.carrierName||e.carrierIata)}</div>
        <div class="carrier-flights">${e.totalFlights} flt</div>
        <div class="carrier-delay" style="color:${e.delayPct>30?"#ef4444":"#aaa"}">${e.delayPct.toFixed(1)}% delayed</div>
        <div class="carrier-cancel">${e.cancellationRate.toFixed(1)}% cxl</div>
      </div>`).join("");y(this.content,$(`<div class="carriers-list">${t}</div>`,"legacy direct innerHTML migration"))}renderTracking(){const t=this.trackingQuery?'<button id="trackClearBtn" class="icon-btn" style="padding:4px 8px;color:#9ca3af" title="Back to live feed">×</button>':"",e=`
      <div class="track-search" style="display:flex;gap:6px;padding:8px 0 6px">
        <input id="trackQueryInput" class="price-input" placeholder="Flight (EK3) or callsign (UAE3)" value="${o(this.trackingQuery)}" style="flex:1;min-width:0">
        ${t}<button id="trackSearchBtn" class="icon-btn" style="padding:4px 10px">Track</button>
      </div>`;if(this.loading){y(this.content,$(`${e}<div class="panel-loading">${s("common.loading")}</div>`,"legacy direct innerHTML migration"));return}if(this.trackingFlightData.length){const n=this.trackingFlightData.map(i=>{const r=i.estimatedDeparture?`Dep ${M(i.estimatedDeparture)}`:"",l=i.estimatedArrival?` · Arr ${M(i.estimatedArrival)}`:"",d=z[i.status]??"#6b7280";return`
          <div class="track-flight-card" style="padding:8px 0;border-bottom:1px solid var(--border)">
            <div style="display:flex;gap:8px;align-items:baseline">
              <strong>${o(i.flightNumber)}</strong>
              <span style="color:#9ca3af;font-size:11px">${o(i.carrier.name||i.carrier.iata)}</span>
              <span style="color:${d};font-size:11px;margin-left:auto">${i.status}</span>
            </div>
            <div style="font-size:12px;color:var(--text-dim)">${o(i.origin.iata)} → ${o(i.destination.iata)}${r?` · ${r}`:""}${l}</div>
            ${i.aircraftType?`<div style="font-size:11px;color:#6b7280">${o(i.aircraftType)}</div>`:""}
            ${i.gate||i.terminal?`<div style="font-size:11px;color:#6b7280">${i.gate?`Gate ${o(i.gate)}`:""}${i.terminal?`${i.gate?" · ":""}T${o(i.terminal)}`:""}</div>`:""}
            ${i.delayMinutes>0?`<div style="color:#f97316;font-size:12px">+${i.delayMinutes}m delay</div>`:""}
          </div>`}).join("");y(this.content,$(`${e}<div>${n}</div>`,"legacy direct innerHTML migration"));return}if(this.trackingData.length){const n=this.trackingData.slice(0,20).map(i=>`
        <div class="track-row">
          <div class="track-cs">${o(i.callsign||i.icao24)}</div>
          <div class="track-alt">${W(i.altitudeFt)} ft</div>
          <div class="track-spd">${W(i.groundSpeedKts)} kts</div>
          <div class="track-pos">${i.lat.toFixed(2)}, ${i.lon.toFixed(2)}</div>
        </div>`).join("");y(this.content,$(`${e}<div class="tracking-list">${n}</div>`,"legacy direct innerHTML migration"));return}const a=this.trackingQuery?`<div class="no-data">No results for <strong>${o(this.trackingQuery)}</strong>.</div>`:`<div class="no-data">${s("components.airlineIntel.noTrackingData")}</div>`;y(this.content,$(`${e}${a}`,"legacy direct innerHTML migration"))}renderNews(){if(!this.newsData.length){y(this.content,$(`<div class="no-data">${s("components.airlineIntel.noNews")}</div>`,"legacy direct innerHTML migration"));return}const t=this.newsData.map(e=>`
      <div class="news-item" style="padding:8px 0;border-bottom:1px solid var(--border,#2a2a2a)">
        <a href="${Q(e.url)}" target="_blank" rel="noopener" class="news-link">${o(e.title)}</a>
        <div class="news-meta" style="font-size:11px;color:var(--text-dim,#888);margin-top:2px">${o(e.sourceName)} · ${e.publishedAt.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</div>
      </div>`).join("");y(this.content,$(`<div class="news-list" style="padding:0 4px">${t}</div>`,"legacy direct innerHTML migration"))}renderPrices(){const t=this.pricesMode==="search",e=`
      <div class="price-mode-toggle">
        <button class="price-mode-btn${t?" active":""}" data-price-mode="search">${o(s("components.airlineIntel.searchFlights"))}</button>
        <button class="price-mode-btn${t?"":" active"}" data-price-mode="dates">${o(s("components.airlineIntel.bestDates"))}</button>
      </div>`,a=this.pricesDegraded?`<div class="gf-degraded">${o(s("components.airlineIntel.degradedResults"))}</div>`:"";if(t){const n=this.pricesDep||new Date(Date.now()+6048e5).toISOString().slice(0,10),i=`
        <div class="price-controls">
          <input id="priceFromInput" class="price-input" placeholder="From" maxlength="3" value="${o(this.pricesOrigin)}" style="width:54px">
          <span style="color:#6b7280">→</span>
          <input id="priceToInput" class="price-input" placeholder="To" maxlength="3" value="${o(this.pricesDest)}" style="width:54px">
          <input id="priceDepInput" class="price-input" type="date" value="${o(n)}" style="width:128px">
          <select id="priceCabinSelect" class="price-input" style="width:110px">
            <option value="ECONOMY"${this.pricesCabin==="ECONOMY"?" selected":""}>Economy</option>
            <option value="PREMIUM_ECONOMY"${this.pricesCabin==="PREMIUM_ECONOMY"?" selected":""}>Premium Economy</option>
            <option value="BUSINESS"${this.pricesCabin==="BUSINESS"?" selected":""}>Business</option>
            <option value="FIRST"${this.pricesCabin==="FIRST"?" selected":""}>First</option>
          </select>
          <button id="priceSearchBtn" class="icon-btn" style="padding:4px 10px">${s("header.search")}</button>
        </div>
        <div id="priceInlineErr" style="color:#ef4444;font-size:11px;min-height:14px"></div>`;let r;this.googleFlightsData.length?r=`<div class="gf-list">${this.googleFlightsData.map(d=>{const g=d.stops===0?s("components.airlineIntel.nonstop"):`${d.stops} stop`,f=d.legs.map(p=>`
              <div class="gf-leg">
                <span class="gf-airline">${o(p.airlineCode)} ${o(p.flightNumber)}</span>
                <span>${o(p.departureAirport)} ${o(p.departureDatetime.slice(11,16))}</span>
                <span>→</span>
                <span>${o(p.arrivalAirport)} ${o(p.arrivalDatetime.slice(11,16))}</span>
                <span class="gf-dur">(${Y(p.durationMinutes)})</span>
              </div>`).join("");return`
            <div class="gf-card">
              <div class="gf-summary">
                <span class="gf-price">${Math.round(d.price).toLocaleString()}</span>
                <span class="gf-total-dur">${Y(d.durationMinutes)}</span>
                <span class="gf-stops">${o(g)}</span>
              </div>
              ${f}
            </div>`}).join("")}</div>`:this.pricesError?r=`<div class="no-data" style="color:#ef4444">${o(this.pricesError)}</div>`:r=`<div class="no-data">${o(s("components.airlineIntel.enterRouteAndDate"))}</div>`,y(this.content,$(`${e}${i}${a}${r}`,"legacy direct innerHTML migration"))}else{const n=`
        <div class="price-controls">
          <input id="datesFromInput" class="price-input" placeholder="From" maxlength="3" value="${o(this.pricesOrigin)}" style="width:54px">
          <span style="color:#6b7280">→</span>
          <input id="datesToInput" class="price-input" placeholder="To" maxlength="3" value="${o(this.pricesDest)}" style="width:54px">
          <input id="datesStartInput" class="price-input" type="date" value="${o(this.datesStart||F())}" style="width:128px">
          <input id="datesEndInput" class="price-input" type="date" value="${o(this.datesEnd)}" style="width:128px">
          <label style="display:flex;align-items:center;gap:4px;font-size:12px">
            <input id="datesRoundTripCheck" type="checkbox" ${this.datesRoundTrip?"checked":""}>${o(s("components.airlineIntel.roundTrip"))}
          </label>
          <label style="display:flex;align-items:center;gap:4px;font-size:12px">
            ${o(s("components.airlineIntel.tripDays"))}:
            <input id="datesTripDurInput" class="price-input" type="number" min="1" value="${this.datesTripDuration}" style="width:44px">
          </label>
          <select id="datesCabinSelect" class="price-input" style="width:110px">
            <option value="ECONOMY"${this.pricesCabin==="ECONOMY"?" selected":""}>Economy</option>
            <option value="PREMIUM_ECONOMY"${this.pricesCabin==="PREMIUM_ECONOMY"?" selected":""}>Premium Economy</option>
            <option value="BUSINESS"${this.pricesCabin==="BUSINESS"?" selected":""}>Business</option>
            <option value="FIRST"${this.pricesCabin==="FIRST"?" selected":""}>First</option>
          </select>
          <button id="datesSearchBtn" class="icon-btn" style="padding:4px 10px">${s("header.search")}</button>
        </div>
        <div id="datesInlineErr" style="color:#ef4444;font-size:11px;min-height:14px"></div>`;let i;if(this.datesData.length){const r=[...this.datesData].sort((p,u)=>p.price-u.price),l=r.map(p=>p.price),d=l[Math.floor(l.length*.2)]??1/0,g=l[Math.floor(l.length*.8)]??-1/0;i=`<div class="dp-list">${r.map(p=>{const u=p.price<=d?"dp-cheap":p.price>=g?"dp-expensive":"";return`
            <div class="dp-row">
              <span class="dp-date">${o(p.date)}</span>
              ${p.returnDate?`<span class="dp-return">${o(p.returnDate)}</span>`:""}
              <span class="dp-price ${u}">${Math.round(p.price).toLocaleString()}</span>
            </div>`}).join("")}</div>`}else this.pricesError?i=`<div class="no-data" style="color:#ef4444">${o(this.pricesError)}</div>`:i=`<div class="no-data">${o(s("components.airlineIntel.enterDateRange"))}</div>`;y(this.content,$(`${e}${n}${a}${i}`,"legacy direct innerHTML migration"))}}}const oe=Object.freeze(Object.defineProperty({__proto__:null,AirlineIntelPanel:Ht},Symbol.toStringTag,{value:"Module"}));export{oe as A,ee as D,re as O,se as S,ne as T,ae as U,ie as a};

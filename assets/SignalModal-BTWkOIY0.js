const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/trending-keywords-Be818gch.js","assets/main-CmSp9Hyk.js","assets/clerk-DvUNuV7p.js","assets/embed-url-DQf_jd4F.js","assets/panel-storage-C2uCSYbc.js","assets/i18n-qlunRAMb.js","assets/persistent-cache-cT66YF0P.js","assets/widget-store-DdTXyzMy.js","assets/debugbear-rum-CTwHbetR.js","assets/resilience-choropleth-utils-RzpthWna.js","assets/user-location-B56vgcIE.js","assets/panels-mAavEITu.js","assets/gdelt-intel-Bt6nynEG.js","assets/data-freshness-BbcT_SU1.js","assets/panel-gating-D5fzn_21.js","assets/cached-risk-scores-Bilwk5qW.js","assets/dom-utils-B8MVJOEB.js","assets/cross-domain-storage-BkfZ6fhr.js","assets/layout-batch-B9PC4ceT.js","assets/string-B04_ldoR.js","assets/continuous-Ds-kXw0U.js","assets/checkout-CdH-Of-b.js","assets/theme-manager-txZCzc-Z.js","assets/font-settings-B6XmwZwl.js","assets/embed-url-cZ8MpeuV.css"])))=>i.map(i=>d[i]);
var x=Object.defineProperty;var y=(r,e,o)=>e in r?x(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o;var p=(r,e,o)=>y(r,typeof e!="symbol"?e+"":e,o);import{_ as f}from"./clerk-DvUNuV7p.js";import{s as u,t as $,e as a}from"./dom-utils-B8MVJOEB.js";import{t,f as v}from"./panel-storage-C2uCSYbc.js";import{$ as b}from"./cached-risk-scores-Bilwk5qW.js";import"./i18n-qlunRAMb.js";import"./gdelt-intel-Bt6nynEG.js";import"./embed-url-DQf_jd4F.js";import"./persistent-cache-cT66YF0P.js";import"./widget-store-DdTXyzMy.js";import"./debugbear-rum-CTwHbetR.js";import"./data-freshness-BbcT_SU1.js";import"./panel-gating-D5fzn_21.js";function C(r){f(()=>import("./trending-keywords-Be818gch.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24])).then(e=>e.suppressTrendingTerm(r)).catch(e=>{console.warn("[SignalModal] suppressTrendingTerm failed (chunk load?):",e)})}class P{constructor(){p(this,"element");p(this,"currentSignals",[]);p(this,"audioEnabled",!0);p(this,"audio",null);p(this,"onLocationClick");p(this,"escHandler",e=>{e.key==="Escape"&&this.hide()});this.element=document.createElement("div"),this.element.className="signal-modal-overlay",this.element.setAttribute("role","dialog"),this.element.setAttribute("aria-modal","true"),u(this.element,$(`
      <div class="signal-modal">
        <div class="signal-modal-header">
          <span class="signal-modal-title">🎯 ${t("modals.signal.title")}</span>
          <button class="signal-modal-close" aria-label="Close">×</button>
        </div>
        <div class="signal-modal-content"></div>
        <div class="signal-modal-footer">
          <label class="signal-audio-toggle">
            <input type="checkbox" checked>
            <span>${t("modals.signal.soundAlerts")}</span>
          </label>
          <button class="signal-dismiss-btn">${t("modals.signal.dismiss")}</button>
        </div>
      </div>
    `,"legacy direct innerHTML migration")),document.body.appendChild(this.element),this.setupEventListeners(),this.initAudio();const e=this.element.querySelector(".signal-modal");e==null||e.addEventListener("animationend",()=>{e.style.willChange="auto"},{once:!0})}initAudio(){this.audio=new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleQYjfKapmWswEjCJvuPQfSoXZZ+3qqBJESSP0unGaxMJVYiytrFeLhR6p8znrFUXRW+bs7V3Qx1hn8Xjp1cYPnegprhkMCFmoLi1k0sZTYGlqqlUIA=="),this.audio.volume=.3}setupEventListeners(){var o,m;(o=this.element.querySelector(".signal-modal-close"))==null||o.addEventListener("click",()=>{this.hide()}),(m=this.element.querySelector(".signal-dismiss-btn"))==null||m.addEventListener("click",()=>{this.hide()}),this.element.addEventListener("click",i=>{i.target.classList.contains("signal-modal-overlay")&&this.hide()});const e=this.element.querySelector('input[type="checkbox"]');e==null||e.addEventListener("change",()=>{this.audioEnabled=e.checked}),this.element.addEventListener("click",i=>{const c=i.target;if(c.classList.contains("location-link")){const n=parseFloat(c.dataset.lat||"0"),l=parseFloat(c.dataset.lon||"0");this.onLocationClick&&!Number.isNaN(n)&&!Number.isNaN(l)&&(this.onLocationClick(n,l),this.hide());return}if(c.classList.contains("suppress-keyword-btn")){const n=(c.dataset.term||"").trim();if(!n)return;C(n),this.currentSignals=this.currentSignals.filter(l=>{const s=l.data.term;return typeof s!="string"||s.toLowerCase()!==n.toLowerCase()}),this.renderSignals()}})}setLocationClickHandler(e){this.onLocationClick=e}activateEsc(){document.addEventListener("keydown",this.escHandler)}show(e){e.length!==0&&(document.fullscreenElement||(this.currentSignals=[...e,...this.currentSignals].slice(0,50),this.renderSignals(),this.element.classList.add("active"),this.activateEsc(),this.playSound()))}showSignal(e){this.currentSignals=[e],this.renderSignals(),this.element.classList.add("active"),this.activateEsc()}showAlert(e){if(document.fullscreenElement)return;const o=this.element.querySelector(".signal-modal-content"),m={critical:v("--semantic-critical"),high:v("--semantic-high"),medium:v("--semantic-low"),low:v("--text-dim")},c={cii_spike:"📊",convergence:"🌍",cascade:"⚡",sanctions:"🚫",radiation:"☢️",composite:"🔗"}[e.type]||"⚠️",n=m[e.priority]||"#ff9944";let l="";if(e.components.ciiChange){const s=e.components.ciiChange,d=s.change>0?"+":"";l+=`
        <div class="signal-context-item">
          <span class="context-label">${t("modals.signal.country")}</span>
          <span class="context-value">${a(s.countryName)}</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">${t("modals.signal.scoreChange")}</span>
          <span class="context-value">${s.previousScore} → ${s.currentScore} (${d}${s.change})</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">${t("modals.signal.instabilityLevel")}</span>
          <span class="context-value" style="text-transform: uppercase; color: ${n}">${s.level}</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">${t("modals.signal.primaryDriver")}</span>
          <span class="context-value">${a(s.driver)}</span>
        </div>
      `}if(e.components.convergence){const s=e.components.convergence;l+=`
        <div class="signal-context-item">
          <span class="context-label">${t("modals.signal.location")}</span>
          <button class="location-link" data-lat="${s.lat}" data-lon="${s.lon}">${s.lat.toFixed(2)}°, ${s.lon.toFixed(2)}° ↗</button>
        </div>
        <div class="signal-context-item">
          <span class="context-label">${t("modals.signal.eventTypes")}</span>
          <span class="context-value">${s.types.join(", ")}</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">${t("modals.signal.eventCount")}</span>
          <span class="context-value">${t("modals.signal.eventCountValue",{count:s.totalEvents})}</span>
        </div>
      `}if(e.components.cascade){const s=e.components.cascade;l+=`
        <div class="signal-context-item">
          <span class="context-label">${t("modals.signal.source")}</span>
          <span class="context-value">${a(s.sourceName)} (${a(s.sourceType)})</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">${t("modals.signal.countriesAffected")}</span>
          <span class="context-value">${s.countriesAffected}</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">${t("modals.signal.impactLevel")}</span>
          <span class="context-value">${a(s.highestImpact)}</span>
        </div>
      `}if(e.components.sanctions){const s=e.components.sanctions;l+=`
        <div class="signal-context-item">
          <span class="context-label">Country</span>
          <span class="context-value">${a(s.countryName)} (${a(s.countryCode)})</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">Pressure</span>
          <span class="context-value">${s.entryCount} designations${s.newEntryCount>0?` · +${s.newEntryCount} new`:""}</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">Top program</span>
          <span class="context-value">${a(s.topProgram)} (${s.topProgramCount})</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">Vessels / aircraft</span>
          <span class="context-value">${s.vesselCount} / ${s.aircraftCount}</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">Dataset size</span>
          <span class="context-value">${s.totalCount}${s.datasetDate?` · ${new Date(s.datasetDate).toISOString().slice(0,10)}`:""}</span>
        </div>
      `}if(e.components.radiation){const s=e.components.radiation;l+=`
        <div class="signal-context-item">
          <span class="context-label">Station</span>
          <span class="context-value">${a(s.siteName)}</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">Reading</span>
          <span class="context-value">${s.value.toFixed(1)} ${a(s.unit)}</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">Baseline</span>
          <span class="context-value">${s.baselineValue.toFixed(1)} ${a(s.unit)}</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">Delta / z-score</span>
          <span class="context-value">+${s.delta.toFixed(1)} / ${s.zScore.toFixed(2)}</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">Confidence</span>
          <span class="context-value">${a(s.confidence)}${s.corroborated?" · confirmed":""}${s.conflictingSources?" · conflicting":""}</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">Sources</span>
          <span class="context-value">${a(s.contributingSources.join(" + "))} (${s.sourceCount})</span>
        </div>
        <div class="signal-context-item">
          <span class="context-label">Anomalies in batch</span>
          <span class="context-value">${s.anomalyCount} total (${s.spikeCount} spike, ${s.elevatedCount} elevated, ${s.corroboratedCount} confirmed)</span>
        </div>
      `}u(o,$(`
      <div class="signal-item" style="border-left-color: ${n}">
        <div class="signal-type">${c} ${e.type.toUpperCase().replace("_"," ")}</div>
        <div class="signal-title">${a(e.title)}</div>
        <div class="signal-description">${a(e.summary)}</div>
        <div class="signal-meta">
          <span class="signal-confidence" style="background: ${n}22; color: ${n}">${e.priority.toUpperCase()}</span>
          <span class="signal-time">${this.formatTime(e.timestamp)}</span>
        </div>
        <div class="signal-context">
          ${l}
        </div>
        ${e.countries.length>0?`
          <div class="signal-topics">
            ${e.countries.map(s=>`<span class="signal-topic">${a(s)}</span>`).join("")}
          </div>
        `:""}
      </div>
    `,"legacy direct innerHTML migration")),this.element.classList.add("active"),this.activateEsc()}playSound(){var e;this.audioEnabled&&this.audio&&(this.audio.currentTime=0,(e=this.audio.play())==null||e.catch(()=>{}))}hide(){this.element.classList.remove("active"),document.removeEventListener("keydown",this.escHandler)}renderSignals(){const e=this.element.querySelector(".signal-modal-content"),o={prediction_leads_news:`🔮 ${t("modals.signal.predictionLeading")}`,news_leads_markets:`📰 ${t("modals.signal.newsLeading")}`,silent_divergence:`🔇 ${t("modals.signal.silentDivergence")}`,velocity_spike:`🔥 ${t("modals.signal.velocitySpike")}`,keyword_spike:`📊 ${t("modals.signal.keywordSpike")}`,convergence:`◉ ${t("modals.signal.convergence")}`,triangulation:`△ ${t("modals.signal.triangulation")}`,flow_drop:`🛢️ ${t("modals.signal.flowDrop")}`,flow_price_divergence:`📈 ${t("modals.signal.flowPriceDivergence")}`,geo_convergence:`🌐 ${t("modals.signal.geoConvergence")}`,explained_market_move:`✓ ${t("modals.signal.marketMove")}`,sector_cascade:`📊 ${t("modals.signal.sectorCascade")}`,military_surge:`🛩️ ${t("modals.signal.militarySurge")}`},m=this.currentSignals.map(i=>{var h;const c=b(i.type),n=i.data,l=n==null?void 0:n.newsCorrelation,s=n==null?void 0:n.focalPointContext,d={lat:n==null?void 0:n.lat,lon:n==null?void 0:n.lon,regionName:n==null?void 0:n.regionName};return`
        <div class="signal-item ${a(i.type)}">
          <div class="signal-type">${o[i.type]||a(i.type)}</div>
          <div class="signal-title">${a(i.title)}</div>
          <div class="signal-description">${a(i.description)}</div>
          <div class="signal-meta">
            <span class="signal-confidence">${t("modals.signal.confidence")}: ${Math.round(i.confidence*100)}%</span>
            <span class="signal-time">${this.formatTime(i.timestamp)}</span>
          </div>
          ${i.data.explanation?`
            <div class="signal-explanation">${a(i.data.explanation)}</div>
          `:""}
          ${s&&s.length>0?`
            <div class="signal-focal-points">
              <div class="focal-points-header">📡 ${t("modals.signal.focalPoints")}</div>
              ${s.map(g=>`<div class="focal-point-item">${a(g)}</div>`).join("")}
            </div>
          `:""}
          ${l?`
            <div class="signal-news-correlation">
              <div class="news-correlation-header">📰 ${t("modals.signal.newsCorrelation")}</div>
              <pre class="news-correlation-text">${a(l)}</pre>
            </div>
          `:""}
          ${d.lat&&d.lon?`
            <div class="signal-location">
              <button class="location-link" data-lat="${d.lat}" data-lon="${d.lon}">
                📍 ${t("modals.signal.viewOnMap")}: ${d.regionName?a(d.regionName):`${d.lat.toFixed(2)}°, ${d.lon.toFixed(2)}°`}
              </button>
            </div>
          `:""}
          <div class="signal-context">
            <div class="signal-context-item why-matters">
              <span class="context-label">${t("modals.signal.whyItMatters")}</span>
              <span class="context-value">${a(c.whyItMatters)}</span>
            </div>
            <div class="signal-context-item actionable">
              <span class="context-label">${t("modals.signal.action")}</span>
              <span class="context-value">${a(c.actionableInsight)}</span>
            </div>
            <div class="signal-context-item confidence-note">
              <span class="context-label">${t("modals.signal.note")}</span>
              <span class="context-value">${a(c.confidenceNote)}</span>
            </div>
          </div>
          ${(h=i.data.relatedTopics)!=null&&h.length?`
            <div class="signal-topics">
              ${i.data.relatedTopics.map(g=>`<span class="signal-topic">${a(g)}</span>`).join("")}
            </div>
          `:""}
          ${i.type==="keyword_spike"&&typeof(n==null?void 0:n.term)=="string"?`
            <div class="signal-actions">
              <button class="suppress-keyword-btn" data-term="${a(n.term)}">${t("modals.signal.suppress")}</button>
            </div>
          `:""}
        </div>
      `}).join("");u(e,$(m,"legacy direct innerHTML migration"))}formatTime(e){return e.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}getElement(){return this.element}}export{P as SignalModal};

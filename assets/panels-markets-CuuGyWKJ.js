const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/embed-url-DQf_jd4F.js","assets/panel-storage-C2uCSYbc.js","assets/clerk-DvUNuV7p.js","assets/i18n-qlunRAMb.js","assets/persistent-cache-cT66YF0P.js","assets/widget-store-DdTXyzMy.js","assets/debugbear-rum-CTwHbetR.js","assets/embed-url-cZ8MpeuV.css"])))=>i.map(i=>d[i]);
var pe=Object.defineProperty;var ue=(i,s,t)=>s in i?pe(i,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[s]=t;var x=(i,s,t)=>ue(i,typeof s!="symbol"?s+"":s,t);import{P as S}from"./Panel-7nZQI8-8.js";import{t as d,S as kt,k as xt,p as me}from"./panel-storage-C2uCSYbc.js";import{n as Kt,b as D,p as E,q as Qt}from"./widget-store-DdTXyzMy.js";import{e as l,u as $,a as ge,f as G,j as _t}from"./dom-utils-B8MVJOEB.js";import{m as I,s as he}from"./sparkline-EyuwviXB.js";import"./panels-mAavEITu.js";import{c as yt}from"./watchlist-modal-Dyp3m9pm.js";import{b as fe,r as ve,g as xe,c as ye,o as be}from"./market-chart-modal-C11LyKnB.js";import{X as $e,Y as we}from"./main-CmSp9Hyk.js";import{b as Se}from"./stock-fundamentals-display-BdO3K7h-.js";import{W as Jt}from"./WatchlistTableView-CCgGoArd.js";import{g as M,c as ke,E as _e,a as bt,r as Ce,M as Zt}from"./embed-url-DQf_jd4F.js";import{describeFreshness as Pe}from"./persistent-cache-cT66YF0P.js";import{F as Fe}from"./FrameworkSelector-CMi_OCdc.js";import{h as Ae}from"./panel-gating-D5fzn_21.js";import{_}from"./clerk-DvUNuV7p.js";import{s as te}from"./gdelt-intel-Bt6nynEG.js";class Re extends S{constructor(){super({id:"markets",title:d("panels.markets"),infoTooltip:d("components.markets.infoTooltip")});x(this,"_markets",[]);x(this,"_marketsRateLimited",!1);x(this,"_disclosures",null);this.header.appendChild(yt()),fe(this.content,()=>this._markets,be)}renderMarkets(t,e){this._markets=t,this._marketsRateLimited=!!e,this._renderMarketsAndDisclosures()}renderDisclosures(t){this._disclosures=t??null,this._renderMarketsAndDisclosures()}_renderMarketsAndDisclosures(){const t=ve(this._disclosures),e=this._markets.map((a,r)=>`
      <div${xe(a,r,d("components.markets.chart.title",{symbol:a.display}))}>
        <div class="market-info">
          <span class="market-name">${l(a.name)}</span>
          <span class="market-symbol">${l(a.display)}</span>
        </div>
        <div class="market-data">
          ${I(a.sparkline,a.change)}
          <span class="market-price">${Kt(a.price)}</span>
          <span class="market-change ${D(a.change)}">${E(a.change)}</span>
        </div>
      </div>
    `).join(""),n=ye({hasMarkets:this._markets.length>0,marketsHtml:e,disclosureHtml:t,unavailableMessage:this._marketsRateLimited?d("common.rateLimitedMarket"):d("common.failedMarketData")});if(n.kind==="retry"){this.showRetrying(n.message);return}this.setSafeContent($(n.html,"legacy Panel.setContent() migration"))}}class De extends S{constructor(){super({id:"heatmap",title:d("panels.heatmap"),infoTooltip:d("components.heatmap.infoTooltip")});x(this,"_tab","performance");x(this,"_heatmapData",[]);x(this,"_sectorBars",[]);x(this,"_valuations",{});this.content.addEventListener("click",t=>{const e=t.target.closest("[data-tab]"),n=e==null?void 0:e.dataset.tab;(n==="performance"||n==="valuations")&&(this._tab=n,this._render())})}renderHeatmap(t,e){this._heatmapData=t,this._sectorBars=e??[],this._render()}updateValuations(t){if(t!==void 0){if(Object.keys(t).length===0){this._valuations={},this._tab==="valuations"&&(this._tab="performance"),this._render();return}this._valuations=t,this._render()}}_buildTabBar(){return Object.keys(this._valuations).length>0?`<div style="display:flex;gap:4px;margin-bottom:8px">
      <button class="panel-tab${this._tab==="performance"?" active":""}" data-tab="performance" style="font-size:11px;padding:3px 10px">Performance</button>
      <button class="panel-tab${this._tab==="valuations"?" active":""}" data-tab="valuations" style="font-size:11px;padding:3px 10px">Valuations</button>
    </div>`:""}_render(){if(this._heatmapData.length===0){this.showRetrying(d("common.failedSectorData"));return}const t=this._buildTabBar();if(this._tab==="valuations"&&Object.keys(this._valuations).length>0){this.setSafeContent($(t+this._renderValuations(),"legacy Panel.setContent() migration"));return}this.setSafeContent($(t+this._renderPerformance(),"legacy Panel.setContent() migration"))}_renderPerformance(){const e='<div class="heatmap">'+this._heatmapData.map(o=>{const c=o.change??0,p=o.symbol?`<div class="sector-ticker">${l(o.symbol)}</div>`:"";return`
        <div class="heatmap-cell ${Qt(c)}">
          ${p}
          <div class="sector-change ${D(c)}">${E(c)}</div>
          <div class="sector-name">${l(o.name)}</div>
        </div>
      `}).join("")+"</div>";if(this._sectorBars.length===0)return e;const n=[...this._sectorBars].filter(o=>Number.isFinite(o.change1d)).sort((o,c)=>c.change1d-o.change1d);if(n.length===0)return e;const a=Math.max(...n.map(o=>Math.abs(o.change1d)),3),r='<div class="heatmap-bar-chart">'+n.map(o=>{const c=Math.min(Math.abs(o.change1d)/a*100,100).toFixed(1),p=o.change1d>=0,m=p?"var(--green)":"var(--red)",g=p?"+":"";return`<div class="heatmap-bar-row">
  <span class="heatmap-bar-label">${l(o.symbol)}</span>
  <div class="heatmap-bar-track"><div class="heatmap-bar-fill" style="width:${c}%;background:${m}"></div></div>
  <span class="heatmap-bar-value ${p?"positive":"negative"}">${g}${o.change1d.toFixed(2)}%</span>
</div>`}).join("")+"</div>";return e+r}_renderValuations(){const t=Object.entries(this._valuations).map(([u,v])=>({symbol:u,...v})).filter(u=>u.forwardPE!==null||u.trailingPE!==null);if(t.length===0)return'<div style="padding:8px;color:var(--text-dim);font-size:12px">No valuation data available</div>';const e=[...t].sort((u,v)=>(u.forwardPE??u.trailingPE??999)-(v.forwardPE??v.trailingPE??999)),n=e.map(u=>u.forwardPE??u.trailingPE??0).filter(u=>u>0),a=(n.length>0?n[Math.floor(n.length/2)]:void 0)??20,r=Math.max(...n,30),o=new Map(this._heatmapData.map(u=>[u.symbol,u.name])),c=u=>u!==null?u.toFixed(1):"--",p=u=>{if(u===null)return"--";const v=u*100;return`${v>=0?"+":""}${v.toFixed(1)}%`},m=u=>u!==null?u.toFixed(2):"--",g=u=>u===null?"var(--text-dim)":u<a*.8?"var(--green)":u>a*1.2?"var(--red)":"#e6a817",f='<div class="heatmap-bar-chart" style="margin-bottom:12px">'+e.map(u=>{const v=u.forwardPE??u.trailingPE??0,b=Math.min(v/r*100,100).toFixed(1),w=g(v>0?v:null),k=o.get(u.symbol)??u.symbol;return`<div class="heatmap-bar-row">
  <span class="heatmap-bar-label" title="${l(u.symbol)}">${l(k)}</span>
  <div class="heatmap-bar-track"><div class="heatmap-bar-fill" style="width:${b}%;background:${w}"></div></div>
  <span class="heatmap-bar-value" style="color:${w}">${v>0?v.toFixed(1)+"x":"--"}</span>
</div>`}).join("")+"</div>",h=`<div style="overflow-x:auto">
<table style="width:100%;border-collapse:collapse;font-size:11px">
  <thead><tr style="color:var(--text-dim);border-bottom:1px solid var(--border)">
    <th style="padding:3px 6px;text-align:left;font-weight:500">Sector</th>
    <th style="padding:3px 6px;text-align:right;font-weight:500">Trail P/E</th>
    <th style="padding:3px 6px;text-align:right;font-weight:500">Fwd P/E</th>
    <th style="padding:3px 6px;text-align:right;font-weight:500">Beta</th>
    <th style="padding:3px 6px;text-align:right;font-weight:500">YTD</th>
  </tr></thead>
  <tbody>${e.map(u=>{const v=o.get(u.symbol)??u.symbol;return`<tr>
  <td style="padding:3px 6px;white-space:nowrap;font-size:11px">${l(v)}</td>
  <td style="padding:3px 6px;text-align:right;font-size:11px;color:${g(u.trailingPE)}">${c(u.trailingPE)}</td>
  <td style="padding:3px 6px;text-align:right;font-size:11px;color:${g(u.forwardPE)}">${c(u.forwardPE)}</td>
  <td style="padding:3px 6px;text-align:right;font-size:11px">${m(u.beta)}</td>
  <td style="padding:3px 6px;text-align:right;font-size:11px;color:${u.ytdReturn===null?"var(--text-dim)":u.ytdReturn>=0?"var(--green)":"var(--red)"}">${p(u.ytdReturn)}</td>
</tr>`}).join("")}</tbody>
</table></div>`;return f+h}}function Ee(i){if(typeof i!="string"||i==="")return null;const s=Number(i);return Number.isFinite(s)?s:null}function ee(i){if(!Array.isArray(i)||i.length<13)return null;const s=i[i.length-1],t=i[i.length-13];return s==null||t==null||!(t>0)||!Number.isFinite(s)?null:(s-t)/t}function Me(i){const s=Array.isArray(i.assets)?i.assets:null;if(!s||s.length===0)return null;const t=[],e=[];for(const n of s){const a=typeof n.funding=="number"&&Number.isFinite(n.funding)?n.funding:null,r=Array.isArray(n.sparkOi)?n.sparkOi.filter(p=>Number.isFinite(p)):[],o=Array.isArray(n.sparkScore)?n.sparkScore.filter(p=>Number.isFinite(p)):[],c={symbol:String(n.symbol??""),display:String(n.display??""),group:String(n.group??""),funding:a,oiDelta1h:ee(r),composite:typeof n.composite=="number"?n.composite:0,warmup:!!n.warmup,stale:!!n.stale,sparkScore:o};c.group==="fx"?t.push(c):e.push(c)}return{ts:typeof i.ts=="number"?i.ts:0,warmup:!!i.warmup,fxAssets:t,commodityAssets:e,unavailable:!1}}function Te(i){const s=[],t=[];for(const e of i.assets){const n={symbol:e.symbol,display:e.display,group:e.group,funding:Ee(e.funding),oiDelta1h:ee(e.sparkOi),composite:Number(e.composite||0),warmup:!!e.warmup,stale:!!e.stale,sparkScore:Array.isArray(e.sparkScore)?e.sparkScore:[]};e.group==="fx"?s.push(n):t.push(n)}return{ts:Number(i.ts||0),warmup:!!i.warmup,fxAssets:s,commodityAssets:t,unavailable:!1}}const Ct=[{symbol:"EURUSD=X",label:"EUR",flag:"🇪🇺",multiply:!1},{symbol:"GBPUSD=X",label:"GBP",flag:"🇬🇧",multiply:!1},{symbol:"USDJPY=X",label:"JPY",flag:"🇯🇵",multiply:!0},{symbol:"USDCNY=X",label:"CNY",flag:"🇨🇳",multiply:!0},{symbol:"USDINR=X",label:"INR",flag:"🇮🇳",multiply:!0},{symbol:"AUDUSD=X",label:"AUD",flag:"🇦🇺",multiply:!1},{symbol:"USDCHF=X",label:"CHF",flag:"🇨🇭",multiply:!0},{symbol:"USDCAD=X",label:"CAD",flag:"🇨🇦",multiply:!0},{symbol:"USDTRY=X",label:"TRY",flag:"🇹🇷",multiply:!0}];class ze extends S{constructor(){super({id:"commodities",title:d("panels.commodities"),infoTooltip:d("components.commodities.infoTooltip")});x(this,"_tab","commodities");x(this,"_commodityData",[]);x(this,"_fxRates",[]);this.content.addEventListener("click",t=>{const e=t.target.closest("[data-tab]"),n=e==null?void 0:e.dataset.tab;(n==="commodities"||n==="fx"||n==="xau"&&kt==="commodity")&&(this._tab=n,this._render())})}renderCommodities(t){this._commodityData=t,this._render()}updateFxRates(t){this._fxRates=t,this._render()}_buildTabBar(t,e){const a=[`<button class="panel-tab${this._tab==="commodities"?" active":""}" data-tab="commodities" style="font-size:11px;padding:3px 10px">Commodities</button>`];return t&&a.push(`<button class="panel-tab${this._tab==="fx"?" active":""}" data-tab="fx" style="font-size:11px;padding:3px 10px">EUR FX</button>`),e&&a.push(`<button class="panel-tab${this._tab==="xau"?" active":""}" data-tab="xau" style="font-size:11px;padding:3px 10px">XAU/FX</button>`),a.length>1?`<div style="display:flex;gap:4px;margin-bottom:8px">${a.join("")}</div>`:""}_renderXau(){const t=this._commodityData.find(r=>r.symbol==="GC=F"&&r.price!==null);if(!(t!=null&&t.price))return'<div style="padding:8px;color:var(--text-dim);font-size:12px">Gold price unavailable</div>';const e=t.price,n=new Map(this._commodityData.filter(r=>{var o;return(o=r.symbol)==null?void 0:o.endsWith("=X")}).map(r=>[r.symbol,r])),a=Ct.map(r=>{const o=n.get(r.symbol);if(!(o!=null&&o.price)||!Number.isFinite(o.price))return null;const c=r.multiply?e*o.price:e/o.price;if(!Number.isFinite(c)||c<=0)return null;const p=Math.round(c).toLocaleString();return`<div class="commodity-item">
        <div class="commodity-name">${l(r.flag)} XAU/${l(r.label)}</div>
        <div class="commodity-price" style="font-size:11px">${l(p)}</div>
      </div>`}).filter(Boolean);return a.length===0?`<div class="commodities-grid">${Ct.map(o=>`<div class="commodity-item">
          <div class="commodity-name">${l(o.flag)} XAU/${l(o.label)}</div>
          <div class="commodity-price" style="font-size:11px">--</div>
        </div>`).join("")}</div><div style="margin-top:6px;font-size:9px;color:var(--text-dim)">FX rates unavailable</div>`:`<div class="commodities-grid">${a.join("")}</div><div style="margin-top:6px;font-size:9px;color:var(--text-dim)">Computed from GC=F + Yahoo FX</div>`}_render(){const t=this._fxRates.length>0,e=kt==="commodity"&&this._commodityData.some(o=>o.symbol==="GC=F"&&o.price!==null);this._tab==="xau"&&!e&&(this._tab="commodities");const n=this._buildTabBar(t,e);if(this._tab==="fx"&&t){const o=this._fxRates.map(c=>{const p=c.change1d??null,m=p!==null?`${p>=0?"+":""}${p.toFixed(4)}`:"",g=p===null?"":p>=0?"change-positive":"change-negative";return`<div class="commodity-item">
          <div class="commodity-name">EUR/${l(c.currency)}</div>
          <div class="commodity-price">${l(c.rate.toFixed(4))}</div>
          ${m?`<div class="commodity-change ${l(g)}">${l(m)}</div>`:""}
        </div>`}).join("");this.setSafeContent($(n+`<div class="commodities-grid">${o}</div><div style="margin-top:6px;font-size:9px;color:var(--text-dim)">Source: ECB</div>`,"legacy Panel.setContent() migration"));return}if(this._tab==="xau"&&e){this.setSafeContent($(n+this._renderXau(),"legacy Panel.setContent() migration"));return}const a=this._commodityData.filter(o=>{var c;return typeof o.price=="number"&&Number.isFinite(o.price)&&!((c=o.symbol)!=null&&c.endsWith("=X"))});if(a.length===0){if(!t){this.showRetrying(d("common.failedCommodities"));return}this.setSafeContent($(n+`<div style="padding:8px;color:var(--text-dim);font-size:12px">${d("common.failedCommodities")}</div>`,"legacy Panel.setContent() migration"));return}const r='<div class="commodities-grid">'+a.map(o=>`
        <div class="commodity-item">
          <div class="commodity-name">${l(o.display)}</div>
          ${I(o.sparkline,o.change,60,18)}
          <div class="commodity-price">${Kt(o.price)}</div>
          <div class="commodity-change ${D(o.change)}">${E(o.change)}</div>
        </div>
      `).join("")+"</div>";this.setSafeContent($(n+r,"legacy Panel.setContent() migration"))}}class Ne extends S{constructor(){super({id:"crypto",title:d("panels.crypto"),infoTooltip:d("components.crypto.infoTooltip")})}renderCrypto(s){if(s.length===0){this.showRetrying(d("common.failedCryptoData"));return}const t=s.map(e=>`
      <div class="market-item">
        <div class="market-info">
          <span class="market-name">${l(e.name)}</span>
          <span class="market-symbol">${l(e.symbol)}</span>
        </div>
        <div class="market-data">
          ${I(e.sparkline,e.change)}
          <span class="market-price">$${e.price.toLocaleString()}</span>
          <span class="market-change ${D(e.change)}">${E(e.change)}</span>
        </div>
      </div>
    `).join("");this.setSafeContent($(t,"legacy Panel.setContent() migration"))}}class Be extends S{constructor(){super({id:"crypto-heatmap",title:"Crypto Sectors"})}renderSectors(s){if(s.length===0){this.showRetrying(d("common.failedSectorData"));return}const t='<div class="heatmap">'+s.map(e=>{const n=e.change??0;return`
        <div class="heatmap-cell ${Qt(n)}">
          <div class="sector-name">${l(e.name)}</div>
          <div class="sector-change ${D(n)}">${E(n)}</div>
        </div>
      `}).join("")+"</div>";this.setSafeContent($(t,"legacy Panel.setContent() migration"))}}class Z extends S{renderTokens(s){if(s.length===0){this.showRetrying(d("common.failedCryptoData"));return}const t=s.map(e=>`
      <div class="market-item">
        <div class="market-info">
          <span class="market-name">${l(e.name)}</span>
          <span class="market-symbol">${l(e.symbol)}</span>
        </div>
        <div class="market-data">
          <span class="market-price">$${e.price.toLocaleString(void 0,{maximumFractionDigits:e.price<1?6:2})}</span>
          <span class="market-change ${D(e.change24h)}">${E(e.change24h)}</span>
          <span class="market-change market-change--7d ${D(e.change7d)}">${E(e.change7d)}W</span>
        </div>
      </div>
    `).join("");this.setSafeContent($(t,"legacy Panel.setContent() migration"))}}class Le extends Z{constructor(){super({id:"defi-tokens",title:"DeFi Tokens",infoTooltip:d("components.defiTokens.infoTooltip")})}}class Ie extends Z{constructor(){super({id:"ai-tokens",title:"AI Tokens",infoTooltip:d("components.aiTokens.infoTooltip")})}}class Oe extends Z{constructor(){super({id:"other-tokens",title:"Alt Tokens",infoTooltip:d("components.altTokens.infoTooltip")})}}const In=Object.freeze(Object.defineProperty({__proto__:null,AiTokensPanel:Ie,CommoditiesPanel:ze,CryptoHeatmapPanel:Be,CryptoPanel:Ne,DefiTokensPanel:Le,HeatmapPanel:De,MarketPanel:Re,OtherTokensPanel:Oe,TokenListPanel:Z,mapHyperliquidFlowResponse:Te,mapHyperliquidFlowSeed:Me},Symbol.toStringTag,{value:"Module"}));function tt(i){const s=Number.isFinite(i)?i.toFixed(2):"0.00";return`${i>=0?"+":""}${s}%`}function Pt(i,s){return Number.isFinite(i)?`${s==="USD"?"$":""}${i.toFixed(2)}${s&&s!=="USD"?` ${s}`:""}`:"N/A"}function Ft(i){const s=i.toLowerCase();return s.includes("buy")?"badge-bullish":s.includes("hold")||s.includes("watch")?"badge-neutral":"badge-bearish"}function At(i,s){return i.length===0?"":`<ul class="${s}" style="margin:8px 0 0;padding-left:18px;font-size:12px;line-height:1.5">${i.map(t=>`<li>${l(t)}</li>`).join("")}</ul>`}function V(i){const s=Math.abs(i);return s>=1e9?`$${(i/1e9).toFixed(1)}B`:s>=1e6?`$${(i/1e6).toFixed(1)}M`:s>=1e3?`$${(i/1e3).toFixed(0)}K`:`$${i.toFixed(0)}`}function je(i){return i==="P"?"Buy":i==="S"?"Sell":i==="M"?"Exercise":i==="A"?"Award":i==="D"?"Disposition":i==="F"?"Tax/Fee":i}class Ue extends S{constructor(){super({id:"stock-analysis",title:"Premium Stock Analysis",infoTooltip:d("components.stockAnalysis.infoTooltip"),premium:"locked"});x(this,"insiderBySymbol",{});x(this,"tableView");x(this,"lastItems",[]);x(this,"lastHistory",{});this.header.appendChild(yt("Edit Watchlist"))}setInsiderData(t,e){this.insiderBySymbol[t]=e}renderAnalyses(t,e={},n="live"){if(t.length===0){this.setDataBadge("unavailable"),this.showRetrying("No premium stock analyses available yet.");return}this.setDataBadge(n,`${t.length} symbols`),this.lastItems=t,this.lastHistory=e,this.tableView?this.tableView.updateRenderDetail(a=>this.renderCard(a,this.lastHistory[a.symbol]||[])):this.tableView=new Jt({intro:this.buildIntro(t.length),columns:[{key:"symbol",label:"Symbol",sortable:!0,sortOptionKey:"symbol-asc",cell:a=>`<strong>${l(a.display||a.symbol)}</strong>`},{key:"price",label:"Price",align:"right",cell:a=>l(Pt(a.currentPrice,a.currency))},{key:"signal",label:"Signal",cell:a=>`<span class="signal-badge ${Ft(a.signal)}">${l(a.signal)}</span>`},{key:"score",label:"Score",align:"right",sortable:!0,sortOptionKey:"score-desc",cell:a=>l(String(a.signalScore))},{key:"change",label:"1d %",align:"right",sortable:!0,sortOptionKey:"change-desc",cell:a=>`<span style="color:${a.changePercent>=0?"var(--semantic-normal)":"var(--semantic-critical)"}">${l(tt(a.changePercent))}</span>`}],filters:[{key:"all",label:"All",match:()=>!0},{key:"strong-buy",label:"Strong Buy",match:a=>a.signal.toLowerCase().includes("strong buy")},{key:"buy",label:"Buy+",match:a=>a.signal.toLowerCase().includes("buy")},{key:"hold",label:"Hold",match:a=>a.signal.toLowerCase().includes("hold")||a.signal.toLowerCase().includes("watch")},{key:"sell",label:"Sell",match:a=>a.signal.toLowerCase().includes("sell")}],sortOptions:[{key:"score-desc",label:"Score ↓",cmp:(a,r)=>r.signalScore-a.signalScore},{key:"change-desc",label:"1d % ↓",cmp:(a,r)=>r.changePercent-a.changePercent},{key:"symbol-asc",label:"Symbol A-Z",cmp:(a,r)=>(a.display||a.symbol).localeCompare(r.display||r.symbol)}],defaultSort:"score-desc",defaultFilter:"all",getKey:a=>a.symbol,getSearchText:a=>`${a.symbol} ${a.display||""} ${a.name||""}`,renderDetail:a=>this.renderCard(a,this.lastHistory[a.symbol]||[]),searchPlaceholder:"Search ticker or name..."}),this.tableView.setItems(t),this.rerender()}rerender(){this.tableView&&(this.tableView.updateIntro(this.buildIntro(this.lastItems.length)),this.setSafeContent($(this.tableView.render(),"legacy Panel.setContent() migration")),this.tableView.bind(this.content,()=>this.rerender()))}buildIntro(t){const e=$e().filter(r=>!we(r.symbol)).length,n=t===1?"ticker":"tickers",a=e>0?` <span style="color:var(--text-dim)">${e} watchlist ${e===1?"symbol is an index/FX rate":"symbols are indices/FX rates"} and don't get an equity report.</span>`:"";return`Analyst-grade equity reports for the ${t} ${n} in your watchlist — your picks lead, popular names fill the rest. Use <strong>Edit Watchlist</strong> to add your own.${a}`}formatDividendRate(t,e){const n=(e||"").trim().toUpperCase();if(n&&n!=="USD")try{return`${new Intl.NumberFormat("en-US",{style:"currency",currency:n}).format(t)}/share`}catch{return`${n} ${t.toFixed(2)}/share`}return`$${t.toFixed(2)}/share`}renderDividendProfile(t){if(!t.dividendYield||t.dividendYield<=0)return"";const e=`${t.dividendYield.toFixed(1)}%`,n=t.trailingAnnualDividendRate>0?` (${this.formatDividendRate(t.trailingAnnualDividendRate,t.currency)})`:"",a=t.dividendCagr!==0?`${t.dividendCagr>0?"+":""}${t.dividendCagr.toFixed(1)}%`:"N/A",r=t.dividendFrequency?`<span class="badge-neutral" style="font-size:10px;padding:2px 6px;border-radius:3px">${l(t.dividendFrequency)}</span>`:"",o=t.exDividendDate>0?new Date(t.exDividendDate).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"N/A",c=typeof t.payoutRatio=="number"&&t.payoutRatio>0,p=c?`${(t.payoutRatio*100).toFixed(1)}%`:"",m=c?`<div><div style="color:var(--text-dim)">Payout Ratio</div><div style="margin-top:3px">${l(p)}</div></div>`:"";return`
      <div style="border:1px solid var(--border);padding:10px 12px">
        <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim);margin-bottom:8px">Dividend Profile</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px;font-size:11px">
          <div><div style="color:var(--text-dim)">Yield</div><div style="margin-top:3px">${l(e)}${l(n)}</div></div>
          <div><div style="color:var(--text-dim)">5Y CAGR</div><div style="margin-top:3px">${l(a)}</div></div>
          <div><div style="color:var(--text-dim)">Frequency</div><div style="margin-top:3px">${r||"N/A"}</div></div>
          ${m}
          <div><div style="color:var(--text-dim)">Ex-Dividend</div><div style="margin-top:3px">${l(o)}</div></div>
        </div>
      </div>
    `}renderCard(t,e){const n=Ft(t.signal),a=e.filter(p=>p.generatedAt!==t.generatedAt).slice(0,3),r=a[0],o=r?t.signalScore-r.signalScore:null,c=t.headlines.slice(0,2).map(p=>{const m=ge(p.link),g=l(p.title),f=l(p.source||"Source");return`<a href="${m}" target="_blank" rel="noreferrer" style="display:block;color:var(--text);text-decoration:none;padding:8px 10px;border:1px solid var(--border);background:rgba(255,255,255,0.02)"><div style="font-size:12px;line-height:1.45">${g}</div><div style="margin-top:4px;font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">${f}</div></a>`}).join("");return`
      <section class="signal-card" style="padding:14px;display:flex;flex-direction:column;gap:10px">
        <div style="display:flex;justify-content:space-between;gap:12px;align-items:flex-start">
          <div>
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <strong style="font-size:16px;letter-spacing:-0.02em">${l(t.name||t.symbol)}</strong>
              <span style="font-size:11px;color:var(--text-dim);font-family:var(--font-mono);text-transform:uppercase">${l(t.display||t.symbol)}</span>
              <span class="signal-badge ${n}" style="font-family:var(--font-mono)">${l(t.signal)}</span>
            </div>
            <div style="margin-top:6px;font-size:12px;color:var(--text-dim);line-height:1.5">${l(t.summary)}</div>
          </div>
          <div style="text-align:right;min-width:110px">
            <div style="font-size:18px;font-weight:700">${l(Pt(t.currentPrice,t.currency))}</div>
            <div style="font-size:12px;color:${t.changePercent>=0?"var(--semantic-normal)":"var(--semantic-critical)"}">${l(tt(t.changePercent))}</div>
            <div style="margin-top:6px;font-size:11px;color:var(--text-dim)">Score ${l(String(t.signalScore))} · ${l(t.confidence)}</div>
          </div>
          ${e.length>=2?(()=>{const p=e.slice(0,6).reverse().map(f=>f.signalScore),m=p[p.length-1]??0,g=p[p.length-2]??m;return he(p,m>=g?"var(--semantic-normal)":"var(--semantic-critical)",60,20,"display:block;margin-top:4px;align-self:flex-end")})():""}
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px;font-size:11px">
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Trend</div><div style="margin-top:4px">${l(t.trendStatus)}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">MA5 Bias</div><div style="margin-top:4px">${l(tt(t.biasMa5))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">RSI 12</div><div style="margin-top:4px">${l(t.rsi12.toFixed(1))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Volume</div><div style="margin-top:4px">${l(t.volumeStatus)}</div></div>
        </div>
        ${this.renderDividendProfile(t)}
        <div style="font-size:12px;line-height:1.55;color:var(--text)"><strong style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Action</strong><div style="margin-top:4px">${l(t.action)}</div></div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px">
          <div>
            <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Bullish Factors</div>
            ${At(t.bullishFactors.slice(0,3),"badge-bullish")}
          </div>
          <div>
            <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Risk Factors</div>
            ${At(t.riskFactors.slice(0,3),"badge-bearish")}
          </div>
        </div>
        <div style="font-size:12px;line-height:1.55;color:var(--text-dim)">
          <strong style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Why Now</strong>
          <div style="margin-top:4px">${l(t.whyNow)}</div>
        </div>
        ${r?`
          <div style="font-size:12px;line-height:1.55;color:var(--text-dim)">
            <strong style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Signal Drift</strong>
            <div style="margin-top:4px">
              Previous run was ${l(r.signal)} at score ${l(String(r.signalScore))}.
              Current drift is ${l(`${o&&o>0?"+":""}${(o||0).toFixed(1)}`)}.
            </div>
          </div>
        `:""}
        ${a.length>0?`
          <div style="display:grid;gap:6px">
            <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Recent History</div>
            ${a.map(p=>`
              <div style="display:flex;justify-content:space-between;gap:12px;padding:8px 10px;border:1px solid var(--border);background:rgba(255,255,255,0.02);font-size:11px">
                <span>${l(p.signal)} · score ${l(String(p.signalScore))}</span>
                <span style="color:var(--text-dim)">${l(new Date(p.generatedAt).toLocaleString())}</span>
              </div>
            `).join("")}
          </div>
        `:""}
        ${this.renderInsiderSection(t.symbol)}
        ${c?`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:8px">${c}</div>`:""}
        ${this.renderAnalystConsensus(t)}
        ${this.renderFundamentals(t)}
      </section>
    `}renderFundamentals(t){const e=(a,r,o)=>`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:88px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">${l(a)}</div><div style="margin-top:2px${o?`;color:${o}`:""}">${l(r)}</div></div>`,n=Se(t.fundamentals,t.currency).map(a=>e(a.label,a.value,a.color));return n.length===0?"":`
      <div style="border-top:1px solid var(--border);margin-top:4px;padding-top:10px">
        <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim);margin-bottom:8px">Fundamentals</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px">${n.join("")}</div>
      </div>
    `}renderAnalystConsensus(t){const e=t.analystConsensus,n=t.priceTarget,a=t.recentUpgrades,r=e&&e.total>0,o=typeof(n==null?void 0:n.mean)=="number"&&n.mean>0,c=typeof(n==null?void 0:n.median)=="number"&&n.median>0,p=!!n&&n.numberOfAnalysts>0&&(o||c),m=a&&a.length>0;return!r&&!p&&!m?"":`
      <div style="border-top:1px solid var(--border);margin-top:4px;padding-top:10px">
        <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim);margin-bottom:8px">Analyst Consensus</div>
        ${r?this.renderRatingBar(e):""}
        ${p?this.renderPriceTarget(n,t.currentPrice,t.currency):""}
        ${m?this.renderRecentUpgrades(a):""}
      </div>
    `}renderRatingBar(t){const e=t.total||1,n=c=>(c/e*100).toFixed(1),a=[{label:"Strong Buy",count:t.strongBuy,color:"#16a34a",pct:n(t.strongBuy)},{label:"Buy",count:t.buy,color:"#4ade80",pct:n(t.buy)},{label:"Hold",count:t.hold,color:"#facc15",pct:n(t.hold)},{label:"Sell",count:t.sell,color:"#f87171",pct:n(t.sell)},{label:"Strong Sell",count:t.strongSell,color:"#dc2626",pct:n(t.strongSell)}].filter(c=>c.count>0),r=a.map(c=>`<div style="flex:${c.count};background:${c.color};height:8px;min-width:2px" title="${l(c.label)}: ${c.count} (${c.pct}%)"></div>`).join(""),o=a.map(c=>`<span style="display:inline-flex;align-items:center;gap:3px"><span style="width:8px;height:8px;border-radius:2px;background:${c.color};display:inline-block"></span>${c.count}</span>`).join('<span style="color:var(--border);margin:0 4px">|</span>');return`
      <div style="margin-bottom:8px">
        <div style="display:flex;gap:1px;border-radius:4px;overflow:hidden;margin-bottom:4px">${r}</div>
        <div style="font-size:10px;color:var(--text-dim);display:flex;align-items:center;flex-wrap:wrap;gap:2px">${o}<span style="margin-left:6px;color:var(--text-dim)">(${e} analysts)</span></div>
      </div>
    `}renderPriceTarget(t,e,n){const a=n==="USD"?"$":n==="EUR"?"€":n==="GBP"?"£":n||"$",r=a.length===1,o=u=>r?`${a}${u.toFixed(2)}`:`${u.toFixed(2)} ${a}`,c=u=>typeof u=="number"&&Number.isFinite(u)&&u>0,p=c(t.low)?t.low:void 0,m=c(t.high)?t.high:void 0,g=c(t.mean)?t.mean:void 0,y=(c(t.median)?t.median:void 0)??g;if(!y)return"";const h=[];if(p!==void 0&&h.push(`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:90px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Low</div><div style="margin-top:2px">${l(o(p))}</div></div>`),h.push(`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:90px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Median</div><div style="margin-top:2px">${l(o(y))}</div></div>`),m!==void 0&&h.push(`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:90px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">High</div><div style="margin-top:2px">${l(o(m))}</div></div>`),h.push(`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:90px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Analysts</div><div style="margin-top:2px">${l(String(t.numberOfAnalysts))}</div></div>`),e>0){const u=(y-e)/e*100,v=u>=0?"var(--semantic-normal)":"var(--semantic-critical)",b=`${u>=0?"+":""}${u.toFixed(1)}%`;h.push(`<div style="border:1px solid var(--border);padding:6px 8px;flex:1;min-width:90px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">vs Current</div><div style="margin-top:2px;color:${v}">${l(b)}</div></div>`)}return`<div style="display:flex;flex-wrap:wrap;gap:8px;font-size:11px;margin-bottom:8px">${h.join("")}</div>`}renderRecentUpgrades(t){return`
      <div style="display:grid;gap:4px">
        <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Recent Actions</div>
        ${t.slice(0,3).map(n=>{const a=n.action==="up"||n.action==="init"?"var(--semantic-normal)":n.action==="down"?"var(--semantic-critical)":"var(--text-dim)",r=n.action==="up"?"Upgrade":n.action==="down"?"Downgrade":n.action==="init"?"Initiated":l(n.action),o=n.fromGrade?`${l(n.fromGrade)} → ${l(n.toGrade)}`:l(n.toGrade);return`
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;padding:5px 8px;border:1px solid var(--border);background:rgba(255,255,255,0.02);font-size:11px">
          <span style="font-weight:500">${l(n.firm)}</span>
          <span style="color:${a};white-space:nowrap">${r}</span>
          <span style="color:var(--text-dim);white-space:nowrap">${o}</span>
        </div>
      `}).join("")}
      </div>
    `}renderInsiderSection(t){const e=this.insiderBySymbol[t];if(e===void 0)return"";if(e.unavailable)return`
        <div style="font-size:11px;color:var(--text-dim);padding:8px;border:1px solid var(--border)">
          Insider data unavailable
        </div>`;if(e.transactions.length===0&&e.totalBuys===0&&e.totalSells===0)return`
        <div style="font-size:11px;color:var(--text-dim);padding:8px;border:1px solid var(--border)">
          No insider transactions in the last 6 months
        </div>`;const n=V(e.totalBuys),a=V(e.totalSells),r=`${e.netValue>=0?"+":""}${V(e.netValue)}`,o=e.netValue>=0?"var(--semantic-normal)":"var(--semantic-critical)",c=`
      <div style="display:flex;gap:16px;flex-wrap:wrap;font-size:12px;font-family:var(--font-mono)">
        <span>Buys: <span style="color:var(--semantic-normal)">${l(n)}</span></span>
        <span>Sells: <span style="color:var(--semantic-critical)">${l(a)}</span></span>
        <span>Net: <span style="color:${o};font-weight:600">${l(r)}</span></span>
      </div>`,p=e.transactions.slice(0,5),m=p.length>0?`
      <table style="width:100%;border-collapse:collapse;font-size:11px;margin-top:6px">
        <thead>
          <tr style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em;text-align:left">
            <th style="padding:4px 6px;border-bottom:1px solid var(--border)">Name</th>
            <th style="padding:4px 6px;border-bottom:1px solid var(--border)">Type</th>
            <th style="padding:4px 6px;border-bottom:1px solid var(--border);text-align:right">Shares</th>
            <th style="padding:4px 6px;border-bottom:1px solid var(--border);text-align:right">Value</th>
            <th style="padding:4px 6px;border-bottom:1px solid var(--border)">Date</th>
          </tr>
        </thead>
        <tbody>
          ${p.map(g=>{const f=g.transactionCode==="P",y=g.transactionCode==="S",h=f?"var(--semantic-normal)":y?"var(--semantic-critical)":"var(--text-dim)",u=g.value===0?"—":V(g.value);return`
              <tr>
                <td style="padding:4px 6px;border-bottom:1px solid var(--border);max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l(g.name)}</td>
                <td style="padding:4px 6px;border-bottom:1px solid var(--border);color:${h}">${l(je(g.transactionCode))}</td>
                <td style="padding:4px 6px;border-bottom:1px solid var(--border);text-align:right;font-family:var(--font-mono)">${Number.isFinite(g.shares)?g.shares.toLocaleString():"0"}</td>
                <td style="padding:4px 6px;border-bottom:1px solid var(--border);text-align:right;font-family:var(--font-mono)">${u}</td>
                <td style="padding:4px 6px;border-bottom:1px solid var(--border);color:var(--text-dim)">${l(g.transactionDate)}</td>
              </tr>`}).join("")}
        </tbody>
      </table>`:"";return`
      <div style="display:grid;gap:6px">
        <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Insider Activity (6 months)</div>
        ${c}
        ${m}
      </div>`}}const On=Object.freeze(Object.defineProperty({__proto__:null,StockAnalysisPanel:Ue},Symbol.toStringTag,{value:"Module"}));function et(i){return i>0?"#8df0b2":i<0?"#ff8c8c":"var(--text-dim)"}function R(i){return`${i>0?"+":""}${i.toFixed(1)}%`}function Ge(i){return i>=55?"badge-bullish":i>=45?"badge-neutral":"badge-bearish"}function Ve(i){return i>=55?"Profitable":i>=45?"Mixed":"Losing"}class qe extends S{constructor(){super({id:"stock-backtest",title:"Premium Backtesting",infoTooltip:d("components.stockBacktest.infoTooltip"),premium:"locked"});x(this,"tableView");this.header.appendChild(yt("Edit Watchlist"))}renderBacktests(t,e="live"){if(t.length===0){this.setDataBadge("unavailable"),this.showRetrying("No stock backtests available yet.");return}this.setDataBadge(e,`${t.length} symbols`),this.tableView||(this.tableView=new Jt({intro:"Historical replay of the premium stock-analysis signal engine over recent daily bars.",columns:[{key:"symbol",label:"Symbol",sortable:!0,sortOptionKey:"symbol-asc",cell:n=>`<strong>${l(n.display||n.symbol)}</strong>`},{key:"winrate",label:"Win Rate",align:"right",sortable:!0,sortOptionKey:"winrate-desc",cell:n=>l(R(n.winRate))},{key:"direction",label:"Direction",align:"right",sortable:!0,sortOptionKey:"direction-desc",cell:n=>l(R(n.directionAccuracy))},{key:"avgreturn",label:"Avg Return",align:"right",sortable:!0,sortOptionKey:"avgreturn-desc",cell:n=>`<span style="color:${et(n.avgSimulatedReturnPct)}">${l(R(n.avgSimulatedReturnPct))}</span>`},{key:"signals",label:"Signals",align:"right",sortable:!0,sortOptionKey:"signals-desc",cell:n=>l(String(n.actionableEvaluations))}],filters:[{key:"all",label:"All",match:()=>!0},{key:"profitable",label:"Profitable",match:n=>n.winRate>=55},{key:"mixed",label:"Mixed",match:n=>n.winRate>=45&&n.winRate<55},{key:"losing",label:"Losing",match:n=>n.winRate<45}],sortOptions:[{key:"winrate-desc",label:"Win Rate ↓",cmp:(n,a)=>a.winRate-n.winRate},{key:"direction-desc",label:"Direction ↓",cmp:(n,a)=>a.directionAccuracy-n.directionAccuracy},{key:"avgreturn-desc",label:"Avg Return ↓",cmp:(n,a)=>a.avgSimulatedReturnPct-n.avgSimulatedReturnPct},{key:"signals-desc",label:"Signals ↓",cmp:(n,a)=>a.actionableEvaluations-n.actionableEvaluations},{key:"symbol-asc",label:"Symbol A-Z",cmp:(n,a)=>(n.display||n.symbol).localeCompare(a.display||a.symbol)}],defaultSort:"winrate-desc",defaultFilter:"all",getKey:n=>n.symbol,getSearchText:n=>`${n.symbol} ${n.display||""} ${n.name||""}`,renderDetail:n=>this.renderDetail(n),searchPlaceholder:"Search ticker or name..."})),this.tableView.setItems(t),this.rerender()}rerender(){this.tableView&&(this.setSafeContent($(this.tableView.render(),"legacy Panel.setContent() migration")),this.tableView.bind(this.content,()=>this.rerender()))}renderDetail(t){return`
      <section style="padding:14px;display:flex;flex-direction:column;gap:10px">
        <div style="display:flex;justify-content:space-between;gap:12px;align-items:flex-start">
          <div>
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <strong style="font-size:16px;letter-spacing:-0.02em">${l(t.name||t.symbol)}</strong>
              <span style="font-size:11px;color:var(--text-dim);font-family:var(--font-mono);text-transform:uppercase">${l(t.display||t.symbol)}</span>
              <span class="signal-badge ${Ge(t.winRate)}">${l(Ve(t.winRate))}</span>
            </div>
            <div style="margin-top:6px;font-size:12px;color:var(--text-dim);line-height:1.5">${l(t.summary)}</div>
          </div>
          <div style="text-align:right;min-width:110px">
            <div style="font-size:18px;font-weight:700;color:${et(t.avgSimulatedReturnPct)}">${l(R(t.avgSimulatedReturnPct))}</div>
            <div style="font-size:11px;color:var(--text-dim)">Avg simulated return</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:8px;font-size:11px">
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Win Rate</div><div style="margin-top:4px">${l(R(t.winRate))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Direction Accuracy</div><div style="margin-top:4px">${l(R(t.directionAccuracy))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Cumulative</div><div style="margin-top:4px;color:${et(t.cumulativeSimulatedReturnPct)}">${l(R(t.cumulativeSimulatedReturnPct))}</div></div>
          <div style="border:1px solid var(--border);padding:8px"><div style="color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em">Signals</div><div style="margin-top:4px">${l(String(t.actionableEvaluations))}</div></div>
        </div>
        <div style="display:grid;gap:6px">
          <div style="font-size:11px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-dim)">Recent Evaluations</div>
          ${t.evaluations.map(e=>`
            <div style="display:flex;justify-content:space-between;gap:12px;padding:8px 10px;border:1px solid var(--border);background:rgba(255,255,255,0.02);font-size:11px">
              <span>${l(e.signal)} · ${l(e.outcome)} · ${l(R(e.simulatedReturnPct))}</span>
              <span style="color:var(--text-dim)">${l(new Date(Number(e.analysisAt)).toLocaleDateString())}</span>
            </div>
          `).join("")}
        </div>
      </section>
    `}}const jn=Object.freeze(Object.defineProperty({__proto__:null,StockBacktestPanel:qe},Symbol.toStringTag,{value:"Module"}));function He(i){return i>=1e6?`${(i/1e6).toFixed(1)}M`:i>=1e3?`${(i/1e3).toFixed(1)}K`:String(i)}function Ye(i){return i>=80?"#e74c3c":i>=50?"#e67e22":i>=25?"#f1c40f":"#27ae60"}class We extends S{constructor(){super({id:"wsb-ticker-scanner",title:d("panels.wsbTickerScanner"),infoTooltip:d("components.wsbTickerScanner.infoTooltip"),showCount:!0,premium:"locked"});x(this,"_tickers",[]);x(this,"_hasData",!1);x(this,"_sortField","mentionCount");x(this,"_sortAsc",!1);this.content.addEventListener("click",t=>{const n=t.target.closest("[data-sort]");if(!n)return;const a=n.dataset.sort;a===this._sortField?this._sortAsc=!this._sortAsc:(this._sortField=a,this._sortAsc=!1),this._render()})}async fetchData(){var e,n,a;const t=M("wsbTickers");if((e=t==null?void 0:t.tickers)!=null&&e.length)return this.updateData(t.tickers),!0;try{const r=await fetch(xt("/api/bootstrap?keys=wsbTickers"),{signal:AbortSignal.timeout(5e3)});if(r.ok){const{data:o}=await r.json();if((a=(n=o.wsbTickers)==null?void 0:n.tickers)!=null&&a.length)return this.updateData(o.wsbTickers.tickers),!0}}catch{}return this.showError("No ticker data available yet",()=>{this.fetchData()},60),!1}updateData(t){this._tickers=[...t],this._hasData=this._tickers.length>0,this._hasData?(this.setCount(this._tickers.length),this._render()):(this.setCount(0),this.showError("No trending tickers found",()=>{this.fetchData()},120))}_sorted(){const t=this._sortAsc?1:-1;return[...this._tickers].sort((e,n)=>t*(e[this._sortField]-n[this._sortField]))}_sortIndicator(t){return t!==this._sortField?"":this._sortAsc?" ▲":" ▼"}_render(){const t=this._sorted(),e=Math.max(1,...t.map(o=>o.velocityScore)),n="font-size:9px;font-weight:700;color:var(--text-dim);text-transform:uppercase;padding:4px 6px;cursor:pointer;user-select:none;white-space:nowrap",a="font-size:11px;padding:5px 6px;vertical-align:middle",r=t.slice(0,50).map((o,c)=>{const p=Ye(o.velocityScore),m=Math.max(4,Math.round(o.velocityScore/e*100)),g=o.subreddits.map(f=>`<span style="font-size:8px;padding:1px 4px;border-radius:2px;background:rgba(255,255,255,0.06);color:var(--text-dim);margin-right:2px">r/${l(f)}</span>`).join("");return`<tr style="border-bottom:1px solid var(--border)">
        <td style="${a};color:var(--text-dim);text-align:right;min-width:20px">${c+1}</td>
        <td style="${a};font-family:'SF Mono',SFMono-Regular,Consolas,monospace;font-weight:700;color:var(--text)">${l(o.symbol)}</td>
        <td style="${a};text-align:right;color:var(--text)">${o.mentionCount}</td>
        <td style="${a};text-align:right;color:var(--text)">${He(o.totalScore)}</td>
        <td style="${a};min-width:80px">
          <div style="display:flex;align-items:center;gap:4px">
            <span style="font-size:10px;font-weight:600;color:${p};min-width:24px;text-align:right">${Math.round(o.velocityScore)}</span>
            <div style="flex:1;height:4px;border-radius:2px;background:rgba(255,255,255,0.08)">
              <div style="height:100%;width:${m}%;border-radius:2px;background:${p}"></div>
            </div>
          </div>
        </td>
        <td style="${a}">${g}</td>
      </tr>`}).join("");this.setSafeContent($(`
      <div style="overflow-x:auto;overflow-y:auto;max-height:480px">
        <table style="width:100%;border-collapse:collapse;border-spacing:0">
          <thead>
            <tr style="border-bottom:1px solid var(--border)">
              <th style="${n};text-align:right">#</th>
              <th style="${n};text-align:left">Ticker</th>
              <th style="${n};text-align:right" data-sort="mentionCount">Mentions${this._sortIndicator("mentionCount")}</th>
              <th style="${n};text-align:right" data-sort="totalScore">Score${this._sortIndicator("totalScore")}</th>
              <th style="${n};text-align:left" data-sort="velocityScore">Velocity${this._sortIndicator("velocityScore")}</th>
              <th style="${n};text-align:left">Source</th>
            </tr>
          </thead>
          <tbody>${r||'<tr><td colspan="6" style="padding:16px;text-align:center;color:var(--text-dim);font-size:12px">No ticker data</td></tr>'}</tbody>
        </table>
      </div>
      <div style="margin-top:6px;font-size:9px;color:var(--text-dim)">Reddit · r/wallstreetbets, r/stocks, r/investing · sorted by ${this._sortField.replace(/([A-Z])/g," $1").toLowerCase()}</div>
    `,"legacy Panel.setContent() migration"))}}const Un=Object.freeze(Object.defineProperty({__proto__:null,WsbTickerScannerPanel:We},Symbol.toStringTag,{value:"Module"}));function Xe(i){const s=i.toUpperCase();return s==="LONG"?"badge-bullish":s==="SHORT"?"badge-bearish":"badge-neutral"}function Ke(i){const s=i.toUpperCase();return s==="HIGH"?"badge-bullish":s==="LOW"?"badge-bearish":"badge-neutral"}function Qe(i){const s=i.toUpperCase();return s==="LONG"?d("components.marketImplications.directions.long"):s==="SHORT"?d("components.marketImplications.directions.short"):d("components.marketImplications.directions.hedge")}function Je(i){if(!i||i.length===0)return"";const s=Math.random().toString(36).slice(2,8),t=i.map((e,n)=>{const a=n<i.length-1?' <span style="color:var(--text-dim);margin:0 2px">&rarr;</span> ':"";return`<span class="chain-node" data-chain-id="${s}" data-node-idx="${n}" data-logic="${l(e.logic)}"
      style="cursor:pointer;border-bottom:1px dotted var(--text-dim)">${l(e.node)}</span>${a}`}).join("");return`
    <div style="font-size:10px;color:var(--text-dim);margin-top:6px;line-height:1.8">
      <span style="text-transform:uppercase;letter-spacing:0.06em;opacity:0.6">${l(d("components.marketImplications.rationale"))}</span> ${t}
    </div>
    <div id="chain-logic-${s}" style="display:none;font-size:10px;color:var(--text-dim);font-style:italic;margin-top:2px;padding-left:4px"></div>
  `}function Ze(i){return`
    <div class="signal-card">
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:8px">
        <span class="signal-badge ${Xe(i.direction)}">${Qe(i.direction)}</span>
        <strong style="font-size:14px;letter-spacing:-0.02em">${l(i.ticker)}</strong>
        ${i.name?`<span style="font-size:11px;color:var(--text-dim)">${l(i.name)}</span>`:""}
        ${i.timeframe?`<span class="signal-badge badge-neutral" style="font-family:var(--font-mono)">${l(i.timeframe)}</span>`:""}
        ${i.confidence?`<span class="signal-badge ${Ke(i.confidence)}">${l(i.confidence)}</span>`:""}
      </div>
      <div style="font-size:13px;font-weight:600;line-height:1.4;margin-bottom:6px">${l(i.title)}</div>
      <div style="font-size:12px;line-height:1.55;color:var(--text-dim)">${l(i.narrative)}</div>
      ${Je(i.transmissionChain)}
      ${i.driver?`<div style="font-size:11px;color:var(--text-dim);margin-top:6px"><span style="text-transform:uppercase;letter-spacing:0.06em">${l(d("components.marketImplications.driver"))}</span> ${l(i.driver)}</div>`:""}
      ${i.riskCaveat?`<div style="font-size:11px;color:var(--yellow);padding:6px 8px;border:1px solid color-mix(in srgb,var(--yellow) 30%,transparent);background:color-mix(in srgb,var(--yellow) 8%,transparent);margin-top:6px">${l(i.riskCaveat)}</div>`:""}
    </div>
  `}class ti extends S{constructor(){super({id:"market-implications",title:d("components.marketImplications.title"),infoTooltip:d("components.marketImplications.infoTooltip"),premium:"locked"});x(this,"fwSelector");this.fwSelector=new Fe({panelId:"market-implications",isPremium:Ae(),panel:this,note:d("components.marketImplications.appliesToNext")}),this.header.appendChild(this.fwSelector.el),this.content.addEventListener("click",t=>{const e=t.target.closest(".chain-node");if(!e)return;const n=e.getAttribute("data-chain-id"),a=e.getAttribute("data-node-idx"),r=e.getAttribute("data-logic"),o=this.content.querySelector(`#chain-logic-${n}`);if(!o)return;const c=o.style.display!=="none",p=o.getAttribute("data-open-idx")===a;c&&p?o.style.display="none":(o.textContent=r,o.setAttribute("data-open-idx",a),o.style.display="block")})}destroy(){this.fwSelector.destroy(),super.destroy()}renderImplications(t,e="live"){if(t.degraded||t.cards.length===0){this.showUnavailable();return}const n=t.generatedAt?Pe(new Date(t.generatedAt).getTime()):"";this.setDataBadge(e,n||d("components.marketImplications.signals",{count:t.cards.length})),this.resetRetryBackoff();const a=`
      <div style="display:flex;flex-direction:column;gap:10px">
        ${t.cards.map(Ze).join("")}
        <div style="font-size:10px;color:var(--text-dim);padding:8px;border-top:1px solid var(--border);line-height:1.5;text-align:center">${l(d("components.marketImplications.disclaimer"))}</div>
      </div>
    `;this.setSafeContent($(a,"legacy Panel.setContent() migration"))}showUnavailable(t=d("components.marketImplications.unavailable")){this.setDataBadge("unavailable");const e=`
      <div style="font-size:12px;color:var(--text-dim);line-height:1.5;padding:16px 0;text-align:center">${l(t)}</div>
    `;this.setSafeContent($(e,"legacy Panel.setContent() migration"))}}const Gn=Object.freeze(Object.defineProperty({__proto__:null,MarketImplicationsPanel:ti},Symbol.toStringTag,{value:"Module"})),ei=ke(()=>new _e(bt(),{fetch:Ce}));function Rt(i){var t,e,n,a,r,o,c,p,m,g,f,y,h,u,v,b,w,k,C,F,P,j,U;const s=i.signals;return{timestamp:i.timestamp,verdict:i.verdict,bullishCount:i.bullishCount,totalCount:i.totalCount,signals:{liquidity:{status:((t=s==null?void 0:s.liquidity)==null?void 0:t.status)??"UNKNOWN",value:((e=s==null?void 0:s.liquidity)==null?void 0:e.value)??null,sparkline:((n=s==null?void 0:s.liquidity)==null?void 0:n.sparkline)??[]},flowStructure:{status:((a=s==null?void 0:s.flowStructure)==null?void 0:a.status)??"UNKNOWN",btcReturn5:((r=s==null?void 0:s.flowStructure)==null?void 0:r.btcReturn5)??null,qqqReturn5:((o=s==null?void 0:s.flowStructure)==null?void 0:o.qqqReturn5)??null},macroRegime:{status:((c=s==null?void 0:s.macroRegime)==null?void 0:c.status)??"UNKNOWN",qqqRoc20:((p=s==null?void 0:s.macroRegime)==null?void 0:p.qqqRoc20)??null,xlpRoc20:((m=s==null?void 0:s.macroRegime)==null?void 0:m.xlpRoc20)??null},technicalTrend:{status:((g=s==null?void 0:s.technicalTrend)==null?void 0:g.status)??"UNKNOWN",btcPrice:((f=s==null?void 0:s.technicalTrend)==null?void 0:f.btcPrice)??null,sma50:((y=s==null?void 0:s.technicalTrend)==null?void 0:y.sma50)??null,sma200:((h=s==null?void 0:s.technicalTrend)==null?void 0:h.sma200)??null,vwap30d:((u=s==null?void 0:s.technicalTrend)==null?void 0:u.vwap30d)??null,mayerMultiple:((v=s==null?void 0:s.technicalTrend)==null?void 0:v.mayerMultiple)??null,sparkline:((b=s==null?void 0:s.technicalTrend)==null?void 0:b.sparkline)??[]},hashRate:{status:((w=s==null?void 0:s.hashRate)==null?void 0:w.status)??"UNKNOWN",change30d:((k=s==null?void 0:s.hashRate)==null?void 0:k.change30d)??null},priceMomentum:{status:((C=s==null?void 0:s.priceMomentum)==null?void 0:C.status)??"UNKNOWN"},fearGreed:{status:((F=s==null?void 0:s.fearGreed)==null?void 0:F.status)??"UNKNOWN",value:((P=s==null?void 0:s.fearGreed)==null?void 0:P.value)??null,history:((j=s==null?void 0:s.fearGreed)==null?void 0:j.history)??[]}},meta:{qqqSparkline:((U=i.meta)==null?void 0:U.qqqSparkline)??[]},unavailable:i.unavailable}}function q(i,s=80,t=24,e="#4fc3f7"){if(!i||i.length<2)return"";const n=Math.min(...i),r=Math.max(...i)-n||1,o=i.map((c,p)=>{const m=p/(i.length-1)*s,g=t-(c-n)/r*(t-2)-1;return`${m.toFixed(1)},${g.toFixed(1)}`}).join(" ");return`<svg width="${s}" height="${t}" viewBox="0 0 ${s} ${t}" class="signal-sparkline"><polyline points="${o}" fill="none" stroke="${e}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`}function ii(i,s=48){if(i===null)return'<span class="signal-value unknown">N/A</span>';const t=Math.max(0,Math.min(100,i)),e=(s-6)/2,n=2*Math.PI*e,a=n-t/100*n;let r="#f44336";return t>=75?r="#4caf50":t>=50?r="#ff9800":t>=25&&(r="#ff5722"),`<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" class="fg-donut">
    <circle cx="${s/2}" cy="${s/2}" r="${e}" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="5"/>
    <circle cx="${s/2}" cy="${s/2}" r="${e}" fill="none" stroke="${r}" stroke-width="5" stroke-dasharray="${n}" stroke-dashoffset="${a}" stroke-linecap="round" transform="rotate(-90 ${s/2} ${s/2})"/>
    <text x="${s/2}" y="${s/2+4}" text-anchor="middle" fill="${r}" font-size="12" font-weight="bold">${t}</text>
  </svg>`}function ni(i){const s=i.toUpperCase();return["GREED","EXTREME GREED"].includes(s)?"#4caf50":["FEAR","EXTREME FEAR"].includes(s)?"#f44336":"#4fc3f7"}function Dt(i){const s=i.toUpperCase();return["BULLISH","RISK-ON","GROWING","PROFITABLE","ALIGNED","NORMAL","EXTREME GREED","GREED"].includes(s)?"badge-bullish":["BEARISH","DEFENSIVE","DECLINING","SQUEEZE","PASSIVE GAP","EXTREME FEAR","FEAR"].includes(s)?"badge-bearish":"badge-neutral"}function z(i,s="%"){return i===null?"N/A":`${i>0?"+":""}${i.toFixed(1)}${s}`}class si extends S{constructor(){super({id:"macro-signals",title:d("panels.macroSignals"),showCount:!1,infoTooltip:d("components.macroSignals.infoTooltip")});x(this,"data",null);x(this,"loading",!0);x(this,"error",null);x(this,"lastTimestamp","")}async fetchData(){const t=M("macroSignals");return t!=null&&t.signals&&t.totalCount>0?(this.data=Rt(t),this.lastTimestamp=this.data.timestamp,this.error=null,this.loading=!1,this.renderPanel(),this.refreshFromRpc(),!0):this.refreshFromRpc()}async refreshFromRpc(){var n,a,r;try{const o=await ei().getMacroSignals({});if(!((n=this.element)!=null&&n.isConnected))return!1;this.data=Rt(o),this.error=null}catch(o){if(this.isAbortError(o)||!((a=this.element)!=null&&a.isConnected))return!1;if(!this.data)console.warn("[MacroSignals] Fetch error:",o),this.error=d("common.noDataShort");else return!1}this.loading=!1,this.renderPanel();const t=((r=this.data)==null?void 0:r.timestamp)??"",e=t!==this.lastTimestamp;return this.lastTimestamp=t,e}renderPanel(){var r,o,c;if(this.loading){this.showLoading(d("common.computingSignals"));return}if(this.error||!this.data){this.showError(this.error||d("common.noDataShort"),()=>void this.fetchData());return}if(this.data.unavailable){this.showError(d("common.upstreamUnavailable"),()=>void this.fetchData());return}const t=this.data,e=t.signals,a=`
      <div class="macro-signals-container">
        <div class="macro-verdict ${t.verdict==="BUY"?"verdict-buy":t.verdict==="CASH"?"verdict-cash":"verdict-unknown"}">
          <span class="verdict-label">${d("components.macroSignals.overall")}</span>
          <span style="font-size:9px;background:rgba(247,147,26,0.15);color:#f7931a;border:1px solid rgba(247,147,26,0.3);padding:1px 5px;border-radius:3px;font-weight:700;letter-spacing:0.04em;vertical-align:middle">&#x20bf; BTC</span>
          <span class="verdict-value">${t.verdict==="BUY"?d("components.macroSignals.verdict.buy"):t.verdict==="CASH"?d("components.macroSignals.verdict.cash"):l(t.verdict)}</span>
          <span class="verdict-detail">${d("components.macroSignals.bullish",{count:String(t.bullishCount),total:String(t.totalCount)})}</span>
        </div>
        <div class="signals-grid">
          ${this.renderSignalCard(d("components.macroSignals.signals.liquidity"),e.liquidity.status,z(e.liquidity.value),q(e.liquidity.sparkline,60,20,"#4fc3f7"),"JPY 30d ROC","https://www.tradingview.com/symbols/JPYUSD/")}
          ${this.renderSignalCard(d("components.macroSignals.signals.flow"),e.flowStructure.status,`BTC ${z(e.flowStructure.btcReturn5)} / QQQ ${z(e.flowStructure.qqqReturn5)}`,"","5d returns",null)}
          ${this.renderSignalCard(d("components.macroSignals.signals.regime"),e.macroRegime.status,`QQQ ${z(e.macroRegime.qqqRoc20)} / XLP ${z(e.macroRegime.xlpRoc20)}`,q(t.meta.qqqSparkline,60,20,"#ab47bc"),"20d ROC","https://www.tradingview.com/symbols/QQQ/")}
          ${this.renderSignalCard(d("components.macroSignals.signals.btcTrend"),e.technicalTrend.status,`$${((r=e.technicalTrend.btcPrice)==null?void 0:r.toLocaleString())??"N/A"}`,q(e.technicalTrend.sparkline,60,20,"#ff9800"),`SMA50: $${((o=e.technicalTrend.sma50)==null?void 0:o.toLocaleString())??"-"} | VWAP: $${((c=e.technicalTrend.vwap30d)==null?void 0:c.toLocaleString())??"-"} | Mayer: ${e.technicalTrend.mayerMultiple??"-"}`,"https://www.tradingview.com/symbols/BTCUSD/")}
          ${this.renderSignalCard(d("components.macroSignals.signals.hashRate"),e.hashRate.status,z(e.hashRate.change30d),"","30d change","https://mempool.space/mining")}
          ${this.renderSignalCard(d("components.macroSignals.signals.momentum"),e.priceMomentum.status,"","","Mayer Multiple",null)}
          ${this.renderFearGreedCard(e.fearGreed)}
        </div>
      </div>
    `;this.setSafeContent($(a,"legacy Panel.setContent() migration"))}renderSignalCard(t,e,n,a,r,o){const c=Dt(e);return`
      <div class="signal-card${o?" signal-card-linked":""}">
        <div class="signal-header">
          ${o?`<a href="${l(o)}" target="_blank" rel="noopener" class="signal-name signal-card-link">${l(t)}</a>`:`<span class="signal-name">${l(t)}</span>`}
          <span class="signal-badge ${c}">${l(e)}</span>
        </div>
        <div class="signal-body">
          ${a?`<div class="signal-sparkline-wrap">${a}</div>`:""}
          ${n?`<span class="signal-value">${n}</span>`:""}
        </div>
        ${r?`<div class="signal-detail">${l(r)}</div>`:""}
      </div>
    `}renderFearGreedCard(t){const e=Dt(t.status);return`
      <div class="signal-card signal-card-fg">
        <div class="signal-header">
          <span class="signal-name">${d("components.macroSignals.signals.fearGreed")}</span>
          <span class="signal-badge ${e}">${l(t.status)}</span>
        </div>
        <div class="signal-body signal-body-fg">
          <div style="display:flex;align-items:center;gap:8px">
            ${ii(t.value)}
            ${q(t.history.map(n=>n.value),80,28,ni(t.status))}
          </div>
        </div>
        <div class="signal-detail">
          <a href="https://alternative.me/crypto/fear-and-greed-index/" target="_blank" rel="noopener">alternative.me</a>
        </div>
      </div>
    `}}const Vn=Object.freeze(Object.defineProperty({__proto__:null,MacroSignalsPanel:si},Symbol.toStringTag,{value:"Module"}));function Et(i){return i<=20?"#e74c3c":i<=40?"#e67e22":i<=60?"#f1c40f":i<=80?"#2ecc71":"#27ae60"}function T(i,s=2){return i==null?"N/A":i.toFixed(s)}function ai(i){return i<=20?{state:"Crisis / Risk-Off",stance:"CASH",color:"#c0392b"}:i<=35?{state:"Stressed / Defensive",stance:"DEFENSIVE",color:"#e67e22"}:i<=50?{state:"Fragile / Hedged",stance:"HEDGED",color:"#f1c40f"}:i<=65?{state:"Stable / Normal",stance:"NORMAL",color:"#2ecc71"}:{state:"Strong / Risk-On",stance:"AGGRESSIVE",color:"#27ae60"}}function oi(i){var o,c,p;const s=[],t=((o=i.momentum)==null?void 0:o.score)??50,e=((c=i.sentiment)==null?void 0:c.score)??50,n=i.cnnFearGreed,a=i.compositeScore,r=((p=i.trend)==null?void 0:p.score)??50;return t<10&&s.push("Momentum at extreme low — broad equity selling pressure"),e<15&&s.push("Sentiment in extreme fear zone"),n>0&&Math.abs(a-n)>20&&s.push(`CNN F&G ${Math.round(n)} diverges ${Math.abs(Math.round(a-n))}pts from composite — sentiment/structural disconnect`),r<20&&s.push("Trend in breakdown — price structure deteriorating"),s}function ri(i,s,t,e){function c(b,w){const k=b*Math.PI/180;return`${(100+w*Math.cos(k)).toFixed(2)},${(100-w*Math.sin(k)).toFixed(2)}`}const m=[{a1:180,a2:144,fill:"#c0392b"},{a1:144,a2:108,fill:"#e67e22"},{a1:108,a2:72,fill:"#f1c40f"},{a1:72,a2:36,fill:"#2ecc71"},{a1:36,a2:0,fill:"#27ae60"}].map(b=>`<path d="M${c(b.a1,88)} A88,88 0 0,0 ${c(b.a2,88)} L${c(b.a2,60)} A60,60 0 0,1 ${c(b.a1,60)} Z" fill="${b.fill}" opacity="0.88"/>`).join(""),g=(180-i*1.8)*Math.PI/180,f=(100+75*Math.cos(g)).toFixed(1),y=(100-75*Math.sin(g)).toFixed(1),h=t!=null?`${t>=0?"+":""}${t.toFixed(1)} vs prev`:"",u=t!=null?t>=0?"#2ecc71":"#e74c3c":"",v=h?`<text x="100" y="111" text-anchor="middle" font-size="9" fill="${u}" font-family="system-ui,-apple-system,sans-serif">${h}</text>`:"";return`<svg viewBox="0 0 200 115" width="200" height="115" style="display:block;margin:0 auto">
    ${m}
    <line x1="100" y1="100" x2="${f}" y2="${y}" stroke="${e}" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="100" cy="100" r="6" fill="${e}"/>
    <circle cx="100" cy="100" r="3" fill="rgba(8,8,8,0.9)"/>
    <text x="100" y="81" text-anchor="middle" font-size="26" font-weight="700" fill="${e}" font-family="system-ui,-apple-system,sans-serif">${Math.round(i)}</text>
    <text x="100" y="96" text-anchor="middle" font-size="9" font-weight="600" fill="${e}" letter-spacing="0.07em" font-family="system-ui,-apple-system,sans-serif">${s}</text>
    ${v}
  </svg>`}function li(i){var a,r,o,c,p,m,g,f,y,h;const s=i.composite;if(!(s!=null&&s.score))return null;const t=i.categories??{},e=i.headerMetrics??{},n=u=>u?{score:Number(u.score??50),weight:Number(u.weight??0),contribution:Number(u.contribution??0),degraded:!!u.degraded,inputsJson:JSON.stringify(u.inputs??{})}:void 0;return{compositeScore:Number(s.score),compositeLabel:String(s.label??""),previousScore:Number(s.previous??0),seededAt:String(i.timestamp??""),sentiment:n(t.sentiment),volatility:n(t.volatility),positioning:n(t.positioning),trend:n(t.trend),breadth:n(t.breadth),momentum:n(t.momentum),liquidity:n(t.liquidity),credit:n(t.credit),macro:n(t.macro),crossAsset:n(t.crossAsset),vix:Number(((a=e==null?void 0:e.vix)==null?void 0:a.value)??0),hySpread:Number(((r=e==null?void 0:e.hySpread)==null?void 0:r.value)??0),yield10y:Number(((o=e==null?void 0:e.yield10y)==null?void 0:o.value)??0),putCallRatio:Number(((c=e==null?void 0:e.putCall)==null?void 0:c.value)??0),pctAbove200d:Number(((p=e==null?void 0:e.pctAbove200d)==null?void 0:p.value)??0),cnnFearGreed:Number(((m=e==null?void 0:e.cnnFearGreed)==null?void 0:m.value)??0),cnnLabel:String(((g=e==null?void 0:e.cnnFearGreed)==null?void 0:g.label)??""),aaiiBull:Number(((f=e==null?void 0:e.aaiBull)==null?void 0:f.value)??0),aaiiBear:Number(((y=e==null?void 0:e.aaiBear)==null?void 0:y.value)??0),fedRate:String(((h=e==null?void 0:e.fedRate)==null?void 0:h.value)??""),unavailable:!1}}const ci=["sentiment","volatility","positioning","trend","breadth","momentum","liquidity","credit","macro","crossAsset"],di={sentiment:"Sentiment",volatility:"Volatility",positioning:"Positioning",trend:"Trend",breadth:"Breadth",momentum:"Momentum",liquidity:"Liquidity",credit:"Credit",macro:"Macro",crossAsset:"Cross-Asset"};class pi extends S{constructor(){super({id:"fear-greed",title:d("panels.fearGreed"),showCount:!1,infoTooltip:"Composite sentiment index: 10 weighted categories (volatility, positioning, breadth, momentum, liquidity, credit, macro, cross-asset, sentiment, trend)."});x(this,"data",null)}async fetchData(){const t=M("fearGreedIndex");if(t&&!t.unavailable){const n=li(t);if(n&&n.compositeScore>0)return this.data=n,this.renderPanel(),this.refreshFromRpc(),!0}return this.showLoading(),this.refreshFromRpc()}async refreshFromRpc(){try{const{MarketServiceClient:t}=await _(async()=>{const{MarketServiceClient:r}=await import("./rpc-client-market-v1-_8hoR3DZ.js");return{MarketServiceClient:r}},[]),{getRpcBaseUrl:e}=await _(async()=>{const{getRpcBaseUrl:r}=await import("./embed-url-DQf_jd4F.js").then(o=>o.a3);return{getRpcBaseUrl:r}},__vite__mapDeps([0,1,2,3,4,5,6,7])),a=await new t(e(),{fetch:(...r)=>globalThis.fetch(...r)}).getFearGreedIndex({});return a.unavailable?(this.data||this.showError(d("common.noDataShort"),()=>void this.fetchData()),!1):(this.data=a,this.renderPanel(),!0)}catch(t){return this.data||this.showError(t instanceof Error?t.message:d("common.failedToLoad"),()=>void this.fetchData()),!1}}renderPanel(){if(!this.data){this.showError(d("common.noDataShort"),()=>void this.fetchData());return}const t=this.data,e=t.compositeScore,n=l(t.compositeLabel),a=t.previousScore,r=a>0?e-a:null,o=Et(e),c=ai(e),p=oi(t),m=ci.map(u=>{const v=t[u];if(!v)return"";const b=Math.round(v.score??50),w=Math.round((v.weight??0)*100),k=(v.contribution??0).toFixed(1),C=v.degraded?' <span style="color:#e67e22;font-size:10px">degraded</span>':"",F=Et(b),P=di[u]??u;return`
        <div style="margin:4px 0">
          <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-dim)">
            <span>${l(P)}${C}</span>
            <span style="color:${F};font-weight:600">${b}</span>
          </div>
          <div style="height:4px;background:rgba(255,255,255,0.1);border-radius:2px;margin:2px 0">
            <div style="width:${b}%;height:100%;background:${F};border-radius:2px;transition:width 0.3s"></div>
          </div>
          <div style="font-size:10px;color:var(--text-dim)">${w}% weight &middot; +${k} pts</div>
        </div>`}).join(""),g=(u,v)=>`<div style="text-align:center;padding:6px 4px">
        <div style="font-size:18px;font-weight:600;color:var(--text)">${l(v)}</div>
        <div style="font-size:10px;color:var(--text-dim);margin-top:2px">${l(u)}</div>
      </div>`,f=[g("VIX",t.vix>0?T(t.vix,2):"N/A"),g("HY Spread",t.hySpread>0?`${T(t.hySpread,2)}%`:"N/A"),g("10Y Yield",t.yield10y>0?`${T(t.yield10y,2)}%`:"N/A"),g("P/C Ratio",t.putCallRatio>0?T(t.putCallRatio,2):"N/A"),g("% > 200d",t.pctAbove200d?`${T(t.pctAbove200d,1)}%`:"N/A"),g("CNN F&G",t.cnnFearGreed?`${Math.round(t.cnnFearGreed)}`:"N/A"),g("AAII Bull",t.aaiiBull?`${T(t.aaiiBull,1)}%`:"N/A"),g("AAII Bear",t.aaiiBear?`${T(t.aaiiBear,1)}%`:"N/A"),g("Fed Rate",t.fedRate||"N/A")].join(""),y=p.length>0?`<div style="margin-bottom:10px">
          ${p.map(u=>`<div style="display:flex;align-items:center;gap:6px;padding:5px 8px;margin-bottom:4px;border-radius:4px;border:1px solid #e67e22;background:rgba(230,126,34,0.08);font-size:10px;color:#e67e22">&#9888; ${l(u)}</div>`).join("")}
        </div>`:"",h=`
      <div style="padding:12px 14px">
        <div style="text-align:center;margin-bottom:12px">
          <div style="text-align:center;font-size:11px;font-weight:600;color:${c.color};letter-spacing:0.06em;text-transform:uppercase;margin-bottom:4px">${l(c.state)}</div>
          ${ri(e,n,r,o)}
          <div style="text-align:center;margin-top:6px;margin-bottom:8px">
            <span style="display:inline-block;padding:3px 12px;border-radius:999px;font-size:10px;font-weight:700;color:#fff;background:${c.color};letter-spacing:0.08em">${l(c.stance)}</span>
          </div>
        </div>
        ${y}
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:2px;background:rgba(255,255,255,0.04);border-radius:8px;padding:4px;margin-bottom:12px">
          ${f}
        </div>
        <div style="font-size:11px;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px">Category Breakdown</div>
        ${m}
      </div>`;this.setSafeContent($(h,"legacy Panel.setContent() migration"))}}const qn=Object.freeze(Object.defineProperty({__proto__:null,FearGreedPanel:pi},Symbol.toStringTag,{value:"Module"}));function ie(i){return i<=-20?"#e74c3c":i<=-10?"#e67e22":i<0?"#f39c12":i<10?"#95a5a6":i<20?"#27ae60":"#2ecc71"}function ui(i){return i<=-20?"Extreme Bearish":i<=-10?"Bearish":i<0?"Mildly Bearish":i<10?"Neutral":i<20?"Bullish":"Extreme Bullish"}function it(i,s,t,e){return`<div style="margin:4px 0">
    <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-dim);margin-bottom:2px">
      <span>${l(t)}</span>
      <span style="color:${s};font-weight:600">${l(e)}</span>
    </div>
    <div style="height:6px;background:rgba(255,255,255,0.08);border-radius:3px">
      <div style="width:${Math.min(i,100)}%;height:100%;background:${s};border-radius:3px;transition:width 0.3s"></div>
    </div>
  </div>`}function mi(i){const s=ie(i),t=Math.max(-60,Math.min(60,i)),e=50,n=Math.abs(t)/60*50,a=t>=0?e:e-n;return`<div style="margin:8px 0">
    <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-dim);margin-bottom:3px">
      <span>Bull-Bear Spread</span>
      <span style="color:${s};font-weight:700">${t>=0?"+":""}${i.toFixed(1)}%</span>
    </div>
    <div style="position:relative;height:10px;background:rgba(255,255,255,0.06);border-radius:4px">
      <div style="position:absolute;top:0;bottom:0;left:50%;width:1px;background:rgba(255,255,255,0.2)"></div>
      <div style="position:absolute;top:0;bottom:0;left:${a.toFixed(1)}%;width:${n.toFixed(1)}%;background:${s};border-radius:3px;transition:all 0.3s"></div>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:9px;color:var(--text-dim);margin-top:2px">
      <span>Bearish</span>
      <span>Bullish</span>
    </div>
  </div>`}function gi(i){if(i.length<2)return"";const s=[...i].reverse(),t=280,e=60,n=4,a=s.map(b=>b.spread),r=Math.max(Math.abs(Math.min(...a)),Math.abs(Math.max(...a)),20),o=(t-n*2)/(s.length-1),c=e/2,p=(c-n)/r,g=s.map((b,w)=>{const k=(n+w*o).toFixed(1),C=(c-b.spread*p).toFixed(1);return`${k},${C}`}).join(" "),f=s.map((b,w)=>{const k=n+w*o-1,C=Math.abs(b.spread)*p,F=b.spread>=0?c-C:c,P=b.spread>=0?"rgba(39,174,96,0.25)":"rgba(231,76,60,0.25)";return`<rect x="${k.toFixed(1)}" y="${F.toFixed(1)}" width="2" height="${C.toFixed(1)}" fill="${P}" rx="0.5"/>`}).join(""),y=`<line x1="${n}" y1="${c}" x2="${t-n}" y2="${c}" stroke="rgba(255,255,255,0.15)" stroke-width="0.5" stroke-dasharray="3,3"/>`,h=c+20*p,u=`<line x1="${n}" y1="${h.toFixed(1)}" x2="${t-n}" y2="${h.toFixed(1)}" stroke="rgba(231,76,60,0.3)" stroke-width="0.5" stroke-dasharray="2,4"/>`,v=`<text x="${t-n}" y="${(h-2).toFixed(1)}" text-anchor="end" font-size="7" fill="rgba(231,76,60,0.5)" font-family="system-ui,sans-serif">-20 buy signal</text>`;return`<div style="margin:8px 0">
    <div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px">52-Week Spread History</div>
    <svg viewBox="0 0 ${t} ${e}" width="100%" height="${e}" style="display:block">
      ${f}
      ${y}
      ${u}
      ${v}
      <polyline points="${g}" fill="none" stroke="rgba(255,255,255,0.6)" stroke-width="1.2" stroke-linejoin="round"/>
    </svg>
  </div>`}class hi extends S{constructor(){super({id:"aaii-sentiment",title:"AAII Investor Sentiment",showCount:!1,infoTooltip:"Weekly AAII survey: individual investors report 6-month market outlook as bullish, neutral, or bearish. Spread below -20 is a historical contrarian buy signal."});x(this,"data",null)}async fetchData(){var e;const t=M("aaiiSentiment");if(t!=null&&t.latest)return this.data=t,this.renderPanel(),!0;try{const n=await fetch(xt("/api/bootstrap?keys=aaiiSentiment"),{signal:AbortSignal.timeout(5e3)});if(n.ok){const{data:a}=await n.json();if((e=a.aaiiSentiment)!=null&&e.latest)return this.data=a.aaiiSentiment,this.renderPanel(),!0}}catch{}return this.showError("AAII sentiment data unavailable",()=>{this.fetchData()},300),!1}renderPanel(){var C;if(!((C=this.data)!=null&&C.latest)){this.showError(d("common.noDataShort"),()=>void this.fetchData());return}const t=this.data,{latest:e,previous:n,avg8w:a,historicalAvg:r,extremes:o,weeks:c}=t,p=ie(e.spread),m=ui(e.spread),g=n==null?void 0:n.spread,f=g!=null?e.spread-g:null,y=f!=null?`<span style="color:${f>=0?"#2ecc71":"#e74c3c"};font-size:10px;margin-left:4px">${f>=0?"+":""}${f.toFixed(1)} vs prev</span>`:"",h=e.spread<=-20?`<div style="display:flex;align-items:center;gap:6px;padding:6px 8px;margin:8px 0;border-radius:4px;border:1px solid #2ecc71;background:rgba(46,204,113,0.08);font-size:10px;color:#2ecc71">
          &#9432; Contrarian buy signal active: spread at ${e.spread.toFixed(1)}% (threshold: -20%)
        </div>`:e.bearish>=50?`<div style="display:flex;align-items:center;gap:6px;padding:6px 8px;margin:8px 0;border-radius:4px;border:1px solid #e67e22;background:rgba(230,126,34,0.08);font-size:10px;color:#e67e22">
            &#9888; Extreme bearish reading: ${e.bearish.toFixed(1)}% bearish (avg: ${r.bearish}%)
          </div>`:"",u=a?`
      <div style="margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,0.06)">
        <div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px">8-Week Moving Average</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;text-align:center">
          <div><div style="font-size:14px;font-weight:600;color:#2ecc71">${a.bullish}%</div><div style="font-size:9px;color:var(--text-dim)">Bull</div></div>
          <div><div style="font-size:14px;font-weight:600;color:#95a5a6">${a.neutral}%</div><div style="font-size:9px;color:var(--text-dim)">Neutral</div></div>
          <div><div style="font-size:14px;font-weight:600;color:#e74c3c">${a.bearish}%</div><div style="font-size:9px;color:var(--text-dim)">Bear</div></div>
        </div>
      </div>`:"",v=o.spreadBelow20>0||o.bearishAbove50>0?`<div style="margin-top:6px;font-size:10px;color:var(--text-dim)">
          52w extremes: ${o.spreadBelow20} contrarian signals, ${o.bearishAbove50} extreme bear, ${o.bullishAbove50} extreme bull
        </div>`:"",b=t.fallback?'<span style="display:inline-block;padding:1px 5px;border-radius:3px;background:rgba(230,126,34,0.15);color:#e67e22;font-size:9px;margin-left:4px">(fallback data)</span>':"",w=e.date?`<div style="font-size:9px;color:var(--text-dim);text-align:right;margin-top:4px">Survey: ${l(e.date)}${t.source!=="xls"?` (${l(t.source)})`:""}${b}</div>`:"",k=`
      <div style="padding:12px 14px">
        <div style="text-align:center;margin-bottom:8px">
          <div style="font-size:11px;font-weight:600;color:${p};letter-spacing:0.06em;text-transform:uppercase">${l(m)}</div>
          ${y?`<div style="margin-top:2px">${y}</div>`:""}
        </div>

        ${h}

        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;text-align:center;padding:8px;background:rgba(255,255,255,0.03);border-radius:6px;margin-bottom:8px">
          <div>
            <div style="font-size:22px;font-weight:700;color:#2ecc71">${e.bullish.toFixed(1)}%</div>
            <div style="font-size:10px;color:var(--text-dim)">Bullish</div>
            <div style="font-size:9px;color:var(--text-dim)">avg ${r.bullish}%</div>
          </div>
          <div>
            <div style="font-size:22px;font-weight:700;color:#95a5a6">${e.neutral.toFixed(1)}%</div>
            <div style="font-size:10px;color:var(--text-dim)">Neutral</div>
            <div style="font-size:9px;color:var(--text-dim)">avg ${r.neutral}%</div>
          </div>
          <div>
            <div style="font-size:22px;font-weight:700;color:#e74c3c">${e.bearish.toFixed(1)}%</div>
            <div style="font-size:10px;color:var(--text-dim)">Bearish</div>
            <div style="font-size:9px;color:var(--text-dim)">avg ${r.bearish}%</div>
          </div>
        </div>

        ${it(e.bullish,"#2ecc71","Bullish",`${e.bullish.toFixed(1)}%`)}
        ${it(e.neutral,"#95a5a6","Neutral",`${e.neutral.toFixed(1)}%`)}
        ${it(e.bearish,"#e74c3c","Bearish",`${e.bearish.toFixed(1)}%`)}

        ${mi(e.spread)}

        ${gi(c)}

        ${u}
        ${v}
        ${w}
      </div>`;this.setSafeContent($(k,"legacy Panel.setContent() migration"))}}const Hn=Object.freeze(Object.defineProperty({__proto__:null,AAIISentimentPanel:hi},Symbol.toStringTag,{value:"Module"}));function N(i){return i==null?null:Number.isFinite(i)?i:null}function Mt(i){const s=i.current,t=(i.history??[]).map(e=>({date:e.date,pctAbove20d:N(e.pctAbove20d),pctAbove50d:N(e.pctAbove50d),pctAbove200d:N(e.pctAbove200d)}));return{currentPctAbove20d:N(i.currentPctAbove20d??(s==null?void 0:s.pctAbove20d)),currentPctAbove50d:N(i.currentPctAbove50d??(s==null?void 0:s.pctAbove50d)),currentPctAbove200d:N(i.currentPctAbove200d??(s==null?void 0:s.pctAbove200d)),updatedAt:i.updatedAt??"",history:t,unavailable:i.unavailable}}const K=480,mt=160,B=32,gt=12,ne=10,se=22,Tt=K-B-gt,zt=mt-ne-se,ht=[{key:"pctAbove20d",color:"#3b82f6",label:"20-day SMA",fillOpacity:.08},{key:"pctAbove50d",color:"#f59e0b",label:"50-day SMA",fillOpacity:.06},{key:"pctAbove200d",color:"#22c55e",label:"200-day SMA",fillOpacity:.04}];function ae(i,s){return s<=1?B+Tt/2:B+i/(s-1)*Tt}function J(i){return ne+zt-i/100*zt}function Nt(i,s){const t=[];let e=[];for(let n=0;n<i.length;n++){const a=i[n][s];if(a==null||!Number.isFinite(a)){e.length>0&&(t.push(e),e=[]);continue}e.push({x:ae(n,i.length),y:J(a)})}return e.length>0&&t.push(e),t}function fi(i){if(i.length<2)return"";const s=J(0).toFixed(1),t=i[0].x.toFixed(1),e=i[i.length-1].x.toFixed(1),n=i.map(a=>`${a.x.toFixed(1)},${a.y.toFixed(1)}`);return`M${t},${s} L${n.join(" L")} L${e},${s} Z`}function vi(i){return i.length===0?"":i.map(s=>`${s.x.toFixed(1)},${s.y.toFixed(1)}`).join(" ")}function xi(i){if(i.length<2)return'<div style="text-align:center;color:var(--text-dim);padding:20px;font-size:11px">Collecting data. Chart appears after 2+ days.</div>';const s=[0,25,50,75,100].map(c=>{const p=J(c);return`
      <line x1="${B}" y1="${p.toFixed(1)}" x2="${K-gt}" y2="${p.toFixed(1)}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <text x="${(B-3).toFixed(0)}" y="${p.toFixed(1)}" text-anchor="end" fill="rgba(255,255,255,0.35)" font-size="8" dominant-baseline="middle">${c}%</text>`}).join(""),t=Math.max(1,Math.floor(i.length/6)),e=i.map((c,p)=>{if(p%t!==0&&p!==i.length-1)return"";const m=ae(p,i.length),g=c.date.slice(5);return`<text x="${m.toFixed(1)}" y="${mt-se+13}" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="7">${l(g)}</text>`}).join(""),n=ht.map(c=>Nt(i,c.key).map(m=>{const g=fi(m);return g?`<path d="${g}" fill="${c.color}" opacity="${c.fillOpacity}"/>`:""}).join("")).join(""),a=ht.map(c=>Nt(i,c.key).map(m=>m.length<2?"":`<polyline points="${vi(m)}" fill="none" stroke="${c.color}" stroke-width="1.5" opacity="0.9"/>`).join("")).join(""),r=J(50),o=`<line x1="${B}" y1="${r.toFixed(1)}" x2="${K-gt}" y2="${r.toFixed(1)}" stroke="rgba(255,255,255,0.12)" stroke-width="1" stroke-dasharray="4 3"/>`;return`<svg viewBox="0 0 ${K} ${mt}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">${s}${o}${e}${n}${a}</svg>`}function yi(i,s){const t=i>=60?"rgba(34,197,94,0.12)":i>=40?"rgba(245,158,11,0.12)":"rgba(239,68,68,0.12)",e=i>=60?"#22c55e":i>=40?"#f59e0b":"#ef4444";return`<span style="display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:4px;background:${t}">
    <span style="width:6px;height:6px;border-radius:50%;background:${s}"></span>
    <span style="font-size:14px;font-weight:600;color:${e}">${i.toFixed(1)}%</span>
  </span>`}class bi extends S{constructor(){super({id:"market-breadth",title:d("panels.marketBreadth"),showCount:!1,infoTooltip:"Percentage of S&P 500 stocks trading above their 20, 50, and 200-day simple moving averages. A measure of market participation and internal strength."});x(this,"data",null)}async fetchData(){var e;const t=M("breadthHistory");return t&&!t.unavailable&&((e=t.history)!=null&&e.length)?(this.data=Mt(t),this.renderPanel(),this.refreshFromRpc(),!0):(this.showLoading(),this.refreshFromRpc())}async refreshFromRpc(){try{const{MarketServiceClient:t}=await _(async()=>{const{MarketServiceClient:r}=await import("./rpc-client-market-v1-_8hoR3DZ.js");return{MarketServiceClient:r}},[]),{getRpcBaseUrl:e}=await _(async()=>{const{getRpcBaseUrl:r}=await import("./embed-url-DQf_jd4F.js").then(o=>o.a3);return{getRpcBaseUrl:r}},__vite__mapDeps([0,1,2,3,4,5,6,7])),a=await new t(e(),{fetch:(...r)=>globalThis.fetch(...r)}).getMarketBreadthHistory({});return a.unavailable?(this.data||this.showError(d("common.noDataShort"),()=>void this.fetchData()),!1):(this.data=Mt(a),this.renderPanel(),!0)}catch(t){return this.data||this.showError(t instanceof Error?t.message:d("common.failedToLoad"),()=>void this.fetchData()),!1}}renderPanel(){var o,c;if(!((c=(o=this.data)==null?void 0:o.history)!=null&&c.length)){this.showError(d("common.noDataShort"),()=>void this.fetchData());return}const t=this.data,e=xi(t.history),n={pctAbove20d:t.currentPctAbove20d,pctAbove50d:t.currentPctAbove50d,pctAbove200d:t.currentPctAbove200d},r=`
      <div style="padding:12px 14px">
        <div style="margin-bottom:8px">${ht.map(p=>{const m=n[p.key],g=typeof m=="number"&&Number.isFinite(m)&&m>=0;return`<div style="display:flex;align-items:center;justify-content:space-between;padding:4px 0">
        <span style="display:flex;align-items:center;gap:6px;font-size:11px;color:var(--text-dim)">
          <span style="width:8px;height:3px;border-radius:1px;background:${p.color}"></span>
          % Above ${l(p.label)}
        </span>
        ${g?yi(m,p.color):'<span style="font-size:11px;color:var(--text-dim)">—</span>'}
      </div>`}).join("")}</div>
        <div style="border-radius:6px;background:rgba(255,255,255,0.02);padding:4px 0">${e}</div>
        ${t.updatedAt?`<div style="text-align:right;font-size:9px;color:var(--text-dim);margin-top:4px">${l(new Date(t.updatedAt).toLocaleString())}</div>`:""}
      </div>`;this.setSafeContent($(r,"legacy Panel.setContent() migration"))}}const Yn=Object.freeze(Object.defineProperty({__proto__:null,MarketBreadthPanel:bi},Symbol.toStringTag,{value:"Module"}));let nt=null;async function $i(){if(!nt){const{EconomicServiceClient:i}=await _(async()=>{const{EconomicServiceClient:t}=await import("./rpc-client-economic-v1-CiTVyyWU.js");return{EconomicServiceClient:t}},[]),{getRpcBaseUrl:s}=await _(async()=>{const{getRpcBaseUrl:t}=await import("./embed-url-DQf_jd4F.js").then(e=>e.a3);return{getRpcBaseUrl:t}},__vite__mapDeps([0,1,2,3,4,5,6,7]));nt=new i(s(),{fetch:(...t)=>globalThis.fetch(...t)})}return nt}const st=["DGS1MO","DGS3MO","DGS6MO","DGS1","DGS2","DGS5","DGS10","DGS30"],ft=["1M","3M","6M","1Y","2Y","5Y","10Y","30Y"],oe=["1Y","2Y","5Y","10Y","20Y","30Y"],$t=480,wt=180,L=40,re=20,le=16,ce=24,vt=$t-L-re,Bt=wt-le-ce;function St(i,s){return s<=1?L+vt/2:L+i/(s-1)*vt}function O(i,s,t){const e=t-s||1,n=(i-s)/e;return le+Bt-n*Bt}function Lt(i,s,t){return i.map((e,n)=>{if(e.value===null)return null;const a=St(n,i.length),r=O(e.value,s,t);return`${a.toFixed(2)},${r.toFixed(2)}`}).filter(Boolean).join(" ")}function wi(i,s){const t=(s-i)/3,e=[];for(let n=0;n<=3;n++){const a=i+t*n,r=O(a,i,s);e.push(`<text x="${(L-4).toFixed(0)}" y="${r.toFixed(2)}" text-anchor="end" fill="rgba(255,255,255,0.35)" font-size="8" alignment-baseline="middle">${a.toFixed(1)}%</text>`),e.push(`<line x1="${L}" y1="${r.toFixed(2)}" x2="${$t-re}" y2="${r.toFixed(2)}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>`)}return e.join("")}function Si(i){return ft.slice(0,i).map((s,t)=>{const e=St(t,i),n=wt-ce+12;return`<text x="${e.toFixed(2)}" y="${n}" text-anchor="middle" fill="rgba(255,255,255,0.5)" font-size="8">${l(s)}</text>`}).join("")}function ki(i,s,t,e){return i.map((n,a)=>{if(n.value===null)return"";const r=St(a,i.length),o=O(n.value,s,t);return`<circle cx="${r.toFixed(2)}" cy="${o.toFixed(2)}" r="3" fill="${e}" stroke="rgba(0,0,0,0.4)" stroke-width="1"/>`}).join("")}function de(i){const t={"1Y":3,"2Y":4,"5Y":5,"10Y":6,"20Y":6.5,"30Y":7}[i];return t==null?null:L+t/7*vt}function _i(i,s,t){const e=oe.map(n=>{const a=i[n];if(a==null)return null;const r=de(n);if(r===null)return null;const o=O(a,s,t);return`${r.toFixed(2)},${o.toFixed(2)}`}).filter(Boolean);return e.length<2?"":`<polyline points="${e.join(" ")}" fill="none" stroke="#2ecc71" stroke-width="1.5" stroke-dasharray="5,3" stroke-linecap="round" stroke-linejoin="round"/>`}function Ci(i,s,t){return oe.map(e=>{const n=i[e];if(n==null)return"";const a=de(e);if(a===null)return"";const r=O(n,s,t);return`<circle cx="${a.toFixed(2)}" cy="${r.toFixed(2)}" r="2.5" fill="#2ecc71" stroke="rgba(0,0,0,0.4)" stroke-width="1"/>`}).join("")}function Pi(i,s,t){const e=i.map(h=>h.value).filter(h=>h!==null),n=s.map(h=>h.value).filter(h=>h!==null),a=t?Object.values(t):[],r=[...e,...n,...a];if(r.length===0)return'<div style="padding:16px;color:var(--text-dim);font-size:12px">No yield data available.</div>';const o=Math.max(0,Math.min(...r)-.25),c=Math.max(...r)+.5,p=Lt(i,o,c),m=Lt(s,o,c),g=m.length>0?`<polyline points="${m}" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-dasharray="4,3" stroke-linecap="round" stroke-linejoin="round"/>`:"",f=t?_i(t,o,c):"",y=t?Ci(t,o,c):"";return`
    <svg viewBox="0 0 ${$t} ${wt}" width="100%" style="display:block;overflow:visible">
      ${wi(o,c)}
      ${Si(i.length)}
      ${g}
      ${f}
      <polyline points="${p}" fill="none" stroke="#3498db" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      ${ki(i,o,c,"#3498db")}
      ${y}
    </svg>`}function Fi(i){const s=i.map(e=>`<th style="font-size:9px;font-weight:600;color:var(--text-dim);padding:4px 6px;text-align:center">${l(e.tenor)}</th>`).join(""),t=i.map(e=>{const n=e.value!==null?`${e.value.toFixed(2)}%`:"N/A";return`<td style="font-size:11px;color:var(--text);padding:4px 6px;text-align:center">${l(n)}</td>`}).join("");return`
    <div style="overflow-x:auto;margin-top:8px">
      <table style="width:100%;border-collapse:collapse">
        <thead><tr>${s}</tr></thead>
        <tbody><tr>${t}</tr></tbody>
      </table>
    </div>`}function Ai(i,s,t=80,e=22){const n=i.map(p=>p.value).filter(p=>Number.isFinite(p));if(n.length<2)return`<svg width="${t}" height="${e}"></svg>`;const a=Math.min(...n),o=Math.max(...n)-a||.01,c=n.map((p,m)=>{const g=m/(n.length-1)*t,f=e-(p-a)/o*(e-2)-1;return`${g.toFixed(1)},${f.toFixed(1)}`}).join(" ");return`<svg width="${t}" height="${e}" style="display:inline-block;vertical-align:middle"><polyline points="${c}" fill="none" stroke="${l(s)}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`}function Ri(i){return i.some(e=>e.obs.length>0)?`<div style="padding:4px 0">${i.map(e=>{const n=e.obs[e.obs.length-1];if(!n)return"";const a=e.obs[e.obs.length-2],r=a?n.value-a.value:null,o=r!==null?`${r>=0?"+":""}${r.toFixed(2)}%`:"",c=r===null?"":r>=0?"#e74c3c":"#27ae60";return`<div style="display:flex;align-items:center;gap:10px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.04)">
      <div style="width:90px;font-size:10px;color:var(--text-dim)">${l(e.label)}</div>
      ${Ai(e.obs.slice(-24),e.color)}
      <div style="min-width:44px;text-align:right;font-size:13px;font-weight:600;color:var(--text);font-variant-numeric:tabular-nums">${l(n.value.toFixed(2))}%</div>
      ${o?`<div style="font-size:10px;color:${c}">${l(o)}</div>`:""}
      <div style="font-size:9px;color:var(--text-dim);margin-left:auto">${l(n.date)}</div>
    </div>`}).join("")}</div>
    <div style="margin-top:8px;font-size:9px;color:var(--text-dim)">Source: ECB</div>`:'<div style="padding:16px;color:var(--text-dim);font-size:12px">ECB rate data unavailable</div>'}class Di extends S{constructor(){super({id:"yield-curve",title:"Yield Curve & Rates",showCount:!1,infoTooltip:d("components.yieldCurve.infoTooltip")});x(this,"_hasData",!1);x(this,"_tab","curve");x(this,"_current",[]);x(this,"_prior",[]);x(this,"_ecbRates",null);x(this,"_rateRows",[]);this.content.addEventListener("click",t=>{const e=t.target.closest("[data-tab]");((e==null?void 0:e.dataset.tab)==="curve"||(e==null?void 0:e.dataset.tab)==="rates")&&(this._tab=e.dataset.tab,this._render())})}async fetchData(){var t,e,n,a,r;this.showLoading();try{const o=await $i(),[c,p]=await Promise.allSettled([o.getFredSeriesBatch({seriesIds:[...st,"ESTR","EURIBOR3M","EURIBOR6M","EURIBOR1Y"],limit:36}),o.getEuYieldCurve({})]),m=c.status==="fulfilled"?c.value.results??{}:{};return this._current=st.map((f,y)=>{var u,v;const h=((u=m[f])==null?void 0:u.observations)??[];return{tenor:ft[y]??f,value:h.length>0?((v=h[h.length-1])==null?void 0:v.value)??null:null}}),this._prior=st.map((f,y)=>{var u,v;const h=((u=m[f])==null?void 0:u.observations)??[];return{tenor:ft[y]??f,value:h.length>1?((v=h[h.length-2])==null?void 0:v.value)??null:null}}),this._ecbRates=p.status==="fulfilled"&&!p.value.unavailable&&((t=p.value.data)!=null&&t.rates)?p.value.data.rates:null,this._rateRows=[{id:"ESTR",label:"€STR",obs:((e=m.ESTR)==null?void 0:e.observations)??[],color:"#2ecc71"},{id:"EURIBOR3M",label:"EURIBOR 3M",obs:((n=m.EURIBOR3M)==null?void 0:n.observations)??[],color:"#3498db"},{id:"EURIBOR6M",label:"EURIBOR 6M",obs:((a=m.EURIBOR6M)==null?void 0:a.observations)??[],color:"#9b59b6"},{id:"EURIBOR1Y",label:"EURIBOR 1Y",obs:((r=m.EURIBOR1Y)==null?void 0:r.observations)??[],color:"#e67e22"}],this._current.filter(f=>f.value!==null).length===0?(this._hasData||this.showError("No yield data available",()=>void this.fetchData()),!1):(this._hasData=!0,this._render(),!0)}catch(o){return this._hasData||this.showError(o instanceof Error?o.message:"Failed to load yield curve",()=>void this.fetchData()),!1}}_render(){var g,f;const t=`<div style="display:flex;gap:4px;margin-bottom:6px">
      <button class="panel-tab${this._tab==="curve"?" active":""}" data-tab="curve" style="font-size:11px;padding:3px 10px">US Curve</button>
      <button class="panel-tab${this._tab==="rates"?" active":""}" data-tab="rates" style="font-size:11px;padding:3px 10px">ECB Rates</button>
    </div>`;if(this._tab==="rates"){this.setSafeContent($(`<div style="padding:10px 14px 6px">${t}${Ri(this._rateRows)}</div>`,"legacy Panel.setContent() migration"));return}const e=((g=this._current.find(y=>y.tenor==="2Y"))==null?void 0:g.value)??null,n=((f=this._current.find(y=>y.tenor==="10Y"))==null?void 0:f.value)??null,a=e!==null&&n!==null&&e>n,r=e!==null&&n!==null?((n-e)*100).toFixed(0):null,o=r!==null&&Number(r)>=0?"+":"",c=a?'<span style="background:#e74c3c;color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:4px;letter-spacing:0.08em">INVERTED</span>':'<span style="background:#2ecc71;color:#000;font-size:9px;font-weight:700;padding:2px 6px;border-radius:4px;letter-spacing:0.08em">NORMAL</span>',p=r!==null?`<span style="font-size:11px;color:var(--text-dim);margin-left:10px">2Y-10Y Spread: <span style="color:${a?"#e74c3c":"#2ecc71"}">${l(o+r)}bps</span></span>`:"",m=this._ecbRates?'<span><svg width="20" height="4" style="vertical-align:middle"><line x1="0" y1="2" x2="20" y2="2" stroke="#2ecc71" stroke-width="1.5" stroke-dasharray="5,3"/></svg> EU (ECB AAA)</span>':"";this.setSafeContent($(`
      <div style="padding:10px 14px 6px">
        ${t}
        <div style="display:flex;align-items:center;margin-bottom:10px;gap:4px">
          ${c}${p}
        </div>
        <div style="margin:0 -4px">${Pi(this._current,this._prior,this._ecbRates)}</div>
        ${Fi(this._current)}
        <div style="margin-top:8px;font-size:9px;color:var(--text-dim);display:flex;gap:12px;align-items:center;flex-wrap:wrap">
          <span><svg width="20" height="4" style="vertical-align:middle"><line x1="0" y1="2" x2="20" y2="2" stroke="#3498db" stroke-width="2"/></svg> US (Current)</span>
          <span><svg width="20" height="4" style="vertical-align:middle"><line x1="0" y1="2" x2="20" y2="2" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" stroke-dasharray="4,3"/></svg> US (Prior)</span>
          ${m}
          <span style="margin-left:auto">Source: FRED / ECB</span>
        </div>
      </div>`,"legacy Panel.setContent() migration"))}}const Wn=Object.freeze(Object.defineProperty({__proto__:null,YieldCurvePanel:Di},Symbol.toStringTag,{value:"Module"}));let at=null;async function Ei(){if(!at){const{MarketServiceClient:i}=await _(async()=>{const{MarketServiceClient:t}=await import("./rpc-client-market-v1-_8hoR3DZ.js");return{MarketServiceClient:t}},[]),{getRpcBaseUrl:s}=await _(async()=>{const{getRpcBaseUrl:t}=await import("./embed-url-DQf_jd4F.js").then(e=>e.a3);return{getRpcBaseUrl:t}},__vite__mapDeps([0,1,2,3,4,5,6,7]));at=new i(s(),{fetch:(...t)=>globalThis.fetch(...t)})}return at}function It(i){return i==null?"":`${i>=0?"+":""}${i.toFixed(2)}`}function Ot(i){return i==null||i<=0?"":i>=1e12?`$${(i/1e12).toFixed(1)}T`:i>=1e9?`$${(i/1e9).toFixed(1)}B`:i>=1e6?`$${Math.round(i/1e6)}M`:`$${i}`}function Mi(i,s){if(i==null||s==null||s===0)return"";const t=(i-s)/Math.abs(s)*100;return`${t>=0?"+":""}${t.toFixed(1)}%`}function Ti(i){const s=new Date;s.setHours(0,0,0,0);const t=new Date(`${i}T00:00:00`);if(Number.isNaN(t.getTime()))return i;const e=Math.round((t.getTime()-s.getTime())/864e5),n=t.toLocaleDateString(me(),{weekday:"short",month:"short",day:"numeric"});return e===0?d("components.earningsCalendar.today",{date:n}):e===1?d("components.earningsCalendar.tomorrow",{date:n}):n.toUpperCase().replace(","," ·")}function zi(i){const s=i.hour==="bmo"?"BMO":i.hour==="amc"?"AMC":i.hour?i.hour.toUpperCase():"",t=i.hour==="bmo"?"background:rgba(46,204,113,0.15);color:#2ecc71":i.hour==="amc"?"background:rgba(52,152,219,0.15);color:#3498db":"background:rgba(255,255,255,0.08);color:var(--text-dim)",e=Ot(i.revenueEstimate),n=Ot(i.revenueActual),a=It(i.epsEstimate),r=It(i.epsActual);let o="";if(i.hasActuals&&r){const p=i.surpriseDirection==="beat"?"background:rgba(46,204,113,0.2);color:#2ecc71":i.surpriseDirection==="miss"?"background:rgba(231,76,60,0.2);color:#e74c3c":"background:rgba(255,255,255,0.08);color:var(--text-dim)",m=i.surpriseDirection==="beat"?d("components.earningsCalendar.surprise.beat"):i.surpriseDirection==="miss"?d("components.earningsCalendar.surprise.miss"):d("components.earningsCalendar.surprise.inLine"),g=Mi(i.epsActual,i.epsEstimate);o=`
      <span style="font-size:11px;font-weight:600;color:var(--text)">${l(d("components.earningsCalendar.epsActual",{value:r}))}</span>
      <span style="font-size:9px;font-weight:700;padding:1px 4px;border-radius:3px;${p}">${l(m)}${g?` ${l(g)}`:""}</span>`}else a&&(o=`<span style="font-size:11px;color:var(--text-dim)">${l(d("components.earningsCalendar.epsEstimate",{value:a}))}</span>`);let c="";return i.hasActuals&&n?c=`<span style="font-size:10px;color:var(--text-dim)">${l(d("components.earningsCalendar.revenueActual",{value:n}))}</span>`:e&&(c=`<span style="font-size:10px;color:rgba(255,255,255,0.25)">${l(d("components.earningsCalendar.revenueEstimate",{value:e}))}</span>`),`
    <div style="display:flex;align-items:flex-start;gap:8px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,0.04)">
      <div style="display:flex;flex-direction:column;align-items:center;gap:3px;flex-shrink:0;padding-top:1px">
        ${s?`<span style="font-size:9px;font-weight:700;padding:2px 5px;border-radius:3px;${t};letter-spacing:0.04em">${l(s)}</span>`:""}
      </div>
      <div style="flex:1;min-width:0">
        <div style="font-size:12px;font-weight:600;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${l(i.company)}</div>
        <div style="font-size:10px;color:var(--text-dim);letter-spacing:0.04em">${l(i.symbol)}</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px;flex-shrink:0">
        ${o?`<div style="display:flex;align-items:center;gap:5px">${o}</div>`:""}
        ${c?`<div>${c}</div>`:""}
      </div>
    </div>`}function Ni(i,s,t){return`
    <div style="${t?"":"border-top:1px solid rgba(255,255,255,0.06);"}padding-top:${t?"0":"10"}px;padding-bottom:2px">
      <div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.06em;padding:0 0 5px">${l(Ti(i))}</div>
      ${s.map(zi).join("")}
    </div>`}class Bi extends S{constructor(){super({id:"earnings-calendar",title:d("components.earningsCalendar.title"),showCount:!1,infoTooltip:d("components.earningsCalendar.infoTooltip")});x(this,"_hasData",!1)}async fetchData(){return this.showLoading(),this.refreshFromRpc()}async refreshFromRpc(){var t;try{const e=await Ei(),n=new Date,a=new Date;a.setDate(a.getDate()+14);const r=n.toISOString().slice(0,10),o=a.toISOString().slice(0,10),c=await e.listEarningsCalendar({fromDate:r,toDate:o});return c.unavailable||!((t=c.earnings)!=null&&t.length)?(this._hasData||this.showError(d("components.earningsCalendar.errors.noData"),()=>void this.fetchData()),!1):(this.render(c.earnings),!0)}catch(e){return this._hasData||this.showError(e instanceof Error?e.message:d("components.earningsCalendar.errors.failedToLoad"),()=>void this.fetchData()),!1}}render(t){this._hasData=!0;const e=new Map;for(const r of t){const o=r.date||"Unknown",c=e.get(o);c?c.push(r):e.set(o,[r])}const a=`
      <div style="padding:0 14px 12px;max-height:480px;overflow-y:auto">
        ${[...e.keys()].sort().map((r,o)=>Ni(r,e.get(r),o===0)).join("")}
      </div>`;this.setSafeContent($(a,"legacy Panel.setContent() migration"))}}const Xn=Object.freeze(Object.defineProperty({__proto__:null,EarningsCalendarPanel:Bi},Symbol.toStringTag,{value:"Module"}));let ot=null;async function Li(){if(!ot){const{EconomicServiceClient:i}=await _(async()=>{const{EconomicServiceClient:t}=await import("./rpc-client-economic-v1-CiTVyyWU.js");return{EconomicServiceClient:t}},[]),{getRpcBaseUrl:s}=await _(async()=>{const{getRpcBaseUrl:t}=await import("./embed-url-DQf_jd4F.js").then(e=>e.a3);return{getRpcBaseUrl:t}},__vite__mapDeps([0,1,2,3,4,5,6,7]));ot=new i(s(),{fetch:(...t)=>globalThis.fetch(...t)})}return ot}const Ii={US:"🇺🇸",GB:"🇬🇧",UK:"🇬🇧",EU:"🇪🇺",EUR:"🇪🇺",EA:"🇪🇺",DE:"🇩🇪",FR:"🇫🇷",JP:"🇯🇵",CN:"🇨🇳",CA:"🇨🇦",AU:"🇦🇺"},Oi=new Set(["EU","EA","EUR","DE","FR","IT","ES","NL","BE","AT","PT","FI","IE","GR"]),jt={high:"#e74c3c",medium:"#f39c12",low:"rgba(255,255,255,0.3)"};function ji(i){const s=new Map;for(const t of i){const e=t.date||"Unknown";s.has(e)||s.set(e,[]),s.get(e).push(t)}return s}function Ui(i){if(!i||i==="Unknown")return"Unknown";const s=new Date(`${i}T00:00:00`);return Number.isNaN(s.getTime())?i:s.toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})}function Gi(i,s){return i?s?`${i} ${s}`:i:"—"}function Vi(i){const s=new Date;s.setHours(0,0,0,0);const t=new Date(`${i}T00:00:00`);if(Number.isNaN(t.getTime()))return"";const e=Math.round((t.getTime()-s.getTime())/864e5);return e===0?"today":e===1?"tomorrow":e<0?Math.abs(e)<14?`${Math.abs(e)}d ago`:`${Math.round(Math.abs(e)/7)}w ago`:e<14?`in ${e}d`:`in ${Math.round(e/7)}w`}class qi extends S{constructor(){super({id:"economic-calendar",title:"Economic Calendar",showCount:!1,infoTooltip:d("components.economicCalendar.infoTooltip")});x(this,"_hasData",!1);x(this,"_events",[]);x(this,"_region","all");this.content.addEventListener("click",t=>{const e=t.target.closest("button[data-region]");if(!e)return;const n=e.dataset.region;n&&n!==this._region&&(this._region=n,this._render())})}async fetchData(){this.showLoading("Loading economic calendar...");try{const t=await Li(),e=new Date,n=e.toISOString().slice(0,10),a=new Date(e.getTime()+30*864e5).toISOString().slice(0,10),r=await t.getEconomicCalendar({fromDate:n,toDate:a});return r.unavailable||!r.events||r.events.length===0?(this._hasData||this.showError("Economic calendar data unavailable.",()=>void this.fetchData()),!1):(this._events=r.events,this._hasData=!0,this._render(),!0)}catch(t){return this.isAbortError(t)||this._hasData||this.showError("Failed to load economic calendar.",()=>void this.fetchData()),!1}}_filterEvents(){return this._region==="us"?this._events.filter(t=>t.country==="US"):this._region==="eu"?this._events.filter(t=>Oi.has(t.country)):this._events}_renderRegionTabs(){return'<div style="display:flex;gap:4px;padding:0 14px 10px">'+[{key:"all",label:"All"},{key:"us",label:"US"},{key:"eu",label:"EU"}].map(({key:e,label:n})=>{const a=this._region===e;return`<button data-region="${e}" style="
          padding:3px 10px;font-size:10px;font-weight:600;letter-spacing:0.04em;
          border-radius:3px;border:none;cursor:pointer;
          background:${a?"rgba(255,255,255,0.15)":"transparent"};
          color:${a?"var(--text)":"rgba(255,255,255,0.35)"};
        ">${l(n)}</button>`}).join("")+"</div>"}_render(){if(!this._hasData){this.showError("No upcoming economic events.",()=>void this.fetchData());return}const t=this._filterEvents(),e=ji(t);let n="",a=!0;for(const[p,m]of e){const g=a?"":"border-top:1px solid rgba(255,255,255,0.06);";a=!1,n+=`<tr>
        <td colspan="3" style="
          padding:10px 0 3px;
          font-size:10px;font-weight:600;
          color:rgba(255,255,255,0.35);
          text-transform:uppercase;letter-spacing:0.06em;
          ${g}
        ">${l(Ui(p))}</td>
      </tr>`;for(const f of m){const y=(f.impact||"low").toLowerCase(),h=jt[y]??jt.low,u=Ii[f.country]??l(f.country),v=y==="high";let b,w;f.actual?(b=l(Gi(f.actual,f.unit)),w="color:var(--text);font-weight:600"):(b=l(Vi(f.date)),w="color:rgba(255,255,255,0.35);font-style:italic"),n+=`<tr style="font-size:12px;line-height:1.2">
          <td style="padding:4px 8px 4px 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:0">
            <span style="margin-right:5px">${u}</span><span style="font-weight:${v?600:400}">${l(f.event)}</span>
          </td>
          <td style="padding:4px 6px;text-align:center;vertical-align:middle">
            <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:${h};vertical-align:middle"></span>
          </td>
          <td style="padding:4px 0;text-align:right;font-variant-numeric:tabular-nums;${w};white-space:nowrap">${b}</td>
        </tr>`}}const r=this._region==="all"?"No upcoming economic events":"No events for selected region",o=t.length===0?`<tr><td colspan="3" style="padding:20px 0;text-align:center;color:rgba(255,255,255,0.3);font-size:12px">${l(r)}</td></tr>`:"",c=`${this._renderRegionTabs()}<div style="padding:0 14px 12px;max-height:440px;overflow-y:auto">
      <table style="width:100%;border-collapse:collapse;table-layout:fixed">
        <colgroup>
          <col style="width:auto">
          <col style="width:20px">
          <col style="width:64px">
        </colgroup>
        <thead>
          <tr style="font-size:9px;font-weight:600;color:rgba(255,255,255,0.25);text-transform:uppercase;letter-spacing:0.06em">
            <th style="text-align:left;padding:0 8px 8px 0;font-weight:600">EVENT</th>
            <th style="padding:0 0 8px;font-weight:600"></th>
            <th style="text-align:right;padding:0 0 8px;font-weight:600"></th>
          </tr>
        </thead>
        <tbody>${o}${n}</tbody>
      </table>
    </div>`;this.setSafeContent($(c,"legacy Panel.setContent() migration"))}}const Kn=Object.freeze(Object.defineProperty({__proto__:null,EconomicCalendarPanel:qi},Symbol.toStringTag,{value:"Module"}));let rt=null;async function Hi(){if(!rt){const{MarketServiceClient:i}=await _(async()=>{const{MarketServiceClient:t}=await import("./rpc-client-market-v1-_8hoR3DZ.js");return{MarketServiceClient:t}},[]),{getRpcBaseUrl:s}=await _(async()=>{const{getRpcBaseUrl:t}=await import("./embed-url-DQf_jd4F.js").then(e=>e.a3);return{getRpcBaseUrl:t}},__vite__mapDeps([0,1,2,3,4,5,6,7]));rt=new i(s(),{fetch:(...t)=>globalThis.fetch(...t)})}return rt}function Ut(i){return typeof i=="number"?i:parseInt(String(i),10)||0}function Gt(i,s){const t=Math.max(-100,Math.min(100,i)),e=Math.abs(t)/100*50,n=t>=0?"#2ecc71":"#e74c3c",a=t>=0?50:50-e,r=t>=0?"+":"";return`
    <div style="margin:3px 0">
      <div style="display:flex;justify-content:space-between;font-size:9px;color:var(--text-dim);margin-bottom:2px">
        <span>${l(s)}</span>
        <span style="color:${n};font-weight:600">${r}${t.toFixed(1)}%</span>
      </div>
      <div style="position:relative;height:8px;background:rgba(255,255,255,0.06);border-radius:2px">
        <div style="position:absolute;top:0;bottom:0;left:50%;width:1px;background:rgba(255,255,255,0.15)"></div>
        <div style="position:absolute;top:0;bottom:0;left:${a.toFixed(2)}%;width:${e.toFixed(2)}%;background:${n};border-radius:1px"></div>
      </div>
    </div>`}function Yi(i){const s=Ut(i.leveragedFundsLong),t=Ut(i.leveragedFundsShort),e=i.netPct,n=(s-t)/Math.max(s+t,1)*100;return`
    <div style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
        <span style="font-size:12px;font-weight:600">${l(i.name)}</span>
        <span style="font-size:9px;color:var(--text-dim)">${l(i.code)}</span>
      </div>
      ${Gt(e,"Asset Managers")}
      ${Gt(n,"Leveraged Funds")}
    </div>`}class Wi extends S{constructor(){super({id:"cot-positioning",title:"CFTC COT Positioning",showCount:!1,infoTooltip:d("components.cotPositioning.infoTooltip")});x(this,"_hasData",!1)}async fetchData(){this.showLoading();try{const e=await(await Hi()).getCotPositioning({});return e.unavailable||!e.instruments||e.instruments.length===0?(this._hasData||this.showError("COT data unavailable",()=>void this.fetchData()),!1):(this._hasData=!0,this.render(e.instruments,e.reportDate??""),!0)}catch(t){return this._hasData||this.showError(t instanceof Error?t.message:"Failed to load",()=>void this.fetchData()),!1}}render(t,e){const n=t.map(Yi).join(""),a=e?`<div style="font-size:9px;color:var(--text-dim);margin-top:8px;text-align:right">Report date: ${l(e)}</div>`:"",r=`
      <div style="padding:10px 14px">
        ${n}
        ${a}
      </div>`;this.setSafeContent($(r,"legacy Panel.setContent() migration"))}}const Qn=Object.freeze(Object.defineProperty({__proto__:null,CotPositioningPanel:Wi},Symbol.toStringTag,{value:"Module"}));let lt=null;async function Xi(){if(!lt){const{MarketServiceClient:i}=await _(async()=>{const{MarketServiceClient:t}=await import("./rpc-client-market-v1-_8hoR3DZ.js");return{MarketServiceClient:t}},[]),{getRpcBaseUrl:s}=await _(async()=>{const{getRpcBaseUrl:t}=await import("./embed-url-DQf_jd4F.js").then(e=>e.a3);return{getRpcBaseUrl:t}},__vite__mapDeps([0,1,2,3,4,5,6,7]));lt=new i(s(),{fetch:te})}return lt}const Vt=["AAPL","MSFT","NVDA","AMZN","GOOGL","META","TSLA"],ct=["CL","GC","SI","ES","NQ"],Ki={ES:"S&P 500 futures",NQ:"Nasdaq futures"};function H(i){if(typeof i=="number")return i;const s=parseInt(String(i),10);return Number.isFinite(s)?s:0}function qt(i){return i===null?'<span class="commodity-change">—</span>':`<span class="commodity-change ${D(i)}">${E(i)}</span>`}function Ht(i,s){const t=i+s;return t<=0?null:(i-s)/t*100}function Qi(i){return i===null?"—":`${i>=0?"+":""}${i.toFixed(1)}%`}class Ji extends S{constructor(){super({id:"liquidity-shifts",title:d("components.liquidityShifts.title"),showCount:!1,infoTooltip:d("components.liquidityShifts.infoTooltip")});x(this,"_hasData",!1)}async fetchData(){var t;this.showLoading();try{const e=await Xi(),[n,a]=await Promise.all([e.getCotPositioning({}),e.listMarketQuotes({symbols:Vt})]),r=(n.instruments??[]).filter(h=>ct.includes(h.code??"")).sort((h,u)=>ct.indexOf(h.code??"")-ct.indexOf(u.code??""));if(r.length===0&&(((t=a.quotes)==null?void 0:t.length)??0)===0)return this._hasData||this.showError(d("components.liquidityShifts.unavailable"),()=>void this.fetchData()),!1;this._hasData=!0;const o=r.map(h=>{const u=H(h.assetManagerLong??0),v=H(h.assetManagerShort??0),b=Ht(u,v),w=H(h.leveragedFundsLong??0),k=H(h.leveragedFundsShort??0),C=w>0||k>0,F=C?Ht(w,k):null,P=h.code??"",j=Ki[P]??h.name??P,U=C?`<div class="market-symbol">${d("components.liquidityShifts.lev")} ${l(Qi(F))}</div>`:"";return`<div class="liquidity-row">
          <div class="liquidity-row__info">
            <div class="market-name">${l(j)}</div>
            <div class="market-symbol">${l(P)} • ${d("components.liquidityShifts.longShort",{long:String(u),short:String(v)})}</div>
          </div>
          <div class="liquidity-row__values">
            <div>${qt(b)}</div>
            ${U}
          </div>
        </div>`}).join(""),c=new Map(Vt.map((h,u)=>[h,u])),m=[...a.quotes??[]].sort((h,u)=>{const v=c.get(h.symbol??"")??Number.MAX_SAFE_INTEGER,b=c.get(u.symbol??"")??Number.MAX_SAFE_INTEGER;return v-b}).map(h=>{const u=Number(h.change??0);return`<div class="market-item liquidity-stock-row">
            <div class="market-info">
              <span class="market-name">${l(h.name||h.symbol||"")}</span>
              <span class="market-symbol">${l(h.symbol||"")}</span>
            </div>
            <div>${qt(u)}</div>
          </div>`}).join(""),g=`<div class="market-symbol">${d("components.liquidityShifts.noCot")}</div>`,f=`<div class="market-symbol">${d("components.liquidityShifts.noStocks")}</div>`,y=n.reportDate?`<div class="market-symbol liquidity-report-date">${d("components.liquidityShifts.reportDate",{date:n.reportDate})}</div>`:"";return this.setSafeContent($(`
        <div class="liquidity-shifts-panel">
          <div class="liquidity-shifts-panel__section-title">${d("components.liquidityShifts.cotSection")}</div>
          ${o||g}
          <div class="liquidity-shifts-panel__section-title liquidity-shifts-panel__section-title--gap">${d("components.liquidityShifts.stocksSection")}</div>
          ${m||f}
          ${y}
        </div>
      `,"legacy Panel.setContent() migration")),!0}catch(e){return this._hasData||this.showError(e instanceof Error?e.message:d("components.liquidityShifts.failed"),()=>void this.fetchData()),!1}}}const Jn=Object.freeze(Object.defineProperty({__proto__:null,LiquidityShiftsPanel:Ji},Symbol.toStringTag,{value:"Module"}));let dt=null;async function Zi(){if(!dt){const{MarketServiceClient:i}=await _(async()=>{const{MarketServiceClient:t}=await import("./rpc-client-market-v1-_8hoR3DZ.js");return{MarketServiceClient:t}},[]),{getRpcBaseUrl:s}=await _(async()=>{const{getRpcBaseUrl:t}=await import("./embed-url-DQf_jd4F.js").then(e=>e.a3);return{getRpcBaseUrl:t}},__vite__mapDeps([0,1,2,3,4,5,6,7]));dt=new i(s(),{fetch:(...t)=>globalThis.fetch(...t)})}return dt}const tn=40;function en(i){if(!Array.isArray(i)||i.length<13)return null;const s=i[i.length-1],t=i[i.length-13];return!(t>0)||!Number.isFinite(s)?null:(s-t)/t}function nn(i){if(i==null)return null;const s=typeof i=="number"?i:parseFloat(String(i));return Number.isFinite(s)?s:null}function sn(i,s){const t=Array.isArray(i.sparkOi)?i.sparkOi.filter(e=>Number.isFinite(e)):[];return{symbol:String(i.symbol??""),display:String(i.display??""),group:String(i.group??""),funding:s?typeof i.funding=="number"&&Number.isFinite(i.funding)?i.funding:null:nn(i.funding),oiDelta1h:en(t),composite:Number(i.composite||0),warmup:!!i.warmup,stale:!!i.stale}}function Yt(i,s){const t=[],e=[],n=[];for(const a of i){const r=sn(a,s),o=r.group;o==="fx"?n.push(r):o==="crypto"?e.push(r):t.push(r)}return{warmup:!1,commodityAssets:t,cryptoAssets:e,fxAssets:n,unavailable:!1}}function an(i,s){return i<15?"var(--text-dim)":s!=null&&s<0?i>=60?"#e74c3c":i>=40?"#e67e22":"#c0392b88":i>=60?"#2ecc71":i>=40?"#27ae60":"#2ecc7188"}function on(i,s,t=56){const e=(t-6)/2,n=t/2,a=t/2+2,r=Math.PI*.8,o=Math.PI*2.2,c=o-r,p=r+i/100*c,m=n+e*Math.cos(r),g=a+e*Math.sin(r),f=n+e*Math.cos(o),y=a+e*Math.sin(o),h=n+e*Math.cos(p),u=a+e*Math.sin(p),v=p-r>Math.PI?1:0,b=i<15?.4:i<40?.6:.9;return`<svg width="${t}" height="${t}" viewBox="0 0 ${t} ${t}" class="pos-gauge">
    <path d="M ${m} ${g} A ${e} ${e} 0 1 1 ${f} ${y}" fill="none" stroke="var(--border-color, #333)" stroke-width="3" stroke-linecap="round"/>
    ${i>0?`<path d="M ${m} ${g} A ${e} ${e} 0 ${v} 1 ${h} ${u}" fill="none" stroke="${s}" stroke-width="3.5" stroke-linecap="round" opacity="${b}"/>`:""}
    <text x="${n}" y="${a+2}" text-anchor="middle" dominant-baseline="middle" fill="${s}" font-size="13" font-weight="600" opacity="${b}">${Math.round(i)}</text>
  </svg>`}function rn(i,s){const t=Math.round(i.composite),e=an(t,i.funding),n=t>=tn,a=i.funding!=null?`${(i.funding*100).toFixed(3)}%`:"--",r=i.funding!=null&&i.funding<0?"change-negative":"change-positive",o=i.oiDelta1h!=null?`${i.oiDelta1h>=0?"+":""}${(i.oiDelta1h*100).toFixed(1)}%`:"--",c=i.oiDelta1h!=null&&i.oiDelta1h<0?"change-negative":"change-positive",p=i.stale?' <span class="pos-badge pos-badge--stale">stale</span>':"",m=i.warmup?' <span class="pos-badge pos-badge--warmup">warm</span>':"",g=n?" pos-card--elevated":"",f=n?` style="--pos-glow-color: ${e}"`:"",y=s?` data-pos-navigate="${l(s)}"`:"",h=s?" pos-card--clickable":"",u=`${i.symbol} score ${t}/100`+(i.funding!=null?` | funding ${a}`:"")+(i.oiDelta1h!=null?` | OI delta ${o}`:"")+(i.warmup?" | warming up":"")+(i.stale?" | upstream stale":"");return`<div class="pos-card${g}${h}"${f}${y} title="${l(u)}">
    <div class="pos-card__name">${l(i.display)}${p}${m}</div>
    ${on(t,e)}
    <div class="pos-card__metrics">
      <span class="${r}" title="hourly funding">${l(a)}</span>
      <span class="${c}" title="OI delta 1h">${l(o)}</span>
    </div>
  </div>`}const ln={BTC:"crypto",ETH:"crypto",SOL:"crypto",PAXG:"commodities","xyz:CL":"commodities","xyz:BRENTOIL":"commodities","xyz:GOLD":"commodities","xyz:SILVER":"commodities","xyz:PLATINUM":"commodities","xyz:PALLADIUM":"commodities","xyz:COPPER":"commodities","xyz:NATGAS":"commodities"};function cn(i){const s=ln[i];return s&&document.querySelector(`[data-panel="${s}"]`)?s:null}function pt(i,s){if(s.length===0)return"";const e=[...s].sort((n,a)=>a.composite-n.composite).map(n=>rn(n,cn(n.symbol))).join("");return`<div class="pos-section">
    <div class="pos-section__header">${l(i)}</div>
    <div class="pos-grid">${e}</div>
  </div>`}class dn extends S{constructor(){super({id:"positioning-247",title:d("components.positioning247.title"),showCount:!1,infoTooltip:d("components.positioning247.infoTooltip")});x(this,"_flow",null);x(this,"_loading",!1);this.content.addEventListener("click",t=>{const e=t.target.closest("[data-pos-navigate]");if(e!=null&&e.dataset.posNavigate){const n=document.querySelector(`[data-panel="${e.dataset.posNavigate}"]`);n&&(n.scrollIntoView({behavior:"smooth",block:"center"}),n.classList.add("panel-highlight"),setTimeout(()=>n.classList.remove("panel-highlight"),1500))}})}async fetchData(){if(this._loading)return!1;this._loading=!0;try{if(!this._flow){const n=M("hyperliquidFlow");n&&!n.unavailable&&Array.isArray(n.assets)&&n.assets.length>0&&(this._flow={...Yt(n.assets,!0),warmup:!!n.warmup},this._render())}const e=await(await Zi()).getHyperliquidFlow({});return e.unavailable||!e.assets||e.assets.length===0?this._flow||(this._flow={warmup:!0,commodityAssets:[],cryptoAssets:[],fxAssets:[],unavailable:!0}):this._flow={...Yt(e.assets,!1),warmup:!!e.warmup},this._render(),!0}catch(t){return console.error("[PositioningPanel] RPC failed:",t instanceof Error?t.message:t),this._flow||(this._flow={warmup:!0,commodityAssets:[],cryptoAssets:[],fxAssets:[],unavailable:!0}),this._render(),!1}finally{this._loading=!1}}_render(){if(!this._flow){this.showLoading();return}if(this._flow.unavailable){this.setSafeContent($(`<div class="pos-panel"><div class="pos-warmup">${l(d("components.positioning247.warmup"))}</div></div>`,"legacy Panel.setContent() migration"));return}const t=[];this._flow.warmup&&t.push(`<div class="pos-warmup">${l(d("components.positioning247.warmup"))}</div>`),t.push(pt(d("components.positioning247.commodities"),this._flow.commodityAssets)),t.push(pt(d("components.positioning247.crypto"),this._flow.cryptoAssets)),t.push(pt(d("components.positioning247.fx"),this._flow.fxAssets)),t.push(`<div class="pos-footer">${l(d("components.positioning247.footer"))}</div>`),this.setSafeContent($(`<div class="pos-panel">${t.join("")}</div>`,"legacy Panel.setContent() migration"))}}const Zn=Object.freeze(Object.defineProperty({__proto__:null,PositioningPanel:dn},Symbol.toStringTag,{value:"Module"}));function A(i,s=2){return!Number.isFinite(i)||i<=0?"--":i>=1e4?Math.round(i).toLocaleString():i.toLocaleString(void 0,{minimumFractionDigits:s,maximumFractionDigits:s})}function ut(i){const s=typeof i=="string"?parseInt(i,10):i;return Number.isFinite(s)?Math.round(s).toLocaleString():"--"}function Q(i,s=2){return Number.isFinite(i)?`${i>=0?"+":""}${i.toFixed(s)}%`:"--"}function pn(i){const s=typeof i=="string"?parseInt(i,10):i;return Number.isFinite(s)?`${s>=0?"+":""}${Math.round(s).toLocaleString()}`:"--"}function un(i){if(!i)return{text:"Updated —",dot:"var(--text-dim)"};const s=Date.now()-new Date(i).getTime();if(!Number.isFinite(s)||s<0)return{text:"Updated now",dot:"#2ecc71"};const t=Math.floor(s/6e4),e=t<10?"#2ecc71":t<30?"#f5a623":"#e74c3c";return t<1?{text:"Updated just now",dot:e}:t<60?{text:`Updated ${t}m ago`,dot:e}:{text:`Updated ${Math.floor(t/60)}h ago`,dot:e}}function mn(i,s,t,e){const n=Math.max(0,Math.min(100,e));return`
    <div style="position:relative;height:8px;background:linear-gradient(90deg,rgba(231,76,60,0.25),rgba(245,166,35,0.25),rgba(46,204,113,0.25));border-radius:4px;margin:6px 0">
      <div style="position:absolute;top:-3px;bottom:-3px;left:${n.toFixed(1)}%;width:3px;background:#fff;border-radius:1px;box-shadow:0 0 4px rgba(255,255,255,0.8);transform:translateX(-50%)"></div>
    </div>
    <div style="display:flex;justify-content:space-between;font-size:9px;color:var(--text-dim)">
      <span>Low $${l(A(i))}</span>
      <span style="color:var(--text);font-weight:600">$${l(A(t))} • ${n.toFixed(0)}% of range</span>
      <span>High $${l(A(s))}</span>
    </div>`}function Wt(i,s,t){const e=Math.max(-100,Math.min(100,i)),n=Math.abs(e)/100*50,a=e>=0?"#2ecc71":"#e74c3c",r=e>=0?50:50-n,o=e>=0?"+":"",c=parseInt(t,10),p=Number.isFinite(c)&&c!==0?` <span style="font-size:9px;color:${c>=0?"#2ecc71":"#e74c3c"};font-weight:500">Δ ${pn(t)}</span>`:"";return`
    <div style="margin:4px 0">
      <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text-dim);margin-bottom:2px">
        <span>${l(s)}${p}</span>
        <span style="color:${a};font-weight:600">${o}${e.toFixed(1)}%</span>
      </div>
      <div style="position:relative;height:8px;background:rgba(255,255,255,0.06);border-radius:2px">
        <div style="position:absolute;top:0;bottom:0;left:50%;width:1px;background:rgba(255,255,255,0.15)"></div>
        <div style="position:absolute;top:0;bottom:0;left:${r.toFixed(2)}%;width:${n.toFixed(2)}%;background:${a};border-radius:1px"></div>
      </div>
    </div>`}function gn(i){return i>80?{text:"Silver undervalued",color:"#f5a623"}:i<60?{text:"Gold undervalued",color:"#f5a623"}:{text:"Neutral",color:"var(--text-dim)"}}function Y(i,s){const t=s>=0?"#2ecc71":"#e74c3c";return`<div style="flex:1;text-align:center;padding:4px;background:rgba(255,255,255,0.03);border-radius:4px">
    <div style="font-size:9px;color:var(--text-dim)">${l(i)}</div>
    <div style="font-size:11px;font-weight:600;color:${t}">${l(Q(s,1))}</div>
  </div>`}class hn extends S{constructor(){super({id:"gold-intelligence",title:d("panels.goldIntelligence"),infoTooltip:d("components.goldIntelligence.infoTooltip")});x(this,"_hasData",!1)}async fetchData(){var t,e;this.showLoading();try{const n=xt("/api/market/v1/get-gold-intelligence"),a=await fetch(n);if(!a.ok)throw new Error(`HTTP ${a.status}`);const r=await a.json();return r.unavailable?(this._hasData||this.showError("Gold data unavailable",()=>void this.fetchData()),!1):(t=this.element)!=null&&t.isConnected?(this._hasData=!0,this.render(r),!0):!1}catch(n){return this.isAbortError(n)||!((e=this.element)!=null&&e.isConnected)||this._hasData||this.showError(n instanceof Error?n.message:"Failed to load",()=>void this.fetchData()),!1}}renderHeader(t){const e=t.goldChangePct,n=e>=0?"#2ecc71":"#e74c3c",a=I(t.goldSparkline,e,80,20),r=un(t.updatedAt),o=t.session&&t.session.dayHigh>0?`<div style="font-size:9px;color:var(--text-dim);margin-top:2px">
          Session H $${l(A(t.session.dayHigh))} • L $${l(A(t.session.dayLow))} • Prev $${l(A(t.session.prevClose))}
        </div>`:"";return`
      <div class="energy-tape-section">
        <div class="energy-section-title">Price &amp; Performance</div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
          <span style="font-size:16px;font-weight:700">$${l(A(t.goldPrice))}</span>
          <span style="font-size:11px;font-weight:600;color:${n};padding:1px 6px;border-radius:3px;background:${n}22">${Q(e)}</span>
          ${a}
        </div>
        <div style="display:flex;align-items:center;gap:6px;font-size:9px;color:var(--text-dim)">
          <span style="width:6px;height:6px;border-radius:50%;background:${r.dot};display:inline-block"></span>
          <span>${l(r.text)} • GC=F front-month</span>
        </div>
        ${o}
      </div>`}renderReturns(t){if(!t.returns&&!t.range52w)return"";const e=t.returns?`<div style="display:flex;gap:4px;margin-top:6px">
          ${Y("1W",t.returns.w1)}
          ${Y("1M",t.returns.m1)}
          ${Y("YTD",t.returns.ytd)}
          ${Y("1Y",t.returns.y1)}
        </div>`:"",n=t.range52w&&t.range52w.hi>0?`<div style="margin-top:8px">
          <div style="font-size:9px;color:var(--text-dim)">52-week range</div>
          ${mn(t.range52w.lo,t.range52w.hi,t.goldPrice,t.range52w.positionPct)}
        </div>`:"";return`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Returns</div>
      ${e}
      ${n}
    </div>`}renderMetals(t){const e=t.goldSilverRatio!=null&&Number.isFinite(t.goldSilverRatio)?(()=>{const r=gn(t.goldSilverRatio);return`<div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px">
          <span style="font-size:10px;color:var(--text-dim)">Gold/Silver Ratio</span>
          <span style="font-size:11px;font-weight:600">${l(t.goldSilverRatio.toFixed(1))} <span style="font-size:9px;color:${r.color};font-weight:400">${l(r.text)}</span></span>
        </div>`})():"",n=t.goldPlatinumPremiumPct!=null&&Number.isFinite(t.goldPlatinumPremiumPct)?`<div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px">
          <span style="font-size:10px;color:var(--text-dim)">Gold vs Platinum</span>
          <span style="font-size:11px;font-weight:600">${l(Q(t.goldPlatinumPremiumPct,1))} premium</span>
        </div>`:"",a=[{label:"Silver",price:t.silverPrice},{label:"Platinum",price:t.platinumPrice},{label:"Palladium",price:t.palladiumPrice}].map(r=>`<div style="flex:1;text-align:center;padding:4px;background:rgba(255,255,255,0.03);border-radius:4px">
        <div style="font-size:9px;color:var(--text-dim)">${l(r.label)}</div>
        <div style="font-size:11px;font-weight:600">$${l(A(r.price))}</div>
      </div>`).join("");return`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Metals Complex</div>
      ${e}
      ${n}
      <div style="display:flex;gap:6px;margin-top:8px">${a}</div>
    </div>`}renderFx(t){return t.crossCurrencyPrices.length?`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Gold in Major Currencies</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px">${t.crossCurrencyPrices.map(n=>`<div style="text-align:center;padding:4px;background:rgba(255,255,255,0.03);border-radius:4px">
        <div style="font-size:9px;color:var(--text-dim)">${l(n.flag)} XAU/${l(n.currency)}</div>
        <div style="font-size:11px;font-weight:600">${l(A(n.price,0))}</div>
      </div>`).join("")}</div>
    </div>`:""}renderPositioning(t){const e=t.cot;if(!e)return"";const n=e.managedMoney,a=e.producerSwap,r=n?Wt(n.netPct,"Managed Money (speculators)",n.wowNetDelta):"",o=a?Wt(a.netPct,"Producer/Swap (commercials)",a.wowNetDelta):"",c=(m,g)=>m?`<div style="display:flex;justify-content:space-between;font-size:9px;color:var(--text-dim);padding:2px 0">
          <span>${l(g)}</span>
          <span>L ${l(ut(m.longPositions))} / S ${l(ut(m.shortPositions))} • ${m.oiSharePct.toFixed(1)}% OI</span>
        </div>`:"",p=e.reportDate?`<div style="display:flex;justify-content:space-between;font-size:9px;color:var(--text-dim);margin-top:6px">
          <span>As of ${l(e.reportDate)}${e.nextReleaseDate?` • next release ${l(e.nextReleaseDate)}`:""}</span>
          <span>OI ${l(ut(e.openInterest))}</span>
        </div>`:"";return`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">CFTC Positioning</div>
      ${r}
      ${c(n,"MM breakdown")}
      ${o}
      ${c(a,"P/S breakdown")}
      ${p}
    </div>`}renderCbReserves(t){const e=t.cbReserves;if(!e||!e.topHolders.length)return"";const n=(m,g)=>`<div style="display:flex;justify-content:space-between;font-size:10px;padding:1px 0">
      <span style="color:var(--text-dim)">${g}. ${l(m.name)}</span>
      <span style="font-weight:600">${m.tonnes>0?`${m.tonnes.toFixed(1)}t`:"—"}</span>
    </div>`,a=m=>{const g=m.deltaTonnes12m>=0?"#2ecc71":"#e74c3c",f=m.deltaTonnes12m>=0?"+":"";return`<div style="display:flex;justify-content:space-between;font-size:10px;padding:1px 0">
        <span style="color:var(--text-dim)">${l(m.name)}</span>
        <span style="color:${g};font-weight:600">${f}${m.deltaTonnes12m.toFixed(1)}t</span>
      </div>`},r=e.topHolders.slice(0,10).map((m,g)=>n(m,g+1)).join(""),o=e.topBuyers12m.slice(0,5).map(a).join(""),c=e.topSellers12m.slice(0,5).map(a).join(""),p=o||c?`<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px">
          <div>
            <div style="font-size:9px;color:var(--text-dim);text-transform:uppercase;margin-bottom:2px">Buyers 12M</div>
            ${o||'<div style="font-size:9px;color:var(--text-dim)">—</div>'}
          </div>
          <div>
            <div style="font-size:9px;color:var(--text-dim);text-transform:uppercase;margin-bottom:2px">Sellers 12M</div>
            ${c||'<div style="font-size:9px;color:var(--text-dim)">—</div>'}
          </div>
        </div>`:"";return`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Central-Bank Reserves</div>
      <div style="font-size:9px;color:var(--text-dim);margin-bottom:4px">Top holders (tonnes)</div>
      ${r}
      ${p}
      <div style="font-size:9px;color:var(--text-dim);margin-top:6px;text-align:right">IMF IFS • as of ${l(e.asOfMonth)}</div>
    </div>`}renderEtfFlows(t){const e=t.etfFlows;if(!e||!Number.isFinite(e.tonnes)||e.tonnes<=0)return"";const n=(o,c,p)=>{const m=c>=0?"#2ecc71":"#e74c3c",g=c>=0?"+":"",f=p>=0?"+":"";return`<div style="flex:1;text-align:center;padding:4px;background:rgba(255,255,255,0.03);border-radius:4px">
        <div style="font-size:9px;color:var(--text-dim)">${l(o)}</div>
        <div style="font-size:11px;font-weight:600;color:${m}">${g}${c.toFixed(1)}t</div>
        <div style="font-size:9px;color:${m}">${f}${p.toFixed(2)}%</div>
      </div>`},a=e.aumUsd>=1e9?`$${(e.aumUsd/1e9).toFixed(1)}B`:e.aumUsd>0?`$${(e.aumUsd/1e6).toFixed(0)}M`:"--",r=e.sparkline90d.length>1?I(e.sparkline90d,e.changeM1Pct,80,20):"";return`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Physical Flows (GLD)</div>
      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:4px">
        <div>
          <span style="font-size:14px;font-weight:700">${l(e.tonnes.toFixed(1))} <span style="font-size:10px;color:var(--text-dim);font-weight:500">tonnes</span></span>
          <span style="font-size:10px;color:var(--text-dim);margin-left:6px">AUM ${l(a)}${e.nav>0?` • NAV $${e.nav.toFixed(2)}`:""}</span>
        </div>
        ${r}
      </div>
      <div style="display:flex;gap:4px;margin-top:4px">
        ${n("1W",e.changeW1Tonnes,e.changeW1Pct)}
        ${n("1M",e.changeM1Tonnes,e.changeM1Pct)}
        ${n("1Y",e.changeY1Tonnes,e.changeY1Pct)}
      </div>
      <div style="font-size:9px;color:var(--text-dim);margin-top:4px;text-align:right">SPDR GLD • as of ${l(e.asOfDate)}</div>
    </div>`}renderDrivers(t){var n;return(n=t.drivers)!=null&&n.length?`<div class="energy-tape-section" style="margin-top:10px">
      <div class="energy-section-title">Drivers</div>
      ${t.drivers.map(a=>{const r=a.changePct>=0?"#2ecc71":"#e74c3c",o=a.correlation30d<=-.3?"#2ecc71":a.correlation30d>=.3?"#e74c3c":"var(--text-dim)";return`<div style="display:flex;justify-content:space-between;align-items:center;padding:3px 0;font-size:10px">
        <span style="color:var(--text-dim)">${l(a.label)}</span>
        <span>
          <span style="font-weight:600">${l(a.value.toFixed(2))}</span>
          <span style="color:${r};margin-left:4px">${l(Q(a.changePct,2))}</span>
          <span style="color:${o};margin-left:8px;font-size:9px">corr 30d ${a.correlation30d>=0?"+":""}${a.correlation30d.toFixed(2)}</span>
        </span>
      </div>`}).join("")}
    </div>`:""}render(t){const e=[this.renderHeader(t),this.renderReturns(t),this.renderMetals(t),this.renderFx(t),this.renderPositioning(t),this.renderEtfFlows(t),this.renderCbReserves(t),this.renderDrivers(t)].join("");this.setSafeContent($(`<div style="padding:10px 14px">${e}</div>`,"legacy Panel.setContent() migration"))}}const ts=Object.freeze(Object.defineProperty({__proto__:null,GoldIntelligencePanel:hn},Symbol.toStringTag,{value:"Module"}));function W(i){return Math.abs(i)>=1e9?`${(i/1e9).toFixed(1)}B`:Math.abs(i)>=1e6?`${(i/1e6).toFixed(1)}M`:Math.abs(i)>=1e3?`${(i/1e3).toFixed(0)}K`:i.toLocaleString()}function Xt(i){return i==="inflow"?"flow-inflow":i==="outflow"?"flow-outflow":"flow-neutral"}function fn(i){return i>.1?"change-positive":i<-.1?"change-negative":"change-neutral"}class vn extends S{constructor(){super({id:"etf-flows",title:d("panels.etfFlows"),showCount:!1,infoTooltip:d("components.etfFlows.infoTooltip")});x(this,"data",null);x(this,"loading",!0);x(this,"error",null)}async fetchData(){var e;const t=M("etfFlows");if((e=t==null?void 0:t.etfs)!=null&&e.length){this.data=t,this.error=null,this.loading=!1,this.renderPanel(),this.refreshFromRpc();return}await this.refreshFromRpc()}async refreshFromRpc(){var t,e,n;try{const r=await new Zt(bt(),{fetch:(...o)=>globalThis.fetch(...o)}).listEtfFlows({});if(!((t=this.element)!=null&&t.isConnected))return;((e=r.etfs)!=null&&e.length||!this.data)&&(this.data=r,this.error=null,this.loading=!1,this.renderPanel())}catch(a){if(this.isAbortError(a)||!((n=this.element)!=null&&n.isConnected))return;this.data||(console.warn("[ETFFlows] Fetch error:",a),this.error=d("components.etfFlows.unavailable"),this.loading=!1,this.renderPanel())}}renderPanel(){var o;if(this.loading){this.showLoading(d("common.loadingEtfData"));return}if(this.error||!this.data){this.showError(this.error||d("common.noDataShort"),()=>void this.fetchData());return}const t=this.data;if(!((o=t.etfs)!=null&&o.length)){const c=t.rateLimited?d("components.etfFlows.rateLimited"):d("components.etfFlows.unavailable");this.setSafeContent($(`<div class="panel-loading-text">${c}</div>`,"legacy Panel.setContent() migration"));return}const e=t.summary||{totalVolume:0,totalEstFlow:0,netDirection:"NEUTRAL",inflowCount:0,outflowCount:0},n=e.netDirection.includes("INFLOW")?"flow-inflow":e.netDirection.includes("OUTFLOW")?"flow-outflow":"flow-neutral",a=t.etfs.map(c=>`
      <tr class="etf-row ${Xt(c.direction)}">
        <td class="etf-ticker">${l(c.ticker)}</td>
        <td class="etf-issuer">${l(c.issuer)}</td>
        <td class="etf-flow ${Xt(c.direction)}">${c.direction==="inflow"?"+":c.direction==="outflow"?"-":""}$${W(Math.abs(c.estFlow))}</td>
        <td class="etf-volume">${W(c.volume)}</td>
        <td class="etf-change ${fn(c.priceChange)}">${c.priceChange>0?"+":""}${c.priceChange.toFixed(2)}%</td>
      </tr>
    `).join(""),r=`
      <div class="etf-flows-container">
        <div class="etf-summary ${n}">
          <div class="etf-summary-item">
            <span class="etf-summary-label">${d("components.etfFlows.netFlow")}</span>
            <span class="etf-summary-value ${n}">${e.netDirection.includes("INFLOW")?d("components.etfFlows.netInflow"):d("components.etfFlows.netOutflow")}</span>
          </div>
          <div class="etf-summary-item">
            <span class="etf-summary-label">${d("components.etfFlows.estFlow")}</span>
            <span class="etf-summary-value">$${W(Math.abs(e.totalEstFlow))}</span>
          </div>
          <div class="etf-summary-item">
            <span class="etf-summary-label">${d("components.etfFlows.totalVol")}</span>
            <span class="etf-summary-value">${W(e.totalVolume)}</span>
          </div>
          <div class="etf-summary-item">
            <span class="etf-summary-label">${d("components.etfFlows.etfs")}</span>
            <span class="etf-summary-value">${e.inflowCount}↑ ${e.outflowCount}↓</span>
          </div>
        </div>
        <div class="etf-table-wrap">
          <table class="etf-table">
            <thead>
              <tr>
                <th>${d("components.etfFlows.table.ticker")}</th>
                <th>${d("components.etfFlows.table.issuer")}</th>
                <th>${d("components.etfFlows.table.estFlow")}</th>
                <th>${d("components.etfFlows.table.volume")}</th>
                <th>${d("components.etfFlows.table.change")}</th>
              </tr>
            </thead>
            <tbody>${a}</tbody>
          </table>
        </div>
      </div>
    `;this.setSafeContent($(r,"legacy Panel.setContent() migration"))}}const es=Object.freeze(Object.defineProperty({__proto__:null,ETFFlowsPanel:vn},Symbol.toStringTag,{value:"Module"}));function X(i){return i>=1e12?`$${(i/1e12).toFixed(1)}T`:i>=1e9?`$${(i/1e9).toFixed(1)}B`:i>=1e6?`$${(i/1e6).toFixed(0)}M`:`$${i.toLocaleString()}`}function xn(i){return i==="ON PEG"?"peg-on":i==="SLIGHT DEPEG"?"peg-slight":"peg-off"}function yn(i){return i==="HEALTHY"?"health-good":i==="CAUTION"?"health-caution":"health-warning"}class bn extends S{constructor(){super({id:"stablecoins",title:d("panels.stablecoins"),showCount:!1,infoTooltip:d("components.stablecoins.infoTooltip")});x(this,"data",null);x(this,"loading",!0);x(this,"error",null)}async fetchData(){var e;const t=M("stablecoinMarkets");if((e=t==null?void 0:t.stablecoins)!=null&&e.length){this.data=t,this.error=null,this.loading=!1,this.renderPanel(),this.refreshFromRpc();return}await this.refreshFromRpc()}async refreshFromRpc(){var t,e,n;try{const r=await new Zt(bt(),{fetch:te}).listStablecoinMarkets({coins:[]});if(!((t=this.element)!=null&&t.isConnected))return;((e=r.stablecoins)!=null&&e.length||!this.data)&&(this.data=r,this.error=null,this.loading=!1,this.renderPanel())}catch(a){if(this.isAbortError(a)||!((n=this.element)!=null&&n.isConnected))return;this.data||(console.warn("[Stablecoin] Fetch error:",a),this.error=d("common.noDataShort"),this.loading=!1,this.renderPanel())}}renderPanel(){var r;if(this.loading){this.showLoading(d("common.loadingStablecoins"));return}if(this.error||!this.data){this.showError(this.error||d("common.noDataShort"),()=>void this.fetchData());return}const t=this.data;if(!((r=t.stablecoins)!=null&&r.length)){this.setSafeContent(G`<div class="panel-empty">${d("common.noDataShort")}</div>`);return}const e=t.summary||{totalMarketCap:0,totalVolume24h:0,healthStatus:"UNAVAILABLE"},n=_t(t.stablecoins.map(o=>G`
      <div class="stable-row">
        <div class="stable-info">
          <span class="stable-symbol">${o.symbol}</span>
          <span class="stable-name">${o.name}</span>
        </div>
        <div class="stable-price">$${o.price.toFixed(4)}</div>
        <div class="stable-peg ${xn(o.pegStatus)}">
          <span class="peg-badge">${o.pegStatus}</span>
          <span class="peg-dev">${o.deviation.toFixed(2)}%</span>
        </div>
      </div>
    `)),a=_t(t.stablecoins.map(o=>G`
      <div class="stable-supply-row">
        <span class="stable-symbol">${o.symbol}</span>
        <span class="stable-mcap">${X(o.marketCap)}</span>
        <span class="stable-vol">${X(o.volume24h)}</span>
        <span class="stable-change ${o.change24h>=0?"change-positive":"change-negative"}">${o.change24h>=0?"+":""}${o.change24h.toFixed(2)}%</span>
      </div>
    `));this.setSafeContent(G`
      <div class="stablecoin-container">
        <div class="stable-health ${yn(e.healthStatus)}">
          <span class="health-label">${e.healthStatus}</span>
          <span class="health-detail">MCap: ${X(e.totalMarketCap)} | Vol: ${X(e.totalVolume24h)}</span>
        </div>
        <div class="stable-section">
          <div class="stable-section-title">${d("components.stablecoins.pegHealth")}</div>
          <div class="stable-peg-list">${n}</div>
        </div>
        <div class="stable-section">
          <div class="stable-section-title">${d("components.stablecoins.supplyVolume")}</div>
          <div class="stable-supply-header">
            <span>${d("components.stablecoins.token")}</span><span>${d("components.stablecoins.mcap")}</span><span>${d("components.stablecoins.vol24h")}</span><span>${d("components.stablecoins.chg24h")}</span>
          </div>
          <div class="stable-supply-list">${a}</div>
        </div>
      </div>
    `)}}const is=Object.freeze(Object.defineProperty({__proto__:null,StablecoinPanel:bn},Symbol.toStringTag,{value:"Module"}));export{Hn as A,Qn as C,Xn as E,qn as F,ts as G,Jn as L,In as M,Zn as P,On as S,Un as W,Wn as Y,jn as a,Gn as b,Vn as c,Yn as d,Kn as e,es as f,is as g};

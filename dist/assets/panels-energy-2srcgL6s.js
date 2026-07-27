var Ke=Object.defineProperty;var Qe=(r,i,e)=>i in r?Ke(r,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[i]=e;var $=(r,i,e)=>Qe(r,typeof i!="symbol"?i+"":i,e);import{P as D}from"./Panel-BFS1c2Kk.js";import{getTrendColor as Je,getTrendIndicator as et,formatOilValue as tt,getEuGasStorageData as it}from"./index-Yw1ve9Ak.js";import{t as x,k as st,f as O}from"./panel-storage-BkgfP2pL.js";import{e as n,u as E,j as nt,f as ne,a as Z,b as at}from"./dom-utils-B8MVJOEB.js";import{n as rt,b as ot,p as lt}from"./widget-store-DjrqpRB3.js";import{m as ae}from"./sparkline-EyuwviXB.js";import{g as be,E as He,a as j,c as V,S as X,r as N}from"./embed-url-d-SgCBEn.js";import{p as ke}from"./gdelt-intel-BcCZRWmb.js";import{a as K,A as Q}from"./attribution-footer-CLmq9sQN.js";import{f as xe,a as $e,s as ct}from"./disruption-timeline-rn1TsGcA.js";import{p as dt,a as pt,d as ut}from"./pipeline-evidence-CqE_XO-h.js";import{getCachedPipelineRegistries as ht,setCachedPipelineRegistries as Ee}from"./pipeline-registry-store-C9MqcyIT.js";import{d as ft}from"./storage-evidence-DthMONVc.js";import{getCachedStorageFacilityRegistry as gt,setCachedStorageFacilityRegistry as Te}from"./storage-facility-registry-store-DlcD_guD.js";import{d as re,c as mt}from"./shortage-evidence-CwhDyV8K.js";import{getCachedFuelShortageRegistry as yt,setCachedFuelShortageRegistry as Ae}from"./fuel-shortage-registry-store-DbmVdIU_.js";import{f as We}from"./hormuz-tracker-BR6hbcFy.js";import{fetchCommodityQuotes as vt}from"./index-DWsS-Coo.js";import{b as bt}from"./_energy-risk-overview-state-0LaVUMqp.js";import{c as xt}from"./layout-batch-B9PC4ceT.js";import{describeFreshness as $t}from"./persistent-cache-vNsSKLQv.js";import{e as Pe}from"./extent-Ccx1MofX.js";import{l as oe}from"./linear-B9BZxnEW.js";import{m as he}from"./max-DBeXZoyG.js";import{s as fe}from"./string-B04_ldoR.js";import{a as wt}from"./arc-CGlAFq2g.js";import{i as Ct}from"./continuous-Ds-kXw0U.js";import{a as ge,m as Y}from"./monotone-804fPAVO.js";import{l as De}from"./line-DEDRnOn1.js";import{s as St,n as kt,a as Et}from"./stack-DSObyWpB.js";function Tt(r){return!!(r!=null&&r.wtiPrice||r!=null&&r.brentPrice||r!=null&&r.usProduction||r!=null&&r.usInventory)}class At extends D{constructor(){super({id:"energy-complex",title:x("panels.energyComplex"),defaultRowSpan:2,infoTooltip:x("components.energyComplex.infoTooltip")});$(this,"analytics",null);$(this,"tape",[]);$(this,"crudeWeeks",[]);$(this,"natGasWeeks",[]);$(this,"euGas",null);$(this,"oilStocksAnalysis",null);$(this,"lngVulnerability",null)}updateAnalytics(e){this.analytics=e,this.render()}updateTape(e){this.tape=e.filter(t=>t.price!==null),this.render()}updateCrudeInventories(e){this.crudeWeeks=e,this.render()}updateNatGas(e){this.natGasWeeks=e,this.render()}updateEuGasStorage(e){this.euGas=e.unavailable?null:e,this.render()}setOilStocksAnalysis(e){this.oilStocksAnalysis=e.unavailable?null:e,this.render()}updateLngVulnerability(e){var t;this.lngVulnerability=(t=e==null?void 0:e.top20LngDependent)!=null&&t.length?e:null,this.render()}renderOilStocksSection(){var d,o,u,h;const e=this.oilStocksAnalysis;if(!e||e.ieaMembers.length===0)return"";const t=e.ieaMembers.map(p=>{const f=p.netExporter?'<span class="energy-net-exporter-badge">Net Exporter</span>':p.daysOfCover!=null?n(String(p.daysOfCover))+" d":"—",y=p.belowObligation?'<span class="energy-below-obligation-badge">Below 90d</span>':"";return`
        <tr class="oil-stocks-row">
          <td class="oil-stocks-rank">${n(String(p.rank))}</td>
          <td class="oil-stocks-iso">${n(p.iso2)}</td>
          <td class="oil-stocks-days">${f}${y}</td>
          <td class="oil-stocks-vs">${p.vsObligation!=null?(p.vsObligation>0?"+":"")+n(String(p.vsObligation)):"—"}</td>
        </tr>`}).join(""),s=e.regionalSummary,a=((d=s==null?void 0:s.europe)==null?void 0:d.avgDays)!=null?`<div class="oil-stocks-region-row"><span class="oil-stocks-region-name">Europe</span><span>avg ${n(String(s.europe.avgDays))}d / min ${n(String(((o=s.europe)==null?void 0:o.minDays)??"—"))}d</span>${(s.europe.countBelowObligation??0)>0?`<span class="energy-below-obligation-badge">${n(String(s.europe.countBelowObligation))} below 90d</span>`:""}</div>`:"",c=((u=s==null?void 0:s.asiaPacific)==null?void 0:u.avgDays)!=null?`<div class="oil-stocks-region-row"><span class="oil-stocks-region-name">Asia-Pacific</span><span>avg ${n(String(s.asiaPacific.avgDays))}d / min ${n(String(((h=s.asiaPacific)==null?void 0:h.minDays)??"—"))}d</span>${(s.asiaPacific.countBelowObligation??0)>0?`<span class="energy-below-obligation-badge">${n(String(s.asiaPacific.countBelowObligation))} below 90d</span>`:""}</div>`:"",l=s!=null&&s.northAmerica?`<div class="oil-stocks-region-row"><span class="oil-stocks-region-name">North America</span><span>${n(String(s.northAmerica.netExporters??0))} net exporter(s)${s.northAmerica.avgDays!=null?`, avg ${n(String(s.northAmerica.avgDays))}d`:""}</span></div>`:"";return`
      <div class="energy-tape-section" style="margin-top:8px">
        <div class="energy-section-title">IEA Oil Stocks — Days of Cover</div>
        <table class="oil-stocks-table">
          <thead><tr><th>#</th><th>Ctry</th><th>Days</th><th>vs 90d</th></tr></thead>
          <tbody>${t}</tbody>
        </table>
        <div class="oil-stocks-regional" style="margin-top:6px">
          ${a}${c}${l}
        </div>
        <div class="indicator-date" style="margin-top:4px">Data: ${n(e.dataMonth)} (IEA)</div>
      </div>`}renderLngVulnerabilitySection(){const e=this.lngVulnerability;return!e||e.top20LngDependent.length===0?"":`
      <div class="energy-tape-section" style="margin-top:8px">
        <div class="energy-section-title">LNG Vulnerability</div>
        <table class="oil-stocks-table">
          <thead><tr><th>Country</th><th>LNG Share</th><th>LNG Imports</th></tr></thead>
          <tbody>${e.top20LngDependent.slice(0,5).map(a=>`
      <tr class="oil-stocks-row">
        <td class="oil-stocks-iso">${n(a.iso2)}</td>
        <td class="oil-stocks-days">${n((a.lngShareOfImports*100).toFixed(1))}%</td>
        <td class="oil-stocks-vs">${n(String(Math.round(a.lngImportsTj)))} TJ</td>
      </tr>`).join("")}</tbody>
        </table>
        <div class="indicator-date" style="margin-top:4px">Data: ${n(e.dataMonth)} (JODI Gas)</div>
      </div>`}render(){var _,J,F,U,H,B,ee,te,ie;const e=new Set(this.tape.filter(C=>C.price!==null).map(C=>C.symbol)),t=e.has("CL=F"),s=e.has("BZ=F"),a=[t?null:(_=this.analytics)==null?void 0:_.wtiPrice,s?null:(J=this.analytics)==null?void 0:J.brentPrice,(F=this.analytics)==null?void 0:F.usProduction,(U=this.analytics)==null?void 0:U.usInventory].filter(Boolean);if(a.length===0&&this.tape.length===0&&this.crudeWeeks.length===0&&this.natGasWeeks.length===0&&!this.euGas&&!this.oilStocksAnalysis&&!this.lngVulnerability){this.setSafeContent(E(`<div class="economic-empty">${x("components.energyComplex.noData")}</div>`,"legacy Panel.setContent() migration"));return}const c=[];Tt(this.analytics)&&c.push("EIA"),this.tape.length>0&&c.push(x("components.energyComplex.liveTapeSource")),this.euGas&&c.push("GIE AGSI+"),this.oilStocksAnalysis&&c.push("IEA"),this.lngVulnerability&&c.push("JODI Gas");const l=this.crudeWeeks[0]??null,d=(l==null?void 0:l.weeklyChangeMb)??null,o=d!==null&&d>0?"+":"",u=d===null?"":d>0?"change-negative":"change-positive",h=this.crudeWeeks.slice().reverse().map(C=>C.stocksMb),p=this.natGasWeeks[0]??null,f=(p==null?void 0:p.weeklyChangeBcf)??null,y=f!==null&&f>0?"+":"",b=f===null?"":f>0?"change-negative":"change-positive",g=this.natGasWeeks.slice().reverse().map(C=>C.storBcf),m=((H=this.euGas)==null?void 0:H.fillPct)??null,w=((B=this.euGas)==null?void 0:B.fillPctChange1d)??null,S=w!==null&&w>0?"+":"",k=w===null?"":w>0?"change-positive":"change-negative",z=((ee=this.euGas)==null?void 0:ee.trend)??"",I=(((te=this.euGas)==null?void 0:te.history)??[]).slice().reverse().map(C=>C.fillPct);this.setSafeContent(E(`
      <div class="energy-complex-content">
        ${a.length>0?`
          <div class="energy-summary-grid">
            ${a.map(C=>{if(!C)return"";const W=Je(C.trend,C.name.includes("Production")),se=`${C.changePct>0?"+":""}${C.changePct.toFixed(1)}%`;return`
                <div class="energy-summary-card">
                  <div class="energy-summary-head">
                    <span class="energy-summary-name">${n(C.name)}</span>
                    <span class="energy-summary-trend" style="color:${n(W)}">${n(et(C.trend))}</span>
                  </div>
                  <div class="energy-summary-value">${n(tt(C.current,C.unit))} <span class="energy-unit">${n(C.unit)}</span></div>
                  <div class="energy-summary-change" style="color:${n(W)}">${n(se)}</div>
                  <div class="indicator-date">${n(C.lastUpdated.slice(0,10))}</div>
                </div>
              `}).join("")}
          </div>
        `:""}
        ${this.crudeWeeks.length>0?`
          <div class="energy-tape-section" style="margin-top:8px">
            <div class="energy-section-title">US Crude Inventories (Mb)</div>
            <div style="display:flex;align-items:center;gap:10px;margin-top:4px">
              ${ae(h,d,80,22)}
              <div>
                <span class="commodity-price">${n(l?l.stocksMb.toFixed(1):"—")} Mb</span>
                ${d!==null?`<span class="commodity-change ${n(u)}" style="margin-left:6px">${n(o+d.toFixed(1))} WoW</span>`:""}
              </div>
            </div>
            <div class="indicator-date" style="margin-top:2px">${n((l==null?void 0:l.period)??"")}</div>
          </div>
        `:""}
        ${this.natGasWeeks.length>0?`
          <div class="energy-tape-section" style="margin-top:8px">
            <div class="energy-section-title">US Nat Gas Storage (Bcf)</div>
            <div style="display:flex;align-items:center;gap:10px;margin-top:4px">
              ${ae(g,f,80,22)}
              <div>
                <span class="commodity-price">${n(p?p.storBcf.toFixed(0):"—")} Bcf</span>
                ${f!==null?`<span class="commodity-change ${n(b)}" style="margin-left:6px">${n(y+f.toFixed(0))} WoW</span>`:""}
              </div>
            </div>
            <div class="indicator-date" style="margin-top:2px">${n((p==null?void 0:p.period)??"")}</div>
          </div>
        `:""}
        ${m!==null?`
          <div class="energy-tape-section" style="margin-top:8px">
            <div class="energy-section-title">EU Gas Storage (Fill %)</div>
            <div style="display:flex;align-items:center;gap:10px;margin-top:4px">
              ${ae(I,w,80,22)}
              <div>
                <span class="commodity-price">${n(m.toFixed(1))}%</span>
                ${w!==null?`<span class="commodity-change ${n(k)}" style="margin-left:6px">${n(S+w.toFixed(2))}% 1d</span>`:""}
                ${z?`<span style="margin-left:6px;font-size:10px;color:var(--text-dim)">${n(z)}</span>`:""}
              </div>
            </div>
            <div class="indicator-date" style="margin-top:2px">${n(((ie=this.euGas)==null?void 0:ie.updatedAt)??"")}</div>
          </div>
        `:""}
        ${this.tape.length>0?`
          <div class="energy-tape-section">
            <div class="energy-section-title">${x("components.energyComplex.liveTape")}</div>
            <div class="commodities-grid energy-tape-grid">
              ${this.tape.map(C=>`
                <div class="commodity-item energy-tape-card">
                  <div class="commodity-name">${n(C.display)}</div>
                  ${ae(C.sparkline,C.change,60,18)}
                  <div class="commodity-price">${rt(C.price)}</div>
                  <div class="commodity-change ${ot(C.change??0)}">${lt(C.change??0)}</div>
                </div>
              `).join("")}
            </div>
          </div>
        `:""}
        ${this.renderOilStocksSection()}
        ${this.renderLngVulnerabilitySection()}
      </div>
      <div class="economic-footer">
        <span class="economic-source">${n(c.join(" • "))}</span>
      </div>
    `,"legacy Panel.setContent() migration"))}}const rs=Object.freeze(Object.defineProperty({__proto__:null,EnergyComplexPanel:At},Symbol.toStringTag,{value:"Module"})),R=400,de=150,Pt=280,A=42,we=10,L=10,Ye=22,Ce=R-A-we,G=de-L-Ye;function Dt(r,i){const e=new Map(r.map(a=>[a.period,a.stocksMb])),t=new Map(i.map(a=>[a.period,a.stocksMb]));return[...new Set([...e.keys(),...t.keys()])].sort().map(a=>({period:a,crudeMb:e.get(a)??null,sprMb:t.get(a)??null}))}function Ot(r){return r.slice(5)}function M(r,i=1){return r.toFixed(i)}function Mt(r,i,e,t=4){const s=i-r||1;return Array.from({length:t+1},(a,c)=>{const l=r+c/t*s,d=L+G-c/t*G;return`<line x1="${A}" y1="${d.toFixed(1)}" x2="${R-we}" y2="${d.toFixed(1)}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <text x="${A-4}" y="${d.toFixed(1)}" text-anchor="end" fill="rgba(255,255,255,0.35)" font-size="7" dominant-baseline="middle">${n(M(l,0))}${n(e)}</text>`}).join("")}function qe(r,i){const e=Math.max(1,Math.floor(i/5));return r.map((t,s)=>s%e!==0&&s!==i-1?"":`<text x="${(A+s/Math.max(1,i-1)*Ce).toFixed(1)}" y="${de-2}" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="7">${n(t)}</text>`).join("")}function Ze(r){if(r.length<2)return"";const i=r[0],e=r[r.length-1],t=r.map(s=>`${s.x.toFixed(1)},${s.y.toFixed(1)}`).join(" L");return`M${i.x.toFixed(1)},${i.y.toFixed(1)} L${t} L${e.x.toFixed(1)},${L+G} L${i.x.toFixed(1)},${L+G} Z`}function zt(r){const i=r.filter(g=>g.crudeMb!=null&&g.sprMb!=null);if(i.length<2){const g=r.filter(m=>m.crudeMb!=null);return g.length<2?'<div style="text-align:center;color:var(--text-dim);padding:16px;font-size:11px">Insufficient data for chart</div>':_t(g)}const e=i.map(g=>g.crudeMb+g.sprMb),t=Math.max(...e)*1.05,s=Math.min(...i.map(g=>g.sprMb))*.95,a=t-s||1,c=g=>L+G-(g-s)/a*G,l=g=>A+g/Math.max(1,i.length-1)*Ce,d=i.map((g,m)=>({x:l(m),y:c(g.sprMb)})),o=`<path d="${Ze(d)}" fill="#f59e0b" opacity="0.25"/>`,u=`<polyline points="${d.map(g=>`${g.x.toFixed(1)},${g.y.toFixed(1)}`).join(" ")}" fill="none" stroke="#f59e0b" stroke-width="1.5" opacity="0.8"/>`,h=i.map((g,m)=>({x:l(m),y:c(g.crudeMb+g.sprMb)})),p=`<path d="M${h.map(g=>`${g.x.toFixed(1)},${g.y.toFixed(1)}`).join(" L")} L${d.map(g=>`${g.x.toFixed(1)},${g.y.toFixed(1)}`).reverse().join(" L")} Z" fill="#3b82f6" opacity="0.2"/>`,f=`<polyline points="${h.map(g=>`${g.x.toFixed(1)},${g.y.toFixed(1)}`).join(" ")}" fill="none" stroke="#3b82f6" stroke-width="1.5" opacity="0.9"/>`,y=Mt(s,t,""),b=qe(i.map(g=>Ot(g.period)),i.length);return`<svg viewBox="0 0 ${R} ${de}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">${y}${b}${o}${u}${p}${f}</svg>`}function _t(r){const i=r.map(e=>({x:e.period,y:e.crudeMb}));return ve(i,"#3b82f6","")}function ve(r,i,e,t=de){if(r.length<2)return'<div style="text-align:center;color:var(--text-dim);padding:12px;font-size:11px">Insufficient data</div>';const s=t-L-Ye,a=r.map(y=>y.y),c=Math.max(...a)*1.02,l=Math.min(...a)*.98,d=c-l||1,o=r.map((y,b)=>({x:A+b/Math.max(1,r.length-1)*Ce,y:L+s-(y.y-l)/d*s})),u=o.map(y=>`${y.x.toFixed(1)},${y.y.toFixed(1)}`).join(" "),h=Ze(o),p=Array.from({length:4},(y,b)=>{const g=l+b/3*d,m=L+s-b/3*s;return`<line x1="${A}" y1="${m.toFixed(1)}" x2="${R-we}" y2="${m.toFixed(1)}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
      <text x="${A-4}" y="${m.toFixed(1)}" text-anchor="end" fill="rgba(255,255,255,0.35)" font-size="7" dominant-baseline="middle">${n(M(g,0))}${n(e)}</text>`}).join(""),f=qe(r.map(y=>y.x.slice(5)),r.length);return`<svg viewBox="0 0 ${R} ${t}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">${p}${f}<path d="${h}" fill="${i}" opacity="0.12"/><polyline points="${u}" fill="none" stroke="${i}" stroke-width="1.5" opacity="0.9"/></svg>`}function Ft(r){const i=[...r].filter(o=>o.daysOfCover!=null||o.netExporter).sort((o,u)=>o.netExporter&&!u.netExporter?1:!o.netExporter&&u.netExporter?-1:(o.daysOfCover??999)-(u.daysOfCover??999)).slice(0,20);if(!i.length)return'<div style="text-align:center;color:var(--text-dim);padding:12px;font-size:11px">No IEA data</div>';const e=Math.max(200,...i.filter(o=>o.daysOfCover!=null).map(o=>o.daysOfCover)),t=Math.min(14,(Pt-20)/i.length),s=R-A-10,a=15+i.length*t+5,c=i.map((o,u)=>{const h=o.daysOfCover??0,p=Math.max(0,h/e*s),f=15+u*t,y=o.netExporter?"#6b7280":o.belowObligation?"#ef4444":"#22c55e",b=o.netExporter?"Exp":h>0?`${h.toFixed(0)}d`:"N/A";return`<rect x="${A}" y="${f.toFixed(1)}" width="${p.toFixed(1)}" height="${(t-2).toFixed(1)}" fill="${y}" opacity="0.6" rx="1"/>
      <text x="${A-3}" y="${(f+t/2).toFixed(1)}" text-anchor="end" fill="rgba(255,255,255,0.5)" font-size="7" dominant-baseline="middle">${n(o.iso2)}</text>
      <text x="${(A+p+3).toFixed(1)}" y="${(f+t/2).toFixed(1)}" fill="rgba(255,255,255,0.6)" font-size="7" dominant-baseline="middle">${n(b)}</text>`}).join(""),l=A+90/e*s,d=`<line x1="${l.toFixed(1)}" y1="10" x2="${l.toFixed(1)}" y2="${a-5}" stroke="rgba(255,255,255,0.25)" stroke-width="1" stroke-dasharray="4 3"/>
    <text x="${l.toFixed(1)}" y="9" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="7">90d</text>`;return`<svg viewBox="0 0 ${R} ${a}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block">${c}${d}</svg>`}function q(r,i,e=""){return`<div class="energy-tape-section" style="margin-top:8px">
    <div class="energy-section-title">${n(r)}</div>
    <div style="border-radius:6px;background:rgba(255,255,255,0.02);padding:4px 0">${i}</div>
    ${e?`<div style="margin-top:3px;font-size:10px;color:var(--text-dim)">${e}</div>`:""}
  </div>`}function me(r,i){if(r==null)return"";const e=r>=0?"+":"";return`<span class="commodity-change ${r>=0?"change-positive":"change-negative"}">${n(e+M(r))} ${n(i)}</span>`}class Lt extends D{constructor(){super({id:"oil-inventories",title:x("panels.oilInventories"),showCount:!1,infoTooltip:x("components.oilInventories.infoTooltip"),defaultRowSpan:2})}async fetchData(){var i,e;try{const t=await fetch(st("/api/economic/v1/get-oil-inventories"));if(!t.ok){this.showError("Oil inventory data unavailable",()=>void this.fetchData(),300);return}const s=await t.json();if(!((i=this.element)!=null&&i.isConnected))return;this.render(s)}catch{if(!((e=this.element)!=null&&e.isConnected))return;this.showError("Oil inventory data unavailable",()=>void this.fetchData(),300)}}render(i){var s,a,c,l,d,o,u,h,p,f,y;const e=[];if((s=i.crudeWeeks)!=null&&s.length||(c=(a=i.spr)==null?void 0:a.weeks)!=null&&c.length){const b=Dt([...i.crudeWeeks??[]].reverse(),[...((l=i.spr)==null?void 0:l.weeks)??[]].reverse()),g=zt(b),m=[...b].reverse().find(z=>z.crudeMb!=null&&z.sprMb!=null),w=(d=i.crudeWeeks)==null?void 0:d[0],S=i.spr,k=[];m&&k.push(`Total: ${n(M(m.crudeMb+m.sprMb))} Mb (${n(m.period)})`),w&&k.push(`Commercial: ${n(M(w.stocksMb))} ${me(w.weeklyChangeMb,"WoW")}`),S&&k.push(`SPR: ${n(M(S.latestStocksMb))} ${me(S.changeWow,"WoW")}`),e.push(q("US Total Oil Stocks",g,k.join(" | ")))}if((o=i.natGasWeeks)!=null&&o.length){const g=[...i.natGasWeeks].reverse().map(k=>({x:k.period,y:k.storBcf})),m=ve(g,"#22c55e","",120),w=i.natGasWeeks[0],S=w?`Storage: ${n(M(w.storBcf,0))} Bcf ${me(w.weeklyChangeBcf,"WoW")}`:"";e.push(q("US Nat Gas Working Storage",m,S))}if(i.euGas&&((u=i.euGas.history)!=null&&u.length)){const g=[...i.euGas.history].reverse().map(k=>({x:k.date,y:k.fillPct})),m=ve(g,"#14b8a6","%",100),w=i.euGas.fillPctChange1d>=0?"+":"",S=`Fill: ${n(M(i.euGas.fillPct))}% | Trend: ${n(i.euGas.trend)} | ${n(w+M(i.euGas.fillPctChange1d,2))}%/d`;e.push(q("EU Gas Storage Fill",m,S))}if((p=(h=i.ieaStocks)==null?void 0:h.members)!=null&&p.length){const b=Ft(i.ieaStocks.members),g=[((f=i.ieaStocks.europe)==null?void 0:f.avgDays)!=null?`Europe avg ${i.ieaStocks.europe.avgDays.toFixed(0)}d`:"",((y=i.ieaStocks.asiaPacific)==null?void 0:y.avgDays)!=null?`AsiaPac avg ${i.ieaStocks.asiaPacific.avgDays.toFixed(0)}d`:""].filter(Boolean).join(" | "),m=i.ieaStocks.members.filter(S=>S.belowObligation).length,w=`${g}${m>0?` | <span style="color:#ef4444">${m} below 90d</span>`:""} | Data: ${n(i.ieaStocks.dataMonth)}`;e.push(q("IEA OECD Oil Stocks (Days of Cover)",b,w))}if(i.refinery){const b=`US Refinery Crude Inputs: <span class="commodity-price">${n(M(i.refinery.inputsMbpd))} Mb/d</span> (${n(i.refinery.period)})`;e.push(q("Refinery Throughput",`<div style="padding:4px 8px;font-size:12px">${b}</div>`,""))}if(e.length===0){this.showError("Oil inventory data unavailable",()=>void this.fetchData(),300);return}this.setSafeContent(E(`<div class="energy-complex-content">${e[0]}<div style="display:flex;gap:12px;font-size:9px;color:var(--text-dim);margin-top:2px">
      <span><svg width="14" height="4" style="vertical-align:middle"><line x1="0" y1="2" x2="14" y2="2" stroke="#3b82f6" stroke-width="2"/></svg> Commercial</span>
      <span><svg width="14" height="4" style="vertical-align:middle"><line x1="0" y1="2" x2="14" y2="2" stroke="#f59e0b" stroke-width="2"/></svg> SPR</span>
    </div>${e.slice(1).join("")}
      <div class="indicator-date" style="margin-top:6px">Source: EIA, IEA, GIE AGSI+</div>
    </div>`,"legacy Panel.setContent() migration"))}}const os=Object.freeze(Object.defineProperty({__proto__:null,OilInventoriesPanel:Lt},Symbol.toStringTag,{value:"Module"})),Rt={conservation:"Energy Conservation",consumer_support:"Consumer Support"},jt={transport:"Transport",buildings:"Buildings",industry:"Industry",electricity:"Electricity",agriculture:"Agriculture",general:"General"},It={active:"ecp-status-active",planned:"ecp-status-planned",ended:"ecp-status-ended"};class Bt extends D{constructor(){super({id:"energy-crisis",title:"Energy Crisis Tracker",showCount:!0,trackActivity:!0,defaultRowSpan:2,infoTooltip:"IEA 2026 Energy Crisis Policy Response Tracker. Tracks government measures to conserve energy and support consumers in response to Middle East conflict and Strait of Hormuz supply disruptions."});$(this,"data",null);$(this,"loading",!0);$(this,"error",null);$(this,"activeFilter","all");this.showLoading("Loading energy crisis policies...")}async fetchData(){var t;const e=be("energyCrisisPolicies");if((t=e==null?void 0:e.policies)!=null&&t.length){this.data=e,this.error=null,this.loading=!1,this.setCount(e.policies.length),this.render(),this.refreshFromRpc();return}await this.refreshFromRpc()}async refreshFromRpc(){var e,t,s;try{const c=await new He(j(),{fetch:(...l)=>globalThis.fetch(...l)}).getEnergyCrisisPolicies({countryCode:"",category:""});if(!((e=this.element)!=null&&e.isConnected))return;((t=c.policies)!=null&&t.length||!this.data)&&(this.data=c,this.error=null,this.loading=!1,this.setCount(c.policies.length),this.render())}catch(a){if(this.isAbortError(a)||!((s=this.element)!=null&&s.isConnected))return;this.data||(console.warn("[EnergyCrisis] Fetch error:",a),this.error="Energy crisis data unavailable",this.loading=!1,this.render())}}getFilteredPolicies(){var e;return(e=this.data)!=null&&e.policies?this.activeFilter==="all"?this.data.policies:this.data.policies.filter(t=>t.category===this.activeFilter):[]}buildSummary(){var c;const e=((c=this.data)==null?void 0:c.policies)??[],t=e.filter(l=>l.category==="conservation").length,s=e.filter(l=>l.category==="consumer_support").length,a=new Set(e.map(l=>l.countryCode)).size;return{conservationCount:t,supportCount:s,countryCount:a}}render(){var o,u;if(this.loading){this.showLoading("Loading energy crisis policies...");return}if(this.error||!this.data){this.showError(this.error||"No data available",()=>void this.fetchData());return}if(!((o=this.data.policies)!=null&&o.length)){this.setSafeContent(E('<div class="panel-empty">No energy crisis policies tracked.</div>',"legacy Panel.setContent() migration"));return}const e=this.buildSummary(),t=this.getFilteredPolicies(),s=`
      <div class="ecp-summary">
        <div class="ecp-summary-card">
          <span class="ecp-summary-value">${e.countryCount}</span>
          <span class="ecp-summary-label">Countries</span>
        </div>
        <div class="ecp-summary-card ecp-summary-conservation">
          <span class="ecp-summary-value">${e.conservationCount}</span>
          <span class="ecp-summary-label">Conservation</span>
        </div>
        <div class="ecp-summary-card ecp-summary-support">
          <span class="ecp-summary-value">${e.supportCount}</span>
          <span class="ecp-summary-label">Consumer Support</span>
        </div>
      </div>
    `,a=`
      <div class="ecp-filters">
        <button class="ecp-filter-btn ${this.activeFilter==="all"?"ecp-filter-active":""}" data-filter="all">All</button>
        <button class="ecp-filter-btn ${this.activeFilter==="conservation"?"ecp-filter-active":""}" data-filter="conservation">Conservation</button>
        <button class="ecp-filter-btn ${this.activeFilter==="consumer_support"?"ecp-filter-active":""}" data-filter="consumer_support">Consumer Support</button>
      </div>
    `,c=t.map(h=>{const p=Rt[h.category]||h.category,f=jt[h.sector]||h.sector,y=It[h.status]||"",b=h.category==="conservation"?"ecp-cat-conservation":"ecp-cat-support";return`
        <div class="ecp-policy-row">
          <div class="ecp-policy-header">
            <span class="ecp-country">${n(h.country)}</span>
            <span class="ecp-pill ${b}">${n(p)}</span>
            <span class="ecp-pill ecp-pill-sector">${n(f)}</span>
            <span class="ecp-pill ${y}">${n(h.status)}</span>
          </div>
          <div class="ecp-measure">${n(h.measure)}</div>
          <div class="ecp-date">${n(h.dateAnnounced)}</div>
        </div>
      `}).join(""),l=this.data.sourceUrl||"https://www.iea.org/data-and-statistics/data-tools/2026-energy-crisis-policy-response-tracker",d=[this.data.updatedAt?`Updated ${new Date(this.data.updatedAt).toLocaleDateString()}`:"","Source: IEA"].filter(Boolean).join(" · ");this.setSafeContent(E(`
      <div class="ecp-container">
        ${s}
        ${a}
        <div class="ecp-policy-list">${c}</div>
        <div class="ecp-footer">
          <span>${n(d)}</span>
          <a href="${n(l)}" target="_blank" rel="noopener noreferrer" class="ecp-source-link">IEA Tracker ↗</a>
        </div>
      </div>
    `,"legacy Panel.setContent() migration")),(u=this.content)==null||u.querySelectorAll(".ecp-filter-btn").forEach(h=>{h.addEventListener("click",p=>{const f=p.currentTarget.dataset.filter||"all";this.activeFilter=f,this.render()})})}}const ls=Object.freeze(Object.defineProperty({__proto__:null,EnergyCrisisPanel:Bt},Symbol.toStringTag,{value:"Module"})),Gt=["hormuz_strait","malacca_strait","suez","bab_el_mandeb","bosphorus","dover_strait","panama"];function Vt(r){switch(r){case"hormuz_strait":return x("components.chokepointStrip.shortName.hormuzStrait");case"malacca_strait":return x("components.chokepointStrip.shortName.malaccaStrait");case"suez":return x("components.chokepointStrip.shortName.suez");case"bab_el_mandeb":return x("components.chokepointStrip.shortName.babElMandeb");case"bosphorus":return x("components.chokepointStrip.shortName.bosphorus");case"dover_strait":return x("components.chokepointStrip.shortName.danishStraits");case"panama":return x("components.chokepointStrip.shortName.panama");default:return""}}function Nt(r){const i=(r||"").toLowerCase();return i.includes("closed")||i.includes("critical")?"#e74c3c":i.includes("disrupted")||i.includes("high")?"#e67e22":i.includes("restricted")||i.includes("elevated")||i.includes("medium")?"#f39c12":"#2ecc71"}function Ut(r){const i=r.flowEstimate;if(!i||typeof i.currentMbd!="number"||typeof i.baselineMbd!="number")return"—";const e=i.baselineMbd>0?Math.round(i.currentMbd/i.baselineMbd*100):null;return e==null?x("components.chokepointStrip.flow.mbd",{value:i.currentMbd.toFixed(1)}):x("components.chokepointStrip.flow.pctOfBaseline",{pct:e})}class Ht extends D{constructor(){super({id:"chokepoint-strip",title:x("components.chokepointStrip.title"),infoTooltip:x("components.chokepointStrip.infoTooltip")});$(this,"data",null)}async fetchData(){var e,t,s;try{const a=be("chokepoints");if((e=a==null?void 0:a.chokepoints)!=null&&e.length){this.data=a,this.render(),ke().then(l=>{var d,o;!((d=this.element)!=null&&d.isConnected)||!((o=l==null?void 0:l.chokepoints)!=null&&o.length)||(this.data=l,this.render())}).catch(()=>{});return}const c=await ke();if(!((t=this.element)!=null&&t.isConnected))return;this.data=c,this.render()}catch(a){if(this.isAbortError(a)||!((s=this.element)!=null&&s.isConnected))return;this.showError(x("components.chokepointStrip.errors.unavailable"),()=>void this.fetchData())}}render(){var l,d;if(!((d=(l=this.data)==null?void 0:l.chokepoints)!=null&&d.length)){this.showError(x("components.chokepointStrip.errors.noData"),()=>void this.fetchData());return}const e=new Map(this.data.chokepoints.map(o=>[o.id,o])),t=Gt.map(o=>e.get(o)).filter(o=>!!o),s=nt(t.map(o=>{const u=Nt(o.status),h=Vt(o.id)||o.name,p=Ut(o),f=o.activeWarnings>0?ne`<span class="cp-chip-warn">${o.activeWarnings}</span>`:ne``;return ne`
        <div class="cp-chip" data-cp="${o.id}" title="${o.name} - ${o.status||x("components.chokepointStrip.unknown")}">
          <div class="cp-chip-dot" style="background:${u}"></div>
          <div class="cp-chip-body">
            <div class="cp-chip-name">${h}${f}</div>
            <div class="cp-chip-flow">${p}</div>
          </div>
        </div>`})),a=t.reduce((o,u)=>o+(u.aisDisruptions??0),0),c=E(K({sourceType:"ais",method:x("components.chokepointStrip.attribution.method"),sampleSize:a||void 0,sampleLabel:x("components.chokepointStrip.attribution.sampleLabel"),updatedAt:this.data.fetchedAt,creditName:x("components.chokepointStrip.attribution.creditName")}),"attributionFooterHtml escapes fields and returns shared footer markup");this.setSafeContent(ne`
      <div class="cp-strip-wrap">
        <div class="cp-strip">${s}</div>
        ${c}
      </div>
      ${E(Q,"static attribution footer CSS constant")}
      <style>
        .cp-strip-wrap { padding: 4px 0; }
        .cp-strip { display: flex; flex-wrap: wrap; gap: 8px; }
        .cp-chip {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          min-width: 120px;
          font-size: 11px;
          cursor: default;
        }
        .cp-chip-dot { width: 8px; height: 8px; border-radius: 50%; flex: 0 0 8px; }
        .cp-chip-body { display: flex; flex-direction: column; line-height: 1.2; }
        .cp-chip-name { font-weight: 600; color: var(--text, #eee); display: flex; align-items: center; gap: 4px; }
        .cp-chip-warn { background:#e74c3c;color:#fff;border-radius:9px;padding:0 5px;font-size:9px;font-weight:700; }
        .cp-chip-flow { color: var(--text-dim, #888); font-size: 10px; }
      </style>
    `)}}const cs=Object.freeze(Object.defineProperty({__proto__:null,ChokepointStripPanel:Ht},Symbol.toStringTag,{value:"Module"})),le=V(()=>new X(j(),{fetch:N})),Oe={flowing:"#2ecc71",reduced:"#f39c12",offline:"#e74c3c",disputed:"#9b59b6"};function Wt(r){return r.charAt(0).toUpperCase()+r.slice(1)}function Me(r){return r.commodityType==="gas"&&typeof r.capacityBcmYr=="number"&&r.capacityBcmYr>0?`${r.capacityBcmYr.toFixed(1)} bcm/yr`:r.commodityType==="oil"&&typeof r.capacityMbd=="number"&&r.capacityMbd>0?`${r.capacityMbd.toFixed(2)} mb/d`:"—"}function ze(r){const i=r&&Oe[r]?r:"disputed";return`<span class="pp-badge" style="background:${Oe[i]??"#7f8c8d"}">${n(Wt(i))}</span>`}function Yt(r){if(!r||typeof r!="object")return null;const i=r,e=typeof i.id=="string"?i.id:"";if(!e)return null;const t=(h,p="")=>typeof h=="string"?h:p,s=(h,p=0)=>typeof h=="number"&&Number.isFinite(h)?h:p,a=h=>{if(h&&typeof h=="object"&&!Array.isArray(h)){const p=h;return{lat:s(p.lat),lon:s(p.lon)}}return{lat:0,lon:0}},c=i.evidence,l=c&&typeof c.operatorStatement=="object"&&c.operatorStatement?{text:t(c.operatorStatement.text),url:t(c.operatorStatement.url),date:t(c.operatorStatement.date)}:void 0,d=Array.isArray(c==null?void 0:c.sanctionRefs)?c.sanctionRefs.map(h=>{const p=h??{};return{authority:t(p.authority),listId:t(p.listId),date:t(p.date),url:t(p.url)}}):[],o=c?{physicalState:t(c.physicalState,"unknown"),physicalStateSource:t(c.physicalStateSource,"operator"),operatorStatement:l,commercialState:t(c.commercialState,"unknown"),sanctionRefs:d,lastEvidenceUpdate:t(c.lastEvidenceUpdate),classifierVersion:t(c.classifierVersion,"v1"),classifierConfidence:s(c.classifierConfidence,0)}:void 0,u=ut(o);return{id:e,name:t(i.name),operator:t(i.operator),commodityType:t(i.commodityType),fromCountry:t(i.fromCountry),toCountry:t(i.toCountry),transitCountries:Array.isArray(i.transitCountries)?i.transitCountries.map(h=>t(h)):[],capacityBcmYr:s(i.capacityBcmYr),capacityMbd:s(i.capacityMbd),lengthKm:s(i.lengthKm),inService:s(i.inService),startPoint:a(i.startPoint),endPoint:a(i.endPoint),waypoints:Array.isArray(i.waypoints)?i.waypoints.map(a):[],evidence:o,publicBadge:u}}function qt(r,i){const e=[];for(const t of[r,i])if(t!=null&&t.pipelines)for(const s of Object.values(t.pipelines)){const a=Yt(s);a&&e.push(a)}return e.length===0?null:{pipelines:e,fetchedAt:pt(r==null?void 0:r.updatedAt,i==null?void 0:i.updatedAt),classifierVersion:dt(r==null?void 0:r.classifierVersion,i==null?void 0:i.classifierVersion),upstreamUnavailable:!1}}class Zt extends D{constructor(){super({id:"pipeline-status",title:"Oil & Gas Pipeline Status",defaultRowSpan:2,infoTooltip:"Curated registry of critical oil and gas pipelines. Public badge is derived from evidence (operator statements, sanction refs, commercial state, physical signals) — see /docs/methodology/pipelines for the classifier spec."});$(this,"data",null);$(this,"selectedId",null);$(this,"detail",null);$(this,"detailLoading",!1);$(this,"detailEvents");$(this,"openDetailHandler",e=>{var s,a;const t=(s=e.detail)==null?void 0:s.pipelineId;!t||!((a=this.element)!=null&&a.isConnected)||this.loadDetail(t)});typeof window<"u"&&window.addEventListener("energy:open-pipeline-detail",this.openDetailHandler)}destroy(){var e;typeof window<"u"&&window.removeEventListener("energy:open-pipeline-detail",this.openDetailHandler),(e=super.destroy)==null||e.call(this)}async fetchData(){var e,t,s;try{const{gas:a,oil:c}=ht(),l=qt(a,c);if(l){this.data=l,this.render(),le().listPipelines({commodityType:""}).then(u=>{var p,f;if(!((p=this.element)!=null&&p.isConnected)||!((f=u==null?void 0:u.pipelines)!=null&&f.length))return;this.data=u,this.render();const h=y=>Object.fromEntries(u.pipelines.filter(b=>b.commodityType===y).map(b=>[b.id,b]));Ee({gas:{pipelines:h("gas"),classifierVersion:u.classifierVersion,updatedAt:u.fetchedAt},oil:{pipelines:h("oil"),classifierVersion:u.classifierVersion,updatedAt:u.fetchedAt}})}).catch(()=>{});return}const d=await le().listPipelines({commodityType:""});if(!((e=this.element)!=null&&e.isConnected))return;if(d.upstreamUnavailable||!((t=d.pipelines)!=null&&t.length)){this.showError("Pipeline registry unavailable",()=>void this.fetchData());return}this.data=d,this.render();const o=u=>Object.fromEntries(d.pipelines.filter(h=>h.commodityType===u).map(h=>[h.id,h]));Ee({gas:{pipelines:o("gas"),classifierVersion:d.classifierVersion,updatedAt:d.fetchedAt},oil:{pipelines:o("oil"),classifierVersion:d.classifierVersion,updatedAt:d.fetchedAt}})}catch(a){if(this.isAbortError(a)||!((s=this.element)!=null&&s.isConnected))return;this.showError("Pipeline registry error",()=>void this.fetchData())}}async loadDetail(e){var t,s;this.selectedId=e,this.detailLoading=!0,this.detailEvents=void 0,this.render();try{const[a,c]=await Promise.all([le().getPipelineDetail({pipelineId:e}),le().listEnergyDisruptions({assetId:e,assetType:"pipeline",ongoingOnly:!1})]);if(!((t=this.element)!=null&&t.isConnected)||this.selectedId!==e)return;this.detail=a,this.detailEvents=(c==null?void 0:c.events)??[],this.detailLoading=!1,this.render()}catch{if(!((s=this.element)!=null&&s.isConnected)||this.selectedId!==e)return;this.detailLoading=!1,this.detail=null,this.render()}}closeDetail(){this.selectedId=null,this.detail=null,this.detailEvents=void 0,this.render()}renderDisruptionTimeline(){if(this.detailEvents===void 0)return"";if(this.detailEvents.length===0)return`<div class="pp-evidence">
        <div class="pp-sub" style="margin-bottom:6px">Disruption timeline</div>
        <div class="pp-ev-item pp-sub">No disruption events on file for this asset.</div>
      </div>`;const e=this.detailEvents.map(t=>{const s=n(xe(t.startAt,t.endAt)),a=$e(t.capacityOfflineBcmYr,t.capacityOfflineMbd),c=a?` · ${n(a)} offline`:"",l=t.causeChain&&t.causeChain.length>0?` · ${n(t.causeChain.join(" → "))}`:"";return`<div class="pp-ev-item">
        <strong>${n(t.eventType||"event")}</strong> · ${s}${c}${l}
        <div class="pp-sub" style="margin-top:2px">${n(t.shortDescription||"")}</div>
      </div>`}).join("");return`<div class="pp-evidence">
      <div class="pp-sub" style="margin-bottom:6px">Disruption timeline (${this.detailEvents.length})</div>
      ${e}
    </div>`}render(){var l,d;if(!this.data)return;const e=[...this.data.pipelines].sort((o,u)=>{const h=o.publicBadge==="flowing"?1:0,p=u.publicBadge==="flowing"?1:0;return h!==p?h-p:o.commodityType!==u.commodityType?o.commodityType.localeCompare(u.commodityType):o.name.localeCompare(u.name)}).map(o=>this.renderRow(o)).join(""),t=K({sourceType:"classifier",method:"evidence → badge (deterministic)",sampleSize:this.data.pipelines.length,sampleLabel:"pipelines",updatedAt:this.data.fetchedAt,classifierVersion:this.data.classifierVersion,creditName:"Global Energy Monitor (CC-BY 4.0)",creditUrl:"https://globalenergymonitor.org/"}),s=this.selectedId?this.renderDrawer():"";this.setSafeContent(E(`
      <div class="pp-wrap">
        <table class="pp-table">
          <thead>
            <tr>
              <th>Asset</th>
              <th>From → To</th>
              <th>Capacity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>${e}</tbody>
        </table>
        ${t}
        ${s}
      </div>
      ${Q}
      <style>
        .pp-wrap { position: relative; font-size: 11px; }
        .pp-table { width: 100%; border-collapse: collapse; }
        .pp-table th { text-align: left; font-size: 9px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-dim, #888); padding: 4px 6px; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .pp-table td { padding: 6px; border-bottom: 1px solid rgba(255,255,255,0.04); }
        .pp-table tr.pp-row { cursor: pointer; }
        .pp-table tr.pp-row:hover td { background: rgba(255,255,255,0.03); }
        .pp-name { font-weight: 600; color: var(--text, #eee); }
        .pp-sub  { font-size: 9px; color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; }
        .pp-badge { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: 9px; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.04em; }
        .pp-drawer { position: absolute; inset: 0; background: var(--panel-bg, #0f1218); padding: 12px; overflow-y: auto; border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; }
        .pp-drawer-close { position: absolute; top: 8px; right: 10px; background: transparent; border: 0; color: var(--text-dim, #888); cursor: pointer; font-size: 14px; }
        .pp-drawer h3 { margin: 0 0 6px 0; font-size: 13px; color: var(--text, #eee); }
        .pp-drawer .pp-kv { display: grid; grid-template-columns: 120px 1fr; gap: 4px 10px; font-size: 10px; margin-bottom: 10px; }
        .pp-drawer .pp-kv-key { color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; font-size: 9px; padding-top: 2px; }
        .pp-evidence { margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.06); }
        .pp-ev-item { font-size: 10px; color: var(--text, #eee); margin-bottom: 6px; }
        .pp-ev-item a { color: #4ade80; text-decoration: none; }
        .pp-ev-item a:hover { text-decoration: underline; }
      </style>
    `,"legacy Panel.setContent() migration"));const a=(l=this.element)==null?void 0:l.querySelector(".pp-table");a==null||a.querySelectorAll("tr.pp-row").forEach(o=>{const u=o.dataset.pipelineId;u&&o.addEventListener("click",()=>void this.loadDetail(u))});const c=(d=this.element)==null?void 0:d.querySelector(".pp-drawer-close");c==null||c.addEventListener("click",()=>this.closeDetail())}renderRow(e){const t=e.commodityType==="gas"?"⛽":"🛢️",s=`${n(e.fromCountry)} → ${n(e.toCountry)}`;return`
      <tr class="pp-row" data-pipeline-id="${n(e.id)}">
        <td>
          <div class="pp-name">${t} ${n(e.name)}</div>
          <div class="pp-sub">${n(e.operator||"")}</div>
        </td>
        <td>${s}</td>
        <td>${n(Me(e))}</td>
        <td>${ze(e.publicBadge)}</td>
      </tr>`}renderDrawer(){var l,d;if(this.detailLoading)return'<div class="pp-drawer"><button class="pp-drawer-close" aria-label="Close">✕</button>Loading…</div>';const e=(l=this.detail)==null?void 0:l.pipeline;if(!e)return'<div class="pp-drawer"><button class="pp-drawer-close" aria-label="Close">✕</button>Pipeline detail unavailable.</div>';const t=e.evidence,s=((t==null?void 0:t.sanctionRefs)??[]).map(o=>{const u=Z(o.url||""),h=n(o.date||"source"),p=u?`<a href="${u}" target="_blank" rel="noopener">${h}</a>`:h;return`
      <div class="pp-ev-item">
        <strong>${n(o.authority)}</strong> ${n(o.listId||"")} ·
        ${p}
      </div>`}).join(""),a=(d=t==null?void 0:t.operatorStatement)!=null&&d.text?(()=>{var h,p;const o=Z(((h=t.operatorStatement)==null?void 0:h.url)||""),u=o?`· <a href="${o}" target="_blank" rel="noopener">${n(((p=t.operatorStatement)==null?void 0:p.date)||"source")}</a>`:"";return`<div class="pp-ev-item"><strong>Operator:</strong> ${n(t.operatorStatement.text)}
           ${u}
         </div>`})():"",c=e.transitCountries.length>0?` via ${e.transitCountries.map(o=>n(o)).join(", ")}`:"";return`
      <div class="pp-drawer">
        <button class="pp-drawer-close" aria-label="Close">✕</button>
        <h3>${n(e.name)} ${ze(e.publicBadge)}</h3>
        <div class="pp-kv">
          <div class="pp-kv-key">Operator</div>   <div>${n(e.operator)}</div>
          <div class="pp-kv-key">Commodity</div>  <div>${n(e.commodityType)}</div>
          <div class="pp-kv-key">Route</div>      <div>${n(e.fromCountry)} → ${n(e.toCountry)}${c}</div>
          <div class="pp-kv-key">Capacity</div>   <div>${n(Me(e))}</div>
          <div class="pp-kv-key">Length</div>     <div>${e.lengthKm>0?`${e.lengthKm.toLocaleString()} km`:"—"}</div>
          <div class="pp-kv-key">In service</div> <div>${e.inService>0?n(String(e.inService)):"—"}</div>
        </div>
        <div class="pp-evidence">
          <div class="pp-sub" style="margin-bottom:6px">Evidence</div>
          <div class="pp-ev-item">
            <strong>Physical state:</strong> ${n((t==null?void 0:t.physicalState)||"unknown")}
            (source: ${n((t==null?void 0:t.physicalStateSource)||"unknown")})
          </div>
          <div class="pp-ev-item"><strong>Commercial:</strong> ${n((t==null?void 0:t.commercialState)||"unknown")}</div>
          ${a}
          ${s}
          ${t!=null&&t.classifierVersion?`<div class="pp-ev-item pp-sub">Classifier ${n(t.classifierVersion)} · confidence ${Math.round((t.classifierConfidence??0)*100)}%</div>`:""}
        </div>
        ${this.renderDisruptionTimeline()}
      </div>`}}const ds=Object.freeze(Object.defineProperty({__proto__:null,PipelineStatusPanel:Zt},Symbol.toStringTag,{value:"Module"})),ce=V(()=>new X(j(),{fetch:N})),_e={operational:"#2ecc71",reduced:"#f39c12",offline:"#e74c3c",disputed:"#9b59b6"},Xt={ugs:"🟢",spr:"🛢️",lng_export:"🚢",lng_import:"⚓",crude_tank_farm:"🟡"},Fe={ugs:"UGS",spr:"SPR",lng_export:"LNG export",lng_import:"LNG import",crude_tank_farm:"Crude hub"};function Kt(r){return r.charAt(0).toUpperCase()+r.slice(1)}function Le(r){const i=r&&_e[r]?r:"disputed";return`<span class="sf-badge" style="background:${_e[i]??"#7f8c8d"}">${n(Kt(i))}</span>`}function Re(r){return r.facilityType==="ugs"&&typeof r.capacityTwh=="number"&&r.capacityTwh>0?`${r.capacityTwh.toFixed(1)} TWh`:(r.facilityType==="lng_export"||r.facilityType==="lng_import")&&typeof r.capacityMtpa=="number"&&r.capacityMtpa>0?`${r.capacityMtpa.toFixed(1)} Mtpa`:(r.facilityType==="spr"||r.facilityType==="crude_tank_farm")&&typeof r.capacityMb=="number"&&r.capacityMb>0?`${r.capacityMb.toLocaleString()} Mb`:"—"}function Qt(r){if(!r||typeof r!="object")return null;const i=r,e=typeof i.id=="string"?i.id:"";if(!e)return null;const t=(p,f="")=>typeof p=="string"?p:f,s=(p,f=0)=>typeof p=="number"&&Number.isFinite(p)?p:f,a=(p,f=!1)=>typeof p=="boolean"?p:f,c=p=>{if(p&&typeof p=="object"&&!Array.isArray(p)){const f=p;return{lat:s(f.lat),lon:s(f.lon)}}return{lat:0,lon:0}},l=i.evidence,d=l&&typeof l.operatorStatement=="object"&&l.operatorStatement?{text:t(l.operatorStatement.text),url:t(l.operatorStatement.url),date:t(l.operatorStatement.date)}:void 0,o=Array.isArray(l==null?void 0:l.sanctionRefs)?l.sanctionRefs.map(p=>{const f=p??{};return{authority:t(f.authority),listId:t(f.listId),date:t(f.date),url:t(f.url)}}):[],u=l?{physicalState:t(l.physicalState,"unknown"),physicalStateSource:t(l.physicalStateSource,"operator"),operatorStatement:d,commercialState:t(l.commercialState,"unknown"),sanctionRefs:o,fillDisclosed:a(l.fillDisclosed),fillSource:t(l.fillSource),lastEvidenceUpdate:t(l.lastEvidenceUpdate),classifierVersion:t(l.classifierVersion,"v1"),classifierConfidence:s(l.classifierConfidence,0)}:void 0,h=ft(u);return{id:e,name:t(i.name),operator:t(i.operator),facilityType:t(i.facilityType),country:t(i.country),location:c(i.location),capacityTwh:s(i.capacityTwh),capacityMb:s(i.capacityMb),capacityMtpa:s(i.capacityMtpa),workingCapacityUnit:t(i.workingCapacityUnit),inService:s(i.inService),evidence:u,publicBadge:h}}function Jt(r){if(!(r!=null&&r.facilities))return null;const i=[];for(const e of Object.values(r.facilities)){const t=Qt(e);t&&i.push(t)}return i.length===0?null:{facilities:i,fetchedAt:r.updatedAt??"",classifierVersion:r.classifierVersion??"v1",upstreamUnavailable:!1}}class ei extends D{constructor(){super({id:"storage-facility-map",title:"Strategic Storage Atlas",defaultRowSpan:2,infoTooltip:"Curated registry of strategic storage assets — underground gas storage, strategic petroleum reserves, LNG terminals, crude tank farms. Public badge is derived from evidence (operator statements, sanction refs, commercial state, physical signals) — see /docs/methodology/storage for the classifier spec."});$(this,"data",null);$(this,"selectedId",null);$(this,"detail",null);$(this,"detailLoading",!1);$(this,"detailEvents");$(this,"openDetailHandler",e=>{var s,a;const t=(s=e.detail)==null?void 0:s.facilityId;!t||!((a=this.element)!=null&&a.isConnected)||this.loadDetail(t)});typeof window<"u"&&window.addEventListener("energy:open-storage-facility-detail",this.openDetailHandler)}destroy(){var e;typeof window<"u"&&window.removeEventListener("energy:open-storage-facility-detail",this.openDetailHandler),(e=super.destroy)==null||e.call(this)}async fetchData(){var e,t,s;try{const{registry:a}=gt(),c=Jt(a);if(c){this.data=c,this.render(),ce().listStorageFacilities({facilityType:""}).then(o=>{var h,p;if(!((h=this.element)!=null&&h.isConnected)||!((p=o==null?void 0:o.facilities)!=null&&p.length))return;this.data=o,this.render();const u=Object.fromEntries(o.facilities.map(f=>[f.id,f]));Te({facilities:u,classifierVersion:o.classifierVersion,updatedAt:o.fetchedAt})}).catch(()=>{});return}const l=await ce().listStorageFacilities({facilityType:""});if(!((e=this.element)!=null&&e.isConnected))return;if(l.upstreamUnavailable||!((t=l.facilities)!=null&&t.length)){this.showError("Storage registry unavailable",()=>void this.fetchData());return}this.data=l,this.render();const d=Object.fromEntries(l.facilities.map(o=>[o.id,o]));Te({facilities:d,classifierVersion:l.classifierVersion,updatedAt:l.fetchedAt})}catch(a){if(this.isAbortError(a)||!((s=this.element)!=null&&s.isConnected))return;this.showError("Storage registry error",()=>void this.fetchData())}}async loadDetail(e){var t,s;this.selectedId=e,this.detailLoading=!0,this.detailEvents=void 0,this.render();try{const[a,c]=await Promise.all([ce().getStorageFacilityDetail({facilityId:e}),ce().listEnergyDisruptions({assetId:e,assetType:"storage",ongoingOnly:!1})]);if(!((t=this.element)!=null&&t.isConnected)||this.selectedId!==e)return;this.detail=a,this.detailEvents=(c==null?void 0:c.events)??[],this.detailLoading=!1,this.render()}catch{if(!((s=this.element)!=null&&s.isConnected)||this.selectedId!==e)return;this.detailLoading=!1,this.detail=null,this.render()}}closeDetail(){this.selectedId=null,this.detail=null,this.detailEvents=void 0,this.render()}renderDisruptionTimeline(){if(this.detailEvents===void 0)return"";if(this.detailEvents.length===0)return`<div class="sf-evidence">
        <div class="sf-sub" style="margin-bottom:6px">Disruption timeline</div>
        <div class="sf-ev-item sf-sub">No disruption events on file for this asset.</div>
      </div>`;const e=this.detailEvents.map(t=>{const s=n(xe(t.startAt,t.endAt)),a=$e(t.capacityOfflineBcmYr,t.capacityOfflineMbd),c=a?` · ${n(a)} offline`:"",l=t.causeChain&&t.causeChain.length>0?` · ${n(t.causeChain.join(" → "))}`:"";return`<div class="sf-ev-item">
        <strong>${n(t.eventType||"event")}</strong> · ${s}${c}${l}
        <div class="sf-sub" style="margin-top:2px">${n(t.shortDescription||"")}</div>
      </div>`}).join("");return`<div class="sf-evidence">
      <div class="sf-sub" style="margin-bottom:6px">Disruption timeline (${this.detailEvents.length})</div>
      ${e}
    </div>`}render(){var l,d;if(!this.data)return;const e=[...this.data.facilities].sort((o,u)=>{const h=o.publicBadge==="operational"?1:0,p=u.publicBadge==="operational"?1:0;return h!==p?h-p:o.facilityType!==u.facilityType?o.facilityType.localeCompare(u.facilityType):o.name.localeCompare(u.name)}).map(o=>this.renderRow(o)).join(""),t=K({sourceType:"classifier",method:"evidence → badge (deterministic)",sampleSize:this.data.facilities.length,sampleLabel:"facilities",updatedAt:this.data.fetchedAt,classifierVersion:this.data.classifierVersion,creditName:"Global Energy Monitor (CC-BY 4.0) / GIE AGSI+ / EIA",creditUrl:"https://globalenergymonitor.org/"}),s=this.selectedId?this.renderDrawer():"";this.setSafeContent(E(`
      <div class="sf-wrap">
        <table class="sf-table">
          <thead>
            <tr>
              <th>Facility</th>
              <th>Country · Type</th>
              <th>Capacity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>${e}</tbody>
        </table>
        ${t}
        ${s}
      </div>
      ${Q}
      <style>
        .sf-wrap { position: relative; font-size: 11px; }
        .sf-table { width: 100%; border-collapse: collapse; }
        .sf-table th { text-align: left; font-size: 9px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-dim, #888); padding: 4px 6px; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .sf-table td { padding: 6px; border-bottom: 1px solid rgba(255,255,255,0.04); }
        .sf-table tr.sf-row { cursor: pointer; }
        .sf-table tr.sf-row:hover td { background: rgba(255,255,255,0.03); }
        .sf-name { font-weight: 600; color: var(--text, #eee); }
        .sf-sub  { font-size: 9px; color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; }
        .sf-badge { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: 9px; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.04em; }
        .sf-drawer { position: absolute; inset: 0; background: var(--panel-bg, #0f1218); padding: 12px; overflow-y: auto; border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; }
        .sf-drawer-close { position: absolute; top: 8px; right: 10px; background: transparent; border: 0; color: var(--text-dim, #888); cursor: pointer; font-size: 14px; }
        .sf-drawer h3 { margin: 0 0 6px 0; font-size: 13px; color: var(--text, #eee); }
        .sf-drawer .sf-kv { display: grid; grid-template-columns: 120px 1fr; gap: 4px 10px; font-size: 10px; margin-bottom: 10px; }
        .sf-drawer .sf-kv-key { color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; font-size: 9px; padding-top: 2px; }
        .sf-evidence { margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.06); }
        .sf-ev-item { font-size: 10px; color: var(--text, #eee); margin-bottom: 6px; }
        .sf-ev-item a { color: #4ade80; text-decoration: none; }
        .sf-ev-item a:hover { text-decoration: underline; }
      </style>
    `,"legacy Panel.setContent() migration"));const a=(l=this.element)==null?void 0:l.querySelector(".sf-table");a==null||a.querySelectorAll("tr.sf-row").forEach(o=>{const u=o.dataset.facilityId;u&&o.addEventListener("click",()=>void this.loadDetail(u))});const c=(d=this.element)==null?void 0:d.querySelector(".sf-drawer-close");c==null||c.addEventListener("click",()=>this.closeDetail())}renderRow(e){const t=Xt[e.facilityType]??"🔹",s=Fe[e.facilityType]??e.facilityType;return`
      <tr class="sf-row" data-facility-id="${n(e.id)}">
        <td>
          <div class="sf-name">${t} ${n(e.name)}</div>
          <div class="sf-sub">${n(e.operator||"")}</div>
        </td>
        <td>${n(e.country)} · ${n(s)}</td>
        <td>${n(Re(e))}</td>
        <td>${Le(e.publicBadge)}</td>
      </tr>`}renderDrawer(){var d,o,u,h;if(this.detailLoading)return'<div class="sf-drawer"><button class="sf-drawer-close" aria-label="Close">✕</button>Loading…</div>';const e=(d=this.detail)==null?void 0:d.facility;if(!e)return'<div class="sf-drawer"><button class="sf-drawer-close" aria-label="Close">✕</button>Facility detail unavailable.</div>';const t=e.evidence,s=((t==null?void 0:t.sanctionRefs)??[]).map(p=>{const f=Z(p.url||""),y=n(p.date||"source"),b=f?`<a href="${f}" target="_blank" rel="noopener">${y}</a>`:y;return`
      <div class="sf-ev-item">
        <strong>${n(p.authority)}</strong> ${n(p.listId||"")} ·
        ${b}
      </div>`}).join(""),a=(o=t==null?void 0:t.operatorStatement)!=null&&o.text?(()=>{var y,b;const p=Z(((y=t.operatorStatement)==null?void 0:y.url)||""),f=p?`· <a href="${p}" target="_blank" rel="noopener">${n(((b=t.operatorStatement)==null?void 0:b.date)||"source")}</a>`:"";return`<div class="sf-ev-item"><strong>Operator:</strong> ${n(t.operatorStatement.text)}
           ${f}
         </div>`})():"",c=t!=null&&t.fillDisclosed?`<div class="sf-ev-item"><strong>Fill levels:</strong> disclosed via ${n(t.fillSource||"—")}</div>`:'<div class="sf-ev-item"><strong>Fill levels:</strong> not publicly disclosed</div>',l=Fe[e.facilityType]??e.facilityType;return`
      <div class="sf-drawer">
        <button class="sf-drawer-close" aria-label="Close">✕</button>
        <h3>${n(e.name)} ${Le(e.publicBadge)}</h3>
        <div class="sf-kv">
          <div class="sf-kv-key">Operator</div>   <div>${n(e.operator)}</div>
          <div class="sf-kv-key">Type</div>       <div>${n(l)}</div>
          <div class="sf-kv-key">Country</div>    <div>${n(e.country)}</div>
          <div class="sf-kv-key">Capacity</div>   <div>${n(Re(e))}</div>
          <div class="sf-kv-key">Location</div>   <div>${(((u=e.location)==null?void 0:u.lat)??0).toFixed(3)}°, ${(((h=e.location)==null?void 0:h.lon)??0).toFixed(3)}°</div>
          <div class="sf-kv-key">In service</div> <div>${e.inService>0?n(String(e.inService)):"—"}</div>
        </div>
        <div class="sf-evidence">
          <div class="sf-sub" style="margin-bottom:6px">Evidence</div>
          <div class="sf-ev-item">
            <strong>Physical state:</strong> ${n((t==null?void 0:t.physicalState)||"unknown")}
            (source: ${n((t==null?void 0:t.physicalStateSource)||"unknown")})
          </div>
          <div class="sf-ev-item"><strong>Commercial:</strong> ${n((t==null?void 0:t.commercialState)||"unknown")}</div>
          ${c}
          ${a}
          ${s}
          ${t!=null&&t.classifierVersion?`<div class="sf-ev-item sf-sub">Classifier ${n(t.classifierVersion)} · confidence ${Math.round((t.classifierConfidence??0)*100)}%</div>`:""}
        </div>
        ${this.renderDisruptionTimeline()}
      </div>`}}const ps=Object.freeze(Object.defineProperty({__proto__:null,StorageFacilityMapPanel:ei},Symbol.toStringTag,{value:"Module"})),ye=V(()=>new X(j(),{fetch:N})),ti={confirmed:"#e74c3c",watch:"#f39c12"},ii={petrol:"⛽",diesel:"🛢️",jet:"✈️",heating_oil:"🔥"},si={strong:"●●●",moderate:"●●○",thin:"●○○"};function je(r){const i=ti[r]??"#7f8c8d",e=r.charAt(0).toUpperCase()+r.slice(1);return`<span class="fs-badge" style="background:${i}">${n(e)}</span>`}function ni(r){if(!r||typeof r!="object")return null;const i=r,e=typeof i.id=="string"?i.id:"";if(!e)return null;const t=(d,o="")=>typeof d=="string"?d:o,s=(d,o=0)=>typeof d=="number"&&Number.isFinite(d)?d:o,a=i.evidence??null,c=Array.isArray(a==null?void 0:a.evidenceSources)?a.evidenceSources.map(d=>{const o=d??{};return{authority:t(o.authority),title:t(o.title),url:t(o.url),date:t(o.date),sourceType:t(o.sourceType)}}):[],l=a?{evidenceSources:c,firstRegulatorConfirmation:t(a.firstRegulatorConfirmation),classifierVersion:t(a.classifierVersion,"v1"),classifierConfidence:s(a.classifierConfidence,0),lastEvidenceUpdate:t(a.lastEvidenceUpdate)}:void 0;return{id:e,country:t(i.country),product:t(i.product),severity:t(i.severity,"watch"),firstSeen:t(i.firstSeen),lastConfirmed:t(i.lastConfirmed),resolvedAt:typeof i.resolvedAt=="string"?i.resolvedAt:"",impactTypes:Array.isArray(i.impactTypes)?i.impactTypes.map(d=>t(d)).filter(d=>d.length>0):[],causeChain:Array.isArray(i.causeChain)?i.causeChain.map(d=>t(d)).filter(d=>d.length>0):[],shortDescription:t(i.shortDescription),evidence:l}}function ai(r){if(!(r!=null&&r.shortages))return null;const i=[];for(const e of Object.values(r.shortages)){const t=ni(e);t&&i.push(t)}return i.length===0?null:{shortages:i,fetchedAt:r.updatedAt??"",classifierVersion:r.classifierVersion??"v1",upstreamUnavailable:!1}}class ri extends D{constructor(){super({id:"fuel-shortages",title:"Global Fuel Shortage Registry",defaultRowSpan:2,infoTooltip:"Global fuel-shortage alert registry (petrol, diesel, jet, heating oil). Severity (confirmed / watch) is a classifier output, not a client derivation. Every row carries the full evidence source list — see /docs/methodology/shortages for the threshold spec + classifier version."});$(this,"data",null);$(this,"selectedId",null);$(this,"detail",null);$(this,"detailLoading",!1);$(this,"openDetailHandler",e=>{var s,a;const t=(s=e.detail)==null?void 0:s.shortageId;!t||!((a=this.element)!=null&&a.isConnected)||this.loadDetail(t)});typeof window<"u"&&window.addEventListener("energy:open-fuel-shortage-detail",this.openDetailHandler)}destroy(){var e;typeof window<"u"&&window.removeEventListener("energy:open-fuel-shortage-detail",this.openDetailHandler),(e=super.destroy)==null||e.call(this)}async fetchData(){var e,t,s;try{const{registry:a}=yt(),c=ai(a);if(c){this.data=c,this.render(),ye().listFuelShortages({country:"",product:"",severity:""}).then(o=>{var h,p;if(!((h=this.element)!=null&&h.isConnected)||!((p=o==null?void 0:o.shortages)!=null&&p.length))return;this.data=o,this.render();const u=Object.fromEntries(o.shortages.map(f=>[f.id,f]));Ae({shortages:u,classifierVersion:o.classifierVersion,updatedAt:o.fetchedAt})}).catch(()=>{});return}const l=await ye().listFuelShortages({country:"",product:"",severity:""});if(!((e=this.element)!=null&&e.isConnected))return;if(l.upstreamUnavailable||!((t=l.shortages)!=null&&t.length)){this.showError("Fuel shortage registry unavailable",()=>void this.fetchData());return}this.data=l,this.render();const d=Object.fromEntries(l.shortages.map(o=>[o.id,o]));Ae({shortages:d,classifierVersion:l.classifierVersion,updatedAt:l.fetchedAt})}catch(a){if(this.isAbortError(a)||!((s=this.element)!=null&&s.isConnected))return;this.showError("Fuel shortage registry error",()=>void this.fetchData())}}async loadDetail(e){var t,s;this.selectedId=e,this.detailLoading=!0,this.render();try{const a=await ye().getFuelShortageDetail({shortageId:e});if(!((t=this.element)!=null&&t.isConnected)||this.selectedId!==e)return;this.detail=a,this.detailLoading=!1,this.render()}catch{if(!((s=this.element)!=null&&s.isConnected)||this.selectedId!==e)return;this.detailLoading=!1,this.detail=null,this.render()}}closeDetail(){this.selectedId=null,this.detail=null,this.render()}render(){var u,h;if(!this.data)return;const e=[...this.data.shortages].sort((p,f)=>{const y=p.severity==="confirmed"?0:1,b=f.severity==="confirmed"?0:1;if(y!==b)return y-b;const g=re(p.evidence),m=re(f.evidence),w={strong:0,moderate:1,thin:2};return w[g]!==w[m]?w[g]-w[m]:f.lastConfirmed.localeCompare(p.lastConfirmed)}).map(p=>this.renderRow(p)).join(""),t=this.data.shortages.filter(p=>p.severity==="confirmed").length,s=this.data.shortages.filter(p=>p.severity==="watch").length,a=`${t} confirmed · ${s} watch`,c=K({sourceType:"classifier",method:"evidence-threshold + LLM double-check",sampleSize:this.data.shortages.length,sampleLabel:"active shortages",updatedAt:this.data.fetchedAt,classifierVersion:this.data.classifierVersion,creditName:"Regulator advisories + IEA + major wire",creditUrl:"/docs/methodology/shortages"}),l=this.selectedId?this.renderDrawer():"";this.setSafeContent(E(`
      <div class="fs-wrap">
        <div class="fs-summary">${n(a)}</div>
        <table class="fs-table">
          <thead>
            <tr>
              <th>Country · Product</th>
              <th>Since</th>
              <th>Evidence</th>
              <th>Severity</th>
            </tr>
          </thead>
          <tbody>${e}</tbody>
        </table>
        ${c}
        ${l}
      </div>
      ${Q}
      <style>
        .fs-wrap { position: relative; font-size: 11px; }
        .fs-summary { font-size: 10px; color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; margin: 4px 0 6px 0; }
        .fs-table { width: 100%; border-collapse: collapse; }
        .fs-table th { text-align: left; font-size: 9px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-dim, #888); padding: 4px 6px; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .fs-table td { padding: 6px; border-bottom: 1px solid rgba(255,255,255,0.04); }
        .fs-table tr.fs-row { cursor: pointer; }
        .fs-table tr.fs-row:hover td { background: rgba(255,255,255,0.03); }
        .fs-name { font-weight: 600; color: var(--text, #eee); }
        .fs-sub  { font-size: 9px; color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; }
        .fs-badge { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: 9px; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.04em; }
        .fs-quality { font-family: monospace; font-size: 10px; color: var(--text-dim, #888); }
        .fs-drawer { position: absolute; inset: 0; background: var(--panel-bg, #0f1218); padding: 12px; overflow-y: auto; border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; }
        .fs-drawer-close { position: absolute; top: 8px; right: 10px; background: transparent; border: 0; color: var(--text-dim, #888); cursor: pointer; font-size: 14px; }
        .fs-drawer h3 { margin: 0 0 6px 0; font-size: 13px; color: var(--text, #eee); }
        .fs-drawer .fs-kv { display: grid; grid-template-columns: 120px 1fr; gap: 4px 10px; font-size: 10px; margin-bottom: 10px; }
        .fs-drawer .fs-kv-key { color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; font-size: 9px; padding-top: 2px; }
        .fs-source-list { margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,0.06); }
        .fs-src-item { font-size: 10px; color: var(--text, #eee); margin-bottom: 6px; }
        .fs-src-item a { color: #4ade80; text-decoration: none; }
        .fs-src-item a:hover { text-decoration: underline; }
        .fs-src-type { display: inline-block; padding: 1px 6px; border-radius: 8px; font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; background: rgba(255,255,255,0.08); color: var(--text-dim, #aaa); margin-right: 4px; }
        .fs-src-type-regulator { background: #2980b9; color: #fff; }
        .fs-src-type-operator { background: #27ae60; color: #fff; }
        .fs-src-type-press { background: #555; color: #ccc; }
      </style>
    `,"legacy Panel.setContent() migration"));const d=(u=this.element)==null?void 0:u.querySelector(".fs-table");d==null||d.querySelectorAll("tr.fs-row").forEach(p=>{const f=p.dataset.shortageId;f&&p.addEventListener("click",()=>void this.loadDetail(f))});const o=(h=this.element)==null?void 0:h.querySelector(".fs-drawer-close");o==null||o.addEventListener("click",()=>this.closeDetail())}renderRow(e){const t=ii[e.product]??"•",s=re(e.evidence);return`
      <tr class="fs-row" data-shortage-id="${n(e.id)}">
        <td>
          <div class="fs-name">${t} ${n(e.country)} · ${n(e.product)}</div>
          <div class="fs-sub">${n(e.causeChain.join(" · ")||"—")}</div>
        </td>
        <td>${n(e.firstSeen.slice(0,10))}</td>
        <td><span class="fs-quality" title="Evidence quality: ${n(s)}">${si[s]}</span></td>
        <td>${je(e.severity)}</td>
      </tr>`}renderDrawer(){var l;if(this.detailLoading)return'<div class="fs-drawer"><button class="fs-drawer-close" aria-label="Close">✕</button>Loading…</div>';const e=(l=this.detail)==null?void 0:l.shortage;if(!e)return'<div class="fs-drawer"><button class="fs-drawer-close" aria-label="Close">✕</button>Shortage detail unavailable.</div>';const t=e.evidence,s=mt(t==null?void 0:t.evidenceSources),a=re(t),c=((t==null?void 0:t.evidenceSources)??[]).map(d=>{const o=Z(d.url||""),u=n(d.title||d.authority||"source"),h=o?`<a href="${o}" target="_blank" rel="noopener">${u}</a>`:u;return`
      <div class="fs-src-item">
        <span class="fs-src-type ${`fs-src-type-${n(d.sourceType||"other")}`}">${n(d.sourceType||"other")}</span>
        <strong>${n(d.authority||"")}</strong> · ${h} · ${n(d.date.slice(0,10))}
      </div>`}).join("");return`
      <div class="fs-drawer">
        <button class="fs-drawer-close" aria-label="Close">✕</button>
        <h3>${n(e.country)} · ${n(e.product)} ${je(e.severity)}</h3>
        <div class="fs-kv">
          <div class="fs-kv-key">Description</div>  <div>${n(e.shortDescription)}</div>
          <div class="fs-kv-key">First seen</div>   <div>${n(e.firstSeen.slice(0,10))}</div>
          <div class="fs-kv-key">Last confirmed</div><div>${n(e.lastConfirmed.slice(0,10))}</div>
          <div class="fs-kv-key">Resolved</div>     <div>${e.resolvedAt?n(e.resolvedAt.slice(0,10)):"Active"}</div>
          <div class="fs-kv-key">Impact</div>       <div>${n(e.impactTypes.join(", ")||"—")}</div>
          <div class="fs-kv-key">Cause chain</div>  <div>${n(e.causeChain.join(" → ")||"—")}</div>
          <div class="fs-kv-key">Evidence</div>     <div>${s.authoritative} regulator/operator · ${s.press} press · quality: ${n(a)}</div>
          ${t!=null&&t.classifierVersion?`<div class="fs-kv-key">Classifier</div><div>${n(t.classifierVersion)} · confidence ${Math.round((t.classifierConfidence??0)*100)}%</div>`:""}
        </div>
        <div class="fs-source-list">
          <div class="fs-sub" style="margin-bottom:6px">Evidence sources (${((t==null?void 0:t.evidenceSources)??[]).length})</div>
          ${c||'<div class="fs-src-item">No sources on file.</div>'}
        </div>
      </div>`}}const us=Object.freeze(Object.defineProperty({__proto__:null,FuelShortagePanel:ri},Symbol.toStringTag,{value:"Module"})),oi=V(()=>new X(j(),{fetch:N})),li={sabotage:"💥",sanction:"🚫",maintenance:"🔧",mechanical:"⚙️",weather:"🌀",commercial:"💼",war:"⚔️",other:"•"},Ie={ongoing:"#e74c3c",resolved:"#7f8c8d",unknown:"#95a5a6"},ci=[{key:"",label:"All events"},{key:"sabotage",label:"Sabotage"},{key:"sanction",label:"Sanction"},{key:"mechanical",label:"Mechanical"},{key:"maintenance",label:"Maintenance"},{key:"war",label:"War"},{key:"weather",label:"Weather"},{key:"commercial",label:"Commercial"},{key:"other",label:"Other"}];function di(r){const i=Ie[r]??Ie.unknown,e=r.charAt(0).toUpperCase()+r.slice(1);return`<span class="ed-badge" style="background:${i}">${n(e)}</span>`}class pi extends D{constructor(){super({id:"energy-disruptions",title:"Energy Disruptions Log",defaultRowSpan:2,infoTooltip:"Curated log of disruption events affecting oil & gas pipelines and storage facilities — sabotage, sanctions, maintenance, mechanical, weather, war, commercial. Each event ties back to a seeded asset; click a row to jump to the pipeline / storage panel with that event highlighted. See /docs/methodology/disruptions for the schema."});$(this,"data",null);$(this,"activeTypeFilter","");$(this,"ongoingOnly",!1);$(this,"handleContentClick",e=>{const t=e.target;if(!t)return;const s=t.closest("[data-filter-type]");if(s){this.setTypeFilter(s.dataset.filterType??"");return}if(t.closest("[data-toggle-ongoing]")){this.toggleOngoingOnly();return}const c=t.closest("tr.ed-row");if(c){const l=c.dataset.eventId,d=c.dataset.assetId,o=c.dataset.assetType;l&&d&&o&&this.dispatchOpenAsset(l,d,o)}});this.content.addEventListener("click",this.handleContentClick)}async fetchData(){var e,t;try{const s=await oi().listEnergyDisruptions({assetId:"",assetType:"",ongoingOnly:!1});if(!((e=this.element)!=null&&e.isConnected))return;if(s.upstreamUnavailable){this.showError("Energy disruptions log unavailable",()=>void this.fetchData());return}this.data=s,this.render()}catch(s){if(this.isAbortError(s)||!((t=this.element)!=null&&t.isConnected))return;this.showError("Energy disruptions log error",()=>void this.fetchData())}}setTypeFilter(e){this.activeTypeFilter=e,this.render()}toggleOngoingOnly(){this.ongoingOnly=!this.ongoingOnly,this.render()}filterEvents(){if(!this.data)return[];let e=this.data.events;return this.activeTypeFilter&&(e=e.filter(t=>t.eventType===this.activeTypeFilter)),this.ongoingOnly&&(e=e.filter(t=>!t.endAt)),[...e].sort((t,s)=>s.startAt.localeCompare(t.startAt))}render(){if(!this.data)return;const e=this.filterEvents(),t=e.map(h=>this.renderRow(h)).join(""),s=this.data.events.length,a=this.data.events.filter(h=>!h.endAt).length,c=e.length,l=this.activeTypeFilter||this.ongoingOnly?`${c} shown · ${s} total · ${a} ongoing`:`${s} events · ${a} ongoing`,d=ci.map(h=>`<button class="ed-chip${h.key===this.activeTypeFilter?" ed-chip-active":""}" data-filter-type="${n(h.key)}">${n(h.label)}</button>`).join(""),o=`<button class="ed-chip${this.ongoingOnly?" ed-chip-active":""}" data-toggle-ongoing>Ongoing only</button>`,u=K({sourceType:"classifier",method:"curated event log",sampleSize:s,sampleLabel:"disruption events",updatedAt:this.data.fetchedAt,classifierVersion:this.data.classifierVersion,creditName:"Operator press + regulator filings + OFAC/EU sanctions + major wire",creditUrl:"/docs/methodology/disruptions"});this.setSafeContent(E(`
      <div class="ed-wrap">
        <div class="ed-summary">${n(l)}</div>
        <div class="ed-filters">${d}${o}</div>
        <table class="ed-table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Asset</th>
              <th>Window</th>
              <th>Offline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>${t||'<tr><td colspan="5" class="ed-empty">No events match the current filter.</td></tr>'}</tbody>
        </table>
        ${u}
      </div>
      ${Q}
      <style>
        .ed-wrap { font-size: 11px; }
        .ed-summary { font-size: 10px; color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; margin: 4px 0 6px 0; }
        .ed-filters { display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 8px; }
        .ed-chip { background: rgba(255,255,255,0.04); color: var(--text-dim, #aaa); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 2px 8px; font-size: 10px; cursor: pointer; }
        .ed-chip:hover { background: rgba(255,255,255,0.08); color: var(--text, #eee); }
        .ed-chip-active { background: #2980b9; border-color: #2980b9; color: #fff; }
        .ed-chip-active:hover { background: #2471a3; }
        .ed-table { width: 100%; border-collapse: collapse; }
        .ed-table th { text-align: left; font-size: 9px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--text-dim, #888); padding: 4px 6px; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .ed-table td { padding: 6px; border-bottom: 1px solid rgba(255,255,255,0.04); vertical-align: top; }
        .ed-row { cursor: pointer; }
        .ed-row:hover td { background: rgba(255,255,255,0.03); }
        .ed-event { font-weight: 600; color: var(--text, #eee); }
        .ed-sub { font-size: 9px; color: var(--text-dim, #888); text-transform: uppercase; letter-spacing: 0.04em; }
        .ed-asset-type { display: inline-block; padding: 1px 6px; border-radius: 8px; font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; background: rgba(255,255,255,0.08); color: var(--text-dim, #aaa); margin-right: 4px; }
        .ed-badge { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: 9px; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.04em; }
        .ed-empty { text-align: center; color: var(--text-dim, #888); padding: 20px; font-style: italic; }
        .ed-offline { font-family: monospace; font-size: 10px; color: var(--text, #eee); }
      </style>
    `,"legacy Panel.setContent() migration"))}dispatchOpenAsset(e,t,s){const a=s==="storage"?{facilityId:t}:{pipelineId:t},c=s==="storage"?"energy:open-storage-facility-detail":"energy:open-pipeline-detail";window.dispatchEvent(new CustomEvent(c,{detail:a}))}renderRow(e){const t=li[e.eventType]??"•",s=ct({startAt:e.startAt,endAt:e.endAt||void 0}),a=xe(e.startAt,e.endAt||void 0),c=$e(e.capacityOfflineBcmYr,e.capacityOfflineMbd),l=e.causeChain.join(" → ")||"—";return`
      <tr class="ed-row"
          data-event-id="${n(e.id)}"
          data-asset-id="${n(e.assetId)}"
          data-asset-type="${n(e.assetType)}">
        <td>
          <div class="ed-event">${t} ${n(e.eventType)}</div>
          <div class="ed-sub">${n(e.shortDescription)}</div>
          <div class="ed-sub">${n(l)}</div>
        </td>
        <td>
          <span class="ed-asset-type">${n(e.assetType)}</span>
          <span class="ed-asset-id">${n(e.assetId)}</span>
        </td>
        <td>${n(a)}</td>
        <td><span class="ed-offline">${n(c||"—")}</span></td>
        <td>${di(s)}</td>
      </tr>`}}const hs=Object.freeze(Object.defineProperty({__proto__:null,EnergyDisruptionsPanel:pi},Symbol.toStringTag,{value:"Module"})),ui=V(()=>new X(j(),{fetch:N})),hi="BZ=F",fi=[{symbol:hi,name:"Brent Crude",display:"BRENT"}],Be="2026-02-23",gi=(()=>{try{return Be}catch{return Be}})(),Ge=Date.parse(`${gi}T00:00:00Z`),mi={closed:"#e74c3c",disrupted:"#e74c3c",restricted:"#f39c12",open:"#27ae60"},yi={closed:"Closed",disrupted:"Disrupted",restricted:"Restricted",open:"Open"},vi={hormuz:{status:"pending"},euGas:{status:"pending"},brent:{status:"pending"},activeDisruptions:{status:"pending"}};class bi extends D{constructor(){super({id:"energy-risk-overview",title:"Global Energy Risk Overview",defaultRowSpan:1,infoTooltip:"Consolidated executive view: Strait of Hormuz vessel status, EU gas storage fill, Brent crude price + 1-day change, active disruption count, data freshness, and a configurable crisis-day counter. Each tile renders independently; one source failing does not block the others."});$(this,"state",vi);$(this,"freshnessTickHandle",null)}destroy(){var e;this.freshnessTickHandle!==null&&(clearInterval(this.freshnessTickHandle),this.freshnessTickHandle=null),(e=super.destroy)==null||e.call(this)}async fetchData(){var c;const[e,t,s,a]=await Promise.allSettled([We(),it(),vt(fi),ui().listEnergyDisruptions({assetId:"",assetType:"",ongoingOnly:!0})]);this.state=bt(e,t,s,a,Date.now()),(c=this.element)!=null&&c.isConnected&&(this.render(),this.freshnessTickHandle===null&&(this.freshnessTickHandle=setInterval(()=>{var l;(l=this.element)!=null&&l.isConnected&&this.render()},6e4)))}render(){xi();const e=`
      <div class="ero-grid">
        ${this.renderHormuzTile()}
        ${this.renderEuGasTile()}
        ${this.renderBrentTile()}
        ${this.renderActiveDisruptionsTile()}
        ${this.renderFreshnessTile()}
        ${this.renderCrisisDayTile()}
      </div>
    `;this.setSafeContent(E(e,"legacy Panel.setContent() migration"))}renderHormuzTile(){const e=this.state.hormuz;if(e.status!=="fulfilled"||!e.value)return T("Hormuz","—","#7f8c8d",'data-degraded="true"');const t=e.value.status,s=mi[t]??"#7f8c8d",a=yi[t]??e.value.status;return T("Hormuz",a,s)}renderEuGasTile(){const e=this.state.euGas;if(e.status!=="fulfilled"||!e.value)return T("EU Gas","—","#7f8c8d",'data-degraded="true"');const t=e.value.fillPct.toFixed(0),s=e.value.fillPct<30?"#e74c3c":e.value.fillPct<50?"#f39c12":"#27ae60";return T("EU Gas",`${t}%`,s)}renderBrentTile(){const e=this.state.brent;if(e.status!=="fulfilled"||!e.value)return T("Brent","—","#7f8c8d",'data-degraded="true"');const t=`$${e.value.price.toFixed(2)}`,s=e.value.change,c=`${s>=0?"+":""}${s.toFixed(2)}%`,l=s>=0?"#e74c3c":"#27ae60";return T("Brent",t,l,"",c)}renderActiveDisruptionsTile(){const e=this.state.activeDisruptions;if(e.status!=="fulfilled"||!e.value)return T("Active disruptions","—","#7f8c8d",'data-degraded="true"');const t=e.value.count,s=t===0?"#27ae60":t<5?"#f39c12":"#e74c3c";return T("Active disruptions",String(t),s)}renderFreshnessTile(){const t=[this.state.hormuz,this.state.euGas,this.state.brent,this.state.activeDisruptions].map(l=>l.fetchedAt).filter(l=>typeof l=="number");if(t.length===0)return T("Updated","—","#7f8c8d",'data-degraded="true"');const s=Math.max(...t),a=Math.floor((Date.now()-s)/6e4),c=a<=0?"just now":a===1?"1 min ago":`${a} min ago`;return T("Updated",c,"#7f8c8d")}renderCrisisDayTile(){if(!Number.isFinite(Ge))return T("Hormuz crisis","—","#7f8c8d",'data-degraded="true"');const e=Math.floor((Date.now()-Ge)/864e5);return e<0?T("Hormuz crisis","pending","#7f8c8d"):T("Hormuz crisis",`Day ${e}`,"#7f8c8d")}}function T(r,i,e,t="",s=""){const a=s?`<div class="ero-tile__sub" style="color:${e}">${n(s)}</div>`:"";return`
    <div class="ero-tile" ${t}>
      <div class="ero-tile__label">${n(r)}</div>
      <div class="ero-tile__value" style="color:${e}">${n(i)}</div>
      ${a}
    </div>
  `}let Ve=!1;function xi(){if(Ve||typeof document>"u")return;const r=document.createElement("style");r.setAttribute("data-ero-styles",""),r.textContent=$i,document.head.appendChild(r),Ve=!0}const $i=`
  .ero-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    gap: 8px;
    padding: 8px;
  }
  .ero-tile {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 6px;
    padding: 10px 12px;
    min-height: 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .ero-tile__label {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: rgba(255, 255, 255, 0.55);
    margin-bottom: 4px;
  }
  .ero-tile__value {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.1;
  }
  .ero-tile__sub {
    font-size: 12px;
    margin-top: 2px;
  }
`,fs=Object.freeze(Object.defineProperty({__proto__:null,EnergyRiskOverviewPanel:bi},Symbol.toStringTag,{value:"Module"})),Ne=V(()=>new He(j(),{fetch:N}));class wi extends D{constructor(){super({id:"fuel-prices",title:x("panels.fuelPrices"),infoTooltip:x("components.fuelPrices.infoTooltip")})}async fetchData(){var i,e,t,s;try{const a=be("fuelPrices");if((i=a==null?void 0:a.countries)!=null&&i.length){if(!((e=this.element)!=null&&e.isConnected))return;this.renderIndex(a),Ne().listFuelPrices({}).then(l=>{var d,o;!((d=this.element)!=null&&d.isConnected)||!((o=l.countries)!=null&&o.length)||this.renderIndex(l)}).catch(()=>{});return}const c=await Ne().listFuelPrices({});if(!((t=this.element)!=null&&t.isConnected))return;this.renderIndex(c)}catch(a){if(this.isAbortError(a)||!((s=this.element)!=null&&s.isConnected))return;this.showError(x("common.failedMarketData"),()=>void this.fetchData())}}renderIndex(i){var p;if(!((p=i.countries)!=null&&p.length)){this.showError(x("common.failedMarketData"),()=>void this.fetchData());return}const e=[...i.countries].sort((f,y)=>{var m,w;const b=((m=f.gasoline)==null?void 0:m.usdPrice)??0;return(((w=y.gasoline)==null?void 0:w.usdPrice)??0)-b}),t=i.cheapestGasoline??"",s=i.mostExpensiveGasoline??"",a=i.cheapestDiesel??"",c=i.mostExpensiveDiesel??"",l=i.wowAvailable,d=e.map(f=>{const y=f.gasoline,b=f.diesel;function g(m,w,S,k){if(!(m!=null&&m.usdPrice))return'<td class="gb-cell gb-na">N/A</td>';const z=k===w?"gb-cheapest":k===S?"gb-priciest":"";let I="";if(l&&m.wowPct!=null&&m.wowPct!==0){const _=m.wowPct>=0?"▲":"▼";I=` <span class="${m.wowPct>=0?"bm-wow-up":"bm-wow-down"}">${_}${Math.abs(m.wowPct).toFixed(1)}%</span>`}return`<td class="gb-cell ${z}">$${m.usdPrice.toFixed(3)}${I}</td>`}return`<tr>
        <td class="gb-item-name">${n(f.flag)} ${n(f.name)}</td>
        ${g(y,t,s,f.code)}
        ${g(b,a,c,f.code)}
      </tr>`}).join(""),o=i.fetchedAt?new Date(i.fetchedAt).toLocaleDateString():"",u=i.countryCount?` (${i.countryCount} ${x("components.fuelPrices.countries")})`:"",h=`
      <div class="gb-wrapper">
        <div class="gb-scroll">
          <table class="gb-table">
            <thead><tr>
              <th class="gb-item-col">${x("panels.fuelPricesCountry")}</th>
              <th class="gb-cell">${x("panels.fuelPricesGasoline")}</th>
              <th class="gb-cell">${x("panels.fuelPricesDiesel")}</th>
            </tr></thead>
            <tbody>${d}</tbody>
          </table>
        </div>
        ${o?`<div class="gb-updated">${x("components.status.updatedAt",{time:o})}${u}</div>`:""}
      </div>
    `;this.setSafeContent(E(h,"legacy Panel.setContent() migration"))}}const gs=Object.freeze(Object.defineProperty({__proto__:null,FuelPricesPanel:wi},Symbol.toStringTag,{value:"Module"})),Ue=["#e67e22","#1abc9c","#9b59b6","#27ae60"],Ci="rgba(231,76,60,0.5)";function Si(r){switch(r){case"closed":return"#e74c3c";case"disrupted":return"#e67e22";case"restricted":return"#f39c12";default:return"#2ecc71"}}function ki(r,i,e,t=280,s=52){if(!r.length)return`<div style="height:${s}px;display:flex;align-items:center;color:var(--text-dim);font-size:10px">${n(x("components.hormuzTracker.noData"))}</div>`;const a=Math.max(...r.map(u=>u.value),1),c=Math.max(2,Math.floor((t-r.length)/r.length));let l=0;const d=r.map(u=>{const h=Math.max(u.value>0?2:1,Math.round(u.value/a*(s-2))),p=u.value===0?Ci:i,f=`<rect x="${l}" y="${s-h}" width="${c}" height="${h}" fill="${p}" rx="1"/>`;return l+=c+1,f});l=0;const o=r.map(u=>{const h=`<rect class="hbar" x="${l}" y="0" width="${c}" height="${s}" fill="transparent" data-date="${n(u.date)}" data-val="${u.value}" data-unit="${n(e)}" style="cursor:crosshair"/>`;return l+=c+1,h});return`<svg class="hz-svg" width="${t}" height="${s}" style="display:block;overflow:visible">${d.join("")}${o.join("")}</svg>`}function Ei(r,i){const e=Ue[i%Ue.length]??"#3498db",t=r.series[r.series.length-1],s=t?Number(t.value).toFixed(0):x("components.hormuzTracker.notAvailable"),a=t?t.date.slice(5):"",c=r.label.includes("crude_oil")?x("components.hormuzTracker.units.ktPerDay"):x("components.hormuzTracker.units.generic");return`
    <div class="hz-chart" style="margin-bottom:12px">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px">
        <span style="font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.04em">${n(r.title)}</span>
        <span style="font-size:11px;font-weight:600;color:${e}">${n(s)} <span style="font-size:9px;color:var(--text-dim)">${c} · ${n(a)}</span></span>
      </div>
      <div style="position:relative">${ki(r.series,e,c)}</div>
    </div>`}class Ti extends D{constructor(){super({id:"hormuz-tracker",title:x("components.hormuzTracker.title"),showCount:!1,infoTooltip:x("components.hormuzTracker.infoTooltip")});$(this,"data",null);$(this,"tooltipBound",!1)}async fetchData(){this.showLoading();try{const e=await We();return e?(this.data=e,this.renderPanel(),this.bindTooltip(),!0):(this.showError(x("components.hormuzTracker.errors.unavailable"),()=>void this.fetchData()),!1)}catch(e){return this.showError(e instanceof Error?e.message:x("components.hormuzTracker.errors.failedToLoad"),()=>void this.fetchData()),!1}}bindTooltip(){this.tooltipBound||!this.element||(this.tooltipBound=!0,this.element.addEventListener("mousemove",e=>{var o,u;const t=e.target;if(!((o=t.classList)!=null&&o.contains("hbar")))return;const s=(t.getAttribute("data-date")??"").slice(5),a=t.getAttribute("data-val")??"",c=t.getAttribute("data-unit")??"",l=(u=this.element)==null?void 0:u.querySelector(".hz-tip");if(!l)return;const d=t.getBoundingClientRect();l.style.left=`${d.left+d.width/2}px`,l.style.top=`${Math.max(8,d.top-28)}px`,l.style.transform="translateX(-50%)",l.style.opacity="1",l.textContent=`${s}  ${a} ${c}`}),this.element.addEventListener("mouseleave",()=>{var t;const e=(t=this.element)==null?void 0:t.querySelector(".hz-tip");e&&(e.style.opacity="0")}))}renderPanel(){if(!this.data)return;const e=this.data,t=Si(e.status),s=e.charts.length?e.charts.map((l,d)=>Ei(l,d)).join(""):`<div style="color:var(--text-dim);font-size:11px;padding:8px 0">${n(x("components.hormuzTracker.chartUnavailable"))}</div>`,a=e.updatedDate?`<span style="font-size:10px;color:var(--text-dim)">${n(e.updatedDate)}</span>`:"",c=`
      <div style="padding:12px 14px;position:relative">
        <div class="hz-tip" style="position:fixed;pointer-events:none;background:rgba(15,17,26,0.95);border:1px solid rgba(255,255,255,0.15);border-radius:4px;padding:3px 8px;font-size:10px;color:#fff;white-space:nowrap;z-index:9999;opacity:0;transition:opacity 0.08s;letter-spacing:0.02em"></div>
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
          <span style="background:${t};color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:3px;letter-spacing:0.08em">${e.status.toUpperCase()}</span>
          ${a}
        </div>
        <div>${s}</div>
        <div style="margin-top:4px;font-size:9px;color:var(--text-dim)">
          ${n(x("components.hormuzTracker.sourcePrefix"))} <a href="${n(e.attribution.url)}" target="_blank" rel="noopener" style="color:var(--text-dim);text-decoration:underline">${n(e.attribution.source)}</a>
        </div>
      </div>`;this.setSafeContent(E(c,"legacy Panel.setContent() migration"))}}const ms=Object.freeze(Object.defineProperty({__proto__:null,HormuzPanel:Ti},Symbol.toStringTag,{value:"Module"}));class Ai extends D{constructor(){super({id:"renewable",title:"Renewable Energy",trackActivity:!1,infoTooltip:x("components.renewable.infoTooltip")})}setData(i){var l,d,o;at(this.content);const{data:e,state:t,cachedAt:s}=i;if(t==="cached"?this.setDataBadge("cached",s===null?void 0:$t(s)):this.setDataBadge(t),e===null||e.globalPercentage===0&&!((l=e.regions)!=null&&l.length)){const u=document.createElement("div");u.className="renewable-empty",Object.assign(u.style,{padding:"24px 16px",color:"var(--text-dim)",textAlign:"center",fontSize:"13px"}),u.textContent="No renewable energy data available",this.content.appendChild(u);return}const a=document.createElement("div");a.className="renewable-container",Object.assign(a.style,{padding:"8px"});const c=document.createElement("div");if(c.className="renewable-gauge-section",Object.assign(c.style,{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"12px"}),this.renderGauge(c,e.globalPercentage,e.globalYear),a.appendChild(c),(((d=e.historicalData)==null?void 0:d.length)??0)>2){const u=document.createElement("div");u.className="renewable-sparkline-section",Object.assign(u.style,{marginBottom:"12px"}),this.renderSparkline(u,e.historicalData),a.appendChild(u)}if(((o=e.regions)==null?void 0:o.length)>0){const u=document.createElement("div");u.className="renewable-regions",this.renderRegions(u,e.regions),a.appendChild(u)}this.content.appendChild(a)}renderGauge(i,e,t){const o=fe(i).append("svg").attr("viewBox","0 0 140 140").attr("width",140).attr("height",140).style("display","block").append("g").attr("transform","translate(70,70)"),u=wt().innerRadius(49).outerRadius(70).cornerRadius(4).startAngle(0);o.append("path").datum({endAngle:Math.PI*2}).attr("d",u).attr("fill",O("--border"));const h=e/100*Math.PI*2,p=o.append("path").datum({endAngle:0}).attr("d",u).attr("fill",O("--green")),f=Ct(0,h);p.transition().duration(1500).ease(xt).attrTween("d",()=>b=>u({endAngle:f(b)})),o.append("text").attr("class","gauge-value").attr("text-anchor","middle").attr("dominant-baseline","central").attr("dy","-0.15em").attr("fill",O("--text")).attr("font-size","22px").attr("font-weight","700").text(`${e.toFixed(1)}%`),o.append("text").attr("class","gauge-label").attr("text-anchor","middle").attr("dominant-baseline","central").attr("dy","1.4em").attr("fill",O("--text-dim")).attr("font-size","10px").text("Renewable");const y=document.createElement("div");y.className="gauge-year",Object.assign(y.style,{textAlign:"center",fontSize:"10px",color:"var(--text-dim)",marginTop:"4px"}),y.textContent=`Data from ${t}`,i.appendChild(y)}renderSparkline(i,e){const t=this.content.clientWidth-16||200,s=40,a={top:4,right:8,bottom:4,left:8},c=t-a.left-a.right;if(c<=0)return;const d=fe(i).append("svg").attr("width",t).attr("height",s+a.top+a.bottom).style("display","block").append("g").attr("transform",`translate(${a.left},${a.top})`),o=Pe(e,m=>m.year),u=Pe(e,m=>m.value),h=(u[1]-u[0])*.1,p=oe().domain(o).range([0,c]),f=oe().domain([u[0]-h,u[1]+h]).range([s,0]),y=O("--green"),b=ge().x(m=>p(m.year)).y0(s).y1(m=>f(m.value)).curve(Y);d.append("path").datum(e).attr("d",b).attr("fill",y).attr("opacity",.15);const g=De().x(m=>p(m.year)).y(m=>f(m.value)).curve(Y);d.append("path").datum(e).attr("d",g).attr("fill","none").attr("stroke",y).attr("stroke-width",1.5)}renderRegions(i,e){const t=Math.max(...e.map(s=>s.percentage),1);for(let s=0;s<e.length;s++){const a=e[s],c=document.createElement("div");c.className="region-row",Object.assign(c.style,{display:"flex",alignItems:"center",gap:"8px",marginBottom:"6px"});const l=document.createElement("span");l.className="region-name",Object.assign(l.style,{fontSize:"11px",color:"var(--text-dim)",minWidth:"120px",flexShrink:"0"}),l.textContent=a.name;const d=document.createElement("div");d.className="region-bar-container",Object.assign(d.style,{flex:"1",height:"8px",background:"var(--bg-secondary)",borderRadius:"4px",overflow:"hidden"});const o=document.createElement("div");o.className="region-bar";const u=e.length>1?1-s/(e.length-1)*.5:1;Object.assign(o.style,{width:`${a.percentage/t*100}%`,height:"100%",background:O("--green"),opacity:String(u),borderRadius:"4px",transition:"width 0.6s ease-out"}),d.appendChild(o);const h=document.createElement("span");h.className="region-value",Object.assign(h.style,{fontSize:"11px",fontWeight:"600",color:"var(--text)",minWidth:"42px",textAlign:"right",flexShrink:"0"}),h.textContent=`${a.percentage.toFixed(1)}%`,c.appendChild(l),c.appendChild(d),c.appendChild(h),i.appendChild(c)}}setCapacityData(i){var s;if((s=this.content.querySelector(".capacity-section"))==null||s.remove(),!i||i.length===0)return;const e=document.createElement("div");e.className="capacity-section";const t=document.createElement("div");t.className="capacity-header",t.textContent="US Installed Capacity (EIA)",e.appendChild(t),this.renderCapacityChart(e,i),this.content.appendChild(e)}renderCapacityChart(i,e){const t=e.find(v=>v.source==="SUN"),s=e.find(v=>v.source==="WND"),a=e.find(v=>v.source==="COL"),c=new Set;for(const v of e)for(const P of v.data)c.add(P.year);if(c.size===0)return;const l=[...c].sort((v,P)=>v-P),d=new Map((t==null?void 0:t.data.map(v=>[v.year,v.capacityMw]))??[]),o=new Map((s==null?void 0:s.data.map(v=>[v.year,v.capacityMw]))??[]),u=new Map((a==null?void 0:a.data.map(v=>[v.year,v.capacityMw]))??[]),h=l.map(v=>({year:v,solar:d.get(v)??0,wind:o.get(v)??0,coal:u.get(v)??0})),p=this.content.clientWidth-16||200,f=100,y={top:4,right:8,bottom:16,left:8},b=p-y.left-y.right,g=f-y.top-y.bottom;if(b<=0)return;const w=St().keys(["solar","wind"]).order(kt).offset(Et)(h),S=oe().domain([l[0],l[l.length-1]]).range([0,b]),k=he(w,v=>he(v,P=>P[1]))??0,z=he(h,v=>v.coal)??0,I=Math.max(k,z)*1.1,_=oe().domain([0,I]).range([g,0]),F=fe(i).append("svg").attr("width",p).attr("height",f).attr("viewBox",`0 0 ${p} ${f}`).style("display","block").append("g").attr("transform",`translate(${y.left},${y.top})`),U=O("--yellow"),H=O("--semantic-info"),B=O("--red"),ee=ge().x(v=>S(v.data.year)).y0(v=>_(v[0])).y1(v=>_(v[1])).curve(Y),te=[U,H];w.forEach((v,P)=>{F.append("path").datum(v).attr("d",ee).attr("fill",te[P]).attr("opacity",.6)});const ie=ge().x(v=>S(v.year)).y0(g).y1(v=>_(v.coal)).curve(Y);F.append("path").datum(h).attr("d",ie).attr("fill",B).attr("opacity",.2);const C=De().x(v=>S(v.year)).y(v=>_(v.coal)).curve(Y);F.append("path").datum(h).attr("d",C).attr("fill","none").attr("stroke",B).attr("stroke-width",1.5).attr("opacity",.8);const W=l[0],se=l[l.length-1];F.append("text").attr("x",S(W)).attr("y",g+12).attr("text-anchor","start").attr("fill",O("--text-dim")).attr("font-size","9px").text(String(W)),F.append("text").attr("x",S(se)).attr("y",g+12).attr("text-anchor","end").attr("fill",O("--text-dim")).attr("font-size","9px").text(String(se));const pe=document.createElement("div");pe.className="capacity-legend";const Xe=[{color:U,label:"Solar"},{color:H,label:"Wind"},{color:B,label:"Coal"}];for(const v of Xe){const P=document.createElement("div");P.className="capacity-legend-item";const ue=document.createElement("span");ue.className="capacity-legend-dot",ue.style.backgroundColor=v.color;const Se=document.createElement("span");Se.textContent=v.label,P.appendChild(ue),P.appendChild(Se),pe.appendChild(P)}i.appendChild(pe)}destroy(){super.destroy()}}const ys=Object.freeze(Object.defineProperty({__proto__:null,RenewableEnergyPanel:Ai},Symbol.toStringTag,{value:"Module"}));export{cs as C,rs as E,us as F,ms as H,os as O,ds as P,ys as R,ps as S,ls as a,hs as b,fs as c,gs as d};

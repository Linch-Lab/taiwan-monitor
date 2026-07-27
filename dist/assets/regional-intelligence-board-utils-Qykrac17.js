import{e as r}from"./dom-utils-B8MVJOEB.js";const A=[{id:"mena",label:"Middle East & North Africa"},{id:"east-asia",label:"East Asia & Pacific"},{id:"europe",label:"Europe & Central Asia"},{id:"north-america",label:"North America"},{id:"south-asia",label:"South Asia"},{id:"latam",label:"Latin America & Caribbean"},{id:"sub-saharan-africa",label:"Sub-Saharan Africa"}],j="mena";function R(t,e){return t===e}function D(t){var e,o;return[g(t.narrative),f(t),y(t.balance),b(t.actors),$(t.scenarioSets),z(t.transmissionPaths),w(((e=t.triggers)==null?void 0:e.active)??[],((o=t.narrative)==null?void 0:o.watchItems)??[]),k(t)].join("")}function d(t,e,o=""){return`
    <div class="rib-section" style="margin-bottom:12px;padding:10px 12px;border:1px solid var(--border);border-radius:4px;background:rgba(255,255,255,0.02);${o}">
      <div class="rib-section-title" style="font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--text-dim);margin-bottom:8px">${r(t)}</div>
      ${e}
    </div>
  `}function p(t,e){const o=((e==null?void 0:e.text)??"").trim();if(!o)return"";const i=((e==null?void 0:e.evidenceIds)??[]).filter(a=>a.length>0),n=i.length>0?`<span style="font-size:10px;color:var(--text-dim);margin-left:6px">[${r(i.slice(0,4).join(", "))}]</span>`:"";return`
    <div class="rib-narrative-row" style="margin-bottom:8px">
      <div style="font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--text-dim);margin-bottom:2px">${r(t)}${n}</div>
      <div style="font-size:12px;line-height:1.5">${r(o)}</div>
    </div>
  `}function g(t){if(!t)return"";const e=[p("Situation",t.situation),p("Balance Assessment",t.balanceAssessment),p("Outlook — 24h",t.outlook24h),p("Outlook — 7d",t.outlook7d),p("Outlook — 30d",t.outlook30d)].join("");return e?d("Narrative",e):""}function f(t){const e=t.regime,o=(e==null?void 0:e.label)??"unknown",i=(e==null?void 0:e.previousLabel)??"",n=(e==null?void 0:e.transitionDriver)??"",s=i&&i!==o?`<div style="font-size:11px;color:var(--text-dim);margin-top:2px">Was: ${r(i)}${n?` · ${r(n)}`:""}</div>`:"",l=`
    <div class="rib-regime-label" style="font-size:15px;font-weight:600;text-transform:capitalize">${r(o.replace(/_/g," "))}</div>
    ${s}
  `;return d("Regime",l)}function v(t,e,o){const i=Math.max(0,Math.min(1,e))*100;return`
    <div style="display:grid;grid-template-columns:110px 40px 1fr;gap:8px;align-items:center;margin-bottom:4px">
      <div style="font-size:11px;color:var(--text-dim)">${r(t)}</div>
      <div style="font-size:11px;font-variant-numeric:tabular-nums">${e.toFixed(2)}</div>
      <div style="height:6px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden">
        <div style="height:100%;width:${i.toFixed(1)}%;background:var(${o})"></div>
      </div>
    </div>
  `}function y(t){if(!t)return d("Balance Vector",'<div style="font-size:11px;color:var(--text-dim)">Unavailable</div>');const e=[v("Coercive",t.coercivePressure,"--danger"),v("Fragility",t.domesticFragility,"--danger"),v("Capital",t.capitalStress,"--danger"),v("Energy Vuln",t.energyVulnerability,"--danger")].join(""),o=[v("Alliance",t.allianceCohesion,"--accent"),v("Maritime",t.maritimeAccess,"--accent"),v("Energy Lev",t.energyLeverage,"--accent")].join(""),i=t.netBalance,n=Math.max(-1,Math.min(1,i)),a=Math.abs(n)*50,s=n>=0?"right":"left",l=n>=0?"var(--accent)":"var(--danger)",x=`
    <div style="display:grid;grid-template-columns:110px 40px 1fr;gap:8px;align-items:center;margin-top:6px;padding-top:6px;border-top:1px dashed rgba(255,255,255,0.1)">
      <div style="font-size:11px;color:var(--text-dim);font-weight:600">Net Balance</div>
      <div style="font-size:11px;font-variant-numeric:tabular-nums;font-weight:600">${i.toFixed(2)}</div>
      <div style="position:relative;height:6px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden">
        <div style="position:absolute;left:50%;top:0;bottom:0;width:1px;background:rgba(255,255,255,0.3)"></div>
        <div style="position:absolute;${s}:50%;top:0;bottom:0;width:${a.toFixed(1)}%;background:${l}"></div>
      </div>
    </div>
  `,c=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
      <div>
        <div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;margin-bottom:4px">Pressures</div>
        ${e}
      </div>
      <div>
        <div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;margin-bottom:4px">Buffers</div>
        ${o}
      </div>
    </div>
    ${x}
  `;return d("Balance Vector",c)}function b(t){if(!t||t.length===0)return d("Actors",'<div style="font-size:11px;color:var(--text-dim)">No actor data</div>');const o=[...t].sort((i,n)=>(n.leverageScore??0)-(i.leverageScore??0)).slice(0,5).map(i=>{const n=i.delta>0?`+${i.delta.toFixed(2)}`:i.delta.toFixed(2),a=i.delta>0?"var(--danger)":i.delta<0?"var(--accent)":"var(--text-dim)",s=(i.leverageDomains??[]).slice(0,3).join(", ");return`
      <div style="display:grid;grid-template-columns:1fr auto auto;gap:8px;align-items:center;padding:4px 0;border-bottom:1px dashed rgba(255,255,255,0.06)">
        <div>
          <div style="font-size:12px;font-weight:500">${r(i.name||i.actorId)}</div>
          <div style="font-size:10px;color:var(--text-dim);text-transform:capitalize">${r(i.role||"actor")}${s?` · ${r(s)}`:""}</div>
        </div>
        <div style="font-size:11px;font-variant-numeric:tabular-nums">${(i.leverageScore??0).toFixed(2)}</div>
        <div style="font-size:10px;color:${a};font-variant-numeric:tabular-nums;min-width:38px;text-align:right">${r(n)}</div>
      </div>
    `}).join("");return d("Actors",o)}function $(t){if(!t||t.length===0)return d("Scenarios",'<div style="font-size:11px;color:var(--text-dim)">No scenario data</div>');const e={"24h":0,"7d":1,"30d":2},o=[...t].sort((s,l)=>(e[s.horizon]??99)-(e[l.horizon]??99)),i={base:"var(--text-dim)",escalation:"var(--danger)",containment:"var(--accent)",fragmentation:"var(--warning, #e0a020)"},n=o.map(s=>{const x=[...s.lanes??[]].sort((c,m)=>m.probability-c.probability).map(c=>{const m=Math.round((c.probability??0)*100),u=i[c.name]??"var(--text-dim)";return`
        <div style="margin-bottom:3px">
          <div style="display:flex;justify-content:space-between;font-size:11px;text-transform:capitalize">
            <span>${r(c.name)}</span>
            <span style="font-variant-numeric:tabular-nums">${m}%</span>
          </div>
          <div style="height:4px;background:rgba(255,255,255,0.06);border-radius:2px;overflow:hidden">
            <div style="height:100%;width:${m}%;background:${u}"></div>
          </div>
        </div>
      `}).join("");return`
      <div>
        <div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;margin-bottom:6px">${r(s.horizon)}</div>
        ${x}
      </div>
    `}).join(""),a=`<div style="display:grid;grid-template-columns:repeat(${o.length},1fr);gap:12px">${n}</div>`;return d("Scenarios",a)}function h(t){switch((t??"").toLowerCase()){case"critical":return"var(--danger)";case"high":return"var(--danger)";case"medium":return"var(--warning, #e0a020)";case"low":return"var(--text-dim)";default:return"var(--text-dim)"}}function z(t){if(!t||t.length===0)return d("Transmission Paths",'<div style="font-size:11px;color:var(--text-dim)">No active transmissions</div>');const o=[...t].sort((i,n)=>(n.confidence??0)-(i.confidence??0)).slice(0,5).map(i=>{const n=h(i.severity),a=i.corridorId?` via ${r(i.corridorId)}`:"",s=Math.round((i.confidence??0)*100),l=i.latencyHours>0?` · ${i.latencyHours}h`:"";return`
      <div style="padding:4px 0;border-bottom:1px dashed rgba(255,255,255,0.06);display:grid;grid-template-columns:1fr auto;gap:8px;align-items:center">
        <div>
          <div style="font-size:11px;font-weight:500">${r(i.mechanism||"mechanism")}${a}</div>
          <div style="font-size:10px;color:var(--text-dim)">${r(i.start||"")} → ${r(i.end||"")}${l}</div>
        </div>
        <div style="font-size:10px;font-variant-numeric:tabular-nums;color:${n};text-transform:uppercase">${r(i.severity||"unspec")} · ${s}%</div>
      </div>
    `}).join("");return d("Transmission Paths",o)}function w(t,e){const o=(t??[]).map(a=>`
    <div style="padding:3px 0;font-size:11px">
      <span style="color:var(--danger);font-weight:600">●</span>
      ${r(a.id)}${a.description?` — <span style="color:var(--text-dim)">${r(a.description)}</span>`:""}
    </div>
  `).join(""),i=(e??[]).filter(a=>(a.text??"").trim().length>0).map(a=>`
    <div style="padding:3px 0;font-size:11px">
      <span style="color:var(--text-dim)">▸</span>
      ${r(a.text)}
    </div>
  `).join("");if(!o&&!i)return d("Watchlist",'<div style="font-size:11px;color:var(--text-dim)">No active triggers or watch items</div>');const n=[];return o&&n.push(`<div style="margin-bottom:6px"><div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;margin-bottom:2px">Active Triggers</div>${o}</div>`),i&&n.push(`<div><div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;margin-bottom:2px">Watch Items</div>${i}</div>`),d("Watchlist",n.join(""))}function k(t){const e=t.meta;if(!e)return"";const o=Math.round((e.snapshotConfidence??0)*100),i=t.generatedAt?`${new Date(t.generatedAt).toISOString().replace("T"," ").slice(0,16)}Z`:"—",n=e.narrativeProvider?`${r(e.narrativeProvider)}/${r(e.narrativeModel||"unknown")}`:"no narrative";return`
    <div style="display:flex;flex-wrap:wrap;gap:12px;padding:6px 2px 0;font-size:10px;color:var(--text-dim)">
      <span>generated ${r(i)}</span>
      <span>confidence ${o}%</span>
      <span>scoring v${r(e.scoringVersion||"")}</span>
      <span>geo v${r(e.geographyVersion||"")}</span>
      <span>narrative: ${n}</span>
    </div>
  `}function S(t){return t?new Date(t).toISOString().replace("T"," ").slice(0,16)+"Z":"—"}function I(t){if(!t||t.length===0)return d("Regime History",'<div style="font-size:11px;color:var(--text-dim)">No regime transitions recorded yet</div>');const e=t.slice(0,20).map(o=>{const i=o.previousLabel?r(o.previousLabel.replace(/_/g," ")):"none",n=r((o.label??"").replace(/_/g," ")),a=o.transitionDriver?` · ${r(o.transitionDriver)}`:"",s=S(o.transitionedAt);return`
      <div style="display:grid;grid-template-columns:130px 1fr;gap:8px;padding:3px 0;border-bottom:1px dashed rgba(255,255,255,0.06)">
        <div style="font-size:10px;color:var(--text-dim);font-variant-numeric:tabular-nums">${r(s)}</div>
        <div style="font-size:11px"><span style="color:var(--text-dim)">${i}</span> → <span style="font-weight:500;text-transform:capitalize">${n}</span>${a}</div>
      </div>
    `}).join("");return d("Regime History",e)}function N(t){if(!t||!t.situationRecap)return d("Weekly Brief",'<div style="font-size:11px;color:var(--text-dim)">No weekly brief available yet</div>');const e=t.periodStart?new Date(t.periodStart).toISOString().split("T")[0]??"?":"?",o=t.periodEnd?new Date(t.periodEnd).toISOString().split("T")[0]??"?":"?",i=t.provider?`${r(t.provider)}/${r(t.model||"?")}`:"",n=(t.keyDevelopments??[]).filter(s=>s.length>0).slice(0,5).map(s=>`<div style="padding:2px 0;font-size:11px"><span style="color:var(--text-dim)">▸</span> ${r(s)}</div>`).join(""),a=`
    <div style="font-size:10px;color:var(--text-dim);margin-bottom:6px">${r(e)} — ${r(o)}${i?` · ${i}`:""}</div>
    ${t.situationRecap?`<div style="font-size:12px;line-height:1.5;margin-bottom:8px">${r(t.situationRecap)}</div>`:""}
    ${t.regimeTrajectory?`
      <div style="margin-bottom:6px">
        <div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;margin-bottom:2px">Regime Trajectory</div>
        <div style="font-size:11px;line-height:1.4">${r(t.regimeTrajectory)}</div>
      </div>
    `:""}
    ${n?`
      <div style="margin-bottom:6px">
        <div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;margin-bottom:2px">Key Developments</div>
        ${n}
      </div>
    `:""}
    ${t.riskOutlook?`
      <div>
        <div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;margin-bottom:2px">Risk Outlook</div>
        <div style="font-size:11px;line-height:1.4">${r(t.riskOutlook)}</div>
      </div>
    `:""}
  `;return d("Weekly Brief",a)}export{A as B,j as D,I as a,D as b,N as c,R as i};

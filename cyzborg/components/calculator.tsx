"use client";
import { useMemo, useState, type ReactNode } from "react";
import SiteHeader from "@/components/site-header";
import { ACTIVITY, CM_PER_IN, LB_PER_KG, calculate, floorFor, macros, type ActivityId, type GoalId, type Sex, type Split } from "@/lib/nutrition";

type Units = "imperial" | "metric";

function Seg<T extends string>({label,value,options,onChange}:{label:string;value:T;options:readonly (readonly [T,string])[];onChange:(v:T)=>void}){
  return <fieldset className="calc-seg"><legend>{label}</legend><div>{options.map(([v,l])=><button type="button" key={v} aria-pressed={value===v} onClick={()=>onChange(v)}>{l}</button>)}</div></fieldset>;
}
function Field({label,hint,children}:{label:string;hint?:string;children:ReactNode}){
  return <label className="calc-field"><span>{label}{hint&&<small>{hint}</small>}</span>{children}</label>;
}
const num=(s:string)=>{const n=parseFloat(s);return Number.isFinite(n)?n:NaN;};
const fmt=(n:number)=>n.toLocaleString("en-US");

export default function CalculatorPage(){
  const [units,setUnits]=useState<Units>("imperial");
  const [sex,setSex]=useState<Sex>("male");
  const [age,setAge]=useState("30");
  const [ft,setFt]=useState("5"),[inch,setInch]=useState("10"),[lb,setLb]=useState("185");
  const [cm,setCm]=useState("178"),[kg,setKg]=useState("84");
  const [bodyFat,setBodyFat]=useState("");
  const [activity,setActivity]=useState<ActivityId>("moderate");
  const [goal,setGoal]=useState<GoalId>("cut");
  const [split,setSplit]=useState<Split>("balanced");

  function switchUnits(u:Units){
    if(u===units)return;
    if(u==="metric"){const c=(num(ft)*12+num(inch))*CM_PER_IN;const k=num(lb)/LB_PER_KG;if(c)setCm(String(Math.round(c)));if(k)setKg(String(Math.round(k)));}
    else{const i=num(cm)/CM_PER_IN;const l=num(kg)*LB_PER_KG;if(i){setFt(String(Math.floor(i/12)));setInch(String(Math.round(i%12)));}if(l)setLb(String(Math.round(l)));}
    setUnits(u);
  }

  const parsed=useMemo(()=>{
    const a=num(age);
    const h=units==="imperial"?(num(ft)*12+(num(inch)||0))*CM_PER_IN:num(cm);
    const w=units==="imperial"?num(lb)/LB_PER_KG:num(kg);
    const bf=bodyFat.trim()?num(bodyFat):undefined;
    const errors:string[]=[];
    if(!(a>=18&&a<=80))errors.push("This calculator is for adults aged 18 to 80.");
    if(!(h>=120&&h<=230))errors.push("Enter a height between 4 ft (122 cm) and 7 ft 6 in (229 cm).");
    if(!(w>=35&&w<=300))errors.push("Enter a weight between 80 and 660 lb (35–300 kg).");
    if(bf!==undefined&&!(bf>=4&&bf<=60))errors.push("Body fat should be between 4% and 60%, or leave it blank.");
    return {a,h,w,bf,errors};
  },[age,ft,inch,lb,cm,kg,bodyFat,units]);

  const result=parsed.errors.length?null:calculate({sex,age:parsed.a,kg:parsed.w,cm:parsed.h,bodyFat:parsed.bf,activity});
  const target=result?.goals.find(g=>g.id===goal);
  const m=result&&target?macros(target.kcal,parsed.w,parsed.h,split):null;
  const kcalFrom=m?{p:m.protein*4,f:m.fat*9,c:m.carbs*4}:null;
  const total=kcalFrom?kcalFrom.p+kcalFrom.f+kcalFrom.c:1;
  const weight=(kgv:number)=>units==="imperial"?`${Math.round(kgv*LB_PER_KG)} lb`:`${Math.round(kgv)} kg`;

  return <main className="legal-page calc-page">
    <SiteHeader onHome={false} current="calculator"/>
    <div className="shell calc-shell">
      <header className="calc-intro">
        <h1>Calorie &amp; macro calculator</h1>
        <p>Estimate how many calories you burn in a day, then get a starting target to lose fat, maintain, or build muscle, with protein, fat, and carbs to match.</p>
        <p className="calc-private">Everything is calculated on your device. Nothing you enter is sent to us or saved.</p>
      </header>

      <div className="calc-grid">
        <form className="calc-form" onSubmit={e=>e.preventDefault()} aria-label="Your details">
          <Seg label="Units" value={units} options={[["imperial","Imperial (lb, ft)"],["metric","Metric (kg, cm)"]] as const} onChange={switchUnits}/>
          <Seg label="Sex" value={sex} options={[["male","Male"],["female","Female"]] as const} onChange={setSex}/>
          <p className="calc-note">The formulas use biological sex because it affects resting energy use.</p>
          <div className="calc-row">
            <Field label="Age" hint="18–80"><input inputMode="numeric" value={age} onChange={e=>setAge(e.target.value)} aria-describedby="calc-errors"/></Field>
            {units==="imperial"?<>
              <Field label="Height (ft)"><input inputMode="numeric" value={ft} onChange={e=>setFt(e.target.value)}/></Field>
              <Field label="(in)"><input inputMode="numeric" value={inch} onChange={e=>setInch(e.target.value)}/></Field>
            </>:<Field label="Height (cm)"><input inputMode="numeric" value={cm} onChange={e=>setCm(e.target.value)}/></Field>}
          </div>
          <div className="calc-row">
            <Field label={units==="imperial"?"Weight (lb)":"Weight (kg)"}><input inputMode="decimal" value={units==="imperial"?lb:kg} onChange={e=>units==="imperial"?setLb(e.target.value):setKg(e.target.value)}/></Field>
            <Field label="Body fat %" hint="Optional"><input inputMode="decimal" placeholder="e.g. 18" value={bodyFat} onChange={e=>setBodyFat(e.target.value)}/></Field>
          </div>
          <fieldset className="calc-activity"><legend>Activity level</legend>
            {ACTIVITY.map(a=><label key={a.id} className={activity===a.id?"is-on":""}><input type="radio" name="activity" value={a.id} checked={activity===a.id} onChange={()=>setActivity(a.id)}/><span><strong>{a.label}</strong><small>{a.detail}</small></span></label>)}
          </fieldset>
          {parsed.errors.length>0&&<ul className="calc-errors" id="calc-errors" role="alert">{parsed.errors.map(e=><li key={e}>{e}</li>)}</ul>}
        </form>

        <section className="calc-results" aria-live="polite" aria-label="Your results">
          {result&&target&&m&&kcalFrom?<>
            <div className="calc-hero">
              <p>Maintenance</p>
              <strong>{fmt(result.tdee)}<span> calories / day</span></strong>
              <small>Estimated calories you burn per day at this activity level ({parsed.bf!==undefined?"Katch-McArdle":"Mifflin-St Jeor"} formula).</small>
            </div>

            <h2>Choose a goal</h2>
            <div className="calc-goals" role="group" aria-label="Goal">
              {result.goals.map(g=><button type="button" key={g.id} aria-pressed={goal===g.id} onClick={()=>setGoal(g.id)}>
                <span>{g.label}</span><strong>{fmt(g.kcal)}</strong><small>{g.change===0?g.note:`${g.note} · ≈ ${Math.abs(g.weeklyLb).toFixed(1)} lb/week`}</small>
              </button>)}
            </div>
            {target.floored&&<p className="calc-warn">We raised this target to {fmt(floorFor(sex))} calories, a commonly cited minimum for adults without medical supervision.</p>}

            <h2>Daily macros for “{target.label}”</h2>
            <Seg label="Macro split" value={split} options={[["balanced","Balanced"],["lower-carb","Lower carb"],["higher-carb","Higher carb"]] as const} onChange={setSplit}/>
            <div className="calc-bar" aria-hidden="true"><span style={{flexBasis:`${kcalFrom.p/total*100}%`}} className="p"/><span style={{flexBasis:`${kcalFrom.f/total*100}%`}} className="f"/><span style={{flexBasis:`${kcalFrom.c/total*100}%`}} className="c"/></div>
            <dl className="calc-macros">
              <div className="p"><dt>Protein</dt><dd>{m.protein} g</dd><small>{Math.round(kcalFrom.p/total*100)}% · {fmt(kcalFrom.p)} cal</small></div>
              <div className="f"><dt>Fat</dt><dd>{m.fat} g</dd><small>{Math.round(kcalFrom.f/total*100)}% · {fmt(kcalFrom.f)} cal</small></div>
              <div className="c"><dt>Carbs</dt><dd>{m.carbs} g</dd><small>{Math.round(kcalFrom.c/total*100)}% · {fmt(kcalFrom.c)} cal</small></div>
            </dl>

            <div className="calc-stats">
              <div><span>BMR</span><strong>{fmt(result.bmr)}</strong><small>Calories at complete rest</small></div>
              <div><span>BMI</span><strong>{result.bmi.toFixed(1)}</strong><small>{result.bmiCategory}. BMI doesn’t account for muscle.</small></div>
              <div><span>Weight</span><strong>{weight(parsed.w)}</strong><small>{units==="imperial"?`${Math.round(parsed.w)} kg`:`${Math.round(parsed.w*LB_PER_KG)} lb`}</small></div>
            </div>

            <h2>Maintenance by activity level</h2>
            <table className="calc-table"><tbody>{result.byActivity.map(a=><tr key={a.id} className={a.id===activity?"is-on":""}><th scope="row">{a.label}<small>{a.detail}</small></th><td>{fmt(a.kcal)} cal</td></tr>)}</tbody></table>
          </>:<p className="calc-empty">Fill in your details to see your numbers.</p>}
        </section>
      </div>

      <section className="calc-how">
        <h2>How it works</h2>
        <p>Your basal metabolic rate (BMR) comes from the Mifflin-St Jeor equation, or from the Katch-McArdle equation if you enter body fat. It’s multiplied by an activity factor (1.2 to 1.9) to estimate total daily energy expenditure (TDEE). Goal targets adjust that number by 10–20%. Protein is set at about 0.8 g per pound of body weight, fat at a share of calories, and carbs fill the rest.</p>
        <p>These are starting estimates. Real needs vary by person. Track your weight for 2–3 weeks and adjust by 100–200 calories if it’s not moving the way you want.</p>
      </section>

      <aside className="calc-disclaimer">
        <strong>Not medical advice.</strong> This calculator gives general estimates for healthy adults. It isn’t a diagnosis, treatment, or a personalized nutrition plan. Talk to a doctor or registered dietitian before changing your diet, especially if you’re pregnant or breastfeeding, have a medical condition, take medication, or have a history of disordered eating. See our <a href="/terms">Terms of Use</a>.
      </aside>
    </div>
    <footer className="legal-footer"><div className="shell"><nav aria-label="Legal"><a href="/">Home</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms of Use</a></nav><p>© 2026 CYZBORG LLC · New Mexico, USA</p></div></footer>
  </main>;
}

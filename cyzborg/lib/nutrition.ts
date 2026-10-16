// Energy and macro estimates from published, widely used equations.
// Mifflin-St Jeor (1990) is the default; Katch-McArdle is used when body fat % is given.

export type Sex = "male" | "female";
export type Split = "balanced" | "lower-carb" | "higher-carb";

export const ACTIVITY = [
  { id: "sedentary", label: "Sedentary", detail: "Desk job, little or no exercise", factor: 1.2 },
  { id: "light", label: "Lightly active", detail: "Exercise 1–3 days a week", factor: 1.375 },
  { id: "moderate", label: "Moderately active", detail: "Exercise 3–5 days a week", factor: 1.55 },
  { id: "very", label: "Very active", detail: "Hard exercise 6–7 days a week", factor: 1.725 },
  { id: "extra", label: "Extremely active", detail: "Physical job or training twice a day", factor: 1.9 },
] as const;
export type ActivityId = typeof ACTIVITY[number]["id"];

export const GOALS = [
  { id: "cut", label: "Lose fat", note: "About 20% below maintenance", change: -0.2 },
  { id: "mild", label: "Lose slowly", note: "About 10% below maintenance", change: -0.1 },
  { id: "maintain", label: "Maintain", note: "Hold your current weight", change: 0 },
  { id: "gain", label: "Build muscle", note: "About 10% above maintenance", change: 0.1 },
] as const;
export type GoalId = typeof GOALS[number]["id"];

const FAT_SHARE: Record<Split, number> = { balanced: 0.25, "lower-carb": 0.4, "higher-carb": 0.2 };

export const LB_PER_KG = 2.20462;
export const CM_PER_IN = 2.54;

export type Input = { sex: Sex; age: number; kg: number; cm: number; bodyFat?: number; activity: ActivityId };

export function bmr({ sex, age, kg, cm, bodyFat }: Input) {
  if (bodyFat && bodyFat > 3 && bodyFat < 70) return 370 + 21.6 * kg * (1 - bodyFat / 100);
  return 10 * kg + 6.25 * cm - 5 * age + (sex === "male" ? 5 : -161);
}

export function bmi(kg: number, cm: number) { return kg / (cm / 100) ** 2; }

export function bmiCategory(v: number) {
  if (v < 18.5) return "Underweight";
  if (v < 25) return "Healthy range";
  if (v < 30) return "Overweight";
  return "Obese range";
}

// Commonly cited minimum intakes for adults eating without medical supervision.
export const floorFor = (sex: Sex) => (sex === "male" ? 1500 : 1200);

export function calculate(input: Input) {
  const base = bmr(input);
  const factor = ACTIVITY.find(a => a.id === input.activity)!.factor;
  const tdee = base * factor;
  const floor = floorFor(input.sex);
  const goals = GOALS.map(g => {
    const raw = tdee * (1 + g.change);
    const kcal = Math.max(raw, g.change < 0 ? floor : 0);
    const weeklyLb = ((kcal - tdee) * 7) / 3500;
    return { ...g, kcal: Math.round(kcal / 10) * 10, floored: raw < floor && g.change < 0, weeklyLb };
  });
  const byActivity = ACTIVITY.map(a => ({ ...a, kcal: Math.round((base * a.factor) / 10) * 10 }));
  const b = bmi(input.kg, input.cm);
  return { bmr: Math.round(base), tdee: Math.round(tdee / 10) * 10, goals, byActivity, bmi: b, bmiCategory: bmiCategory(b) };
}

// Protein: 1.8 g per kg of body weight (~0.8 g per lb). For BMI 30+, uses the weight at BMI 27
// so the target isn't inflated. Fat is a share of calories; carbs fill the rest.
export function macros(kcal: number, kg: number, cm: number, split: Split) {
  const refKg = bmi(kg, cm) >= 30 ? 27 * (cm / 100) ** 2 : kg;
  const protein = Math.round(refKg * 1.8);
  const fat = Math.round((kcal * FAT_SHARE[split]) / 9);
  const carbs = Math.max(0, Math.round((kcal - protein * 4 - fat * 9) / 4));
  return { protein, fat, carbs };
}

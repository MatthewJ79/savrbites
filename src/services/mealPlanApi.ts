import { MOCK_MEAL_PLAN } from '../data/mockMealPlan';
import type { DayPlan } from '../data/types';
import type { PreferencesState } from '../state/PreferencesContext';
import { buildMealPlanPrompt } from './buildMealPlanPrompt';

const MEAL_PLAN_API_URL = process.env['EXPO_PUBLIC_MEAL_PLAN_API_URL'] ?? '';

async function callMealPlanApi(prefs: PreferencesState): Promise<DayPlan[]> {
  const prompt = buildMealPlanPrompt(prefs);
  const response = await fetch(MEAL_PLAN_API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ preferences: prefs, prompt }),
  });

  if (!response.ok) {
    throw new Error(`Meal plan API error ${response.status}`);
  }

  const data = await response.json() as { plan?: DayPlan[] } | DayPlan[];
  const parsed = Array.isArray(data) ? data : data.plan;

  if (!parsed || parsed.length === 0) {
    throw new Error('Invalid response structure');
  }

  return parsed;
}

export type MealPlanResult = {
  plan: DayPlan[];
  source: 'ai' | 'mock';
};

export async function generateMealPlan(prefs: PreferencesState): Promise<MealPlanResult> {
  if (!MEAL_PLAN_API_URL) {
    return { plan: MOCK_MEAL_PLAN, source: 'mock' };
  }

  try {
    const plan = await callMealPlanApi(prefs);
    return { plan, source: 'ai' };
  } catch {
    return { plan: MOCK_MEAL_PLAN, source: 'mock' };
  }
}

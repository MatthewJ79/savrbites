import type { PreferencesState } from '../state/PreferencesContext';

function ratingEntries(ratings: Record<string, string | null>, value: string): string[] {
  return Object.entries(ratings)
    .filter(([, v]) => v === value)
    .map(([k]) => k);
}

export function buildMealPlanPrompt(prefs: PreferencesState): string {
  const loved = ratingEntries(prefs.ingredientRatings, 'love');
  const liked = ratingEntries(prefs.ingredientRatings, 'like');
  const disliked = ratingEntries(prefs.ingredientRatings, 'dislike');
  const allergyList = Object.entries(prefs.allergies)
    .filter(([, v]) => v)
    .map(([k]) => k);
  const lovedCuisines = ratingEntries(prefs.cuisineRatings, 'love');
  const likedCuisines = ratingEntries(prefs.cuisineRatings, 'like');
  const dislikedCuisines = ratingEntries(prefs.cuisineRatings, 'dislike');
  const enabledMeals = Object.entries(prefs.meals)
    .filter(([, v]) => v)
    .map(([k]) => k);

  const schema = `{
  "day": "Monday",
  "meals": [
    {
      "id": "mon-b",
      "type": "breakfast",
      "time": "8:00 am",
      "calories": 400,
      "costUsd": 3.50,
      "prepMinutes": 10,
      "title": "Meal Title",
      "description": "Short description",
      "ingredients": ["ingredient 1", "ingredient 2"],
      "instructions": ["Step 1", "Step 2"],
      "macros": { "kcal": 400, "protein": 20, "carbs": 40, "fat": 15 }
    }
  ]
}`;

  return `Create a ${prefs.numberOfDays}-day personalized meal plan as a JSON array.

USER PROFILE:
- Budget: $${prefs.budgetUsd.toFixed(2)} total
- People per meal: ${prefs.peoplePerMeal}
- Nutrition plan: ${prefs.nutritionPlan ?? 'No preference'}
- Cooking style: ${prefs.cookingStyle ?? 'No preference'}
- Skill level: ${prefs.skillLevel ?? 'No preference'}
- Meal types enabled: ${enabledMeals.join(', ')}

INGREDIENTS:
- Loved: ${loved.length ? loved.join(', ') : 'None specified'}
- Liked: ${liked.length ? liked.join(', ') : 'None specified'}
- Disliked/avoid: ${disliked.length ? disliked.join(', ') : 'None specified'}
- Allergies (MUST avoid): ${allergyList.length ? allergyList.join(', ') : 'None'}

CUISINE PREFERENCES:
- Loved cuisines: ${lovedCuisines.length ? lovedCuisines.join(', ') : 'None specified'}
- Liked cuisines: ${likedCuisines.length ? likedCuisines.join(', ') : 'None specified'}
- Disliked cuisines: ${dislikedCuisines.length ? dislikedCuisines.join(', ') : 'None specified'}

Return ONLY a valid JSON array of ${prefs.numberOfDays} day objects. No prose, no markdown, no code fences.
Each day object follows this schema exactly:
${schema}

Rules:
- Never include allergens the user listed
- Prefer loved ingredients and cuisines
- Keep total ingredient costs within budget
- Only include meal types that are enabled
- Each day must have a unique "day" field (Monday, Tuesday, etc.)
- Calories should reflect the user's nutrition plan
- Make recipes practical and realistic`;
}

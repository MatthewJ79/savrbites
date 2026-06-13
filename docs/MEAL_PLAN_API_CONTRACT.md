SAVRBITES MEAL PLAN API CONTRACT
================================

Purpose
-------
The mobile app must never call OpenAI, Anthropic, or any other model provider
directly. Provider keys stay on a backend service. The Expo app calls only the
backend URL configured by `EXPO_PUBLIC_MEAL_PLAN_API_URL`.

Client Behavior
---------------
- If `EXPO_PUBLIC_MEAL_PLAN_API_URL` is empty, the app uses the bundled mock meal
  plan from `src/data/mockMealPlan.ts`.
- If the URL is configured, the app sends a `POST` request with JSON.
- If the request fails, times out at the network layer, returns a non-2xx status,
  or returns invalid JSON, the app falls back to the bundled mock plan.

Endpoint
--------
`POST /meal-plan`

The path can be any deploy path as long as the full URL is configured in:

```txt
EXPO_PUBLIC_MEAL_PLAN_API_URL=https://your-api.example.com/meal-plan
```

Request Headers
---------------
```txt
content-type: application/json
```

Request Body
------------
```json
{
  "preferences": {
    "ingredientRatings": {
      "Salmon": "love",
      "Pork chops": "dislike"
    },
    "allergies": {
      "shellfish": true
    },
    "cuisineRatings": {
      "italian": "love"
    },
    "nutritionPlan": "Mediterranean",
    "cookingStyle": "Quick Fix",
    "skillLevel": "Beginner",
    "budgetUsd": 95,
    "peoplePerMeal": 2,
    "numberOfDays": 7,
    "meals": {
      "breakfast": true,
      "lunch": true,
      "dinner": true,
      "snack": false
    }
  },
  "prompt": "Create a 7-day personalized meal plan as a JSON array..."
}
```

Preference Values
-----------------
Ingredient and cuisine ratings are one of:

```txt
love | like | idk | dislike | null
```

Response Body
-------------
The backend may return either a wrapped plan:

```json
{
  "plan": [
    {
      "day": "Monday",
      "meals": [
        {
          "id": "mon-b",
          "type": "breakfast",
          "time": "8:00 am",
          "calories": 400,
          "costUsd": 3.5,
          "prepMinutes": 10,
          "title": "Meal Title",
          "description": "Short description",
          "ingredients": ["ingredient 1", "ingredient 2"],
          "instructions": ["Step 1", "Step 2"],
          "macros": {
            "kcal": 400,
            "protein": 20,
            "carbs": 40,
            "fat": 15
          }
        }
      ]
    }
  ]
}
```

Or a raw array with the same day objects:

```json
[
  {
    "day": "Monday",
    "meals": []
  }
]
```

Backend Requirements
--------------------
1. Validate the user preferences before sending anything to a model provider.
2. Keep provider API keys in backend-only environment variables.
3. Return only valid JSON matching the `DayPlan[]` shape.
4. Do not include allergens marked `true`.
5. Respect enabled meal types.
6. Keep generated cost estimates within the requested budget.
7. Return at least one day with at least one meal, otherwise the app will fall
   back to the mock plan.

Current Client Files
--------------------
- `src/services/mealPlanApi.ts` sends the request and handles fallback.
- `src/services/buildMealPlanPrompt.ts` builds the prompt text.
- `src/data/types.ts` defines `DayPlan`, `Meal`, `MealType`, and `Rating`.

import { createContext, useContext, useReducer } from 'react';
import type { PropsWithChildren } from 'react';

import type { Rating } from '../data/types';

type MealToggles = {
  breakfast: boolean;
  lunch: boolean;
  dinner: boolean;
  snack: boolean;
};

export type PreferencesState = {
  ingredientRatings: Record<string, Rating>;
  allergies: Record<string, boolean>;
  cuisineRatings: Record<string, Rating>;
  nutritionPlan: string | null;
  cookingStyle: string | null;
  skillLevel: string | null;
  budgetUsd: number;
  peoplePerMeal: number;
  numberOfDays: number;
  meals: MealToggles;
};

type Action =
  | { type: 'SET_RATING'; key: string; rating: Rating }
  | { type: 'TOGGLE_ALLERGY'; id: string }
  | { type: 'SET_CUISINE_RATING'; id: string; rating: Rating }
  | { type: 'SET_NUTRITION'; plan: string }
  | { type: 'SET_COOKING_STYLE'; style: string }
  | { type: 'SET_SKILL_LEVEL'; level: string }
  | { type: 'SET_BUDGET'; value: number }
  | { type: 'SET_PEOPLE'; value: number }
  | { type: 'SET_DAYS'; value: number }
  | { type: 'TOGGLE_MEAL'; meal: keyof MealToggles };

const initial: PreferencesState = {
  ingredientRatings: {},
  allergies: {},
  cuisineRatings: {},
  nutritionPlan: null,
  cookingStyle: null,
  skillLevel: null,
  budgetUsd: 95,
  peoplePerMeal: 1,
  numberOfDays: 7,
  meals: { breakfast: true, lunch: true, dinner: true, snack: false },
};

function reducer(state: PreferencesState, action: Action): PreferencesState {
  switch (action.type) {
    case 'SET_RATING':
      return { ...state, ingredientRatings: { ...state.ingredientRatings, [action.key]: action.rating } };
    case 'TOGGLE_ALLERGY':
      return { ...state, allergies: { ...state.allergies, [action.id]: !state.allergies[action.id] } };
    case 'SET_CUISINE_RATING':
      return { ...state, cuisineRatings: { ...state.cuisineRatings, [action.id]: action.rating } };
    case 'SET_NUTRITION':
      return { ...state, nutritionPlan: action.plan };
    case 'SET_COOKING_STYLE':
      return { ...state, cookingStyle: action.style };
    case 'SET_SKILL_LEVEL':
      return { ...state, skillLevel: action.level };
    case 'SET_BUDGET':
      return { ...state, budgetUsd: action.value };
    case 'SET_PEOPLE':
      return { ...state, peoplePerMeal: action.value };
    case 'SET_DAYS':
      return { ...state, numberOfDays: action.value };
    case 'TOGGLE_MEAL':
      return { ...state, meals: { ...state.meals, [action.meal]: !state.meals[action.meal] } };
    default:
      return state;
  }
}

type PreferencesCtx = {
  prefs: PreferencesState;
  setRating: (key: string, rating: Rating) => void;
  toggleAllergy: (id: string) => void;
  setCuisineRating: (id: string, rating: Rating) => void;
  setNutritionPlan: (plan: string) => void;
  setCookingStyle: (style: string) => void;
  setSkillLevel: (level: string) => void;
  setBudget: (value: number) => void;
  setPeoplePerMeal: (value: number) => void;
  setNumberOfDays: (value: number) => void;
  toggleMeal: (meal: keyof MealToggles) => void;
};

const PreferencesContext = createContext<PreferencesCtx>({} as PreferencesCtx);

export function PreferencesProvider({ children }: PropsWithChildren) {
  const [prefs, dispatch] = useReducer(reducer, initial);

  const ctx: PreferencesCtx = {
    prefs,
    setRating: (key, rating) => dispatch({ type: 'SET_RATING', key, rating }),
    toggleAllergy: (id) => dispatch({ type: 'TOGGLE_ALLERGY', id }),
    setCuisineRating: (id, rating) => dispatch({ type: 'SET_CUISINE_RATING', id, rating }),
    setNutritionPlan: (plan) => dispatch({ type: 'SET_NUTRITION', plan }),
    setCookingStyle: (style) => dispatch({ type: 'SET_COOKING_STYLE', style }),
    setSkillLevel: (level) => dispatch({ type: 'SET_SKILL_LEVEL', level }),
    setBudget: (value) => dispatch({ type: 'SET_BUDGET', value }),
    setPeoplePerMeal: (value) => dispatch({ type: 'SET_PEOPLE', value }),
    setNumberOfDays: (value) => dispatch({ type: 'SET_DAYS', value }),
    toggleMeal: (meal) => dispatch({ type: 'TOGGLE_MEAL', meal }),
  };

  return (
    <PreferencesContext.Provider value={ctx}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences(): PreferencesCtx {
  return useContext(PreferencesContext);
}

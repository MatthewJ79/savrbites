export type Rating = 'love' | 'like' | 'idk' | 'dislike' | null;

export type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

export type Macros = {
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
};

export type Meal = {
  id: string;
  type: MealType;
  time: string;
  calories: number;
  costUsd: number;
  prepMinutes: number;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  macros: Macros;
};

export type DayPlan = {
  day: string;
  meals: Meal[];
};

export type TasteCategory =
  | 'beefHome'
  | 'poultryHome'
  | 'porkHome'
  | 'lambHome'
  | 'seafoodHome'
  | 'exoticHome'
  | 'veggiesHome'
  | 'fruitHome'
  | 'dairyHome'
  | 'grainsHome'
  | 'beansHome'
  | 'nutsHome'
  | 'spicesHome'
  | 'oilsHome'
  | 'saucesHome';

export type CategoryMeta = {
  label: string;
  allLabel: string;
  items: string[];
};

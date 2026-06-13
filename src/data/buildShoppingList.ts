import type { DayPlan } from './types';

export type ShoppingItem = {
  id: string;
  section: string;
  label: string;
};

const PROTEIN_KEYWORDS = ['chicken', 'beef', 'steak', 'salmon', 'tuna', 'turkey', 'shrimp', 'pork', 'lamb', 'egg', 'fish', 'cod', 'tilapia', 'tofu', 'tempeh', 'prawn', 'lobster', 'crab', 'scallop', 'anchov', 'sardine'];
const DAIRY_KEYWORDS = ['milk', 'cheese', 'yogurt', 'butter', 'cream', 'feta', 'mozzarella', 'cheddar', 'parmesan', 'ricotta', 'cottage'];
const GRAIN_KEYWORDS = ['bread', 'pasta', 'rice', 'quinoa', 'oat', 'flour', 'tortilla', 'noodle', 'couscous', 'barley', 'grain', 'cereal', 'wrap', 'pita'];
const PRODUCE_KEYWORDS = ['avocado', 'tomato', 'spinach', 'lettuce', 'kale', 'broccoli', 'carrot', 'onion', 'garlic', 'pepper', 'zucchini', 'mushroom', 'cucumber', 'lemon', 'lime', 'apple', 'banana', 'berry', 'blueberry', 'strawberry', 'mango', 'orange', 'grape', 'potato', 'sweet potato', 'celery', 'asparagus', 'bean', 'pea', 'corn', 'herb', 'basil', 'cilantro', 'parsley', 'mint', 'ginger', 'jalapen'];

function classify(ingredient: string): string {
  const lower = ingredient.toLowerCase();
  if (PROTEIN_KEYWORDS.some((k) => lower.includes(k))) return 'Proteins';
  if (DAIRY_KEYWORDS.some((k) => lower.includes(k))) return 'Dairy';
  if (GRAIN_KEYWORDS.some((k) => lower.includes(k))) return 'Grains';
  if (PRODUCE_KEYWORDS.some((k) => lower.includes(k))) return 'Produce';
  return 'Pantry';
}

export function buildShoppingList(plan: DayPlan[]): ShoppingItem[] {
  const seen = new Set<string>();
  const items: ShoppingItem[] = [];

  plan.forEach((day) => {
    day.meals.forEach((meal) => {
      meal.ingredients.forEach((ing) => {
        const key = ing.toLowerCase().trim();
        if (!seen.has(key)) {
          seen.add(key);
          items.push({ id: key, section: classify(ing), label: ing });
        }
      });
    });
  });

  const ORDER = ['Proteins', 'Produce', 'Dairy', 'Grains', 'Pantry'];
  items.sort((a, b) => ORDER.indexOf(a.section) - ORDER.indexOf(b.section));
  return items;
}

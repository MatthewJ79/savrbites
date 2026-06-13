import type { DayPlan } from './types';

export const MOCK_MEAL_PLAN: DayPlan[] = [
  {
    day: 'Monday',
    meals: [
      {
        id: 'mon-b', type: 'breakfast', time: '8:00 am', calories: 450, costUsd: 4.50, prepMinutes: 15,
        title: 'Avocado Toast with Poached Egg',
        description: 'Whole grain bread, avocado, egg, cherry tomatoes',
        ingredients: ['2 slices whole-grain bread', '1 ripe avocado (100g)', '2 eggs', '6 cherry tomatoes, halved', '1 tsp olive oil', 'Salt and pepper', 'Optional chili flakes or lemon juice'],
        instructions: ['Toast bread until golden.', 'Mash avocado with salt, pepper, lemon juice.', 'Poach eggs 3-4 min until whites set.', 'Spread avocado on toast, top with eggs and tomatoes.', 'Drizzle olive oil, sprinkle chili flakes.'],
        macros: { kcal: 450, protein: 18, carbs: 42, fat: 24 },
      },
      {
        id: 'mon-l', type: 'lunch', time: '1:00 pm', calories: 520, costUsd: 4.50, prepMinutes: 15,
        title: 'Mediterranean Quinoa Bowl',
        description: 'Quinoa, cucumber, feta, olives, chickpeas',
        ingredients: ['1 cup cooked quinoa', '1/2 cucumber diced', '1/4 cup feta crumbled', '10 kalamata olives', '1/2 cup chickpeas', '2 tbsp lemon vinaigrette'],
        instructions: ['Combine quinoa and chickpeas in bowl.', 'Add cucumber, olives, feta.', 'Drizzle with vinaigrette.', 'Toss gently and serve.'],
        macros: { kcal: 520, protein: 22, carbs: 58, fat: 18 },
      },
      {
        id: 'mon-d', type: 'dinner', time: '8:00 pm', calories: 580, costUsd: 4.50, prepMinutes: 15,
        title: 'Herb-Crusted Salmon',
        description: 'Salmon fillet, roasted vegetables, quinoa',
        ingredients: ['6 oz salmon fillet', '1 tsp each: rosemary, thyme, garlic powder', '1 cup mixed roasted vegetables', '1/2 cup quinoa cooked'],
        instructions: ['Coat salmon with herbs and olive oil.', 'Bake at 400°F for 12-15 min.', 'Serve over quinoa with roasted vegetables.'],
        macros: { kcal: 580, protein: 42, carbs: 38, fat: 22 },
      },
    ],
  },
  {
    day: 'Tuesday',
    meals: [
      {
        id: 'tue-b', type: 'breakfast', time: '8:00 am', calories: 290, costUsd: 2.50, prepMinutes: 10,
        title: 'Veggie Omelet with Feta',
        description: 'Fluffy eggs loaded with fresh vegetables and tangy feta',
        ingredients: ['2 eggs', '1/4 cup spinach', '1/4 cup diced bell pepper', '2 tbsp feta cheese', '1 tsp olive oil'],
        instructions: ['Heat oil in pan over medium.', 'Sauté spinach and peppers 1-2 min.', 'Add beaten eggs; cook until set.', 'Sprinkle feta and fold omelet in half.'],
        macros: { kcal: 290, protein: 18, carbs: 6, fat: 21 },
      },
      {
        id: 'tue-l', type: 'lunch', time: '1:00 pm', calories: 310, costUsd: 2.75, prepMinutes: 10,
        title: 'Turkey Avocado Wrap',
        description: 'Lean turkey and creamy avocado in a whole-wheat tortilla',
        ingredients: ['1 whole-wheat tortilla', '3 oz sliced turkey', '1/4 avocado sliced', 'Romaine lettuce', '2 slices tomato', '1 tsp mustard'],
        instructions: ['Layer turkey, avocado, lettuce, tomato on tortilla.', 'Add mustard, roll tightly, slice in half.'],
        macros: { kcal: 310, protein: 24, carbs: 28, fat: 10 },
      },
      {
        id: 'tue-d', type: 'dinner', time: '8:00 pm', calories: 540, costUsd: 4.00, prepMinutes: 30,
        title: 'Turkey Meatballs w/ Whole-Wheat Pasta',
        description: 'Classic comfort food lightened up with lean protein',
        ingredients: ['1 lb ground turkey', '1/2 cup breadcrumbs', '1 egg', '2 cups whole-wheat pasta', '1 cup marinara sauce', '2 tbsp parmesan'],
        instructions: ['Mix turkey, breadcrumbs, egg; form meatballs.', 'Bake at 375°F for 20 min.', 'Cook pasta per package directions.', 'Serve meatballs over pasta with marinara.'],
        macros: { kcal: 540, protein: 38, carbs: 52, fat: 16 },
      },
    ],
  },
  {
    day: 'Wednesday',
    meals: [
      {
        id: 'wed-b', type: 'breakfast', time: '8:00 am', calories: 320, costUsd: 1.50, prepMinutes: 7,
        title: 'Oatmeal with Banana & Cinnamon',
        description: 'Creamy oats topped with fruit and spice',
        ingredients: ['1/2 cup oats', '1 cup milk or water', '1 banana sliced', '1 tsp honey', '1/4 tsp cinnamon'],
        instructions: ['Cook oats per package directions.', 'Top with sliced banana, honey, and cinnamon.'],
        macros: { kcal: 320, protein: 10, carbs: 55, fat: 7 },
      },
      {
        id: 'wed-l', type: 'lunch', time: '1:00 pm', calories: 450, costUsd: 3.50, prepMinutes: 10,
        title: 'Caprese Sandwich',
        description: 'Fresh mozzarella, tomato, and basil on artisan bread',
        ingredients: ['2 slices whole-grain bread', '2 oz fresh mozzarella', '2 slices tomato', 'Fresh basil leaves', '1 tsp olive oil', 'Balsamic glaze'],
        instructions: ['Layer mozzarella, tomato, and basil on bread.', 'Drizzle olive oil and balsamic, close sandwich.'],
        macros: { kcal: 450, protein: 20, carbs: 42, fat: 18 },
      },
      {
        id: 'wed-d', type: 'dinner', time: '5:00 pm', calories: 520, costUsd: 5.50, prepMinutes: 35,
        title: 'Lemon Garlic Chicken w Roasted Veggies',
        description: 'Juicy chicken breast baked with lemon, garlic, and herbs',
        ingredients: ['6 oz chicken breast', '2 cloves garlic minced', '1 lemon juiced', '1 tsp rosemary', '2 cups mixed vegetables', '1 tbsp olive oil'],
        instructions: ['Marinate chicken in lemon, garlic, oil, rosemary.', 'Toss vegetables with oil and season.', 'Roast everything at 425°F for 25-30 min.'],
        macros: { kcal: 520, protein: 44, carbs: 28, fat: 16 },
      },
    ],
  },
  {
    day: 'Thursday',
    meals: [
      {
        id: 'thu-b', type: 'breakfast', time: '8:00 am', calories: 300, costUsd: 2.50, prepMinutes: 8,
        title: 'Smoothie Bowl',
        description: 'Refreshing blend of fruit, granola and yogurt',
        ingredients: ['1 banana (120g)', '80g frozen berries', '120g Greek yogurt', '30g granola'],
        instructions: ['Blend banana, berries, and yogurt until smooth.', 'Pour into bowl, top with granola and extra fruit.'],
        macros: { kcal: 300, protein: 14, carbs: 49, fat: 5 },
      },
      {
        id: 'thu-l', type: 'lunch', time: '1:00 pm', calories: 430, costUsd: 3.50, prepMinutes: 10,
        title: 'Chicken Caesar Salad',
        description: 'Crisp romaine tossed in a creamy dressing',
        ingredients: ['100g grilled chicken breast', '2 cups romaine lettuce', '2 tbsp Caesar dressing', '1 tbsp parmesan', 'Croutons'],
        instructions: ['Grill chicken, slice.', 'Toss romaine with dressing and parmesan.', 'Top with chicken and croutons.'],
        macros: { kcal: 430, protein: 36, carbs: 18, fat: 22 },
      },
      {
        id: 'thu-d', type: 'dinner', time: '5:00 pm', calories: 520, costUsd: 7.50, prepMinutes: 20,
        title: 'Beef Stir-Fry',
        description: 'Savory, quick, full of beef and colorful vegetables',
        ingredients: ['5 oz sirloin thinly sliced', '2 cups mixed vegetables', '2 tbsp soy sauce', '1 tsp sesame oil', '1 cup cooked rice', '1 clove garlic', '1 tsp ginger'],
        instructions: ['Stir-fry beef in hot wok 3 min.', 'Add vegetables, garlic, ginger; cook 4 min.', 'Add soy sauce and sesame oil.', 'Serve over rice.'],
        macros: { kcal: 520, protein: 38, carbs: 44, fat: 16 },
      },
    ],
  },
  {
    day: 'Friday',
    meals: [
      {
        id: 'fri-b', type: 'breakfast', time: '8:00 am', calories: 340, costUsd: 1.50, prepMinutes: 5,
        title: 'Toast with Peanut Butter & Blueberries',
        description: 'Classic, fast, and energizing',
        ingredients: ['2 slices (60g) whole-grain bread', '2 tbsp (32g) peanut butter', '50g blueberries'],
        instructions: ['Toast bread, spread peanut butter, top with blueberries.'],
        macros: { kcal: 340, protein: 15, carbs: 36, fat: 16 },
      },
      {
        id: 'fri-l', type: 'lunch', time: '1:00 pm', calories: 420, costUsd: 3.50, prepMinutes: 10,
        title: 'Tuna Salad Wrap',
        description: 'Refreshing tuna salad, crisp lettuce and tomatoes in a whole wheat wrap',
        ingredients: ['1 (140g) can tuna, drained', '1 tbsp (15g) Greek yogurt', '1 tsp (5ml) relish', '1 whole-wheat tortilla', 'Lettuce', '2 slices tomato'],
        instructions: ['Mix tuna with yogurt and relish.', 'Layer on tortilla with lettuce and tomato.', 'Roll and slice.'],
        macros: { kcal: 420, protein: 32, carbs: 38, fat: 10 },
      },
      {
        id: 'fri-d', type: 'dinner', time: '5:00 pm', calories: 480, costUsd: 7.50, prepMinutes: 20,
        title: 'Shrimp Tacos',
        description: 'Light, zesty shrimp, slaw and avocado in fresh tortillas',
        ingredients: ['6 oz shrimp peeled', '2 corn tortillas', '1/4 cup slaw mix', '1/4 avocado sliced', '1 lime', 'Chili powder', '1 tbsp sour cream'],
        instructions: ['Season shrimp with chili powder, cook 3 min per side.', 'Warm tortillas.', 'Layer shrimp, slaw, avocado, sour cream.', 'Squeeze lime over tacos.'],
        macros: { kcal: 480, protein: 32, carbs: 42, fat: 18 },
      },
    ],
  },
  {
    day: 'Saturday',
    meals: [
      {
        id: 'sat-b', type: 'breakfast', time: '8:00 am', calories: 360, costUsd: 2.50, prepMinutes: 15,
        title: 'Whole-Grain Pancakes with Fruit',
        description: 'Whole grain fluffy pancakes topped with fresh fruit',
        ingredients: ['65g whole-grain pancake mix', '120ml milk', '80g strawberries', '1 tsp (5ml) maple syrup'],
        instructions: ['Mix batter and cook pancakes on a lightly oiled skillet.', 'Serve with sliced fruit and syrup.'],
        macros: { kcal: 360, protein: 12, carbs: 60, fat: 8 },
      },
      {
        id: 'sat-l', type: 'lunch', time: '1:00 pm', calories: 460, costUsd: 4.50, prepMinutes: 25,
        title: 'Veggie Buddha Bowl',
        description: 'Colorful and filling plant-based bowl with chickpeas, kale, roasted sweet potatoes, and tahini',
        ingredients: ['1/2 cup chickpeas roasted', '1 cup kale massaged', '1/2 sweet potato roasted', '1/4 cup cooked quinoa', '2 tbsp tahini dressing'],
        instructions: ['Roast sweet potato at 400°F for 20 min.', 'Roast chickpeas with spices.', 'Arrange all components in bowl.', 'Drizzle with tahini dressing.'],
        macros: { kcal: 460, protein: 16, carbs: 62, fat: 18 },
      },
      {
        id: 'sat-d', type: 'dinner', time: '8:00 pm', calories: 580, costUsd: 4.50, prepMinutes: 15,
        title: 'Chicken Parmesan',
        description: 'Classic Italian-style meal. Chicken cutlets topped with marinara and melted mozzarella over pasta',
        ingredients: ['6 oz chicken breast pounded', '1/4 cup breadcrumbs', '1/3 cup marinara sauce', '2 oz mozzarella shredded', '1 cup whole-wheat pasta'],
        instructions: ['Bread and pan-fry chicken until golden.', 'Top with marinara and mozzarella.', 'Bake at 400°F until cheese melts.', 'Serve over pasta.'],
        macros: { kcal: 580, protein: 46, carbs: 48, fat: 20 },
      },
    ],
  },
  {
    day: 'Sunday',
    meals: [
      {
        id: 'sun-b', type: 'breakfast', time: '8:00 am', calories: 380, costUsd: 2.50, prepMinutes: 10,
        title: 'Breakfast Burrito',
        description: 'Savory wrap filled with eggs, black beans, cheese and salsa',
        ingredients: ['1 tortilla (40g)', '2 eggs (100g)', '1/4 cup (40g) black beans', '2 tbsp (20g) cheddar cheese', '2 tbsp (30g) salsa'],
        instructions: ['Scramble eggs, add beans and cheese.', 'Roll into tortilla, top with salsa.'],
        macros: { kcal: 380, protein: 25, carbs: 25, fat: 19 },
      },
      {
        id: 'sun-l', type: 'lunch', time: '1:00 pm', calories: 440, costUsd: 3.50, prepMinutes: 10,
        title: 'Mediterranean Salad',
        description: 'Bright, fresh, nutrient-rich mix of spinach, olives, cucumber, tomatoes and grilled chicken',
        ingredients: ['60g spinach', '85g grilled chicken', '1/2 cucumber sliced', '8 cherry tomatoes', '10 kalamata olives', '2 tbsp lemon vinaigrette'],
        instructions: ['Combine all vegetables in bowl.', 'Top with chicken and olives.', 'Dress with lemon vinaigrette.'],
        macros: { kcal: 440, protein: 30, carbs: 22, fat: 24 },
      },
      {
        id: 'sun-d', type: 'dinner', time: '8:00 pm', calories: 580, costUsd: 4.50, prepMinutes: 15,
        title: 'Grilled Steak with Mashed Potatoes & Green Beans',
        description: 'Perfect satisfying Sunday dinner of grilled steak, green beans and fluffy mashed potatoes',
        ingredients: ['5 oz sirloin steak', '1 cup mashed potatoes', '1 cup green beans', '1 tsp butter', '1 clove garlic', 'Salt and pepper'],
        instructions: ['Season and grill steak to desired doneness.', 'Boil potatoes, mash with butter and garlic.', 'Steam green beans 5 min.', 'Rest steak 5 min before serving.'],
        macros: { kcal: 580, protein: 42, carbs: 40, fat: 22 },
      },
    ],
  },
];

export const PLAN_SUMMARY = {
  totalBudget: 95.0,
  prepTimePerDay: 45,
  caloriesPerDay: 2000,
  label: 'Balanced | Budget Friendly | 2,000 cal/day',
};

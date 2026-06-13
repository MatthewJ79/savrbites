import type { ScreenKey } from './screens';

export type Hotspot = {
  key: string;
  x: number;
  y: number;
  width: number;
  height: number;
  to: ScreenKey;
};

const days: ScreenKey[] = [
  'mealsMonday',
  'mealsTuesday',
  'mealsWednesday',
  'mealsThursday',
  'mealsFriday',
  'mealsSaturday',
  'mealsSunday',
];

const recipes: ScreenKey[] = [
  'recipesMonday',
  'recipesTuesday',
  'recipesWednesday',
  'recipesThursday',
  'recipesFriday',
  'recipesSaturday',
  'recipesSunday',
];

const dayXs = [12, 70, 129, 188, 248, 306, 366];

function bottomNav(): Hotspot[] {
  return [
    { key: 'bottom-home', x: 84, y: 908, width: 64, height: 48, to: 'home' },
    { key: 'bottom-preferences', x: 184, y: 908, width: 64, height: 48, to: 'home' },
    { key: 'bottom-meals', x: 284, y: 908, width: 82, height: 48, to: 'mealsMonday' },
  ];
}

function mealTabs(currentDay: number): Hotspot[] {
  return [
    { key: 'tab-meals', x: 18, y: 266, width: 132, height: 42, to: days[currentDay] },
    { key: 'tab-recipes', x: 150, y: 266, width: 130, height: 42, to: recipes[currentDay] },
    { key: 'tab-shopping', x: 281, y: 266, width: 132, height: 42, to: 'shoppingList' },
    ...dayXs.map((x, index) => ({
      key: `day-${index}`,
      x,
      y: 321,
      width: 50,
      height: 35,
      to: days[index],
    })),
    ...bottomNav(),
  ];
}

function recipeTabs(currentDay: number): Hotspot[] {
  return [
    { key: 'tab-meals', x: 18, y: 266, width: 132, height: 42, to: days[currentDay] },
    { key: 'tab-recipes', x: 150, y: 266, width: 130, height: 42, to: recipes[currentDay] },
    { key: 'tab-shopping', x: 281, y: 266, width: 132, height: 42, to: 'shoppingList' },
    ...dayXs.map((x, index) => ({
      key: `recipe-day-${index}`,
      x,
      y: 321,
      width: 50,
      height: 35,
      to: recipes[index],
    })),
    ...bottomNav(),
  ];
}

function meatCategoryNav(): Hotspot[] {
  return [
    { key: 'top-beef', x: 0, y: 95, width: 103, height: 112, to: 'beefHome' },
    { key: 'top-poultry', x: 104, y: 95, width: 116, height: 112, to: 'poultryHome' },
    { key: 'top-pork', x: 221, y: 95, width: 109, height: 112, to: 'porkHome' },
    { key: 'top-lamb', x: 331, y: 95, width: 109, height: 112, to: 'lambHome' },
  ];
}

function pantryCategoryNav(): Hotspot[] {
  return [
    { key: 'top-nuts', x: 22, y: 95, width: 94, height: 112, to: 'nutsHome' },
    { key: 'top-spices', x: 132, y: 95, width: 99, height: 112, to: 'spicesHome' },
    { key: 'top-oils', x: 246, y: 95, width: 99, height: 112, to: 'oilsHome' },
    { key: 'top-sauces', x: 346, y: 95, width: 94, height: 112, to: 'saucesHome' },
  ];
}

function ingredientHomeBase(screen: ScreenKey): Hotspot[] {
  const longScreen = ingredientLongTarget(screen);

  return [
    ...(screen === 'oilsHome' || screen === 'nutsHome' || screen === 'saucesHome' || screen === 'spicesHome'
      ? pantryCategoryNav()
      : meatCategoryNav()),
    { key: 'open-long-list', x: 0, y: 207, width: 440, height: 363, to: longScreen },
    { key: 'save-preferences', x: 62, y: 775, width: 321, height: 67, to: 'home' },
    ...bottomNav(),
  ];
}

function ingredientLongTarget(screen: ScreenKey): ScreenKey {
  const map: Partial<Record<ScreenKey, ScreenKey>> = {
    beefHome: 'beef',
    poultryHome: 'poultry',
    porkHome: 'pork',
    lambHome: 'lamb',
    beansHome: 'grains',
    dairyHome: 'dairy',
    seafoodHome: 'seafood',
    grainsHome: 'grains',
    exoticHome: 'game',
    fruitHome: 'fruit',
    oilsHome: 'oils',
    nutsHome: 'nuts',
    saucesHome: 'sauces',
    spicesHome: 'spices',
    veggiesHome: 'vegetables',
  };

  return map[screen] ?? 'home';
}

function longIngredientHotspots(): Hotspot[] {
  return [
    { key: 'back-to-home', x: 0, y: 0, width: 440, height: 90, to: 'home' },
    ...bottomNav(),
  ];
}

export function getHotspots(screen: ScreenKey): Hotspot[] {
  if (screen === 'signIn') {
    return [
      { key: 'sign-in', x: 119, y: 552, width: 189, height: 56, to: 'home' },
      { key: 'sign-up', x: 76, y: 682, width: 92, height: 36, to: 'signup' },
    ];
  }

  if (screen === 'signup') {
    return [
      { key: 'go-sign-in', x: 286, y: 83, width: 84, height: 38, to: 'signIn' },
      { key: 'complete-sign-up', x: 118, y: 638, width: 190, height: 58, to: 'home' },
      ...bottomNav(),
    ];
  }

  if (screen === 'home') {
    return [
      { key: 'tastes', x: 23, y: 212, width: 391, height: 87, to: 'beefHome' },
      { key: 'allergies', x: 23, y: 301, width: 391, height: 87, to: 'allergiesHome' },
      { key: 'cuisines', x: 23, y: 390, width: 391, height: 87, to: 'cuisinesHome' },
      { key: 'nutrition', x: 23, y: 479, width: 391, height: 87, to: 'nutritionHome' },
      { key: 'create-plan', x: 89, y: 835, width: 258, height: 44, to: 'mealsMonday' },
      ...bottomNav(),
    ];
  }

  if (screen === 'allergiesHome' || screen === 'cuisinesHome' || screen === 'nutritionHome') {
    return [
      { key: 'save-preferences', x: 62, y: 775, width: 321, height: 67, to: 'home' },
      ...bottomNav(),
    ];
  }

  if (
    screen === 'beefHome' ||
    screen === 'poultryHome' ||
    screen === 'porkHome' ||
    screen === 'lambHome' ||
    screen === 'beansHome' ||
    screen === 'dairyHome' ||
    screen === 'seafoodHome' ||
    screen === 'grainsHome' ||
    screen === 'exoticHome' ||
    screen === 'fruitHome' ||
    screen === 'oilsHome' ||
    screen === 'nutsHome' ||
    screen === 'saucesHome' ||
    screen === 'spicesHome' ||
    screen === 'veggiesHome'
  ) {
    return ingredientHomeBase(screen);
  }

  if (screen.startsWith('meals')) {
    return mealTabs(days.indexOf(screen));
  }

  if (screen.startsWith('recipes')) {
    return recipeTabs(recipes.indexOf(screen));
  }

  if (screen === 'shoppingList') {
    return [
      { key: 'tab-meals', x: 18, y: 266, width: 132, height: 42, to: 'mealsMonday' },
      { key: 'tab-recipes', x: 150, y: 266, width: 130, height: 42, to: 'recipesMonday' },
      { key: 'tab-shopping', x: 281, y: 266, width: 132, height: 42, to: 'shoppingList' },
      ...bottomNav(),
    ];
  }

  return longIngredientHotspots();
}

import type { ImageSourcePropType } from 'react-native';

export type ScreenKey =
  | 'signIn'
  | 'signup'
  | 'home'
  | 'allergiesHome'
  | 'cuisinesHome'
  | 'nutritionHome'
  | 'beefHome'
  | 'poultryHome'
  | 'porkHome'
  | 'lambHome'
  | 'beansHome'
  | 'dairyHome'
  | 'seafoodHome'
  | 'grainsHome'
  | 'exoticHome'
  | 'fruitHome'
  | 'oilsHome'
  | 'nutsHome'
  | 'saucesHome'
  | 'spicesHome'
  | 'veggiesHome'
  | 'beef'
  | 'poultry'
  | 'pork'
  | 'lamb'
  | 'dairy'
  | 'seafood'
  | 'grains'
  | 'game'
  | 'fruit'
  | 'oils'
  | 'nuts'
  | 'sauces'
  | 'spices'
  | 'vegetables'
  | 'mealsMonday'
  | 'mealsTuesday'
  | 'mealsWednesday'
  | 'mealsThursday'
  | 'mealsFriday'
  | 'mealsSaturday'
  | 'mealsSunday'
  | 'recipesMonday'
  | 'recipesTuesday'
  | 'recipesWednesday'
  | 'recipesThursday'
  | 'recipesFriday'
  | 'recipesSaturday'
  | 'recipesSunday'
  | 'shoppingList';

type PrototypeScreen = {
  title: string;
  source: ImageSourcePropType;
};

export const screens: Record<ScreenKey, PrototypeScreen> = {
  signIn: {
    title: 'Sign in',
    source: require('../../../assets/prototype/sign in.png'),
  },
  signup: {
    title: 'Sign up',
    source: require('../../../assets/prototype/signup.png'),
  },
  home: {
    title: 'Home',
    source: require('../../../assets/prototype/Home.png'),
  },
  allergiesHome: {
    title: 'Allergies',
    source: require('../../../assets/prototype/Allergies home.png'),
  },
  cuisinesHome: {
    title: 'Cuisines',
    source: require('../../../assets/prototype/Cuisines home.png'),
  },
  nutritionHome: {
    title: 'Nutrition',
    source: require('../../../assets/prototype/Nutrition home.png'),
  },
  beefHome: {
    title: 'Beef preferences',
    source: require('../../../assets/prototype/Beef home.png'),
  },
  poultryHome: {
    title: 'Poultry preferences',
    source: require('../../../assets/prototype/poultryhome.png'),
  },
  porkHome: {
    title: 'Pork preferences',
    source: require('../../../assets/prototype/pork home.png'),
  },
  lambHome: {
    title: 'Lamb preferences',
    source: require('../../../assets/prototype/Lamb home.png'),
  },
  beansHome: {
    title: 'Beans preferences',
    source: require('../../../assets/prototype/Beans home@!.png'),
  },
  dairyHome: {
    title: 'Dairy preferences',
    source: require('../../../assets/prototype/Dairy home.png'),
  },
  seafoodHome: {
    title: 'Seafood preferences',
    source: require('../../../assets/prototype/Seafood home.png'),
  },
  grainsHome: {
    title: 'Grains preferences',
    source: require('../../../assets/prototype/Grains home.png'),
  },
  exoticHome: {
    title: 'Exotic preferences',
    source: require('../../../assets/prototype/Exotic home.png'),
  },
  fruitHome: {
    title: 'Fruit preferences',
    source: require('../../../assets/prototype/Fruit home.png'),
  },
  oilsHome: {
    title: 'Oils preferences',
    source: require('../../../assets/prototype/Oils home.png'),
  },
  nutsHome: {
    title: 'Nuts preferences',
    source: require('../../../assets/prototype/nuts home.png'),
  },
  saucesHome: {
    title: 'Sauces preferences',
    source: require('../../../assets/prototype/Sauces home.png'),
  },
  spicesHome: {
    title: 'Spices preferences',
    source: require('../../../assets/prototype/Spices home.png'),
  },
  veggiesHome: {
    title: 'Vegetable preferences',
    source: require('../../../assets/prototype/Veggies home.png'),
  },
  beef: {
    title: 'All beef ingredients',
    source: require('../../../assets/prototype/Beef.png'),
  },
  poultry: {
    title: 'All poultry ingredients',
    source: require('../../../assets/prototype/Poultry.png'),
  },
  pork: {
    title: 'All pork ingredients',
    source: require('../../../assets/prototype/Pork.png'),
  },
  lamb: {
    title: 'All lamb ingredients',
    source: require('../../../assets/prototype/Lamb.png'),
  },
  dairy: {
    title: 'All dairy ingredients',
    source: require('../../../assets/prototype/Dairy.png'),
  },
  seafood: {
    title: 'All seafood ingredients',
    source: require('../../../assets/prototype/Seafood.png'),
  },
  grains: {
    title: 'All grain and cereal ingredients',
    source: require('../../../assets/prototype/Grains and Cereal.png'),
  },
  game: {
    title: 'All exotic ingredients',
    source: require('../../../assets/prototype/Game.png'),
  },
  fruit: {
    title: 'All fruit ingredients',
    source: require('../../../assets/prototype/Fruit.png'),
  },
  oils: {
    title: 'All oils',
    source: require('../../../assets/prototype/oils.png'),
  },
  nuts: {
    title: 'All nuts',
    source: require('../../../assets/prototype/Nuts.png'),
  },
  sauces: {
    title: 'All sauces',
    source: require('../../../assets/prototype/Sauces.png'),
  },
  spices: {
    title: 'All spices',
    source: require('../../../assets/prototype/Spices.png'),
  },
  vegetables: {
    title: 'All vegetables',
    source: require('../../../assets/prototype/Vegatables.png'),
  },
  mealsMonday: {
    title: 'Meals Monday',
    source: require('../../../assets/prototype/Meal Plan-meals-Monday.png'),
  },
  mealsTuesday: {
    title: 'Meals Tuesday',
    source: require('../../../assets/prototype/Meal Plan-meals-Tuesday.png'),
  },
  mealsWednesday: {
    title: 'Meals Wednesday',
    source: require('../../../assets/prototype/Meal Plan-meals-Wednesday.png'),
  },
  mealsThursday: {
    title: 'Meals Thursday',
    source: require('../../../assets/prototype/Meal Plan-meals-Thursday.png'),
  },
  mealsFriday: {
    title: 'Meals Friday',
    source: require('../../../assets/prototype/Meal Plan-meals-Friday.png'),
  },
  mealsSaturday: {
    title: 'Meals Saturday',
    source: require('../../../assets/prototype/Meal Plan-meals-Saturday.png'),
  },
  mealsSunday: {
    title: 'Meals Sunday',
    source: require('../../../assets/prototype/Meal Plan-meals-Sunday.png'),
  },
  recipesMonday: {
    title: 'Recipes Monday',
    source: require('../../../assets/prototype/Meal Plan-Recipes-Monday.png'),
  },
  recipesTuesday: {
    title: 'Recipes Tuesday',
    source: require('../../../assets/prototype/Meal Plan-Recipes-Tuesday.png'),
  },
  recipesWednesday: {
    title: 'Recipes Wednesday',
    source: require('../../../assets/prototype/Meal Plan-Recipes-Wednesday.png'),
  },
  recipesThursday: {
    title: 'Recipes Thursday',
    source: require('../../../assets/prototype/Meal Plan-Recipes-Thursday.png'),
  },
  recipesFriday: {
    title: 'Recipes Friday',
    source: require('../../../assets/prototype/Meal Plan-Recipes-Friday.png'),
  },
  recipesSaturday: {
    title: 'Recipes Saturday',
    source: require('../../../assets/prototype/Meal Plan-Recipes-Saturday.png'),
  },
  recipesSunday: {
    title: 'Recipes Sunday',
    source: require('../../../assets/prototype/Meal Plan-Recipes-Sunday.png'),
  },
  shoppingList: {
    title: 'Shopping list',
    source: require('../../../assets/prototype/Shopping list.png'),
  },
};

export const ingredientLongScreens: Partial<Record<ScreenKey, ScreenKey>> = {
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

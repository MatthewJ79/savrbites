import { useState } from 'react';
import { Platform, View, StyleSheet } from 'react-native';

import { AllergiesScreen } from '../features/preferences/screens/AllergiesScreen';
import { CuisinesScreen } from '../features/preferences/screens/CuisinesScreen';
import { NutritionScreen } from '../features/preferences/screens/NutritionScreen';
import { TastesScreen } from '../features/preferences/screens/TastesScreen';
import { SignInScreen } from '../features/auth/screens/SignInScreen';
import { SignUpScreen } from '../features/auth/screens/SignUpScreen';
import { HomeScreen } from '../features/home/screens/HomeScreen';
import { MealPlanScreen } from '../features/mealplan/screens/MealPlanScreen';
import { ShoppingListScreen } from '../features/mealplan/screens/ShoppingListScreen';
import type { ScreenKey } from '../features/prototype/screens';
import type { TasteCategory } from '../data/types';
import { MealPlanProvider } from '../state/MealPlanContext';
import { PreferencesProvider } from '../state/PreferencesContext';
import { NavigatorContext } from './useNavigator';

const DAY_MEAL_KEYS: ScreenKey[] = ['mealsMonday', 'mealsTuesday', 'mealsWednesday', 'mealsThursday', 'mealsFriday', 'mealsSaturday', 'mealsSunday'];
const DAY_RECIPE_KEYS: ScreenKey[] = ['recipesMonday', 'recipesTuesday', 'recipesWednesday', 'recipesThursday', 'recipesFriday', 'recipesSaturday', 'recipesSunday'];

const TASTE_SCREENS: ScreenKey[] = ['beefHome', 'poultryHome', 'porkHome', 'lambHome', 'seafoodHome', 'exoticHome', 'veggiesHome', 'fruitHome', 'dairyHome', 'grainsHome', 'beansHome', 'nutsHome', 'spicesHome', 'oilsHome', 'saucesHome'];
const SCREEN_KEYS: ScreenKey[] = [
  'signIn',
  'signup',
  'home',
  'allergiesHome',
  'cuisinesHome',
  'nutritionHome',
  'shoppingList',
  ...DAY_MEAL_KEYS,
  ...DAY_RECIPE_KEYS,
  ...TASTE_SCREENS,
];

function getInitialScreen(): ScreenKey {
  if (Platform.OS !== 'web' || typeof window === 'undefined') return 'signIn';

  const requested = new URLSearchParams(window.location.search).get('screen');
  return requested && SCREEN_KEYS.includes(requested as ScreenKey)
    ? (requested as ScreenKey)
    : 'signIn';
}

function renderScreen(screen: ScreenKey): React.ReactElement {
  if (screen === 'signIn') return <SignInScreen />;
  if (screen === 'signup') return <SignUpScreen />;
  if (screen === 'home') return <HomeScreen />;
  if (screen === 'allergiesHome') return <AllergiesScreen />;
  if (screen === 'cuisinesHome') return <CuisinesScreen />;
  if (screen === 'nutritionHome') return <NutritionScreen />;
  if (screen === 'shoppingList') return <ShoppingListScreen />;

  const mealDay = DAY_MEAL_KEYS.indexOf(screen);
  if (mealDay >= 0) return <MealPlanScreen day={mealDay} tab="meals" />;

  const recipeDay = DAY_RECIPE_KEYS.indexOf(screen);
  if (recipeDay >= 0) return <MealPlanScreen day={recipeDay} tab="recipes" />;

  if (TASTE_SCREENS.includes(screen)) {
    return <TastesScreen category={screen as TasteCategory} />;
  }

  return <SignInScreen />;
}

export function Navigator() {
  const [screen, setScreen] = useState<ScreenKey>(getInitialScreen);

  return (
    <NavigatorContext.Provider value={{ screen, navigate: setScreen }}>
      <PreferencesProvider>
        <MealPlanProvider>
          <View style={styles.container}>
            {renderScreen(screen)}
          </View>
        </MealPlanProvider>
      </PreferencesProvider>
    </NavigatorContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

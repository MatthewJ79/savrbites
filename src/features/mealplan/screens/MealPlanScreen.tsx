import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigator } from '../../../core/useNavigator';
import { BottomNavBar } from '../../../shared/components/BottomNavBar';
import { ContentTabBar } from '../../../shared/components/ContentTabBar';
import { DayPillSelector } from '../../../shared/components/DayPillSelector';
import { MealCard } from '../../../shared/components/MealCard';
import { PlanHeaderBanner } from '../../../shared/components/PlanHeaderBanner';
import { useMealPlan } from '../../../state/MealPlanContext';
import { colors } from '../../../theme';
import type { ScreenKey } from '../../../features/prototype/screens';

type Props = {
  day: number;
  tab: 'meals' | 'recipes';
};

const DAY_MEAL_KEYS: ScreenKey[] = ['mealsMonday', 'mealsTuesday', 'mealsWednesday', 'mealsThursday', 'mealsFriday', 'mealsSaturday', 'mealsSunday'];
const DAY_RECIPE_KEYS: ScreenKey[] = ['recipesMonday', 'recipesTuesday', 'recipesWednesday', 'recipesThursday', 'recipesFriday', 'recipesSaturday', 'recipesSunday'];

export function MealPlanScreen({ day, tab }: Props) {
  const { navigate } = useNavigator();
  const { plan } = useMealPlan();
  const dayPlan = plan[day] ?? plan[0];

  const handleDaySelect = (i: number) => {
    navigate(tab === 'meals' ? DAY_MEAL_KEYS[i] : DAY_RECIPE_KEYS[i]);
  };

  const handleTabSelect = (t: 'meals' | 'recipes' | 'shopping') => {
    if (t === 'shopping') { navigate('shoppingList'); return; }
    navigate(t === 'meals' ? DAY_MEAL_KEYS[day] : DAY_RECIPE_KEYS[day]);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <TouchableOpacity onPress={() => navigate('home')} style={styles.editBar} activeOpacity={0.75}>
        <Text style={styles.editLink}>{'← Edit Preferences'}</Text>
      </TouchableOpacity>
      <PlanHeaderBanner />
      <ContentTabBar activeTab={tab} onSelect={handleTabSelect} />
      <DayPillSelector activeIndex={day} onSelect={handleDaySelect} />

      <ScrollView contentContainerStyle={styles.content}>
        {tab === 'meals' ? (
          <>
            {dayPlan.meals.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </>
        ) : (
          <>
            {dayPlan.meals.map((meal) => (
              <View key={meal.id} style={styles.recipe}>
                <Text style={styles.recipeTitle}>{meal.title}</Text>
                <Text style={styles.recipeSection}>Ingredients:</Text>
                {meal.ingredients.map((ing, idx) => (
                  <Text key={idx} style={styles.ingredient}>{'  •  '}{ing}</Text>
                ))}
                <Text style={styles.macros}>
                  Macros: {meal.macros.kcal} kcal | {meal.macros.protein}g protein | {meal.macros.carbs}g carbs | {meal.macros.fat}g fat
                </Text>
                <Text style={styles.recipeSection}>Prep: {meal.prepMinutes} min</Text>
                <Text style={styles.recipeSection}>Steps:</Text>
                {meal.instructions.map((step, idx) => (
                  <Text key={idx} style={styles.step}>{idx + 1}. {step}</Text>
                ))}
                <View style={styles.recipeDivider} />
              </View>
            ))}
          </>
        )}
        <View style={{ height: 80 }} />
      </ScrollView>

      <BottomNavBar activeTab="meals" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.linen },
  editBar: {
    backgroundColor: colors.deepGreen,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  editLink: {
    fontFamily: 'serif',
    fontSize: 13,
    color: 'rgba(255,255,255,0.8)',
  },
  content: { paddingBottom: 20 },
  recipe: { paddingHorizontal: 18, paddingTop: 18 },
  recipeTitle: {
    fontFamily: 'serif',
    fontSize: 22,
    color: colors.black,
    fontWeight: '700',
    marginBottom: 8,
  },
  recipeSection: {
    fontFamily: 'serif',
    fontSize: 14,
    color: colors.deepGreen,
    fontWeight: '700',
    marginTop: 8,
    marginBottom: 4,
  },
  ingredient: {
    fontFamily: 'serif',
    fontSize: 14,
    color: colors.black,
    lineHeight: 20,
  },
  macros: {
    fontFamily: 'serif',
    fontSize: 13,
    color: colors.mutedText,
    marginTop: 6,
    fontStyle: 'italic',
  },
  step: {
    fontFamily: 'serif',
    fontSize: 14,
    color: colors.black,
    lineHeight: 22,
    paddingLeft: 4,
  },
  recipeDivider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginTop: 18,
  },
});

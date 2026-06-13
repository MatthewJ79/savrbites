import { StyleSheet, Text, View } from 'react-native';

import { PLAN_SUMMARY } from '../../data/mockMealPlan';
import { useMealPlan } from '../../state/MealPlanContext';
import { usePreferences } from '../../state/PreferencesContext';
import { colors, layout } from '../../theme';

export function PlanHeaderBanner() {
  const { prefs } = usePreferences();
  const { plan, source } = useMealPlan();

  const totalCal = plan[0]?.meals.reduce((s, m) => s + m.calories, 0) ?? PLAN_SUMMARY.caloriesPerDay;

  return (
    <View style={styles.banner}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>Your Personal Meal Plan</Text>
        <View style={[styles.badge, source === 'ai' ? styles.badgeAi : styles.badgeMock]}>
          <Text style={styles.badgeText}>{source === 'ai' ? '✦ AI Generated' : 'Sample Plan'}</Text>
        </View>
      </View>
      <Text style={styles.subtitle}>
        {prefs.nutritionPlan ?? 'Balanced'} | Budget Friendly | {totalCal.toLocaleString()} cal/day
      </Text>
      <View style={styles.tiles}>
        <View style={styles.tile}>
          <Text style={styles.tileLabel}>Total Budget</Text>
          <Text style={styles.tileValue}>${prefs.budgetUsd.toFixed(2)}</Text>
        </View>
        <View style={styles.tile}>
          <Text style={styles.tileLabel}>Prep Time</Text>
          <Text style={styles.tileValue}>
            <Text style={styles.tileValueLarge}>{PLAN_SUMMARY.prepTimePerDay} </Text>
            min/day
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    alignSelf: 'center',
    backgroundColor: colors.deepGreen,
    width: '100%',
    maxWidth: layout.figmaFrameWidth,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    gap: 4,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  title: {
    fontFamily: 'serif',
    fontSize: 20,
    color: colors.white,
    fontWeight: '700',
    flex: 1,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  badgeAi: {
    backgroundColor: colors.brandGreen,
  },
  badgeMock: {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  badgeText: {
    fontFamily: 'serif',
    fontSize: 11,
    color: colors.white,
    fontWeight: '600',
  },
  subtitle: {
    fontFamily: 'serif',
    fontSize: 13,
    color: 'rgba(255,255,255,0.8)',
  },
  tiles: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
  },
  tile: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    borderRadius: 8,
    padding: 12,
  },
  tileLabel: {
    fontFamily: 'serif',
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  tileValue: {
    fontFamily: 'serif',
    fontSize: 14,
    color: colors.white,
    marginTop: 2,
  },
  tileValueLarge: {
    fontSize: 26,
    fontWeight: '700',
  },
});

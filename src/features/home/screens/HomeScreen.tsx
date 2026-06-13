import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigator } from '../../../core/useNavigator';
import { BottomNavBar } from '../../../shared/components/BottomNavBar';
import { DropdownPicker } from '../../../shared/components/DropdownPicker';
import { LoadingOverlay } from '../../../shared/components/LoadingOverlay';
import { NumberInput } from '../../../shared/components/NumberInput';
import { PreferenceCard } from '../../../shared/components/PreferenceCard';
import { SavrBitesLogo } from '../../../shared/components/SavrBitesLogo';
import { ScreenFrame } from '../../../shared/components/ScreenFrame';
import { ToggleSwitch } from '../../../shared/components/ToggleSwitch';
import { generateMealPlan } from '../../../services/mealPlanApi';
import { useMealPlan } from '../../../state/MealPlanContext';
import { usePreferences } from '../../../state/PreferencesContext';
import { colors, typography } from '../../../theme';

const COOKING_STYLES = ['Chef Inspired', 'Quick Fix', 'Comfort Food', 'On the go', 'Just a Snack'];
const SKILL_LEVELS = ['Chef', 'Home Expert', 'Intermediate', 'Follow Recipe', 'Beginner'];

const PREF_CARDS = [
  { title: 'Tastes', subtitle: 'What are your favorite ingredients?', color: '#C58A68', buttonLabel: 'Select Tastes', screen: 'beefHome' as const },
  { title: 'Allergies', subtitle: 'Do you have any food allergies?', color: '#E8C8C8', buttonLabel: 'Set Allergies', screen: 'allergiesHome' as const },
  { title: 'Cuisines', subtitle: 'What are your favorite cuisines?', color: '#C8A882', buttonLabel: 'Select Cuisines', screen: 'cuisinesHome' as const },
  { title: 'Nutrition', subtitle: 'What is your nutrition plan?', color: '#A3BD9C', buttonLabel: 'Set Nutrition', screen: 'nutritionHome' as const },
];

export function HomeScreen() {
  const { navigate } = useNavigator();
  const { prefs, setCookingStyle, setSkillLevel, setBudget, setPeoplePerMeal, setNumberOfDays, toggleMeal } = usePreferences();
  const { setPlan } = useMealPlan();
  const [loading, setLoading] = useState(false);

  const handleCreatePlan = async () => {
    setLoading(true);
    try {
      const result = await generateMealPlan(prefs);
      setPlan(result.plan, result.source);
      navigate('mealsMonday');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenFrame>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.logoWrap}>
          <SavrBitesLogo />
        </View>

        <Text style={styles.subtitle}>Choose your Food Preferences</Text>

        {PREF_CARDS.map((card) => (
          <PreferenceCard
            key={card.title}
            title={card.title}
            subtitle={card.subtitle}
            color={card.color}
            buttonLabel={card.buttonLabel}
            onPress={() => navigate(card.screen)}
          />
        ))}

        <View style={styles.dropdownRow}>
          <View style={styles.dropdownWrap}>
            <DropdownPicker
              label="Cooking Style"
              options={COOKING_STYLES}
              value={prefs.cookingStyle}
              onSelect={setCookingStyle}
            />
          </View>
          <View style={styles.dropdownWrap}>
            <DropdownPicker
              label="Skill Level"
              options={SKILL_LEVELS}
              value={prefs.skillLevel}
              onSelect={setSkillLevel}
            />
          </View>
        </View>

        <View style={styles.numberRow}>
          <NumberInput label="Total Budget" value={prefs.budgetUsd} onChange={setBudget} />
          <NumberInput label="People per Meal" value={prefs.peoplePerMeal} onChange={setPeoplePerMeal} />
          <NumberInput label="Number of Days" value={prefs.numberOfDays} onChange={setNumberOfDays} />
        </View>

        <View style={styles.toggleGrid}>
          {(['breakfast', 'lunch', 'snack', 'dinner'] as const).map((meal) => (
            <View key={meal} style={styles.toggleRow}>
              <Text style={styles.toggleLabel}>
                {meal.charAt(0).toUpperCase() + meal.slice(1)}
              </Text>
              <ToggleSwitch value={prefs.meals[meal]} onChange={() => toggleMeal(meal)} />
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.createBtn} onPress={handleCreatePlan} activeOpacity={0.85}>
          <Text style={styles.createBtnText}>Create Meal Plan</Text>
        </TouchableOpacity>

        <View style={{ height: 80 }} />
      </ScrollView>

      {loading && <LoadingOverlay />}
      <BottomNavBar activeTab="home" />
    </ScreenFrame>
  );
}

const styles = StyleSheet.create({
  content: { paddingBottom: 20 },
  logoWrap: {
    height: 200,
    position: 'relative',
    alignItems: 'center',
  },
  subtitle: {
    fontFamily: typography.brandFamily,
    fontSize: 20,
    color: colors.black,
    textAlign: 'center',
    marginBottom: 12,
    marginTop: 4,
  },
  dropdownRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 12,
  },
  dropdownWrap: { flex: 1 },
  numberRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  toggleGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 24,
    gap: 12,
    justifyContent: 'space-between',
  },
  toggleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    gap: 10,
  },
  toggleLabel: {
    fontFamily: 'serif',
    fontSize: 16,
    color: colors.black,
    flex: 1,
  },
  createBtn: {
    marginHorizontal: 16,
    marginTop: 20,
    backgroundColor: colors.brandGreen,
    borderRadius: 10,
    paddingVertical: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.black,
  },
  createBtnText: {
    fontFamily: typography.brandFamily,
    fontSize: 22,
    color: colors.black,
  },
});

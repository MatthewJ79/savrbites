import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigator } from '../../../core/useNavigator';
import { NUTRITION_PLANS } from '../../../data/nutrition';
import { BottomNavBar } from '../../../shared/components/BottomNavBar';
import { InlineTextField } from '../../../shared/components/InlineTextField';
import { usePreferences } from '../../../state/PreferencesContext';
import { colors } from '../../../theme';

export function NutritionScreen() {
  const { navigate } = useNavigator();
  const { prefs, setNutritionPlan } = usePreferences();

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Nutrition</Text>
        <View style={styles.divider} />

        {NUTRITION_PLANS.map((plan) => {
          const active = prefs.nutritionPlan === plan;
          return (
            <TouchableOpacity
              key={plan}
              activeOpacity={0.75}
              onPress={() => setNutritionPlan(plan)}
              style={styles.row}
            >
              <View style={[styles.radio, active && styles.radioActive]}>
                {active && <View style={styles.radioDot} />}
              </View>
              <Text style={[styles.planLabel, active && styles.planLabelActive]}>
                {plan}
              </Text>
            </TouchableOpacity>
          );
        })}

        <View style={styles.inputs}>
          <Text style={styles.inputLabel}>Other Dislikes</Text>
          <View style={styles.inputRow}>
            <InlineTextField placeholder="write here" />
            <TouchableOpacity style={styles.submitBtn}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.inputLabel}>Other Likes</Text>
          <View style={styles.inputRow}>
            <InlineTextField placeholder="write here" />
            <TouchableOpacity style={styles.submitBtn}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.saveBtn} onPress={() => navigate('home')}>
          <Text style={styles.saveBtnText}>Save Preferences</Text>
        </TouchableOpacity>

      </ScrollView>
      <BottomNavBar activeTab="preferences" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.linen },
  content: { paddingBottom: 112 },
  title: {
    fontFamily: 'serif',
    fontSize: 48,
    color: colors.black,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: colors.black,
    marginHorizontal: 16,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 14,
    gap: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: colors.mutedText,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioActive: {
    borderColor: colors.deepGreen,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.deepGreen,
  },
  planLabel: {
    fontFamily: 'serif',
    fontSize: 24,
    color: colors.black,
  },
  planLabelActive: {
    color: colors.deepGreen,
    fontWeight: '600',
  },
  inputs: { paddingHorizontal: 16, paddingTop: 16, gap: 8 },
  inputLabel: { fontFamily: 'serif', fontSize: 14, color: colors.black },
  inputRow: { flexDirection: 'row', alignItems: 'center', gap: 8, height: 54 },
  submitBtn: {
    backgroundColor: colors.brandGreen,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.black,
  },
  submitText: { fontFamily: 'serif', fontSize: 14, color: colors.black },
  saveBtn: {
    margin: 16,
    marginTop: 24,
    backgroundColor: colors.brandGreen,
    borderRadius: 10,
    paddingVertical: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.black,
  },
  saveBtnText: { fontFamily: 'serif', fontSize: 22, color: colors.black },
});

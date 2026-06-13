import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigator } from '../../../core/useNavigator';
import { INGREDIENT_CATEGORIES, MEAT_TABS, PANTRY_TABS } from '../../../data/ingredients';
import type { Rating, TasteCategory } from '../../../data/types';
import type { ScreenKey } from '../../../features/prototype/screens';
import { BottomNavBar } from '../../../shared/components/BottomNavBar';
import { FoodCategoryTab } from '../../../shared/components/FoodCategoryTab';
import { InlineTextField } from '../../../shared/components/InlineTextField';
import { RatingRow } from '../../../shared/components/RatingRow';
import { ScreenFrame } from '../../../shared/components/ScreenFrame';
import { usePreferences } from '../../../state/PreferencesContext';
import { colors } from '../../../theme';

type Props = {
  category: TasteCategory;
};

function getTabs(category: TasteCategory): TasteCategory[] {
  if (MEAT_TABS.includes(category)) return MEAT_TABS;
  if (PANTRY_TABS.includes(category)) return PANTRY_TABS;
  return [category];
}

export function TastesScreen({ category }: Props) {
  const { navigate } = useNavigator();
  const { prefs, setRating } = usePreferences();
  const meta = INGREDIENT_CATEGORIES[category];
  const tabs = getTabs(category);

  const handleMasterToggle = (r: Rating) => {
    meta.items.forEach((item) => setRating(item, r));
    setRating(meta.allLabel, r);
  };

  return (
    <ScreenFrame>
      <FoodCategoryTab
        tabs={tabs}
        activeKey={category}
        onSelect={(key) => navigate(key as ScreenKey)}
      />

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <RatingRow
          label={meta.allLabel}
          value={prefs.ingredientRatings[meta.allLabel] ?? null}
          onChange={handleMasterToggle}
          fontSize={20}
        />

        {meta.items.map((item) => (
          <RatingRow
            key={item}
            label={item}
            value={prefs.ingredientRatings[item] ?? null}
            onChange={(r) => setRating(item, r)}
          />
        ))}

        <View style={styles.otherInputs}>
          <Text style={styles.otherLabel}>Other Dislikes</Text>
          <View style={styles.inputRow}>
            <InlineTextField placeholder="write here" />
            <TouchableOpacity style={styles.submitBtn}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.otherLabel}>Other Likes</Text>
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
    </ScreenFrame>
  );
}

const styles = StyleSheet.create({
  content: { paddingBottom: 112 },
  otherInputs: { paddingHorizontal: 16, paddingTop: 16, gap: 8 },
  inputRow: { flexDirection: 'row', alignItems: 'center', gap: 8, height: 54 },
  otherLabel: {
    fontFamily: 'serif',
    fontSize: 14,
    color: colors.black,
  },
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
    marginTop: 20,
    backgroundColor: colors.brandGreen,
    borderRadius: 10,
    paddingVertical: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.black,
  },
  saveBtnText: { fontFamily: 'serif', fontSize: 22, color: colors.black },
});

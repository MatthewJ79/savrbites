import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useWindowDimensions } from 'react-native';

import { useNavigator } from '../../../core/useNavigator';
import { CUISINE_ITEMS } from '../../../data/cuisines';
import { BottomNavBar } from '../../../shared/components/BottomNavBar';
import { CuisineCard } from '../../../shared/components/CuisineCard';
import { InlineTextField } from '../../../shared/components/InlineTextField';
import { ScreenFrame } from '../../../shared/components/ScreenFrame';
import { usePreferences } from '../../../state/PreferencesContext';
import { colors } from '../../../theme';

export function CuisinesScreen() {
  const { navigate } = useNavigator();
  const { prefs, setCuisineRating } = usePreferences();
  const { width } = useWindowDimensions();
  const frameWidth = Math.min(width, 440);
  const cardSize = (frameWidth - 24) / 2;

  return (
    <ScreenFrame>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Cuisines</Text>
        <View style={styles.divider} />

        <View style={styles.grid}>
          {CUISINE_ITEMS.map((item) => (
            <CuisineCard
              key={item.id}
              label={item.label}
              color={item.color}
              value={prefs.cuisineRatings[item.id] ?? null}
              onChange={(r) => setCuisineRating(item.id, r)}
              size={cardSize}
            />
          ))}
        </View>

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
    </ScreenFrame>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 8,
  },
  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 8 },
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
    backgroundColor: colors.brandGreen,
    borderRadius: 10,
    paddingVertical: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.black,
  },
  saveBtnText: { fontFamily: 'serif', fontSize: 22, color: colors.black },
});

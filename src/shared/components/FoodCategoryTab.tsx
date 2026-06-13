import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { INGREDIENT_CATEGORIES } from '../../data/ingredients';
import type { TasteCategory } from '../../data/types';
import { colors, layout } from '../../theme';

type Props = {
  tabs: TasteCategory[];
  activeKey: TasteCategory;
  onSelect: (key: TasteCategory) => void;
};

export function FoodCategoryTab({ tabs, activeKey, onSelect }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      style={styles.scroll}
    >
      {tabs.map((key) => {
        const meta = INGREDIENT_CATEGORIES[key];
        const active = key === activeKey;
        return (
          <TouchableOpacity
            key={key}
            activeOpacity={0.75}
            onPress={() => onSelect(key)}
            style={styles.tab}
          >
            <View style={[styles.circle, active && styles.circleActive]}>
              <Text style={styles.circleText}>
                {meta.label.charAt(0).toUpperCase()}
              </Text>
            </View>
            <Text style={[styles.label, active && styles.labelActive]} numberOfLines={1}>
              {meta.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#E3E3E3',
    width: '100%',
    maxWidth: layout.figmaFrameWidth,
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 10,
    gap: 4,
  },
  tab: {
    alignItems: 'center',
    width: 70,
    gap: 4,
  },
  circle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.linen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleActive: {
    borderWidth: 3,
    borderColor: colors.deepGreen,
    backgroundColor: colors.brandGreen,
  },
  circleText: {
    fontFamily: 'serif',
    fontSize: 22,
    color: colors.deepGreen,
  },
  label: {
    fontFamily: 'serif',
    fontSize: 11,
    color: colors.mutedText,
    textAlign: 'center',
  },
  labelActive: {
    color: colors.deepGreen,
    fontWeight: '600',
  },
});

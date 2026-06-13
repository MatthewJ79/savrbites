import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { CATEGORY_TAB_IMAGES } from '../../data/categoryTabImages';
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
        const image = CATEGORY_TAB_IMAGES[key];
        return (
          <TouchableOpacity
            key={key}
            activeOpacity={0.75}
            onPress={() => onSelect(key)}
            style={styles.tab}
          >
            <View style={[styles.circle, active && styles.circleActive]}>
              {image ? (
                <Image resizeMode="contain" source={image} style={styles.image} />
              ) : (
                <Text style={styles.circleText}>
                  {meta.label.charAt(0).toUpperCase()}
                </Text>
              )}
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
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    elevation: 2,
  },
  circleActive: {
    borderWidth: 3,
    borderColor: '#E5E5E5',
    backgroundColor: colors.white,
  },
  image: {
    width: 60,
    height: 50,
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

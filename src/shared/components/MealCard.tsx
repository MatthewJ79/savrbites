import { StyleSheet, Text, View } from 'react-native';
import type { ViewStyle } from 'react-native';

import type { Meal } from '../../data/types';
import { colors } from '../../theme';

type Props = {
  meal: Meal;
  style?: ViewStyle;
};

const TYPE_COLORS: Record<string, string> = {
  breakfast: '#C58A68',
  lunch: '#A3BD9C',
  dinner: '#7E2D24',
  snack: '#C8A882',
};

export function MealCard({ meal, style }: Props) {
  const thumbColor = TYPE_COLORS[meal.type] ?? colors.brandGreen;

  return (
    <View style={[styles.card, style]}>
      <View style={[styles.thumb, { backgroundColor: thumbColor }]} />
      <View style={styles.content}>
        <View style={styles.metaRow}>
          <Text style={styles.type}>{meal.type.charAt(0).toUpperCase() + meal.type.slice(1)}</Text>
          <Text style={styles.dot}>{'  •  '}</Text>
          <Text style={styles.meta}>{meal.time}</Text>
          <Text style={styles.dot}>{' • '}</Text>
          <Text style={styles.meta}>{meal.calories} cal</Text>
          <Text style={styles.dot}>{' • '}</Text>
          <Text style={styles.meta}>${meal.costUsd.toFixed(2)}</Text>
          <Text style={styles.dot}>{' • '}</Text>
          <Text style={styles.meta}>{meal.prepMinutes} min</Text>
        </View>
        <Text style={styles.title} numberOfLines={2}>{meal.title}</Text>
        <Text style={styles.description} numberOfLines={2}>{meal.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    gap: 12,
  },
  thumb: {
    width: 64,
    height: 64,
    borderRadius: 8,
    flexShrink: 0,
  },
  content: {
    flex: 1,
    gap: 3,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  type: {
    fontFamily: 'serif',
    fontSize: 14,
    color: colors.deepGreen,
    fontWeight: '700',
  },
  dot: {
    fontFamily: 'serif',
    fontSize: 12,
    color: colors.mutedText,
  },
  meta: {
    fontFamily: 'serif',
    fontSize: 12,
    color: colors.mutedText,
  },
  title: {
    fontFamily: 'serif',
    fontSize: 18,
    color: colors.black,
    lineHeight: 22,
  },
  description: {
    fontFamily: 'serif',
    fontSize: 13,
    color: colors.mutedText,
    lineHeight: 18,
  },
});

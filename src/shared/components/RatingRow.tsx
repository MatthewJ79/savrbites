import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import type { Rating } from '../../data/types';
import { colors } from '../../theme';

type Props = {
  label: string;
  value: Rating;
  onChange: (r: Rating) => void;
  fontSize?: number;
};

type BtnDef = { key: Exclude<Rating, null>; symbol: string };

const BUTTONS: BtnDef[] = [
  { key: 'love', symbol: '❤' },
  { key: 'like', symbol: '👍' },
  { key: 'idk', symbol: 'IDK' },
  { key: 'dislike', symbol: '👎' },
];

export function RatingRow({ label, value, onChange, fontSize = 18 }: Props) {
  const handlePress = (key: Exclude<Rating, null>) => {
    onChange(value === key ? null : key);
  };

  return (
    <View style={styles.row}>
      <Text style={[styles.label, { fontSize }]} numberOfLines={1}>
        {label}
      </Text>
      <View style={styles.buttons}>
        {BUTTONS.map((btn) => {
          const selected = value === btn.key;

          return (
            <TouchableOpacity
              accessibilityLabel={`${label} ${btn.key} preference`}
              accessibilityRole="button"
              accessibilityState={{ selected }}
              activeOpacity={0.7}
              key={btn.key}
              onPress={() => handlePress(btn.key)}
              style={[styles.btn, selected && styles.btnActive]}
            >
              <Text style={btn.key === 'idk' ? styles.idkText : styles.emoji}>
                {btn.symbol}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    minHeight: 58,
  },
  label: {
    flex: 1,
    fontFamily: 'serif',
    color: colors.black,
  },
  buttons: {
    flexDirection: 'row',
    gap: 4,
  },
  btn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  btnActive: {
    backgroundColor: colors.brandGreen,
    borderColor: colors.deepGreen,
  },
  emoji: {
    fontSize: 23,
  },
  idkText: {
    fontFamily: 'serif',
    fontSize: 14,
    color: colors.black,
    fontStyle: 'italic',
    fontWeight: '700',
  },
});

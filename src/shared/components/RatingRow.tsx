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
  { key: 'love', symbol: '\u2764' },
  { key: 'like', symbol: '\u{1F44D}' },
  { key: 'idk', symbol: 'IDK' },
  { key: 'dislike', symbol: '\u{1F44E}' },
];

export function RatingRow({ label, value, onChange, fontSize = 28 }: Props) {
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
              activeOpacity={0.72}
              key={btn.key}
              onPress={() => handlePress(btn.key)}
              style={[styles.btn, selected && styles.btnActive]}
            >
              <Text
                style={[
                  btn.key === 'idk' ? styles.idkText : styles.emoji,
                  btn.key === 'love' && styles.heartIcon,
                ]}
              >
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
    paddingLeft: 18,
    paddingRight: 12,
    minHeight: 72,
  },
  label: {
    flex: 1,
    fontFamily: 'serif',
    color: colors.black,
    letterSpacing: 0,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  btn: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
    fontSize: 27,
    lineHeight: 31,
  },
  heartIcon: {
    color: '#EF4F4F',
  },
  idkText: {
    fontFamily: 'serif',
    fontSize: 16,
    color: colors.black,
    fontStyle: 'italic',
    fontWeight: '700',
  },
});

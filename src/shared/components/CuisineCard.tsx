import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { ImageSourcePropType } from 'react-native';

import type { Rating } from '../../data/types';
import { colors } from '../../theme';

type Props = {
  label: string;
  color: string;
  image?: ImageSourcePropType;
  value: Rating;
  onChange: (r: Rating) => void;
  size: number;
};

type BtnDef = { key: Exclude<Rating, null>; symbol: string };

const BUTTONS: BtnDef[] = [
  { key: 'love', symbol: '❤' },
  { key: 'like', symbol: '👍' },
  { key: 'idk', symbol: 'IDK' },
  { key: 'dislike', symbol: '👎' },
];

export function CuisineCard({ label, color, image, value, onChange, size }: Props) {
  const handlePress = (key: Exclude<Rating, null>) => {
    onChange(value === key ? null : key);
  };

  return (
    <View style={[styles.card, { width: size, height: size + 50 }]}>
      <View style={[styles.imageArea, { height: size - 10, backgroundColor: color }]}>
        {image && <Image resizeMode="cover" source={image} style={styles.image} />}
        <Text style={styles.cuisineLabel}>{label}</Text>
      </View>
      <View style={styles.ratingBar}>
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
              style={[styles.ratingBtn, selected && styles.ratingBtnActive]}
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
  card: {
    margin: 4,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  imageArea: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  cuisineLabel: {
    fontFamily: 'serif',
    fontSize: 22,
    fontWeight: '700',
    color: colors.white,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  ratingBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 8,
    paddingHorizontal: 4,
    backgroundColor: 'rgba(240,240,240,0.9)',
    height: 50,
  },
  ratingBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  ratingBtnActive: {
    backgroundColor: colors.brandGreen,
    borderColor: colors.deepGreen,
  },
  emoji: {
    fontSize: 19,
  },
  idkText: {
    fontFamily: 'serif',
    fontSize: 12,
    color: colors.black,
    fontStyle: 'italic',
    fontWeight: '700',
  },
});

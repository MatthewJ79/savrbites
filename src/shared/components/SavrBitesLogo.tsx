import { StyleSheet, Text, View } from 'react-native';

import { colors, typography } from '../../theme';

export function SavrBitesLogo() {
  return (
    <View style={styles.container}>
      <View style={styles.plate}>
        <View style={styles.steak} />
        <View style={styles.garnishTop} />
        <View style={styles.garnishBottom} />
      </View>
      <Text style={styles.logo}>SAVRBITES</Text>
      <Text style={styles.tagline}>Meal Plans for a Budget</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 58,
    top: 55,
    width: 291,
    height: 175,
    alignItems: 'center',
  },
  plate: {
    width: 155,
    height: 155,
    borderRadius: 78,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.plate,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.14)',
  },
  steak: {
    width: 84,
    height: 54,
    borderRadius: 28,
    transform: [{ rotate: '-18deg' }],
    backgroundColor: colors.steak,
    borderWidth: 4,
    borderColor: colors.steakTrim,
  },
  garnishTop: {
    position: 'absolute',
    right: 93,
    top: 42,
    width: 22,
    height: 8,
    borderRadius: 8,
    transform: [{ rotate: '24deg' }],
    backgroundColor: colors.brandGreen,
  },
  garnishBottom: {
    position: 'absolute',
    left: 91,
    bottom: 42,
    width: 28,
    height: 8,
    borderRadius: 8,
    transform: [{ rotate: '-26deg' }],
    backgroundColor: colors.deepGreen,
  },
  logo: {
    position: 'absolute',
    left: 0,
    top: 78,
    width: 291,
    color: colors.brandGreen,
    fontFamily: typography.brandFamily,
    fontSize: typography.logoSize,
    lineHeight: 58,
    textAlign: 'center',
    textShadowColor: colors.logoShadow,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 0,
  },
  tagline: {
    position: 'absolute',
    left: 54,
    top: 149,
    width: 234,
    color: colors.deepGreen,
    fontFamily: typography.bodyFamily,
    fontSize: typography.taglineSize,
    lineHeight: 26,
  },
});

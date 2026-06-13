import { StyleSheet, View } from 'react-native';

import { colors } from '../../theme';

export function BottomNavBar() {
  return (
    <View style={styles.container}>
      <View style={styles.activeDot} />
      <View style={styles.dot} />
      <View style={styles.dot} />
    </View>
  );
}

const dotBase = {
  width: 18,
  height: 18,
  borderRadius: 9,
} as const;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 85,
    top: 905,
    width: 257,
    height: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  activeDot: {
    ...dotBase,
    backgroundColor: colors.deepGreen,
  },
  dot: {
    ...dotBase,
    borderWidth: 1,
    borderColor: colors.black,
  },
});

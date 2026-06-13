import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../theme';

type Props = {
  message?: string;
};

export function LoadingOverlay({ message = 'Creating your meal plan…' }: Props) {
  return (
    <View style={styles.overlay}>
      <View style={styles.card}>
        <ActivityIndicator color={colors.deepGreen} size="large" />
        <Text style={styles.text}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    paddingHorizontal: 32,
    paddingVertical: 28,
    alignItems: 'center',
    gap: 14,
    maxWidth: 280,
  },
  text: {
    fontFamily: 'serif',
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
    lineHeight: 22,
  },
});

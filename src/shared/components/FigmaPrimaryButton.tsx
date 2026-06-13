import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors, typography } from '../../theme';

type FigmaPrimaryButtonProps = PropsWithChildren<{
  top: number;
  left: number;
  onPress?: () => void;
}>;

export function FigmaPrimaryButton({
  children,
  left,
  onPress,
  top,
}: FigmaPrimaryButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.82}
      onPress={onPress}
      style={[styles.button, { left, top }]}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: 189,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: colors.authButtonGray,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 5,
    elevation: 4,
  },
  text: {
    color: colors.white,
    fontFamily: typography.bodyFamily,
    fontSize: typography.buttonSize,
    lineHeight: 31,
  },
});

import type { PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { colors, layout } from '../../theme';

export function ScreenFrame({ children }: PropsWithChildren) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.frame}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.linen,
  },
  frame: {
    flex: 1,
    width: '100%',
    maxWidth: layout.figmaFrameWidth,
    backgroundColor: colors.linen,
  },
});

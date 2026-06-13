import type { PropsWithChildren } from 'react';
import { Platform, SafeAreaView, StyleSheet, View } from 'react-native';

import { colors, layout } from '../../theme';
import { useDeviceClass } from '../hooks/useDeviceClass';

export function ScreenFrame({ children }: PropsWithChildren) {
  const { width, isTablet } = useDeviceClass();
  const Root = Platform.OS === 'web' ? View : SafeAreaView;
  const previewWidth = Platform.OS === 'web' ? 390 : width;
  const phoneScale = Math.min(1, previewWidth / layout.figmaFrameWidth);
  const scale = Platform.OS === 'web' ? phoneScale : isTablet ? 1 : phoneScale;

  return (
    <Root style={styles.safeArea}>
      <View
        style={[
          styles.scaledSlot,
          {
            width: layout.figmaFrameWidth * scale,
            minHeight: layout.figmaFrameHeight * scale,
          },
        ]}
      >
        <View style={[styles.frame, { transform: [{ scale }] }]}>{children}</View>
      </View>
    </Root>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.linen,
  },
  scaledSlot: {
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  frame: {
    width: layout.figmaFrameWidth,
    minHeight: layout.figmaFrameHeight,
    backgroundColor: colors.linen,
    transformOrigin: 'top center',
  },
});

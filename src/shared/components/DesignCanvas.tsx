import type { PropsWithChildren } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import { colors, layout } from '../../theme';
import { useDeviceClass } from '../hooks/useDeviceClass';

export function DesignCanvas({ children }: PropsWithChildren) {
  const { isTablet } = useDeviceClass();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        bounces={false}
        contentContainerStyle={[styles.page, isTablet && styles.tabletPage]}
      >
        <View style={[styles.frame, isTablet && styles.tabletFrame]}>
          <View style={styles.texture} />
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.linen,
  },
  page: {
    minHeight: '100%',
    alignItems: 'center',
    backgroundColor: colors.linen,
  },
  tabletPage: {
    justifyContent: 'center',
    paddingVertical: layout.tabletPreviewPadding,
  },
  frame: {
    width: '100%',
    maxWidth: layout.figmaFrameWidth,
    minHeight: layout.figmaFrameHeight,
    overflow: 'hidden',
    backgroundColor: colors.linen,
  },
  tabletFrame: {
    borderWidth: 1,
    borderColor: colors.tabletBorder,
  },
  texture: {
    ...StyleSheet.absoluteFill,
    opacity: 0.22,
    backgroundColor: colors.linen,
    borderWidth: 12,
    borderColor: colors.textureWash,
  },
});

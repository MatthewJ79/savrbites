import { Platform, useWindowDimensions } from 'react-native';

import { layout } from '../../theme';

export function useDeviceClass() {
  const dimensions = useWindowDimensions();
  const webWidth =
    Platform.OS === 'web' && typeof window !== 'undefined'
      ? Math.min(
          ...[
            dimensions.width,
            window.innerWidth,
            window.outerWidth,
            window.screen?.width,
            window.visualViewport?.width,
            document.documentElement?.clientWidth,
            document.body?.clientWidth,
          ].filter((value): value is number => typeof value === 'number' && value > 0),
        )
      : dimensions.width;
  const webHeight =
    Platform.OS === 'web' && typeof window !== 'undefined'
      ? Math.min(
          ...[
            dimensions.height,
            window.innerHeight,
            window.outerHeight,
            window.screen?.height,
            window.visualViewport?.height,
            document.documentElement?.clientHeight,
            document.body?.clientHeight,
          ].filter((value): value is number => typeof value === 'number' && value > 0),
        )
      : dimensions.height;
  const width = webWidth || dimensions.width;
  const height = webHeight || dimensions.height;
  const isTablet = width >= layout.tabletBreakpoint;

  return {
    ...dimensions,
    width,
    height,
    isPhone: !isTablet,
    isTablet,
  };
}

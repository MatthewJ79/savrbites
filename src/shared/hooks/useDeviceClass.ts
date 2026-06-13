import { useWindowDimensions } from 'react-native';

import { layout } from '../../theme';

export function useDeviceClass() {
  const dimensions = useWindowDimensions();
  const isTablet = dimensions.width >= layout.tabletBreakpoint;

  return {
    ...dimensions,
    isPhone: !isTablet,
    isTablet,
  };
}

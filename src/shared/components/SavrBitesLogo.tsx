import { Image, StyleSheet } from 'react-native';
import type { ImageStyle, StyleProp } from 'react-native';

const logoSource = require('../../../assets/figma/savrbites-logo.png');

type Props = {
  absolute?: boolean;
  style?: StyleProp<ImageStyle>;
};

export function SavrBitesLogo({ absolute = true, style }: Props) {
  return (
    <Image
      resizeMode="contain"
      source={logoSource}
      style={[styles.logo, absolute && styles.absoluteLogo, style]}
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 294,
    height: 178,
  },
  absoluteLogo: {
    position: 'absolute',
    left: 58,
    top: 55,
  },
});

import { Image, StyleSheet } from 'react-native';

const logoSource = require('../../../assets/figma/savrbites-logo.png');

export function SavrBitesLogo() {
  return <Image resizeMode="contain" source={logoSource} style={styles.logo} />;
}

const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    left: 58,
    top: 55,
    width: 294,
    height: 178,
  },
});

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigator } from '../../../core/useNavigator';
import { BottomNavBar } from '../../../shared/components/BottomNavBar';
import { DesignCanvas } from '../../../shared/components/DesignCanvas';
import { FigmaPrimaryButton } from '../../../shared/components/FigmaPrimaryButton';
import { FigmaTextField } from '../../../shared/components/FigmaTextField';
import { SavrBitesLogo } from '../../../shared/components/SavrBitesLogo';
import { colors, typography } from '../../../theme';

export function SignUpScreen() {
  const { navigate } = useNavigator();

  return (
    <DesignCanvas>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => navigate('signIn')}
        style={styles.signInLink}
      >
        <Text style={styles.linkText}>Sign in</Text>
      </TouchableOpacity>

      <SavrBitesLogo />

      <FigmaTextField label="Enter Username" placeholder="write here" top={313} />
      <FigmaTextField label="Enter Password" placeholder="write here" secureTextEntry top={422} />
      <FigmaTextField label="Confirm Password" placeholder="write here" secureTextEntry top={531} />

      <FigmaPrimaryButton left={119} top={652} onPress={() => navigate('home')}>
        Sign up
      </FigmaPrimaryButton>

      <BottomNavBar />
    </DesignCanvas>
  );
}

const styles = StyleSheet.create({
  signInLink: {
    position: 'absolute',
    right: 24,
    top: 82,
    zIndex: 1,
  },
  linkText: {
    fontFamily: typography.bodyFamily,
    fontSize: typography.linkSize,
    color: colors.black,
    textDecorationLine: 'underline',
  },
});

import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { useNavigator } from '../../../core/useNavigator';
import { BottomNavBar } from '../../../shared/components/BottomNavBar';
import { DesignCanvas } from '../../../shared/components/DesignCanvas';
import { FigmaPrimaryButton } from '../../../shared/components/FigmaPrimaryButton';
import { FigmaTextField } from '../../../shared/components/FigmaTextField';
import { SavrBitesLogo } from '../../../shared/components/SavrBitesLogo';
import { colors, typography } from '../../../theme';

// Figma source: "sign in", node 574:9501, frame 440 x 956.
export function SignInScreen() {
  const { navigate } = useNavigator();

  return (
    <DesignCanvas>
      <SavrBitesLogo />

      <FigmaTextField label="Username" placeholder="write here" top={313} />
      <FigmaTextField label="Password" placeholder="write here" secureTextEntry top={422} />

      <FigmaPrimaryButton left={119} top={552} onPress={() => navigate('home')}>
        Sign In
      </FigmaPrimaryButton>

      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => navigate('signup')}
        style={styles.signUpLink}
      >
        <Text style={styles.linkText}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.75} style={styles.forgotLink}>
        <Text style={styles.linkText}>Forgot password?</Text>
      </TouchableOpacity>

      <BottomNavBar />
    </DesignCanvas>
  );
}

const styles = StyleSheet.create({
  signUpLink: {
    position: 'absolute',
    left: 78,
    top: 682,
    width: 92,
    height: 28,
  },
  forgotLink: {
    position: 'absolute',
    left: 189,
    top: 681,
    width: 176,
    height: 28,
  },
  linkText: {
    color: colors.black,
    fontFamily: typography.bodyFamily,
    fontSize: typography.linkSize,
    lineHeight: 24,
  },
});

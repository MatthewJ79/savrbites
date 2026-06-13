import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { useNavigator } from '../../../core/useNavigator';
import { BottomNavBar } from '../../../shared/components/BottomNavBar';
import { DesignCanvas } from '../../../shared/components/DesignCanvas';
import { FigmaPrimaryButton } from '../../../shared/components/FigmaPrimaryButton';
import { FigmaTextField } from '../../../shared/components/FigmaTextField';
import { SavrBitesLogo } from '../../../shared/components/SavrBitesLogo';
import { colors, typography } from '../../../theme';

export function SignUpScreen() {
  const { navigate } = useNavigator();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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

      <FigmaTextField
        label="Enter Username"
        onChangeText={setUsername}
        placeholder="write here"
        top={313}
        value={username}
      />
      <FigmaTextField
        label="Enter Password"
        onChangeText={setPassword}
        placeholder="write here"
        secureTextEntry
        top={422}
        value={password}
      />
      <FigmaTextField
        label="Confirm Password"
        onChangeText={setConfirmPassword}
        placeholder="write here"
        secureTextEntry
        top={531}
        value={confirmPassword}
      />

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

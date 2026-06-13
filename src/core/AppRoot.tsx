import { StatusBar } from 'expo-status-bar';

import { SignInScreen } from '../features/auth/screens/SignInScreen';

export function AppRoot() {
  return (
    <>
      <StatusBar style="dark" />
      <SignInScreen />
    </>
  );
}

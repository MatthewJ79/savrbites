import { StatusBar } from 'expo-status-bar';

import { Navigator } from './Navigator';

export function AppRoot() {
  return (
    <>
      <StatusBar style="dark" />
      <Navigator />
    </>
  );
}

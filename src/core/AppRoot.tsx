import { StatusBar } from 'expo-status-bar';

import { MainFlowPrototypeApp } from '../features/prototype/MainFlowPrototypeApp';

export function AppRoot() {
  return (
    <>
      <StatusBar style="dark" />
      <MainFlowPrototypeApp />
    </>
  );
}

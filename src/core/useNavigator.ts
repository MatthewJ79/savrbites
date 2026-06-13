import { createContext, useContext } from 'react';

import type { ScreenKey } from '../features/prototype/screens';

export type NavigatorContextType = {
  screen: ScreenKey;
  navigate: (s: ScreenKey) => void;
};

export const NavigatorContext = createContext<NavigatorContextType>({
  screen: 'signIn',
  navigate: () => undefined,
});

export function useNavigator(): NavigatorContextType {
  return useContext(NavigatorContext);
}

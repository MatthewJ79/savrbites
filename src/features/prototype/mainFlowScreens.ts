import type { ImageSourcePropType } from 'react-native';

export type MainFlowScreenKey =
  | 'signIn'
  | 'home'
  | 'beefHome'
  | 'allergiesHome'
  | 'cuisinesHome'
  | 'nutritionHome'
  | 'mealsMonday';

type MainFlowScreen = {
  title: string;
  source: ImageSourcePropType;
  width: number;
  height: number;
};

export const mainFlowScreens: Record<MainFlowScreenKey, MainFlowScreen> = {
  signIn: {
    title: 'Sign in',
    source: require('../../../assets/prototype/sign in.png'),
    width: 440,
    height: 956,
  },
  home: {
    title: 'Home',
    source: require('../../../assets/prototype/Home.png'),
    width: 440,
    height: 956,
  },
  beefHome: {
    title: 'Beef preferences',
    source: require('../../../assets/prototype/Beef home.png'),
    width: 440,
    height: 962,
  },
  allergiesHome: {
    title: 'Allergies',
    source: require('../../../assets/prototype/Allergies home.png'),
    width: 440,
    height: 962,
  },
  cuisinesHome: {
    title: 'Cuisines',
    source: require('../../../assets/prototype/Cuisines home.png'),
    width: 440,
    height: 962,
  },
  nutritionHome: {
    title: 'Nutrition',
    source: require('../../../assets/prototype/Nutrition home.png'),
    width: 440,
    height: 962,
  },
  mealsMonday: {
    title: 'Meal plan Monday',
    source: require('../../../assets/prototype/Meal Plan-meals-Monday.png'),
    width: 440,
    height: 956,
  },
};

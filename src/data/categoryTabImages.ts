import type { ImageSourcePropType } from 'react-native';

import type { TasteCategory } from './types';

export const CATEGORY_TAB_IMAGES: Partial<Record<TasteCategory, ImageSourcePropType>> = {
  beefHome: require('../../assets/category-tabs/beef.png'),
  poultryHome: require('../../assets/category-tabs/poultry.png'),
  porkHome: require('../../assets/category-tabs/pork.png'),
  lambHome: require('../../assets/category-tabs/lamb.png'),
  nutsHome: require('../../assets/category-tabs/nuts.png'),
  spicesHome: require('../../assets/category-tabs/spices.png'),
  oilsHome: require('../../assets/category-tabs/oils.png'),
  saucesHome: require('../../assets/category-tabs/sauces.png'),
};

import type { ImageSourcePropType } from 'react-native';

import type { MealType } from './types';

export const MEAL_IMAGES: Partial<Record<MealType, ImageSourcePropType>> = {
  breakfast: require('../../assets/meal-thumbs/breakfast.png'),
  lunch: require('../../assets/meal-thumbs/lunch.png'),
  dinner: require('../../assets/meal-thumbs/dinner.png'),
};

import type { ImageSourcePropType } from 'react-native';

export const ALLERGY_IMAGES: Record<string, ImageSourcePropType> = {
  dairy: require('../../assets/allergy-cards/dairy.png'),
  eggs: require('../../assets/allergy-cards/eggs.png'),
  fish: require('../../assets/allergy-cards/fish.png'),
  shellfish: require('../../assets/allergy-cards/shellfish.png'),
};

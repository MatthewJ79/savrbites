export type CuisineItem = {
  id: string;
  label: string;
  color: string;
};

export const CUISINE_ITEMS: CuisineItem[] = [
  { id: 'italian', label: 'Italian', color: '#C8A882' },
  { id: 'mexican', label: 'Mexican', color: '#D4A844' },
  { id: 'japanese', label: 'Japanese', color: '#C8D4E8' },
  { id: 'chinese', label: 'Chinese', color: '#E8C8C8' },
  { id: 'indian', label: 'Indian', color: '#E8C890' },
  { id: 'thai', label: 'Thai', color: '#C8E8C8' },
  { id: 'mediterranean', label: 'Mediterranean', color: '#C8D8E8' },
  { id: 'american', label: 'American', color: '#D8C8E8' },
  { id: 'french', label: 'French', color: '#E8C8D8' },
  { id: 'korean', label: 'Korean', color: '#C8E8D8' },
  { id: 'greek', label: 'Greek', color: '#D0C8E8' },
  { id: 'middleeastern', label: 'Middle Eastern', color: '#E8D8C8' },
];

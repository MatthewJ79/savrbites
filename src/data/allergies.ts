export type AllergyItem = {
  id: string;
  label: string;
  color: string;
};

export const ALLERGY_ITEMS: AllergyItem[] = [
  { id: 'dairy', label: 'Dairy', color: '#F5E6C8' },
  { id: 'eggs', label: 'Eggs', color: '#F9E4B7' },
  { id: 'fish', label: 'Fish', color: '#C8DCF0' },
  { id: 'shellfish', label: 'Shell Fish', color: '#F0C8C8' },
  { id: 'treenuts', label: 'Tree Nuts', color: '#D4E8C8' },
  { id: 'peanuts', label: 'Peanuts', color: '#E8D4C8' },
  { id: 'wheat', label: 'Wheat', color: '#EEE4C0' },
  { id: 'soy', label: 'Soy', color: '#D8EED8' },
  { id: 'sesame', label: 'Sesame', color: '#E8E0C8' },
];

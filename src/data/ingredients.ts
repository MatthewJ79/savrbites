import type { CategoryMeta, TasteCategory } from './types';

export const INGREDIENT_CATEGORIES: Record<TasteCategory, CategoryMeta> = {
  beefHome: {
    label: 'Beef',
    allLabel: 'All Beef',
    items: ['Ground beef', 'Brisket', 'Ribeye', 'Sirloin', 'Flank steak', 'Tenderloin', 'Short ribs', 'Stew meat', 'Beef liver', 'Oxtail', 'Corned beef', 'Pastrami', 'NY Strip'],
  },
  poultryHome: {
    label: 'Poultry',
    allLabel: 'All Poultry',
    items: ['Chicken breast', 'Chicken thighs', 'Chicken drumsticks', 'Chicken wings', 'Whole chicken', 'Chicken liver', 'Ground chicken', 'Turkey breast', 'Ground turkey', 'Turkey legs', 'Duck breast', 'Whole duck', 'Cornish hen', 'Quail', 'Goose'],
  },
  porkHome: {
    label: 'Pork',
    allLabel: 'All Pork',
    items: ['Pork chops', 'Pork loin', 'Pork tenderloin', 'Pork shoulder', 'Ground pork', 'Bacon', 'Ham', 'Pork ribs', 'Prosciutto', 'Pancetta', 'Italian Sausage', 'Breakfast Sausage', 'Chorizo', 'Bratwurst', 'Pork belly'],
  },
  lambHome: {
    label: 'Lamb',
    allLabel: 'All Lamb',
    items: ['Lamb chops', 'Ground lamb', 'Leg of lamb', 'Lamb shank', 'Lamb shoulder', 'Rack of lamb', 'Mutton', 'Lamb liver'],
  },
  seafoodHome: {
    label: 'Seafood',
    allLabel: 'All Seafood',
    items: ['Salmon', 'Tuna', 'Cod', 'Haddock', 'Halibut', 'Tilapia', 'Trout', 'Sea bass', 'Catfish', 'Snapper', 'Swordfish', 'Mackerel', 'Sardines', 'Anchovies', 'Sole', 'Flounder', 'Pollock', 'Perch', 'Mahi-mahi', 'Shrimp', 'Prawns', 'Blue Crabs', 'Lobster', 'Scallops', 'Clams', 'Oysters', 'Mussels', 'Squid', 'Octopus'],
  },
  exoticHome: {
    label: 'Exotic',
    allLabel: 'All Exotic',
    items: ['Venison', 'Bison', 'Elk', 'Rabbit', 'Wild boar', 'Pheasant', 'Alligator', 'Kangaroo'],
  },
  veggiesHome: {
    label: 'Veggies',
    allLabel: 'All Vegetables',
    items: ['Spinach', 'Kale', 'Swiss chard', 'Collard greens', 'Arugula', 'Romaine', 'Iceberg lettuce', 'Butter lettuce', 'Bok choy', 'Cabbage', 'Broccoli', 'Cauliflower', 'Brussels sprouts', 'Carrots', 'Beets', 'Turnips', 'Parsnips', 'Bell peppers', 'Jalapeños', 'Zucchini', 'Yellow squash', 'Eggplant', 'Tomatoes', 'Cucumber', 'Celery', 'Asparagus', 'Green beans', 'Peas', 'Corn', 'Mushrooms', 'Onions', 'Garlic', 'Leeks', 'Shallots', 'Artichokes', 'Sweet potato', 'Russet potato', 'Red potato', 'Radishes'],
  },
  fruitHome: {
    label: 'Fruit',
    allLabel: 'All Fruits',
    items: ['Orange', 'Mandarin', 'Tangerine', 'Clementine', 'Grapefruit', 'Lemon', 'Lime', 'Pomelo', 'Strawberry', 'Blueberry', 'Raspberry', 'Blackberry', 'Cranberry', 'Boysenberry', 'Gooseberry', 'Currant', 'Mango', 'Pineapple', 'Papaya', 'Guava', 'Passion fruit', 'Dragon fruit', 'Lychee', 'Jackfruit', 'Banana', 'Apple', 'Pear', 'Peach', 'Nectarine', 'Plum', 'Apricot', 'Cherry', 'Grape', 'Watermelon', 'Cantaloupe', 'Honeydew', 'Kiwi', 'Fig', 'Date', 'Pomegranate'],
  },
  dairyHome: {
    label: 'Dairy',
    allLabel: 'All Dairy',
    items: ['Cheddar', 'Mozzarella', 'Parmesan', 'Swiss', 'Feta', 'Blue cheese', 'Goat cheese', 'Brie', 'Provolone', 'Ricotta', 'Cottage cheese', 'Cream cheese', 'Monterey Jack', 'Gouda', 'Whole milk', 'Skim milk', '2% milk', 'Buttermilk', 'Heavy cream', 'Light cream', 'Whipping cream', 'Plain yogurt', 'Greek yogurt', 'Flavored yogurt', 'Skyr', 'Kefir', 'Unsalted butter', 'Salted butter', 'Clarified butter', 'Ice cream', 'Gelato', 'Sour cream', 'Mascarpone'],
  },
  grainsHome: {
    label: 'Grains',
    allLabel: 'All Grain & Cereals',
    items: ['Brown rice', 'White rice', 'Quinoa', 'Barley', 'Bulgur', 'Farro', 'Millet', 'Oats', 'Buckwheat', 'Rye', 'White flour', 'Whole wheat flour', 'Cornmeal', 'Bread', 'Rolls', 'Bagels', 'Pita', 'Naan', 'Tortillas', 'Pasta', 'Egg Noodles', 'Soba Noodles', 'Udon Noodles', 'Ramen Noodles', 'Couscous', 'Crackers', 'Cereal', 'Granola', 'Pancakes', 'Waffles'],
  },
  beansHome: {
    label: 'Beans',
    allLabel: 'All Beans/Legumes',
    items: ['Black beans', 'Kidney beans', 'Pinto beans', 'Navy beans', 'Great Northern beans', 'Cannellini beans', 'Chickpeas', 'Lentils (green)', 'Lentils (red)', 'Split peas', 'Edamame', 'Lima beans', 'Fava beans', 'Mung beans', 'Adzuki beans'],
  },
  nutsHome: {
    label: 'Nuts',
    allLabel: 'All Nuts/Seeds',
    items: ['Almonds', 'Walnuts', 'Pecans', 'Cashews', 'Pistachios', 'Hazelnuts', 'Brazil nuts', 'Macadamia', 'Pine nuts', 'Chestnuts', 'Coconut', 'Coconut butter', 'Sunflower seeds', 'Pumpkin seeds', 'Sesame seeds', 'Chia seeds', 'Flax seeds', 'Hemp seeds', 'Poppy seeds'],
  },
  spicesHome: {
    label: 'Spices',
    allLabel: 'All Spices',
    items: ['Black pepper', 'White pepper', 'Cayenne pepper', 'Paprika', 'Chili flakes', 'Garlic powder', 'Onion powder', 'Ginger', 'Cinnamon', 'Nutmeg', 'Cloves', 'Allspice', 'Cardamom', 'Coriander', 'Cumin', 'Mustard seed', 'Bay leaves', 'Sage', 'Thyme', 'Rosemary', 'Oregano', 'Basil', 'Dill', 'Mint', 'Chili powder', 'Peppercorns', 'Sumac', 'Wasabi', 'Horseradish', 'Fennel seeds', 'Cumin seeds', 'Sesame seeds', 'Garam masala', 'Chinese five-spice', 'Italian seasoning', 'Cajun seasoning', 'Taco seasoning', 'Saffron', 'Turmeric', 'Curry powder', 'Star anise', 'Vanilla bean'],
  },
  oilsHome: {
    label: 'Oils',
    allLabel: 'All Oils',
    items: ['Olive oil', 'Avocado oil', 'Canola oil', 'Sunflower oil', 'Safflower oil', 'Grapeseed oil', 'Soybean oil', 'Corn oil', 'Coconut oil', 'Sesame oil', 'Vegetable oil', 'Almond oil', 'Walnut oil', 'Hazelnut oil', 'Pumpkin seed oil', 'Flaxseed oil', 'Hemp seed oil', 'Chia seed oil', 'Truffle oil', 'Chili oil', 'Lard (pork fat)', 'Tallow (beef fat)', 'Duck fat', 'Fish oil'],
  },
  saucesHome: {
    label: 'Sauces',
    allLabel: 'All Sauces',
    items: ['Ketchup', 'Mustard', 'Mayonnaise', 'Aioli', 'Relish', 'Horseradish', 'Tartar sauce', 'Soy sauce', 'Worcestershire', 'Barbecue sauce', 'Hot sauce', 'Buffalo sauce', 'Teriyaki sauce', 'Fish sauce', 'Hoisin sauce', 'Miso sauce', 'Alfredo sauce', 'Ranch dressing', 'Caesar dressing', 'Balsamic vinegar', 'Apple cider vinegar', 'Vinaigrette', 'Chimichurri', 'Salsa', 'Salsa verde', 'Sriracha', 'Gochujang', 'Harissa', 'Sweet chili sauce', 'Curry sauce', 'Peanut sauce', 'Tahini', 'Pesto', 'Marinara sauce', 'Guacamole', 'Gravy', 'Honey', 'Maple syrup', 'Agave syrup'],
  },
};

export const MEAT_TABS: TasteCategory[] = ['beefHome', 'poultryHome', 'porkHome', 'lambHome'];
export const PANTRY_TABS: TasteCategory[] = ['nutsHome', 'spicesHome', 'oilsHome', 'saucesHome'];
export const SOLO_TABS: TasteCategory[] = ['seafoodHome', 'exoticHome', 'veggiesHome', 'fruitHome', 'dairyHome', 'grainsHome', 'beansHome'];

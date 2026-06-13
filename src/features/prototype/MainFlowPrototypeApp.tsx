import { useState } from 'react';
import {
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { mainFlowScreens, type MainFlowScreenKey } from './mainFlowScreens';

const FIGMA_WIDTH = 440;

type RouteHotspot = {
  key: string;
  x: number;
  y: number;
  width: number;
  height: number;
  to: MainFlowScreenKey;
};

type SelectHotspot = {
  key: string;
  x: number;
  y: number;
  width: number;
  height: number;
  radius?: number;
};

const bottomNav: RouteHotspot[] = [
  { key: 'bottom-home', x: 84, y: 908, width: 64, height: 48, to: 'home' },
  { key: 'bottom-tastes', x: 184, y: 908, width: 64, height: 48, to: 'beefHome' },
  { key: 'bottom-meals', x: 284, y: 908, width: 82, height: 48, to: 'mealsMonday' },
];

const homeRoutes: RouteHotspot[] = [
  { key: 'home-tastes', x: 23, y: 212, width: 391, height: 87, to: 'beefHome' },
  { key: 'home-allergies', x: 23, y: 301, width: 391, height: 87, to: 'allergiesHome' },
  { key: 'home-cuisines', x: 23, y: 390, width: 391, height: 87, to: 'cuisinesHome' },
  { key: 'home-nutrition', x: 23, y: 479, width: 391, height: 87, to: 'nutritionHome' },
  { key: 'home-create-plan', x: 89, y: 835, width: 258, height: 44, to: 'mealsMonday' },
];

const preferenceSaveRoute: RouteHotspot = {
  key: 'save-preferences',
  x: 62,
  y: 775,
  width: 321,
  height: 67,
  to: 'home',
};

const beefRoutes: RouteHotspot[] = [
  { key: 'top-beef', x: 0, y: 95, width: 103, height: 112, to: 'beefHome' },
  { key: 'top-poultry', x: 104, y: 95, width: 116, height: 112, to: 'beefHome' },
  { key: 'top-pork', x: 221, y: 95, width: 109, height: 112, to: 'beefHome' },
  { key: 'top-lamb', x: 331, y: 95, width: 109, height: 112, to: 'beefHome' },
];

const beefRatingRows = [0, 1, 2, 3, 4];
const beefRatingColumns = [
  { key: 'love', x: 216, width: 42 },
  { key: 'like', x: 263, width: 42 },
  { key: 'idk', x: 314, width: 47 },
  { key: 'dislike', x: 365, width: 42 },
] as const;

const allergySelections: SelectHotspot[] = [
  { key: 'dairy', x: 0, y: 155, width: 220, height: 212 },
  { key: 'eggs', x: 220, y: 155, width: 220, height: 212 },
  { key: 'fish', x: 0, y: 367, width: 220, height: 210 },
  { key: 'shellfish', x: 220, y: 367, width: 220, height: 210 },
];

const cuisineSelections: SelectHotspot[] = [
  { key: 'italian', x: 7, y: 168, width: 210, height: 212, radius: 4 },
  { key: 'mexican', x: 219, y: 168, width: 210, height: 212, radius: 4 },
  { key: 'japanese', x: 7, y: 381, width: 210, height: 188, radius: 4 },
  { key: 'chinese', x: 219, y: 381, width: 210, height: 188, radius: 4 },
];

const nutritionSelections: SelectHotspot[] = [
  { key: 'mediterranean', x: 60, y: 191, width: 319, height: 40, radius: 20 },
  { key: 'flexitarian', x: 60, y: 247, width: 280, height: 40, radius: 20 },
  { key: 'dash', x: 60, y: 303, width: 214, height: 40, radius: 20 },
  { key: 'keto', x: 60, y: 359, width: 338, height: 40, radius: 20 },
  { key: 'paleo', x: 60, y: 415, width: 220, height: 40, radius: 20 },
  { key: 'vegan', x: 60, y: 471, width: 220, height: 40, radius: 20 },
  { key: 'vegetarian', x: 60, y: 527, width: 280, height: 40, radius: 20 },
];

function getInitialScreen(): MainFlowScreenKey {
  if (Platform.OS !== 'web' || typeof window === 'undefined') return 'signIn';

  const requested = new URLSearchParams(window.location.search).get('screen') as MainFlowScreenKey | null;
  return requested && mainFlowScreens[requested] ? requested : 'signIn';
}

function getViewportWidth() {
  if (Platform.OS !== 'web' || typeof window === 'undefined') return FIGMA_WIDTH;

  return Math.min(
    ...[
      window.innerWidth,
      window.outerWidth,
      window.screen?.width,
      window.visualViewport?.width,
      document.documentElement?.clientWidth,
      document.body?.clientWidth,
      FIGMA_WIDTH,
    ].filter((value): value is number => typeof value === 'number' && value > 0),
  );
}

function getRouteHotspots(screen: MainFlowScreenKey): RouteHotspot[] {
  if (screen === 'signIn') {
    return [
      { key: 'sign-in', x: 119, y: 552, width: 189, height: 56, to: 'home' },
      ...bottomNav,
    ];
  }

  if (screen === 'home') return [...homeRoutes, ...bottomNav];

  if (screen === 'beefHome') {
    return [...beefRoutes, preferenceSaveRoute, ...bottomNav];
  }

  if (screen === 'allergiesHome' || screen === 'cuisinesHome' || screen === 'nutritionHome') {
    return [preferenceSaveRoute, ...bottomNav];
  }

  return [...bottomNav];
}

function getSelectHotspots(screen: MainFlowScreenKey): SelectHotspot[] {
  if (screen === 'allergiesHome') return allergySelections;
  if (screen === 'cuisinesHome') return cuisineSelections;
  if (screen === 'nutritionHome') return nutritionSelections;
  return [];
}

export function MainFlowPrototypeApp() {
  const [screen, setScreen] = useState<MainFlowScreenKey>(getInitialScreen);
  const [frameWidth, setFrameWidth] = useState(FIGMA_WIDTH);
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const activeScreen = mainFlowScreens[screen];
  const previewWidth = Platform.OS === 'web'
    ? Math.min(frameWidth, getViewportWidth(), FIGMA_WIDTH)
    : frameWidth;
  const scale = previewWidth / activeScreen.width;
  const frameHeight = activeScreen.height * scale;

  const toggleSelected = (key: string) => {
    setSelected((current) => ({ ...current, [key]: !current[key] }));
  };

  const toggleBeefRating = (row: number, rating: string) => {
    const rowKey = `beef-${row}`;
    const selectedKey = `${rowKey}-${rating}`;

    setSelected((current) => {
      const next = { ...current };
      beefRatingColumns.forEach((column) => {
        next[`${rowKey}-${column.key}`] = false;
      });
      next[selectedKey] = !current[selectedKey];
      return next;
    });
  };

  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.scrollContent} style={styles.scrollView}>
        <View onLayout={(event) => setFrameWidth(event.nativeEvent.layout.width)} style={styles.frame}>
          <ImageBackground
            accessibilityLabel={activeScreen.title}
            resizeMode="contain"
            source={activeScreen.source}
            style={{ width: previewWidth, height: frameHeight }}
          >
            {getRouteHotspots(screen).map((hotspot) => (
              <Pressable
                accessibilityLabel={`Go to ${mainFlowScreens[hotspot.to].title}`}
                accessibilityRole="button"
                key={`${screen}-${hotspot.key}`}
                onPress={() => setScreen(hotspot.to)}
                style={[
                  styles.hotspot,
                  {
                    left: hotspot.x * scale,
                    top: hotspot.y * scale,
                    width: hotspot.width * scale,
                    height: hotspot.height * scale,
                  },
                ]}
              />
            ))}

            {screen === 'beefHome' &&
              beefRatingRows.flatMap((row) =>
                beefRatingColumns.map((column) => {
                  const key = `beef-${row}-${column.key}`;
                  return (
                    <Pressable
                      accessibilityLabel={`Beef row ${row + 1} ${column.key}`}
                      accessibilityRole="button"
                      accessibilityState={{ selected: Boolean(selected[key]) }}
                      key={key}
                      onPress={() => toggleBeefRating(row, column.key)}
                      style={[
                        styles.selectionHotspot,
                        selected[key] && styles.selectionActive,
                        {
                          left: column.x * scale,
                          top: (226 + row * 68) * scale,
                          width: column.width * scale,
                          height: 44 * scale,
                          borderRadius: 22 * scale,
                        },
                      ]}
                    />
                  );
                }),
              )}

            {getSelectHotspots(screen).map((hotspot) => {
              const key = `${screen}-${hotspot.key}`;
              return (
                <Pressable
                  accessibilityLabel={`${activeScreen.title} ${hotspot.key}`}
                  accessibilityRole="button"
                  accessibilityState={{ selected: Boolean(selected[key]) }}
                  key={key}
                  onPress={() => toggleSelected(key)}
                  style={[
                    styles.selectionHotspot,
                    selected[key] && styles.selectionActive,
                    {
                      left: hotspot.x * scale,
                      top: hotspot.y * scale,
                      width: hotspot.width * scale,
                      height: hotspot.height * scale,
                      borderRadius: (hotspot.radius ?? 10) * scale,
                    },
                  ]}
                />
              );
            })}
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    minHeight: '100%',
  },
  frame: {
    width: '100%',
    maxWidth: FIGMA_WIDTH,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  hotspot: {
    position: 'absolute',
  },
  selectionHotspot: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectionActive: {
    borderColor: '#184614',
    backgroundColor: 'rgba(163, 189, 156, 0.25)',
  },
});

import { useState } from 'react';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { getHotspots } from './hotspots';
import { ScreenKey, screens } from './screens';

const FRAME_WIDTH = 440;
const defaultScreenSize = { width: 440, height: 956 };
const screenSizes: Partial<Record<ScreenKey, { width: number; height: number }>> = {
  allergiesHome: { width: 440, height: 962 },
  beansHome: { width: 440, height: 962 },
  beef: { width: 445, height: 1202 },
  beefHome: { width: 440, height: 962 },
  cuisinesHome: { width: 440, height: 962 },
  dairy: { width: 440, height: 5308 },
  dairyHome: { width: 440, height: 962 },
  exoticHome: { width: 440, height: 962 },
  fruit: { width: 440, height: 1889 },
  fruitHome: { width: 440, height: 962 },
  game: { width: 440, height: 1837 },
  grains: { width: 440, height: 5553 },
  grainsHome: { width: 440, height: 962 },
  home: { width: 440, height: 956 },
  lamb: { width: 440, height: 1894 },
  lambHome: { width: 440, height: 962 },
  nuts: { width: 440, height: 5599 },
  nutsHome: { width: 440, height: 962 },
  oils: { width: 440, height: 5461 },
  oilsHome: { width: 440, height: 962 },
  pork: { width: 440, height: 1259 },
  porkHome: { width: 440, height: 962 },
  poultry: { width: 441, height: 1453 },
  poultryHome: { width: 440, height: 962 },
  recipesSunday: { width: 453, height: 956 },
  sauces: { width: 440, height: 5599 },
  saucesHome: { width: 440, height: 962 },
  seafood: { width: 440, height: 1853 },
  seafoodHome: { width: 440, height: 962 },
  shoppingList: { width: 440, height: 978 },
  spices: { width: 440, height: 5461 },
  spicesHome: { width: 440, height: 962 },
  vegetables: { width: 440, height: 1852 },
  veggiesHome: { width: 440, height: 962 },
};

export function PrototypeApp() {
  const [screen, setScreen] = useState<ScreenKey>('signIn');
  const [frameWidth, setFrameWidth] = useState(FRAME_WIDTH);
  const activeScreen = screens[screen];
  const imageSize = screenSizes[screen] ?? defaultScreenSize;
  const scale = frameWidth / imageSize.width;
  const frameHeight = imageSize.height * scale;

  return (
    <View style={styles.page}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}
      >
        <View
          onLayout={(event) => setFrameWidth(event.nativeEvent.layout.width)}
          style={styles.frame}
        >
          <ImageBackground
            accessibilityLabel={activeScreen.title}
            resizeMode="contain"
            source={activeScreen.source}
            style={{ width: frameWidth, height: frameHeight }}
          >
            {getHotspots(screen).map((hotspot) => (
              <Pressable
                accessibilityLabel={`Go to ${screens[hotspot.to].title}`}
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
    maxWidth: FRAME_WIDTH,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
  },
  hotspot: {
    position: 'absolute',
  },
});

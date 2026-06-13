import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigator } from '../../core/useNavigator';
import type { ScreenKey } from '../../features/prototype/screens';
import { colors } from '../../theme';

type Tab = 'home' | 'preferences' | 'meals';

type Props = {
  activeTab?: Tab;
};

function getTab(screen: ScreenKey): Tab {
  if (screen === 'home' || screen === 'signIn' || screen === 'signup') return 'home';
  if (screen.startsWith('meals') || screen.startsWith('recipes') || screen === 'shoppingList') return 'meals';
  return 'preferences';
}

export function BottomNavBar({ activeTab }: Props) {
  const { screen, navigate } = useNavigator();
  const active = activeTab ?? getTab(screen);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab} onPress={() => navigate('home')} activeOpacity={0.7}>
        <HomeIcon active={active === 'home'} />
        <Text style={[styles.label, active === 'home' && styles.labelActive]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => navigate('beefHome')} activeOpacity={0.7}>
        <SlidersIcon active={active === 'preferences'} />
        <Text style={[styles.label, active === 'preferences' && styles.labelActive]}>Tastes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab} onPress={() => navigate('mealsMonday')} activeOpacity={0.7}>
        <PlateIcon active={active === 'meals'} />
        <Text style={[styles.label, active === 'meals' && styles.labelActive]}>Meals</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeIcon({ active }: { active: boolean }) {
  const c = active ? colors.deepGreen : colors.mutedText;
  return (
    <View style={styles.iconWrap}>
      <View style={[styles.homeRoof, { borderBottomColor: c }]} />
      <View style={[styles.homeBody, { borderColor: c }]}>
        <View style={[styles.homeDoor, { backgroundColor: c }]} />
      </View>
    </View>
  );
}

function SlidersIcon({ active }: { active: boolean }) {
  const c = active ? colors.deepGreen : colors.mutedText;
  return (
    <View style={styles.iconWrap}>
      {[0, 1, 2].map((i) => (
        <View key={i} style={styles.sliderRow}>
          <View style={[styles.sliderLine, { backgroundColor: c }]} />
          <View style={[styles.sliderDot, { backgroundColor: c, left: i === 0 ? 6 : i === 1 ? 14 : 10 }]} />
        </View>
      ))}
    </View>
  );
}

function PlateIcon({ active }: { active: boolean }) {
  const c = active ? colors.deepGreen : colors.mutedText;
  return (
    <View style={styles.iconWrap}>
      <View style={[styles.plate, { borderColor: c }]}>
        <View style={[styles.plateInner, { backgroundColor: active ? colors.deepGreen : 'transparent', borderColor: c }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: '#E3E3E3',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  label: {
    fontFamily: 'serif',
    fontSize: 11,
    color: colors.mutedText,
  },
  labelActive: {
    color: colors.deepGreen,
    fontWeight: '600',
  },
  iconWrap: {
    width: 24,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeRoof: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 9,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    marginBottom: 0,
  },
  homeBody: {
    width: 16,
    height: 11,
    borderWidth: 1.5,
    borderTopWidth: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 0,
  },
  homeDoor: {
    width: 5,
    height: 6,
  },
  sliderRow: {
    width: 22,
    height: 5,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginVertical: 1.5,
  },
  sliderLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1.5,
    borderRadius: 1,
  },
  sliderDot: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: 3,
    top: -2,
  },
  plate: {
    width: 22,
    height: 14,
    borderRadius: 11,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plateInner: {
    width: 12,
    height: 8,
    borderRadius: 6,
    borderWidth: 1,
  },
});

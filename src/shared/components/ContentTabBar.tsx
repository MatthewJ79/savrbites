import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colors } from '../../theme';

type Tab = 'meals' | 'recipes' | 'shopping';

type Props = {
  activeTab: Tab;
  onSelect: (t: Tab) => void;
};

type TabDef = { key: Tab; label: string; icon: string };

const TABS: TabDef[] = [
  { key: 'meals', label: 'Meals', icon: '⬤' },
  { key: 'recipes', label: 'Recipe', icon: '≡' },
  { key: 'shopping', label: 'Shopping', icon: '◻' },
];

export function ContentTabBar({ activeTab, onSelect }: Props) {
  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const active = tab.key === activeTab;
        return (
          <TouchableOpacity
            key={tab.key}
            activeOpacity={0.75}
            onPress={() => onSelect(tab.key)}
            style={styles.tab}
          >
            <Text style={[styles.icon, active && styles.iconActive]}>
              {tab.icon}
            </Text>
            <Text style={[styles.label, active && styles.labelActive]}>
              {tab.label}
            </Text>
            {active && <View style={styles.underline} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E3E3E3',
    backgroundColor: colors.white,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    position: 'relative',
    gap: 2,
  },
  icon: {
    fontSize: 14,
    color: colors.mutedText,
  },
  iconActive: {
    color: colors.deepGreen,
  },
  label: {
    fontFamily: 'serif',
    fontSize: 13,
    color: colors.mutedText,
  },
  labelActive: {
    color: colors.black,
    fontWeight: '600',
  },
  underline: {
    position: 'absolute',
    bottom: 0,
    left: 12,
    right: 12,
    height: 2,
    backgroundColor: colors.deepGreen,
    borderRadius: 1,
  },
});

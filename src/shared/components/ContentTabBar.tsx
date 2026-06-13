import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colors, layout } from '../../theme';

type Tab = 'meals' | 'recipes' | 'shopping';

type Props = {
  activeTab: Tab;
  onSelect: (t: Tab) => void;
};

const TABS: Array<{ key: Tab; label: string }> = [
  { key: 'meals', label: 'Meals' },
  { key: 'recipes', label: 'Recipe' },
  { key: 'shopping', label: 'Shopping' },
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
            <TabIcon tab={tab.key} active={active} />
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

function TabIcon({ tab, active }: { tab: Tab; active: boolean }) {
  const color = active ? colors.deepGreen : colors.mutedText;

  if (tab === 'recipes') {
    return (
      <View style={[styles.documentIcon, { borderColor: color }]}>
        <View style={[styles.docLine, { backgroundColor: color }]} />
        <View style={[styles.docLine, { backgroundColor: color }]} />
      </View>
    );
  }

  if (tab === 'shopping') {
    return (
      <View style={[styles.bagIcon, { borderColor: color }]}>
        <View style={[styles.bagHandle, { borderColor: color }]} />
      </View>
    );
  }

  return (
    <View style={styles.mealIcon}>
      <View style={[styles.forkLine, { backgroundColor: color }]} />
      <View style={[styles.plate, { borderColor: color }]} />
      <View style={[styles.knifeLine, { backgroundColor: color }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: '100%',
    maxWidth: layout.figmaFrameWidth,
    borderBottomWidth: 1,
    borderBottomColor: '#E3E3E3',
    backgroundColor: colors.white,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    position: 'relative',
    gap: 3,
  },
  mealIcon: {
    width: 22,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forkLine: {
    position: 'absolute',
    left: 1,
    width: 2,
    height: 14,
    borderRadius: 1,
  },
  plate: {
    width: 14,
    height: 10,
    borderRadius: 7,
    borderWidth: 1.5,
  },
  knifeLine: {
    position: 'absolute',
    right: 1,
    width: 2,
    height: 14,
    borderRadius: 1,
  },
  documentIcon: {
    width: 14,
    height: 16,
    borderRadius: 2,
    borderWidth: 1.5,
    paddingHorizontal: 2,
    paddingTop: 4,
    gap: 3,
  },
  docLine: {
    height: 1.5,
    borderRadius: 1,
  },
  bagIcon: {
    width: 15,
    height: 14,
    borderRadius: 2,
    borderWidth: 1.5,
    marginTop: 2,
  },
  bagHandle: {
    position: 'absolute',
    top: -5,
    left: 3,
    width: 7,
    height: 7,
    borderTopWidth: 1.5,
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
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

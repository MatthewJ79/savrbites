import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigator } from '../../../core/useNavigator';
import { buildShoppingList } from '../../../data/buildShoppingList';
import { ContentTabBar } from '../../../shared/components/ContentTabBar';
import { BottomNavBar } from '../../../shared/components/BottomNavBar';
import { PlanHeaderBanner } from '../../../shared/components/PlanHeaderBanner';
import { ScreenFrame } from '../../../shared/components/ScreenFrame';
import { useMealPlan } from '../../../state/MealPlanContext';
import { colors } from '../../../theme';

export function ShoppingListScreen() {
  const { navigate } = useNavigator();
  const { plan } = useMealPlan();
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const items = useMemo(() => buildShoppingList(plan), [plan]);
  const sections = [...new Set(items.map((i) => i.section))];

  const toggle = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <ScreenFrame>
      <PlanHeaderBanner />
      <ContentTabBar
        activeTab="shopping"
        onSelect={(t) => {
          if (t === 'meals') navigate('mealsMonday');
          if (t === 'recipes') navigate('recipesMonday');
        }}
      />

      <FlatList
        data={sections}
        keyExtractor={(s) => s}
        contentContainerStyle={styles.content}
        renderItem={({ item: section }) => {
          const sectionItems = items.filter((i) => i.section === section);
          return (
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <SectionIcon section={section} />
                <Text style={styles.sectionTitle}>{section}</Text>
              </View>
              {sectionItems.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.75}
                  onPress={() => toggle(item.id)}
                  style={styles.row}
                >
                  <View style={[styles.checkbox, checked[item.id] && styles.checkboxChecked]}>
                    {checked[item.id] && <View style={styles.checkmark} />}
                  </View>
                  <Text style={[styles.itemLabel, checked[item.id] && styles.itemLabelDone]}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          );
        }}
        ListFooterComponent={<View style={{ height: 80 }} />}
      />

      <BottomNavBar activeTab="meals" />
    </ScreenFrame>
  );
}

function SectionIcon({ section }: { section: string }) {
  const fill = section === 'Proteins' ? '#7E2D24' : section === 'Produce' ? colors.brandGreen : colors.deepGreen;

  return (
    <View style={styles.sectionIcon}>
      <View style={[styles.sectionIconBody, { backgroundColor: fill }]} />
      <View style={[styles.sectionIconAccent, { backgroundColor: fill }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: { paddingBottom: 20 },
  section: { paddingTop: 8 },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontFamily: 'serif',
    fontSize: 18,
    color: colors.deepGreen,
    fontWeight: '700',
  },
  sectionIcon: {
    width: 24,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionIconBody: {
    width: 18,
    height: 12,
    borderRadius: 7,
    transform: [{ rotate: '-12deg' }],
  },
  sectionIconAccent: {
    position: 'absolute',
    top: 1,
    right: 1,
    width: 8,
    height: 3,
    borderRadius: 2,
    transform: [{ rotate: '35deg' }],
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1.5,
    borderColor: colors.black,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  checkboxChecked: {
    backgroundColor: colors.brandGreen,
    borderColor: colors.deepGreen,
  },
  checkmark: {
    width: 11,
    height: 6,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.deepGreen,
    transform: [{ rotate: '-45deg' }],
    marginBottom: 2,
  },
  itemLabel: {
    fontFamily: 'serif',
    fontSize: 15,
    color: colors.black,
    flex: 1,
  },
  itemLabelDone: {
    color: colors.mutedText,
    textDecorationLine: 'line-through',
  },
});

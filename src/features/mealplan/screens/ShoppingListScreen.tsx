import { useMemo, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigator } from '../../../core/useNavigator';
import { buildShoppingList } from '../../../data/buildShoppingList';
import { ContentTabBar } from '../../../shared/components/ContentTabBar';
import { BottomNavBar } from '../../../shared/components/BottomNavBar';
import { PlanHeaderBanner } from '../../../shared/components/PlanHeaderBanner';
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
    <SafeAreaView style={styles.screen}>
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
              <Text style={styles.sectionHeader}>🛒  {section}</Text>
              {sectionItems.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.75}
                  onPress={() => toggle(item.id)}
                  style={styles.row}
                >
                  <View style={[styles.checkbox, checked[item.id] && styles.checkboxChecked]}>
                    {checked[item.id] && <Text style={styles.checkmark}>✓</Text>}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.linen },
  content: { paddingBottom: 20 },
  section: { paddingTop: 8 },
  sectionHeader: {
    fontFamily: 'serif',
    fontSize: 18,
    color: colors.deepGreen,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontWeight: '700',
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
    fontSize: 14,
    color: colors.deepGreen,
    fontWeight: '700',
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

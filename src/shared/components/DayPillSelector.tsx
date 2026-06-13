import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors, layout } from '../../theme';

const DAY_LABELS = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

type Props = {
  activeIndex: number;
  onSelect: (i: number) => void;
};

export function DayPillSelector({ activeIndex, onSelect }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      style={styles.scroll}
    >
      {DAY_LABELS.map((day, i) => (
        <TouchableOpacity
          key={day}
          activeOpacity={0.75}
          onPress={() => onSelect(i)}
          style={[styles.pill, i === activeIndex && styles.pillActive]}
        >
          <Text style={[styles.label, i === activeIndex && styles.labelActive]}>
            {day}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: layout.figmaFrameWidth,
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 8,
  },
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.black,
    minWidth: 50,
    alignItems: 'center',
  },
  pillActive: {
    backgroundColor: colors.deepGreen,
    borderColor: colors.deepGreen,
  },
  label: {
    fontFamily: 'serif',
    fontSize: 13,
    color: colors.black,
  },
  labelActive: {
    color: colors.white,
  },
});

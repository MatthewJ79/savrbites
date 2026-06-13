import { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colors } from '../../theme';

type Props = {
  label: string;
  options: string[];
  value: string | null;
  onSelect: (v: string) => void;
};

export function DropdownPicker({ label, options, value, onSelect }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setOpen(true)}
        style={[styles.trigger, value && styles.triggerSelected]}
      >
        <Text style={styles.triggerText} numberOfLines={1}>
          {value ?? label}
        </Text>
        <Text style={styles.chevron}>{open ? '∧' : '∨'}</Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent
        visible={open}
        onRequestClose={() => setOpen(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setOpen(false)}
          style={styles.backdrop}
        >
          <View style={styles.sheet}>
            <Text style={styles.sheetTitle}>{label}</Text>
            <ScrollView>
              {options.map((opt) => (
                <TouchableOpacity
                  key={opt}
                  activeOpacity={0.75}
                  onPress={() => { onSelect(opt); setOpen(false); }}
                  style={[styles.option, value === opt && styles.optionSelected]}
                >
                  <Text style={[styles.optionText, value === opt && styles.optionTextSelected]}>
                    {opt}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.black,
    gap: 6,
    backgroundColor: colors.white,
  },
  triggerSelected: {
    backgroundColor: colors.brandGreen,
    borderColor: colors.brandGreen,
  },
  triggerText: {
    fontFamily: 'serif',
    fontSize: 13,
    color: colors.black,
    flex: 1,
  },
  chevron: {
    fontSize: 11,
    color: colors.black,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  sheet: {
    backgroundColor: colors.white,
    borderRadius: 16,
    paddingVertical: 12,
    width: '100%',
    maxHeight: 400,
  },
  sheetTitle: {
    fontFamily: 'serif',
    fontSize: 16,
    fontWeight: '700',
    color: colors.deepGreen,
    paddingHorizontal: 20,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E3E3E3',
    marginBottom: 4,
  },
  option: {
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  optionSelected: {
    backgroundColor: 'rgba(163,189,156,0.2)',
  },
  optionText: {
    fontFamily: 'serif',
    fontSize: 15,
    color: colors.black,
  },
  optionTextSelected: {
    color: colors.deepGreen,
    fontWeight: '600',
  },
});

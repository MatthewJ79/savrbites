import { StyleSheet, Text, TextInput, View } from 'react-native';

import { colors, typography } from '../../theme';

type Props = {
  label: string;
  value: number;
  onChange: (n: number) => void;
};

export function NumberInput({ label, value, onChange }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        keyboardType="numeric"
        onChangeText={(t) => {
          const n = parseInt(t, 10);
          if (!isNaN(n) && n >= 0) onChange(n);
        }}
        style={styles.input}
        value={String(value)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 4,
  },
  label: {
    fontFamily: typography.bodyFamily,
    fontSize: 11,
    color: colors.black,
    textAlign: 'center',
  },
  input: {
    width: 80,
    height: 40,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 8,
    textAlign: 'center',
    fontFamily: typography.bodyFamily,
    fontSize: 16,
    color: colors.black,
    backgroundColor: colors.white,
  },
});

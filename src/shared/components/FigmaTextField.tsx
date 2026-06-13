import { StyleSheet, Text, TextInput, View } from 'react-native';

import { colors, typography } from '../../theme';

type FigmaTextFieldProps = {
  label: string;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  top: number;
};

export function FigmaTextField({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  top,
}: FigmaTextFieldProps) {
  return (
    <View style={[styles.container, { top }]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autoCapitalize="none"
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.mutedText}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 60,
    width: 305,
    height: 100,
  },
  label: {
    color: colors.black,
    fontFamily: typography.bodyFamily,
    fontSize: typography.inputLabelSize,
    lineHeight: 23,
  },
  input: {
    width: 305,
    height: 54,
    marginTop: 8,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 2,
    paddingHorizontal: 14,
    color: colors.black,
    backgroundColor: colors.white,
    fontFamily: typography.bodyFamily,
    fontSize: typography.inputTextSize,
  },
});

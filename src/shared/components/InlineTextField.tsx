import { StyleSheet, TextInput, View } from 'react-native';

import { colors, typography } from '../../theme';

type Props = {
  placeholder: string;
  value?: string;
  onChangeText?: (t: string) => void;
  secureTextEntry?: boolean;
};

export function InlineTextField({ placeholder, value, onChangeText, secureTextEntry }: Props) {
  return (
    <View style={s.wrap}>
      <TextInput
        autoCapitalize="none"
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.mutedText}
        secureTextEntry={secureTextEntry}
        style={s.input}
        value={value}
      />
    </View>
  );
}

const s = StyleSheet.create({
  wrap: { flex: 1 },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 4,
    paddingHorizontal: 14,
    color: colors.black,
    backgroundColor: colors.white,
    fontFamily: typography.bodyFamily,
    fontSize: typography.inputTextSize,
  },
});

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colors, typography } from '../../theme';

type Props = {
  title: string;
  subtitle: string;
  color: string;
  buttonLabel: string;
  onPress: () => void;
};

export function PreferenceCard({ title, subtitle, color, buttonLabel, onPress }: Props) {
  return (
    <View style={styles.card}>
      <View style={[styles.thumb, { backgroundColor: color }]} />
      <View style={styles.textBlock}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle} numberOfLines={2}>{subtitle}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  thumb: {
    width: 64,
    height: 64,
    borderRadius: 10,
    flexShrink: 0,
  },
  textBlock: {
    flex: 1,
    gap: 3,
  },
  title: {
    fontFamily: typography.brandFamily,
    fontSize: 18,
    color: colors.brandGreen,
    fontWeight: '700',
  },
  subtitle: {
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    color: colors.black,
    lineHeight: 18,
  },
  button: {
    backgroundColor: colors.brandGreen,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: colors.black,
  },
  buttonText: {
    fontFamily: typography.bodyFamily,
    fontSize: 13,
    color: colors.black,
  },
});

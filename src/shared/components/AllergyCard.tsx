import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  label: string;
  color: string;
  active: boolean;
  onToggle: () => void;
  size: number;
};

export function AllergyCard({ label, color, active, onToggle, size }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onToggle} style={[styles.card, { width: size, height: size, backgroundColor: color }]}>
      <Text style={styles.label}>{label}</Text>

      {active ? (
        <View style={styles.bigNoWrap}>
          <View style={styles.bigCircle}>
            <View style={styles.bigLine} />
          </View>
        </View>
      ) : (
        <View style={styles.smallNoWrap}>
          <View style={styles.smallCircle}>
            <View style={styles.smallLine} />
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 4,
    borderRadius: 4,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  label: {
    position: 'absolute',
    top: 8,
    left: 8,
    fontFamily: 'serif',
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
    textShadowColor: 'rgba(255,255,255,0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  bigNoWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 5,
    borderColor: '#CC2200',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(204,34,0,0.15)',
  },
  bigLine: {
    position: 'absolute',
    width: 80,
    height: 5,
    backgroundColor: '#CC2200',
    borderRadius: 2,
    transform: [{ rotate: '-45deg' }],
  },
  smallNoWrap: {
    position: 'absolute',
    bottom: 6,
    left: 6,
  },
  smallCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#CC2200',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(204,34,0,0.1)',
  },
  smallLine: {
    position: 'absolute',
    width: 24,
    height: 2,
    backgroundColor: '#CC2200',
    borderRadius: 1,
    transform: [{ rotate: '-45deg' }],
  },
});

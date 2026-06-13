import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect, useRef } from 'react';

import { colors } from '../../theme';

type Props = {
  value: boolean;
  onChange: (v: boolean) => void;
};

export function ToggleSwitch({ value, onChange }: Props) {
  const anim = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: value ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [value, anim]);

  const trackColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#D3D3D3', colors.brandGreen],
  });

  const thumbLeft = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 24],
  });

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onChange(!value)}>
      <Animated.View style={[styles.track, { backgroundColor: trackColor }]}>
        <Animated.View style={[styles.thumb, { left: thumbLeft }]} />
      </Animated.View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  track: {
    width: 50,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
  },
  thumb: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});

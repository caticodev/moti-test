import { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
  withRepeat,
  useSharedValue,
} from "react-native-reanimated";

export default function Shape() {
  const animation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: animation.value }],
  }));

  useEffect(() => {
    animation.value = withRepeat(withTiming(100, { duration: 1000 }), -1, true);
  }, []);

  return (
    <Animated.View style={[styles.shape, animatedStyle]}>
      <Text style={{ textAlign: "center" }}>Reanimated</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: "center",
    height: 100,
    width: 100,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "white",
  },
});

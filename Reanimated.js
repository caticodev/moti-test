import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withSequence,
  runOnJS,
} from "react-native-reanimated";

export default function Shape() {
  const [val, setValue] = useState(100);
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  useEffect(() => {
    translateY.value = withSequence(
      withTiming(val, { duration: 1000 }),
      withTiming(0, { duration: 1000 }, () => {
        runOnJS(setValue)(-100);
      })
    );
  }, [val]);

  return <Animated.View style={[styles.shape, animatedStyle]} />;
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: "center",
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "white",
  },
});

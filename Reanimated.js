import { useState } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
  withSequence,
  runOnJS,
} from "react-native-reanimated";

export default function Shape() {
  const [val, setValue] = useState(100);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withSequence(
          withTiming(0, { duration: 0 }),
          withTiming(val, { duration: 1000 }),
          withTiming(0, { duration: 1000 }, () => {
            runOnJS(setValue)(-100);
          })
        ),
      },
    ],
  }));

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

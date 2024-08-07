import { MotiView } from "moti";
import { StyleSheet, Text } from "react-native";

export default function Shape() {
  return (
    <MotiView
      from={{
        translateY: 0,
      }}
      animate={{
        translateY: 100,
      }}
      transition={{
        type: "timing",
        duration: 1000,
        loop: true,
      }}
      style={styles.shape}
    >
      <Text style={{ textAlign: "center" }}>Moti</Text>
    </MotiView>
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

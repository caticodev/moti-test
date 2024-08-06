import { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Moti from "./Moti";
import Reanimated from "./Reanimated";

const variants = {
  moti: Moti,
  reanimated: Reanimated,
};

export default function App() {
  const [variant, setVariant] = useState("moti");
  const Comp = variants[variant];

  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Pressable onPress={() => setVariant("moti")}>
          <Text style={[styles.text, variant === "moti" && styles.active]}>
            Moti
          </Text>
        </Pressable>
        <Pressable onPress={() => setVariant("reanimated")}>
          <Text
            style={[styles.text, variant === "reanimated" && styles.active]}
          >
            Reanimated
          </Text>
        </Pressable>
      </View>
      <Comp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#9c1aff",
  },
  bar: {
    position: "absolute",
    top: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  active: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

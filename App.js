import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import Moti from "./Moti";
import Reanimated from "./Reanimated";

export default function App() {
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setUpdated(true), 3000);
    return () => clearTimeout(timer);
  }, [updated]);

  return (
    <View style={styles.container}>
      <Reanimated />
      <Moti />
      <View style={styles.countdown}>
        <Text style={styles.text}>
          {updated ? "updated" : "waiting for update..."}
        </Text>
      </View>
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
  countdown: {
    position: "absolute",
    top: 50,
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

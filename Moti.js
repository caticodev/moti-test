import { MotiView } from "moti";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function Shape() {
  const [val, setValue] = useState(100);

  return (
    <MotiView
      animate={{
        translateY: [
          0,
          val,
          {
            value: 0,
            type: "timing",
            onDidAnimate: () => {
              setValue(-100);
            },
          },
        ],
      }}
      transition={{
        type: "timing",
        duration: 1000,
      }}
      style={styles.shape}
    />
  );
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

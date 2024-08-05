import { MotiView } from "moti";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

function Shape({ val, onEnd }) {
  return (
    <MotiView
      animate={{
        translateY: [
          0,
          val,
          {
            value: 0,
            type: "timing",
            onDidAnimate: (finished, val, events) => {
              console.log({ finished, val, events });
              // if (finished) onEnd();
            },
          },
        ],
      }}
      transition={{
        type: "timing",
        duration: 1000,
        repeat: 1,
        repeatReverse: true,
      }}
      style={styles.shape}
    />
  );
}

export default function App() {
  const [val, setValue] = useState(100);

  return (
    <View style={styles.container}>
      <Shape val={val} onEnd={() => setValue(val === 100 ? -100 : 100)} />
    </View>
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#9c1aff",
  },
});

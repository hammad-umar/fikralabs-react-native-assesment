import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// 1. Design the bottom tab.
// 2. Resuable Components.
//    -> Emergency Card.
//    -> Featured Card.
//    -> Event Card.
//    -> Calculator Card.
//    -> Action Card.

// 3. Other Components.
//    -> Progress, Header, Lists.

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

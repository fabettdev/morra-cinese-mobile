// Expo
import { StatusBar } from "expo-status-bar";

// React Native
import { StyleSheet, View } from "react-native";

// Morra Cinese Components Library
import { SpaceBackground } from "morra-cinese-components";

// Images
const backgroundImage = require("./assets/images/welcome/background.png");

export default function App() {
  return (
    <View style={styles.container}>
      <SpaceBackground bgImage={backgroundImage} />
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

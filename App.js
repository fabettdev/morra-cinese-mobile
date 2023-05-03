// Expo
import { StatusBar } from "expo-status-bar";

// React Native
import { StyleSheet, View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Morra Cinese Components Library
// import { SpaceBackground } from "morra-cinese-components";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Images
const backgroundImage = require("./assets/images/welcome/background.png");

// Screens
import Welcome from "./screens/welcome/Welcome";
import Game from "./screens/game/Game";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={"auto"} hidden />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Game" component={Game} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

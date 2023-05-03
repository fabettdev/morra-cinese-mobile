// React Native
import { View, Text } from "react-native";

//Style
import { gameStyle } from "./gameStyle";

function Game(props) {
  console.log("props.route.params.name:", props.route?.params?.name);
  return (
    <View style={gameStyle.container}>
      <Text>Game</Text>
    </View>
  );
}

export default Game;

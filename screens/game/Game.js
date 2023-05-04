// React
import React, { useState } from "react";

// React Native
import {
  View,
  Text,
  Image,
  ImageBackground,
  Pressable,
  TouchableOpacity,
} from "react-native";

// Morra Cinese Components Library
import {
  SpaceBackground,
  Controls,
  BattleButton,
  BattleBoard,
  MoveIcon,
} from "morra-cinese-components";

// Images
var backgroundImage = require("../../assets/images/game/background2.png");
var controlsLeft = require("../../assets/images/game/controls_left.png");
var controlsRight = require("../../assets/images/game/controls_right.png");
var screenBoard = require("../../assets/images/game/screen.png");
var rock = require("../../assets/images/game/moves/0.png");
var paper = require("../../assets/images/game/moves/1.png");
var scissors = require("../../assets/images/game/moves/2.png");
var cpu = require("../../assets/images/game/dotnet.png");

//Style
import { gameStyle } from "./gameStyle";

function Game(props) {
  const [state, setState] = useState({
    userMove: "",
  });

  function selectUserMove(move) {
    setState({
      ...state,
      userMove: move,
    });
  }

  console.log("props.route.params.name:", props.route?.params?.name);
  return (
    <SpaceBackground bgImage={backgroundImage}>
      <View style={gameStyle.container}>
        <Controls image={controlsLeft} width={50} height={180} />
        <BattleBoard
          username={props.route?.params?.name || "Player"}
          fontSize={18}
          width={250}
          height={200}
          image={screenBoard}
        >
          <MoveIcon
            image={rock}
            size={65}
            selectedMove={0}
            selectUserMove={selectUserMove}
            userMove={state.userMove}
          />
          <MoveIcon
            image={paper}
            size={65}
            selectedMove={1}
            selectUserMove={selectUserMove}
            userMove={state.userMove}
          />
          <MoveIcon
            image={scissors}
            size={65}
            selectedMove={2}
            selectUserMove={selectUserMove}
            userMove={state.userMove}
          />
        </BattleBoard>

        <BattleButton buttonType="battle" dimensions={80} fontSize={16} />
        <BattleBoard
          image={screenBoard}
          width={250}
          height={200}
          fontSize={18}
          username={"CPU"}
        >
          <Image
            source={cpu}
            style={{
              width: 120,
              height: 120,
              borderRadius: 100,
            }}
            resizeMode="contain"
          />
        </BattleBoard>
        <Controls image={controlsRight} width={50} height={180} />
      </View>
    </SpaceBackground>
  );
}

export default Game;

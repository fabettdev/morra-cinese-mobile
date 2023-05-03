// React
import React from "react";

// Style
import { welcomeStyle } from "./welcomeStyle";

// Native
import { Image, View, Text } from "react-native";

// Morra Cinese Components Library
import {
  SpaceBackground,
  TextTitle,
  Form,
  LeaderboardButton,
} from "morra-cinese-components";

// Images
var logo = require("../../assets/images/logo/logo.png");
var orangeChallenger = require("../../assets/images/welcome/challenger.png");
var blueChallenger = require("../../assets/images/welcome/astronaut-bg.png");
var backgroundImage = require("../../assets/images/welcome/background.png");

function Welcome(props) {
  function goToGame(name) {
    console.log(name);
    props.navigation.navigate("Game", {
      name,
    });
  }

  return (
    <SpaceBackground bgImage={backgroundImage}>
      {/* <View style={welcomeStyle.wrapper}> */}
      <TextTitle title="Rock, Paper, Scissors!" size={32} />
      <Image source={logo} style={welcomeStyle.logo} resizeMode="contain" />
      <Text style={welcomeStyle.cta}>Insert your name</Text>
      <Form onSubmit={goToGame} />
      <Image
        source={orangeChallenger}
        style={welcomeStyle.challenger}
        resizeMode="contain"
      />
      <LeaderboardButton image={blueChallenger} />
      {/* </View> */}
    </SpaceBackground>
  );
}

export default Welcome;

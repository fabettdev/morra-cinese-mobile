import { StyleSheet } from "react-native";

export const welcomeStyle = StyleSheet.create({
  //   wrapper: {
  //     padding: 30,
  //     backgroundColor: "#36397750",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     borderRadius: 10,
  //     position: "relative",
  //   },
  logo: {
    width: Platform.OS === "web" ? 200 : 130,
    height: Platform.OS === "web" ? 200 : 130,
    marginBottom: Platform.OS === "web" ? 20 : 8,
  },
  cta: {
    color: "white",
    // fontFamily: "Poor Story",
    fontSize: Platform.OS === "web" ? 34 : 20,
    marginBottom: Platform.OS === "web" ? 20 : 5,
  },
  challenger: {
    position: "absolute",
    left: Platform.OS === "web" ? "10%" : "24%",
    top: "50%",
    width: Platform.OS === "web" ? 150 : 120,
    height: Platform.OS === "web" ? 150 : 120,
  },
});

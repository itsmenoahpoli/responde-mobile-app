import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("screen").height;
const screenScale = Dimensions.get("window").scale;
const screenWindowHeight = Dimensions.get("window").height;
const screenSoftBarHeight = screenHeight - screenWindowHeight;

export const APP_DIMENSIONS = {
  screenWidth,
  screenHeight,
  screenScale,
  screenWindowHeight,
  screenSoftBarHeight,
};

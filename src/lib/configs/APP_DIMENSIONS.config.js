import { Dimensions } from "react-native";

export const APP_DIMENSIONS = {
  screenWidth: Dimensions.get("window").width,
  screenHeight: Dimensions.get("window").height,
  screenScale: Dimensions.get("window").scale,
};

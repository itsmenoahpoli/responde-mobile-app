import { APP_DIMENSIONS } from "./../../lib/configs/APP_DIMENSIONS.config";

export const splashScreenStyles = {
  appVersionLabel: {
    position: "absolute",
    bottom: 1,
    right: 1,
    color: "#555",
    fontSize: 13,
  },

  mainContainer: {
    height: APP_DIMENSIONS.screenHeight,
    width: APP_DIMENSIONS.screenWidth,
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  image: { height: 200 },

  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 50,

    label: {
      color: "#999",
      fontSize: 12,
      marginTop: 8,
    },
  },
};

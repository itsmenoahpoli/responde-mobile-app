import { APP_DIMENSIONS } from "./../../lib/configs/APP_DIMENSIONS.config";

export const splashScreenStyles = {
  appVersionLabel: {
    color: "#222",
    fontSize: 10,
    textTransform: "uppercase",
    position: "absolute",
    top: 5,
    right: 5,
  },

  mainContainer: {
    height: APP_DIMENSIONS.screenHeight,
    width: APP_DIMENSIONS.screenWidth,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: "#fff",
    paddingTop: 100,

    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      image: {
        height: 150,
      },
    },

    headline: {
      color: "red",
      fontSize: 24,
      paddingTop: 30,
    },

    paragraph: {
      fontSize: 16,
      marginTop: 5,
    },

    formContainer: {
      marginTop: 10,

      button: {
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 20,
      },
    },

    contentContainer: {
      marginTop: 50,
    },
  },
};

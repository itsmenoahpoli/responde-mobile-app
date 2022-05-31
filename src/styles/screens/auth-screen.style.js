import { APP_DIMENSIONS } from "./../../lib/configs/APP_DIMENSIONS.config";

export const authScreenStyles = {
  container: {
    backgroundColor: "#f1f1f1",
    height: APP_DIMENSIONS.screenHeight,
    width: APP_DIMENSIONS.screenWidth,
    paddingTop: 50,

    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      image: {
        height: 200,
      },
    },

    form: {
      paddingLeft: 30,
      paddingRight: 30,

      heading: {
        fontSize: 36,
        fontWeight: "bold",
        paddingTop: 15,
        marginBottom: 10,
      },

      paragraph: {
        color: "#777",
        fontSize: 15,
        lineHeight: 25,
        marginBottom: 20,
      },

      formGroup: {
        marginBottom: 10,
      },

      button: {
        backgroundColor: "blue",
        paddingTop: 10,
        paddingBottom: 10,
      },
    },
  },
};

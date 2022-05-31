import React from "react";
import { View } from "react-native";
import { Headline } from "react-native-paper";

import { SafeAreaLayout } from "./../../components/layouts";

const splashScreenStyles = {
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  headline: { textAlign: "center", fontWeight: "bold" },
};

export const WelcomeScreen = () => {
  return (
    <SafeAreaLayout>
      <View style={splashScreenStyles.mainContainer}>
        <View>
          <Headline style={splashScreenStyles.headline}>
            GO RESPONDE APP
          </Headline>
        </View>
      </View>
    </SafeAreaLayout>
  );
};

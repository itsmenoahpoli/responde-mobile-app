import React from "react";
import SafeAreaView from "react-native-safe-area-view";
import { View } from "react-native";

const SAFE_AREA_INSET = {
  top: "always",
};

export const SafeAreaLayout = (props) => {
  const { children } = props;

  return (
    <SafeAreaView forceInset={SAFE_AREA_INSET}>
      <View style={{ height: "100%", backgroundColor: "#EEEEEE" }}>
        {children}
      </View>
    </SafeAreaView>
  );
};

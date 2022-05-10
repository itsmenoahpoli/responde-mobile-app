import React from "react";
import SafeAreaView from "react-native-safe-area-view";

const SAFE_AREA_INSET = {
  top: "always",
};

export const SafeAreaLayout = (props) => {
  const { children } = props;

  return <SafeAreaView forceInset={SAFE_AREA_INSET}>{children}</SafeAreaView>;
};

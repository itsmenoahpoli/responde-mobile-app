import React from "react";
import SafeAreaView from "react-native-safe-area-view";
import * as NavigationBar from "expo-navigation-bar";
import { View } from "react-native";

const SAFE_AREA_INSET = {
  top: "always",
};

export const SafeAreaLayout = (props) => {
  const { children } = props;
  const [barVisibility, setBarVisibility] = React.useState();

  // NavigationBar.addVisibilityListener(({ visibility }) => {
  //   if (visibility === "visible") {
  //     setBarVisibility(visibility);
  //   }
  // });

  // const navigationConfig = async () => {
  //   NavigationBar.setVisibilityAsync("hidden");
  // };

  // React.useEffect(() => {
  //   navigationConfig();
  // }, []);

  return (
    <SafeAreaView forceInset={SAFE_AREA_INSET}>
      <View>{children}</View>
    </SafeAreaView>
  );
};

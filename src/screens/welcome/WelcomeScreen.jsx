import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

import { SafeAreaLayout } from "./../../components/layouts";

export const WelcomeScreen = () => {
  return (
    <SafeAreaLayout>
      <View>
        <Text>Welcome Screen</Text>
      </View>
    </SafeAreaLayout>
  );
};

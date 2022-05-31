import React from "react";
import { View } from "react-native";
import { Headline } from "react-native-paper";

import { SafeAreaLayout } from "../../components/layouts";
import { authScreenStyles } from "../../styles/screens/auth-screen.style";

export const LoginScreen = () => {
  return (
    <SafeAreaLayout>
      <View style={authScreenStyles.container}>
        <Headline>Log In</Headline>
      </View>
    </SafeAreaLayout>
  );
};

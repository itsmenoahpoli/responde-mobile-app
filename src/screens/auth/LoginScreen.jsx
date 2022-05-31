import React from "react";
import { View, Image } from "react-native";
import { Headline, Paragraph, TextInput, Button } from "react-native-paper";

import { SafeAreaLayout } from "../../components/layouts";
import { authScreenStyles } from "../../styles/screens/auth-screen.style";
import emergencyHelpIllustration from "./../../../assets/emergency-help.png";

export const LoginScreen = () => {
  return (
    <SafeAreaLayout>
      <View style={authScreenStyles.container}>
        <View style={authScreenStyles.container.imageContainer}>
          <Image
            source={emergencyHelpIllustration}
            resizeMode="contain"
            style={authScreenStyles.container.imageContainer.image}
          />
        </View>

        <View style={authScreenStyles.container.form}>
          <Headline style={authScreenStyles.container.form.heading}>
            LOG IN
          </Headline>

          <Paragraph style={authScreenStyles.container.form.paragraph}>
            Get easy access to emergency hotlines, emergency response, and lot
            more
          </Paragraph>

          <View style={authScreenStyles.container.form.formGroup}>
            <TextInput mode="outlined" label="E-mail or username" />
          </View>

          <View style={authScreenStyles.container.form.formGroup}>
            <TextInput mode="outlined" label="Password" />
          </View>

          <Button
            mode="contained"
            style={authScreenStyles.container.form.button}
          >
            LOG IN
          </Button>
        </View>
      </View>
    </SafeAreaLayout>
  );
};

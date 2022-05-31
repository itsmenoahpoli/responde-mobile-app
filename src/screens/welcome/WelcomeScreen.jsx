import React from "react";
import { View, Image, ActivityIndicator } from "react-native";
import { Paragraph, Portal, Dialog, Button } from "react-native-paper";

import { SafeAreaLayout } from "./../../components/layouts";
import { splashScreenStyles } from "./../../styles/screens";
import { checkNetworkConnection } from "./../../lib/utilities";
import emergencyHelpIllustration from "./../../../assets/emergency-help.png";

export const WelcomeScreen = (props) => {
  const { navigation } = props;

  const [dialog, setDialog] = React.useState({
    show: false,
    message: "Internet connection is required to use this app",
  });

  const redirectToAuthScreen = () => {
    let hasInternetConnection = checkNetworkConnection();

    if (hasInternetConnection) {
      setTimeout(() => {
        navigation.navigate("LOG-IN");
      }, 2000);

      toggleDialog(false);

      return;
    }

    toggleDialog(true);
  };

  const toggleDialog = (isShown) => {
    setDialog({ ...dialog, show: isShown });
  };

  React.useEffect(() => {
    redirectToAuthScreen();
  }, []);

  return (
    <SafeAreaLayout>
      <View style={splashScreenStyles.mainContainer}>
        <View>
          <Image
            source={emergencyHelpIllustration}
            resizeMode="contain"
            style={splashScreenStyles.image}
          />

          {!Boolean(dialog.show) && (
            <View style={splashScreenStyles.loaderContainer}>
              <ActivityIndicator size="large" color="#555" />

              <Paragraph style={splashScreenStyles.loaderContainer.label}>
                CONNECTING TO GO-RESPONDE
              </Paragraph>
            </View>
          )}
        </View>

        <Paragraph style={splashScreenStyles.appVersionLabel}>
          v1.0.0 (beta)
        </Paragraph>
      </View>

      <Portal>
        <Dialog visible={dialog.show} onDismiss={() => toggleDialog(false)}>
          <Dialog.Content>
            <Paragraph>{dialog.message}</Paragraph>
          </Dialog.Content>

          <Dialog.Actions>
            <Button onPress={() => toggleDialog(false)}>Okay</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </SafeAreaLayout>
  );
};

import React from "react";
import { View, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Paragraph,
  Headline,
  Portal,
  Dialog,
  Button,
  TextInput,
} from "react-native-paper";

import { SafeAreaLayout } from "./../../components/layouts";
import { splashScreenStyles } from "./../../styles/screens";
import { checkNetworkConnection } from "./../../lib/utilities";
import heartbeatIcon from "./../../../assets/brand-logo.jpg";

import AuthService from "./../../lib/services/auth.service";

const _authService = new AuthService();

export const WelcomeScreen = (props) => {
  const { navigation } = props;

  const [dialog, setDialog] = React.useState({
    show: false,
    message: "Internet connection is required to use this app",
  });
  const [loginDialog, setLoginDialog] = React.useState({
    show: false,
    message: "Invalid credentials provided, please try gain",
  });
  const [credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState(false);

  const checkInternetConnection = () => {
    let hasInternetConnection = checkNetworkConnection();

    if (hasInternetConnection) {
      return;
    }

    toggleDialog(true);
  };

  const toggleDialog = (isShown) => {
    setDialog({ ...dialog, show: isShown });
  };

  const handleLogin = async () => {
    const { email, password } = credentials;

    if (email === "" || password === "") {
      setError(true);
      return;
    }

    await _authService
      .login(credentials)
      .then(async (response) => {
        const { authToken, user } = response.data;

        await AsyncStorage.setItem("authToken", authToken).then(async () => {
          await AsyncStorage.setItem("user", JSON.stringify(user)).then(() => {
            navigation.navigate("DASHBOARD");
          });
        });
      })
      .catch((err) => {
        setLoginDialog(true);
      });
  };

  React.useEffect(() => {
    checkInternetConnection();
  }, []);

  return (
    <SafeAreaLayout>
      <View style={splashScreenStyles.mainContainer}>
        <View style={splashScreenStyles.mainContainer.imageContainer}>
          <Image
            source={heartbeatIcon}
            resizeMode="contain"
            style={splashScreenStyles.mainContainer.imageContainer.image}
          />
        </View>

        <View style={splashScreenStyles.mainContainer.contentContainer}>
          <Headline style={splashScreenStyles.mainContainer.headline}>
            GO RESPONDE
          </Headline>
          <Paragraph style={splashScreenStyles.mainContainer.paragraph}>
            Welcome Burauen residents!
          </Paragraph>

          {error && (
            <Paragraph
              style={{
                ...splashScreenStyles.mainContainer.paragraph,
                color: "red",
              }}
            >
              Email and/or password is required. Please try again'
            </Paragraph>
          )}

          <View style={splashScreenStyles.mainContainer.formContainer}>
            <TextInput
              mode="outlined"
              type="email"
              label="E-mail"
              value={credentials.email}
              onChange={(e) => {
                setError(false);
                setCredentials({ ...credentials, email: e.target.value });
              }}
            />

            <TextInput
              mode="outlined"
              label="Password"
              secureTextEntry
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />

            <Button
              onPress={handleLogin}
              mode="contained"
              style={splashScreenStyles.mainContainer.formContainer.button}
            >
              CONTINUE
            </Button>

            <Button
              style={splashScreenStyles.mainContainer.formContainer.button}
              onPress={() => navigation.navigate("REGISTER")}
            >
              CREATE ACCOUNT
            </Button>
          </View>
        </View>

        <Paragraph style={splashScreenStyles.appVersionLabel}>
          App Version 0.100(beta)
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

        <Dialog
          visible={loginDialog.show}
          onDismiss={() => setLoginDialog(false)}
        >
          <Dialog.Content>
            <Paragraph>{loginDialog.message}</Paragraph>
          </Dialog.Content>

          <Dialog.Actions>
            <Button onPress={() => setLoginDialog(false)}>Okay</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </SafeAreaLayout>
  );
};

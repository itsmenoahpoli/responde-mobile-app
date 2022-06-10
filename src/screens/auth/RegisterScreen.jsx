import React from "react";
import { View, Image, ScrollView } from "react-native";
import {
  Headline,
  Paragraph,
  TextInput,
  Button,
  Banner,
} from "react-native-paper";

import { SafeAreaLayout } from "../../components/layouts";
import { authScreenStyles } from "../../styles/screens/auth-screen.style";
import heartbeatIcon from "./../../../assets/brand-logo.jpg";

import AuthService from "./../../lib/services/auth.service";

const _authService = new AuthService();

export const RegisterScreen = (props) => {
  const { navigation } = props;

  const [dialog, setDialog] = React.useState(false);
  const [user, setUser] = React.useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    contact_no: "",
    address: "",
    password: "",
  });

  const setState = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  React.useEffect(() => {
    console.log(user);
  }, [user]);

  const handleCreateAccount = async () => {
    const {
      first_name,
      middle_name,
      last_name,
      email,
      contact_no,
      address,
      password,
    } = user;

    if (
      first_name === "" ||
      last_name === "" ||
      email === "" ||
      contact_no === "" ||
      address === "" ||
      password === ""
    ) {
      setDialog(true);
      return;
    }

    await _authService
      .register(user)
      .then((response) => {
        navigation.navigate("GO-RESPONDE");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaLayout>
      <ScrollView>
        <View style={authScreenStyles.mainContainer}>
          <View style={authScreenStyles.mainContainer.imageContainer}>
            <Image
              source={heartbeatIcon}
              resizeMode="contain"
              style={authScreenStyles.mainContainer.imageContainer.image}
            />
          </View>

          <View style={authScreenStyles.mainContainer.contentContainer}>
            <Banner
              visible={dialog}
              actions={[
                {
                  label: "Okay",
                  onPress: () => setDialog(false),
                },
              ]}
            >
              ALL FIELDS ARE REQUIRED, THANK YOU
            </Banner>

            <Headline style={authScreenStyles.mainContainer.headline}>
              GO RESPONDE
            </Headline>
            <Paragraph style={authScreenStyles.mainContainer.paragraph}>
              If it's your first time here, please create an account
            </Paragraph>

            <View style={authScreenStyles.mainContainer.formContainer}>
              <TextInput
                mode="outlined"
                label="First Name"
                onChange={(e) => setState("first_name", e.target.value)}
                required
              />
              <TextInput
                mode="outlined"
                label="Middle Name"
                onChange={(e) => setState("middle_name", e.target.value)}
                required
              />
              <TextInput
                mode="outlined"
                label="Last Name"
                onChange={(e) => setState("last_name", e.target.value)}
                required
              />
              <TextInput
                mode="outlined"
                label="Address"
                onChange={(e) => setState("address", e.target.value)}
                required
              />
              <TextInput
                mode="outlined"
                label="Phone No."
                onChange={(e) => setState("contact_no", e.target.value)}
                required
              />
              <TextInput
                mode="outlined"
                label="E-mail"
                type="email"
                onChange={(e) => setState("email", e.target.value)}
                required
              />
              <TextInput
                mode="outlined"
                label="Password"
                secureTextEntry
                onChange={(e) => setState("password", e.target.value)}
                required
              />

              <Button
                mode="contained"
                style={authScreenStyles.mainContainer.formContainer.button}
                onPress={handleCreateAccount}
              >
                CREATE ACCOUNT
              </Button>

              <Button
                style={{
                  ...authScreenStyles.mainContainer.formContainer.button,
                  marginBottom: 20,
                }}
                onClick={() => navigation.navigate("GO-RESPONDE")}
              >
                LOG IN
              </Button>
            </View>
          </View>

          <Paragraph style={authScreenStyles.appVersionLabel}>
            App Version 0.100(beta)
          </Paragraph>
        </View>
      </ScrollView>
    </SafeAreaLayout>
  );
};

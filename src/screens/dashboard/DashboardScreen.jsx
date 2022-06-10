import React from "react";
import { View, Image, ScrollView } from "react-native";
import {
  Paragraph,
  Appbar,
  Button,
  Headline,
  Checkbox,
} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SafeAreaLayout } from "../../components/layouts";
import { splashScreenStyles } from "./../../styles/screens";
import heartbeatIcon from "./../../../assets/brand-logo.jpg";
import EmergencyTypesService from "./../../lib/services/emergencyTypes.service";

const _emergencyTypesService = new EmergencyTypesService();

export const DashboardScreen = (props) => {
  const { navigation } = props;

  const [user, setUser] = React.useState(null);
  const [emergencyTypes, setEmergencyTypes] = React.useState([]);
  const [emergencySos, setEmergencySos] = React.useState({
    user_id: "",
    emergency_type_id: null,
    location: {
      long: "124.8999964",
      lat: "10.9833294",
      pin_address: "BURAUEN, LEYTE, VISAYAS, PHILIPPINES",
    },
  });

  const getUserData = async () => {
    try {
      let data = await AsyncStorage.getItem("user");
      console.log(JSON.parse(data));
      setUser(JSON.parse(data));
      setEmergencySos({ ...emergencySos, user_id: JSON.parse(data).id });
    } catch (err) {
      console.log(err);
    }
  };

  const getEmergencyTypes = async () => {
    await _emergencyTypesService
      .getAll()
      .then((response) => {
        setEmergencyTypes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEmergencySos = async () => {};

  React.useEffect(() => {
    getUserData();
    getEmergencyTypes();
  }, []);

  return (
    <SafeAreaLayout>
      <ScrollView>
        <View>
          <Appbar>
            <Paragraph style={{ color: "white" }}>GO RESPONDE APP</Paragraph>
          </Appbar>

          <View style={splashScreenStyles.mainContainer.imageContainer}>
            <Image
              source={heartbeatIcon}
              resizeMode="contain"
              style={splashScreenStyles.mainContainer.imageContainer.image}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <Paragraph>Actions &mdash;</Paragraph>

            <View
              style={{
                paddingLeft: 15,
                paddingRight: 15,
                display: "flex",
                flexDirection: "row",
                gap: 10,
              }}
            >
              <Button mode="contained" style={{ width: "50%" }}>
                My Profile
              </Button>
              <Button
                mode="contained"
                style={{ width: "50%" }}
                onPress={() => navigation.navigate("GO-RESPONDE")}
              >
                Log Out
              </Button>
            </View>

            <View style={{ marginTop: 40 }}>
              <Headline style={{ color: "red", textAlign: "center" }}>
                EMERGENCY HELP BUTTON
              </Headline>

              <View
                style={{
                  marginTop: 30,
                  paddingLeft: 20,
                  paddingRight: 20,
                  textAlign: "center",
                }}
              >
                <Button onPress={handleEmergencySos} mode="contained">
                  REQUEST EMERGENCY RESPONSE
                </Button>
              </View>

              <View style={{ paddingLeft: 15, marginTop: 15, marginBotom: 15 }}>
                <Paragraph>Please select type of emergency &mdash;</Paragraph>
              </View>

              <View style={{ marginTop: 20, height: 250, overflowY: "scroll" }}>
                {emergencyTypes.length !== 0 && (
                  <>
                    {emergencyTypes.map((type) => (
                      <View
                        key={type.id}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginBottom: 10,
                        }}
                      >
                        <Checkbox.Item
                          status={
                            type.id === emergencySos.emergency_type_id
                              ? "checked"
                              : "unchecked"
                          }
                          onPress={() =>
                            setEmergencySos({
                              ...emergencySos,
                              emergency_type_id: type.id,
                            })
                          }
                          label={type.name}
                          position="leading"
                        />
                        {/* <Paragraph style={{ marginTop: 5 }}>
                          {type.name}
                        </Paragraph> */}
                      </View>
                    ))}
                  </>
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaLayout>
  );
};

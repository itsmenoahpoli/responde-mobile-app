import React from "react";
import {
  Provider as PaperProvider,
  DefaultTheme,
  configureFonts,
} from "react-native-paper";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Routes
import { appRoutes } from "./src/lib/routes";

// App nav config
import { APP_NAV_CONFIG } from "./src/lib/configs";

const goRespondeAppTheme = {
  ...DefaultTheme,
  android: {
    regular: {
      fontFamily: "sans-serif",
      fontWeight: "normal",
    },
  },
};

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider theme={goRespondeAppTheme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={APP_NAV_CONFIG.initialRouteName}
          screenOptions={APP_NAV_CONFIG.screenOptions}
        >
          {appRoutes.map((route) => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              component={route.component}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

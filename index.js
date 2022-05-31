import React from "react";
import { AppRegistry } from "react-native-web";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { name as appName } from "./app.json";
import App from "./App";

export default function RespondeApp() {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent(appName, () => RespondeApp);

import React from "react";
import { AppRegistry } from "react-native-web";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { name as appName } from "./app.json";
import App from "./App";

export default function RespondeApp() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => RespondeApp);

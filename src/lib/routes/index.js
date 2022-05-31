import { WelcomeScreen } from "./../../screens/welcome";

import { LoginScreen } from "./../../screens/auth";

export const appRoutes = [
  {
    name: "GO-RESPONDE",
    component: WelcomeScreen,
  },

  {
    name: "LOG-IN",
    component: LoginScreen,
  },
];

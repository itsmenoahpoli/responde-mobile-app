import { WelcomeScreen } from "./../../screens/welcome";

import { RegisterScreen } from "./../../screens/auth";

import { DashboardScreen } from "../../screens/dashboard/DashboardScreen";

export const appRoutes = [
  {
    name: "GO-RESPONDE",
    component: WelcomeScreen,
  },

  {
    name: "REGISTER",
    component: RegisterScreen,
  },

  {
    name: "DASHBOARD",
    component: DashboardScreen,
  },
];

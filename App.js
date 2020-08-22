import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";

import Validation from "./source/screen/Validation";
import MapLayout from "./source/screen/MapLayout";
import Instruction from "./source/screen/Instruction";
import NavBar from "./source/screen/NavBar";
import Preferences from "./source/screen/Preferences";
import Route from "./source/screen/Route";
import ProfileSettings from "./source/screen/ProfileSettings";
enableScreens();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="screen"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: true,
        }}
      >
        <Stack.Screen
          name="route"
          component={Route}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="INS" component={Instruction} />
        <Stack.Screen
          name="Validate"
          component={Validation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NAV"
          component={NavBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MAP"
          component={MapLayout}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pref"
          component={Preferences}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="profile"
          component={ProfileSettings}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

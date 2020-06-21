import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
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
import MapSettings from "./source/screen/MapSettings";
import ThemeSettings from "./source/screen/ThemeSettings";

import Animationtest from "./source/screen/Animationtest.js"

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
        <Stack.Screen name="Anim" component={Animationtest} />
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
        <Stack.Screen
          name="mapsettings"
          component={MapSettings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="theme"
          component={ThemeSettings}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

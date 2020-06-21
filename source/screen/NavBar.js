import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  AsyncStorage,
} from "react-native";
import Settings from "../icon/Settings";
import Map from "../icon/Map";
import MapLayout from "../screen/MapLayout";
import Preferences from "../screen/Preferences";
import Constants from "expo-constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const NavBar = (props) => {
  const [isMapActive, setMapActive] = useState(true);
  const [isSettingsActive, setSettingsActive] = useState(false);
  let Mapcolor = isMapActive ? "rgba(0,0,0,0.025)" : "white";
  let Settingscolor = isSettingsActive ? "rgba(0,0,0,0.025)" : "white";

  const Cond = () => {
    if (isMapActive) {
      return <MapLayout></MapLayout>;
    } else {
      return <Preferences></Preferences>;
    }
  };

  const MapHandler = () => {
    setMapActive(true);
    setSettingsActive(false);
  };
  const SettingsHandler = () => {
    setMapActive(false);
    setSettingsActive(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.navcontainer}>
        <TouchableWithoutFeedback onPress={MapHandler}>
          <View
            style={{
              ...styles.section,
              backgroundColor: Mapcolor,
            }}
          >
            <Map active={isMapActive}></Map>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={SettingsHandler}>
          <View
            style={{
              ...styles.section,
              backgroundColor: Settingscolor,
            }}
          >
            <Settings active={isSettingsActive}></Settings>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <Cond></Cond>
      
    </View>
  );
};
export default NavBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,
    flexDirection: "column-reverse",
  },
  navcontainer: {
    zIndex: 1,
    //position: "absolute",
    //bottom: 0,
    backgroundColor: "white",
    justifyContent: "center",
    height: windowHeight / 13,
    flexDirection: "row",
  },
  section: {
    width: windowWidth / 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

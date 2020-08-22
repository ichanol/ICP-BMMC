import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
} from "react-native";
import Settings from "../icon/Settings";
import Map from "../icon/Map";
import MapLayout from "../screen/MapLayout";
import Preferences from "../screen/Preferences";

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
            <Text style={styles.tabMenuText}>Car Park</Text>
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
            <Text style={styles.tabMenuText}>Setting</Text>
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
    backgroundColor: "white",
    justifyContent: "center",
    height: 50,
    flexDirection: "row",
  },
  section: {
    paddingVertical: 10,
    width: windowWidth / 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  tabMenuText: { fontSize: 14, marginLeft: 10 },
});

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  SectionList,
} from "react-native";
import Constants from "expo-constants";
import { StackActions, useNavigation } from "@react-navigation/native";

import Backarrow from "../icon/Backarrow";
import CheckSymbol from "../icon/CheckSymbol";
import CustomMap from '../icon/CustomMap';
import { Variable, ui_theme } from "./Variable";
import User from "../icon/User";
const mode = true;
//const popAction = StackActions.pop(1);
//props.navigation.dispatch(popAction);

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MapSettings = () => {
  const [standard, setStandard] = useState(null);
  const [satellite, setSatellite] = useState(null);
  const [dflt, setDefault] = useState(null);
  const [aubergine, setAubergine] = useState(null);
  const [retro, setRetro] = useState(null);
  const navigation = useNavigation();

  const CheckMaptype = async () => {
    try {
      const maptypeValue = await AsyncStorage.getItem("maptype");
      if (maptypeValue !== null) {
        switch (maptypeValue) {
          case "standard":
            setStandard(true);
            setSatellite(false);
            break;
          case "satellite":
            setStandard(false);
            setSatellite(true);
            break;
          default:
            break;
        }
        console.log("maptypeValue: " + maptypeValue);
      } else {
        console.log("No data");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const CheckMapstyle = async () => {
    try {
      const mapstyleValue = await AsyncStorage.getItem("mapstyle");
      if (mapstyleValue !== null) {
        switch (mapstyleValue) {
          case "DEFAULT":
            setDefault(true);
            setAubergine(false);
            setRetro(false);
            break;
          case "AUBERGINE":
            setDefault(false);
            setAubergine(true);
            setRetro(false);
            break;
          case "RETRO":
            setDefault(false);
            setAubergine(false);
            setRetro(true);
            break;
        }
        console.log("mapstyleValue: " + mapstyleValue);
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };

  //-------------------------------------------------MAPTYPE
  const SET_TO_STANDARD = async () => {
    try {
      await AsyncStorage.setItem("maptype", "standard");
      setStandard(true);
      setSatellite(false);
      //navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const SET_TO_SATELLITE = async () => {
    try {
      await AsyncStorage.setItem("maptype", "satellite");
      setStandard(false);
      setSatellite(true);
      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  //-------------------------------------------------MAPSTYLE (if MAPTYPE = STANDARD)
  const SET_TO_DEFAULT = async () => {
    try {
      await AsyncStorage.setItem("mapstyle", "DEFAULT");
      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const SET_TO_AUBERGINE = async () => {
    try {
      await AsyncStorage.setItem("mapstyle", "AUBERGINE");
      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const SET_TO_RETRO = async () => {
    try {
      await AsyncStorage.setItem("mapstyle", "RETRO");
      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    CheckMaptype();
    CheckMapstyle();
  }, []);

  const IsStandard = () => {
    return standard ? (
      <CheckSymbol style={{ position: "absolute", right: 15 }}></CheckSymbol>
    ) : (
      <View style={{ width: 30, height: 30 }}></View>
    );
  };
  const IsSatellite = () => {
    return satellite ? (
      <CheckSymbol style={{ position: "absolute", right: 15 }}></CheckSymbol>
    ) : (
      <View style={{ width: 30, height: 30 }}></View>
    );
  };
  const IsDefault = () => {
    return dflt ? (
      <CheckSymbol style={{ position: "absolute", right: 15 }}></CheckSymbol>
    ) : (
      <View style={{ width: 30, height: 30 }}></View>
    );
  };
  const IsAubergine = () => {
    return aubergine ? (
      <CheckSymbol style={{ position: "absolute", right: 15 }}></CheckSymbol>
    ) : (
      <View style={{ width: 30, height: 30 }}></View>
    );
  };
  const IsRetro = () => {
    return retro ? (
      <CheckSymbol style={{ position: "absolute", right: 15 }}></CheckSymbol>
    ) : (
      <View style={{ width: 30, height: 30 }}></View>
    );
  };

  const user_choices = [
    {
      FN: SET_TO_STANDARD,
      text: "Standard",
      checkcomp: <IsStandard></IsStandard>,
    },
    {
      FN: SET_TO_SATELLITE,
      text: "Satellite",
      checkcomp: <IsSatellite></IsSatellite>,
    },
  ];

  const Standard_choices = () => {
    const stylechoices = [
      {
        text: "Default",
        FN: SET_TO_DEFAULT,
        checkcomp: <IsDefault></IsDefault>,
      },
      {
        text: "Aubergine",
        FN: SET_TO_AUBERGINE,
        checkcomp: <IsAubergine></IsAubergine>,
      },
      { text: "Retro", FN: SET_TO_RETRO, checkcomp: <IsRetro></IsRetro> },
    ];
    return (
      <View>
        <Text style={styles.topictext}>Select Map Style</Text>
        {stylechoices.map((element, key) => {
          return (
            <TouchableWithoutFeedback key={key} onPress={element.FN}>
              <View style={styles.menu}>
                <View style={styles.iconwrap}>
                  <User mode={mode}></User>
                  <Text style={styles.menutext}>{element.text}</Text>
                </View>
                {element.checkcomp}
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    );
  };

  //standard,satellite,hybrid
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Backarrow mode={mode}></Backarrow>
        </TouchableWithoutFeedback>
        <Text style={styles.headertext}>Map</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.topictext}>Select Map type</Text>

        <View style={{ ...styles.box }}>
          {user_choices.map((element, key) => {
            return (
              <TouchableWithoutFeedback key={key} onPress={element.FN}>
                <View style={styles.menu}>
                  <View style={styles.iconwrap}>
                    <CustomMap></CustomMap>
                    <Text style={styles.menutext}>{element.text}</Text>
                  </View>
                  {element.checkcomp}
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
        {standard ? <Standard_choices></Standard_choices> : null}

        <View style={styles.footer}>
          <Text style={styles.footertext}>{Variable.FooterText}</Text>
        </View>
      </View>
    </View>
  );
};
export default MapSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: mode ? ui_theme.Light.mainBackgroundColor: ui_theme.Dark.mainBackgroundColor,
  },
  header: {
    height: windowHeight / 13,
    backgroundColor: mode ? ui_theme.Light.menuBackgroundColor: ui_theme.Dark.menuBackgroundColor,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    elevation: 3,
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  headertext: {
    color: mode ? ui_theme.Light.headerTextColor: ui_theme.Dark.headerTextColor,
    fontWeight: "600",
    fontSize: 22,
    marginLeft: 30,
  },
  body: {
    height: windowHeight - windowHeight / 13 - Constants.statusBarHeight,
    backgroundColor: mode ? ui_theme.Light.overlay:ui_theme.Dark.overlay,
    paddingVertical: 15,
  },
  topictext: {
    paddingLeft: 20,
    paddingVertical: 10,
    fontSize: 16,
    color: mode ? ui_theme.Light.headerTextColor:ui_theme.Dark.headerTextColor,

  },
  menu: {
    backgroundColor: mode ? ui_theme.Light.menuBackgroundColor:ui_theme.Dark.menuBackgroundColor,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomColor: mode?ui_theme.Light.borderBottomColor:ui_theme.Dark.borderBottomColor,
    borderBottomWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
  },
  iconwrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  menutext: {
    paddingLeft: 18,
    fontSize: 16,
    fontWeight: "600",
    color: mode ? ui_theme.Light.headerTextColor:ui_theme.Dark.headerTextColor,
  },
  footer: {
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    position: "absolute",
    bottom: Constants.statusBarHeight - 10,
  },
  footertext: {
    color: mode? ui_theme.Light.footerText: ui_theme.Dark.footerText,
    fontSize: 12,
  },
});

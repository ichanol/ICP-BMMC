import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { StackActions, useNavigation } from "@react-navigation/native";

import Backarrow from "../icon/Backarrow";
import CheckSymbol from "../icon/CheckSymbol";
import User from "../icon/User";
import { Variable, ui_theme } from "./Variable";
const mode = true;

//const popAction = StackActions.pop(1);
//navigation.dispatch(popAction);

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ProfileSettings = () => {
  const navigation = useNavigation();
  const [Light, setLightTheme] = useState(null);
  const [Dark, setDarkTheme] = useState(null);

  const CheckTheme = async () => {
    try {
      const themeValue = await AsyncStorage.getItem("theme");
      if (themeValue !== null) {
        switch (themeValue) {
          case "Light":
            setLightTheme(true);
            setDarkTheme(false);
            break;
          case "Dark":
            setLightTheme(false);
            setDarkTheme(true);
            break;
          default:
            break;
        }
        console.log("themeValue: " + themeValue);
      } else {
        console.log("No data");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const saveLight = async () => {
    try {
      await AsyncStorage.setItem("theme", "Light");
      setLightTheme(true);
      setDarkTheme(false);
      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const saveDark = async () => {
    try {
      await AsyncStorage.setItem("theme", "Dark");
      setLightTheme(false);
      setDarkTheme(true);
      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    CheckTheme();
  }, []);

  const IsLight = () => {
    return Light ? (
      <CheckSymbol style={{ position: "absolute", right: 15 }}></CheckSymbol>
    ) : (
      <View style={{ width: 30, height: 30 }}></View>
    );
  };

  const IsDark = () => {
    return Dark ? (
      <CheckSymbol style={{ position: "absolute", right: 15 }}></CheckSymbol>
    ) : (
      <View style={{ width: 30, height: 30 }}></View>
    );
  };

  const theme_choices = [
    { FN: saveLight, text: "Light Theme", checkcomp: <IsLight></IsLight>  },
    { FN: saveDark, text: "Dark Theme", checkcomp: <IsDark></IsDark> },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Backarrow mode={mode}></Backarrow>
        </TouchableOpacity>
        <Text style={styles.headertext}>Theme</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.topictext}>Select Theme</Text>

        <View style={styles.box}>
          {theme_choices.map((element, key) => {
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

        <View style={styles.footer}>
          <Text style={styles.footertext}>{Variable.FooterText}</Text>
        </View>
      </View>
    </View>
  );
};
export default ProfileSettings;

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
    fontSize: 12 
  },
});

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
import { StatusBar } from "expo-status-bar";
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
  const [student, setStudent] = useState(null);
  const [officer, setOfficer] = useState(null);

  const CheckUser = async () => {
    try {
      const userValue = await AsyncStorage.getItem("user");
      if (userValue !== null) {
        switch (userValue) {
          case "Student":
            setStudent(true);
            setOfficer(false);
            break;
          case "Officer":
            setStudent(false);
            setOfficer(true);
            break;
          default:
            break;
        }
        console.log("userValue: " + userValue);
      } else {
        console.log("No data");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const saveOfficer = async () => {
    try {
      await AsyncStorage.setItem("user", "Officer");
      setStudent(false);
      setOfficer(true);
      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };
  const saveStudent = async () => {
    try {
      await AsyncStorage.setItem("user", "Student");
      setStudent(true);
      setOfficer(false);
      navigation.goBack();
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    CheckUser();
  }, []);
  const IsStudent = () => {
    return student ? (
      <CheckSymbol style={{ position: "absolute", right: 15 }}></CheckSymbol>
    ) : (
      <View style={{ width: 30, height: 30 }}></View>
    );
  };
  const IsOfficer = () => {
    return officer ? (
      <CheckSymbol style={{ position: "absolute", right: 15 }}></CheckSymbol>
    ) : (
      <View style={{ width: 30, height: 30 }}></View>
    );
  };
  const user_choices = [
    { FN: saveOfficer, text: "Officer", checkcomp: <IsOfficer></IsOfficer> },
    { FN: saveStudent, text: "Student", checkcomp: <IsStudent></IsStudent> },
  ];

  return (
    <View style={styles.container}>
      <StatusBar
        style={"dark"}
        translucent={false}
        backgroundColor="#ff9700"
      ></StatusBar>

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Backarrow mode={mode}></Backarrow>
        </TouchableOpacity>
        <Text style={styles.headertext}>Profile</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.topictext}>Select User</Text>

        <View style={styles.box}>
          {user_choices.map((element, key) => {
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
    //marginTop: Constants.statusBarHeight,
    backgroundColor: mode
      ? ui_theme.Light.mainBackgroundColor
      : ui_theme.Dark.mainBackgroundColor,
  },
  header: {
    height: 50,
    backgroundColor: mode
      ? ui_theme.Light.menuBackgroundColor
      : ui_theme.Dark.menuBackgroundColor,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    elevation: 3,
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  headertext: {
    color: mode
      ? ui_theme.Light.headerTextColor
      : ui_theme.Dark.headerTextColor,
    fontWeight: "600",
    fontSize: 22,
    marginLeft: 30,
  },
  body: {
    height: windowHeight - windowHeight / 13 - Constants.statusBarHeight,
    backgroundColor: mode ? ui_theme.Light.overlay : ui_theme.Dark.overlay,
    paddingVertical: 15,
  },
  topictext: {
    paddingLeft: 20,
    paddingVertical: 10,
    fontSize: 16,
    color: mode
      ? ui_theme.Light.headerTextColor
      : ui_theme.Dark.headerTextColor,
  },
  menu: {
    backgroundColor: mode
      ? ui_theme.Light.menuBackgroundColor
      : ui_theme.Dark.menuBackgroundColor,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomColor: mode
      ? ui_theme.Light.borderBottomColor
      : ui_theme.Dark.borderBottomColor,
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
    color: mode
      ? ui_theme.Light.headerTextColor
      : ui_theme.Dark.headerTextColor,
  },
  footer: {
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    position: "absolute",
    bottom: Constants.statusBarHeight - 10,
  },
  footertext: {
    color: mode ? ui_theme.Light.footerText : ui_theme.Dark.footerText,
    fontSize: 12,
  },
});

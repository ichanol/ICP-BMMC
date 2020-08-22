import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import { useNavigation, StackActions } from "@react-navigation/native";

const Validation = (props) => {
  const navigation = useNavigation();
  const saveOfficer = async () => {
    try {
      await AsyncStorage.setItem("user", "Officer");
      navigation.dispatch(StackActions.replace("NAV"));
    } catch (err) {
      console.log(err);
    }
  };
  const saveStudent = async () => {
    try {
      await AsyncStorage.setItem("user", "Student");
      navigation.dispatch(StackActions.replace("NAV"));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={[styles.container, { width: props.width }]}>
      <View style={styles.top}></View>

      <View style={styles.center}>
        <View style={styles.header}>
          <Text style={styles.headertext}>Sign in as</Text>
        </View>
        <View style={styles.choices}>
          <View style={styles.wrapiconandtext}>
            <TouchableOpacity onPress={saveOfficer}>
              <Image
                style={styles.icon}
                source={require("../icon/staff.png")}
                resizeMethod={"scale"}
                resizeMode={"contain"}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Officer</Text>
          </View>
          <View style={styles.wrapiconandtext}>
            <TouchableOpacity onPress={saveStudent}>
              <Image
                style={styles.icon}
                source={require("../icon/student.png")}
                resizeMethod={"scale"}
                resizeMode={"contain"}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Student</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <Text style={styles.bottomtext}></Text>
      </View>
    </View>
  );
};
export default Validation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff9700",
  },
  top: {
    flex: 0.25,
  },
  center: {
    flex: 1,
  },
  header: {
    justifyContent: "center",
    flex: 0.1,
    alignItems: "center",
  },
  headertext: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  choices: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  wrapiconandtext: {
    alignItems: "center",
  },
  icon: {
    height: 275,
    width: 120,
  },
  text: {
    color: "white",
    fontWeight: "500",
    fontSize: 27,
    fontFamily: "",
    marginTop: 20,
  },
  bottom: {
    flex: 0.25,
    alignItems: "center",
    flexDirection: "column-reverse",
  },
  bottomtext: {
    paddingBottom: 15,
    fontSize: 12,
    color: "rgba(255,255,255,0.5)",
  },
});

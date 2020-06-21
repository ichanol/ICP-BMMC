import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const Validation = (props) => {
  //saveOfficer, saveStudent จะเก็บการตั้งค่าว่าผู้ใช้เป็นuserประเภทไหนในครั้งแรกที่ใช้งานแอปพลิเคชั่น
  //ครั้งต่อๆไปที่เปิดใช้งานจะได้ไม่ต้องถามอีก
  const navigation = useNavigation();
  const saveOfficer = async () => {
    try {
      await AsyncStorage.setItem("user", "Officer");
      await AsyncStorage.setItem("theme", "Light");
      await AsyncStorage.setItem("maptype", "satellite");
      await AsyncStorage.setItem("mapstyle", "DEFAULT");
      navigation.navigate("NAV");
    } catch (err) {
      console.log(err);
    }
  };

  const saveStudent = async () => {
    try {
      await AsyncStorage.setItem("user", "Student");
      await AsyncStorage.setItem("theme", "Light");
      await AsyncStorage.setItem("maptype", "satellite");
      await AsyncStorage.setItem("mapstyle", "DEFAULT");
      navigation.navigate("NAV");
    } catch (err) {
      console.log(err);
    }
  };
  const CheckReg = async () => {
    try {
      const userValue = await AsyncStorage.getItem("user");
      if (userValue !== null) {
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    CheckReg();
  }, []);

  //บรรทัดล่างใช้ส่งข้อมูลไปหน้าอื่นๆ
  //props.navigation.navigate("NAV", {user: "officer",});
  //ใช้บรรทัดล่างในการรับค่าในหน้าอื่น
  //  const check = props.route.params.user;

  return (
    <View style={[styles.container,{width:props.width}]}>
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
        <Text style={styles.bottomtext}>Powered by Bangmod Maker Club</Text>
      </View>
    </View>
  );
};
export default Validation;

const styles = StyleSheet.create({
  container: {
    flex: 1,/* 
    marginTop: Constants.statusBarHeight, */
    backgroundColor: "#ff7300",
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
    fontSize: 20,
    fontWeight: "500",
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
    fontSize: 25,
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

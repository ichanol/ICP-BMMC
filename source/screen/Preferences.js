import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  SectionList,
} from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

import User from "../icon/User";
import MapLayer from "../icon/MapLayer";
import ChevronRight from "../icon/ChevronRight";
import Theme from "../icon/Theme";
import { Variable, ui_theme } from "./Variable";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Light = true;


const Preferences = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState(null);
  const [mapstyle, setMaptype] = useState(null);
  const [theme, setTheme] = useState(null);
  //const [Light, setLightTheme] = useState(null);

  const CurrentSettings = async () => {
    try {
      const userValue = await AsyncStorage.getItem("user");
      const mapValue = await AsyncStorage.getItem("maptype");
      const themeValue = await AsyncStorage.getItem("theme");
      if (userValue !== null && mapValue !== null && themeValue !== null) {
        const newMapValue =
          mapValue.charAt(0).toUpperCase() + mapValue.slice(1);
        setProfile(userValue);
        setMaptype(newMapValue);
        setTheme(themeValue + " Theme");
        if (themeValue == "Light") {
          //setLightTheme(true);
        } else {
          //setLightTheme(false);
        }
      } else {
        console.log("No data");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const ClearUserData = async () => {
    try {
      await AsyncStorage.clear();
    } catch (err) {
      console.log(err);
    }
  };

  const Rendermenu = ({ list, index }) => {
    return (
      <TouchableHighlight
        key={index}
        activeOpacity={0.9}
        underlayColor="rgba(0,0,0,0.4)"
        onPress={() => {
          list.action();
        }}
      >
        <View
          style={{
            ...styles.menu,
            backgroundColor: Light
              ? ui_theme.Light.menuBackgroundColor
              : ui_theme.Dark.menuBackgroundColor,
            borderBottomColor: Light
              ? ui_theme.Light.borderBottomColor
              : ui_theme.Dark.borderBottomColor,
          }}
        >
          <View style={styles.iconwrap}>
            {list.comp}
            <Text
              style={{
                ...styles.menutext,
                color: Light
                  ? ui_theme.Light.headerTextColor
                  : ui_theme.Dark.headerTextColor,
              }}
            >
              {list.name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              position: "absolute",
              right: 15,
            }}
          >
            <Text
              style={{
                ...styles.CurrentSettings,
                color: Light
                  ? ui_theme.Light.currentSettingsColor
                  : ui_theme.Dark.currentSettingsColor,
              }}
            >
              {list.current}
            </Text>
            <ChevronRight mode={Light} />
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  useEffect(() => {
    CurrentSettings();
    const unsubscribe = navigation.addListener("focus", () => {
      CurrentSettings();
      console.log("Go back complete RERENDER SUCCESS");
    });
    return unsubscribe;
  }, []);

  const DATA = [
    {
      title: "User",
      data: [
        {
          name: "Profile",
          comp: <User mode={Light}></User>,
          action: () => {
            navigation.navigate("profile");
          },
          current: profile,
        },
      ],
    },
    {
      title: "Appearance",
      data: [
        {
          name: "Map",
          comp: <MapLayer mode={Light}></MapLayer>,
          action: () => {
            navigation.navigate("mapsettings");
          },
          current: mapstyle,
        },
        /* {
          name: "Theme",
          comp: <Theme mode={Light}></Theme>,
          action: () => {
            navigation.navigate("theme");
          },
          current: theme,
        }, */
      ],
    },
  ];

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: Light
          ? ui_theme.Light.mainBackgroundColor
          : ui_theme.Dark.mainBackgroundColor,
      }}
    >
      <View
        style={{
          ...styles.header,
          backgroundColor: Light
            ? ui_theme.Light.menuBackgroundColor
            : ui_theme.Dark.menuBackgroundColor,
        }}
      >
        <Text
          style={{
            ...styles.headertext,
            color: Light
              ? ui_theme.Light.headerTextColor
              : ui_theme.Dark.headerTextColor,
          }}
        >
          Settings
        </Text>
      </View>

      <View
        style={{
          ...styles.body,
          backgroundColor: Light
            ? ui_theme.Light.overlay
            : ui_theme.Dark.overlay,
        }}
      >
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item.name + index}
          renderSectionHeader={({ section: { title } }) => (
            <Text
              style={{
                ...styles.textheader,
                color: Light
                  ? ui_theme.Light.headerTextColor
                  : ui_theme.Dark.headerTextColor,
              }}
            >
              {title}
            </Text>
          )}
          renderItem={({ item, index }) => (
            <Rendermenu list={item} index={index} />
          )}
        />

        <TouchableOpacity
          onPress={ClearUserData}
          style={{
            height: 50,
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 30,
            position: "absolute",
            zIndex: 1,
            bottom: 120,
            left: 120,
            right: 120,
          }}
        >
          <View>
            <Text style={{ color: "white" }}>Clear User Data</Text>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate("Anim");
          }}
          style={{
            height: 50,
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 30,
            zIndex: 1,
          }}
        >
          <View>
            <Text style={{ color: "white" }}>Animationtest</Text>
          </View>
        </TouchableOpacity> */}

        <View style={styles.footer}>
          <Text
            style={{
              ...styles.footertext,
              color: Light
                ? ui_theme.Light.footerText
                : ui_theme.Dark.footerText,
            }}
          >
            {Variable.FooterText}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Preferences;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  header: {
    height: windowHeight / 13,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  headertext: {
    fontWeight: "600",
    fontSize: 22,
  },
  body: {
    height:
      windowHeight -
      windowHeight / 13 -
      Constants.statusBarHeight -
      windowHeight / 13,
    paddingVertical: 10,
  },
  menu: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
  },
  textheader: {
    paddingLeft: 20,
    paddingVertical: 10,
    fontSize: 16,
  },
  menutext: {
    paddingLeft: 18,
    fontSize: 16,
    fontWeight: "600",
  },
  iconwrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  footer: {
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    position: "absolute",
    bottom: Constants.statusBarHeight - 10,
  },
  footertext: {
    fontSize: 12,
  },
  CurrentSettings: {
    paddingHorizontal: 15,
  },
});

import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import Constants from "expo-constants";
import Validation from "./Validation";

import SelectLocation from "../info/SelectLocation";
import InformationPanel from "../info/InformationPanel";
import ParkingRules from "../info/ParkingRules";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Instruction = () => {
  let moveX = useRef(null);
  const [activePage, setActivePage] = useState(0);

  const dot = ["1", "2", "3", "4"];

  const NextPage = () => {
    let value = windowWidth * (activePage + 1);
    moveX.scrollTo({ x: value, y: 0, animated: true });
  };

  const PreviousPage = () => {
    let value = windowWidth * (activePage - 1);
    moveX.scrollTo({ x: value, y: 0, animated: true });
  };

  return (
    <View style={styles.container}>
      <View style={{ ...styles.nav }}>
        <View
          style={{
            position: "relative",
            flexDirection: "row",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {activePage === 0 ? null : (
            <View style={{ position: "absolute", zIndex: 5, left: 20 }}>
              <TouchableOpacity
                onPress={PreviousPage}
                style={{
                  width: 60,
                  height: 40,
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(255,255,255,0.5)",
                }}
              >
                <Text>Prev</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={{ flexDirection: "row" }}>
            {dot.map((item, key) => {
              return (
                <View
                  key={key}
                  style={{
                    backgroundColor:
                      key == activePage ? "white" : "rgba(255,255,255,0.5)",
                    width: 10,
                    height: 10,
                    borderRadius: 10,
                    marginHorizontal: 10,
                  }}
                ></View>
              );
            })}
          </View>
          {activePage === 3 ? null : (
            <View
              style={{
                position: "absolute",
                right: 20,
                zIndex: 5,
              }}
            >
              <TouchableOpacity
                style={{
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(255,255,255,0.5)",
                }}
                onPress={NextPage}
              >
                <Text
                  style={{
                    width: 60,
                    height: 40,
                    textAlign: "center",
                    textAlignVertical: "center",
                  }}
                >
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        ref={(ref) => {
          moveX = ref;
        }}
        onScroll={({ nativeEvent }) => {
          const slide = Math.floor(
            nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
          );
          console.log(slide);
          if (slide !== activePage) {
            setActivePage(slide);
          }
        }}
      >
        <View style={styles.page1}>
          <SelectLocation></SelectLocation>
        </View>
        <View style={styles.page2}>
          <InformationPanel></InformationPanel>
        </View>
        <View style={styles.page3}>
          <ParkingRules></ParkingRules>
        </View>
        <View>
          <Validation width={windowWidth}></Validation>
        </View>
      </ScrollView>
    </View>
  );
};
export default Instruction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page1: {
    backgroundColor: "#ff9700",
    flex: 1,
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  page2: {
    backgroundColor: "#ff9700",
    flex: 1,
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  page3: {
    backgroundColor: "#ff9700",
    flex: 1,
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  page4: {
    backgroundColor: "#ff9700",
    flex: 1,
    width: windowWidth,
  },
  nav: {
    zIndex: 1,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    bottom: 30,
    width: "100%",
  },
  nextText: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  backText: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  backbutton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  nextbutton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "white",
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  num: {
    color: "white",
    fontSize: 50,
  },
});

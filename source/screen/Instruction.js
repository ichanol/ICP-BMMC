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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Instruction = () => {
  let moveX = useRef(null);
  let scrollX = useRef(new Animated.Value(0)).current;

  let counter = 0;
  const dot = ["1", "2", "3", "4"];
  const NextPage = () => {
    if (counter >= 0 && counter <= dot.length - 2) {
      counter++;
      let value = windowWidth * counter;
      moveX.scrollTo({ x: value, y: 0, animated: true });
      console.log(counter);
    } else {
    }
  };

  const PreviousPage = () => {
    if (counter > 0 && counter <= dot.length - 1) {
      counter--;
      let value = windowWidth * counter;
      moveX.scrollTo({ x: value, y: 0, animated: true });
      console.log(counter);
    } else {
    }
  };

  return (
    <View style={styles.container}>
      
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        ref={(ref) => {
          moveX = ref;
        }}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                x: scrollX,
              },
            },
          },
        ])}
      >
        <View style={styles.page1}>
          <Text style={styles.num}>Instruction 1</Text>
        </View>
        <View style={styles.page2}>
          <Text style={styles.num}>Instruction 2</Text>
        </View>
        <View style={styles.page3}>
          <Text style={styles.num}>Instruction 3</Text>
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
    marginTop: Constants.statusBarHeight,
  },
  page1: {
    backgroundColor: "#142850",
    flex: 1,
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  page2: {
    backgroundColor: "#27496d",
    flex: 1,
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  page3: {
    backgroundColor: "#0c7b93",
    flex: 1,
    width: windowWidth,
    justifyContent: "center",
    alignItems: "center",
  },
  page4: {
    backgroundColor: "#00a8cc",
    flex: 1,
    width: windowWidth,
  },
  nav: {
    zIndex: 1,
    position: "absolute",
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    width: "100%",
    bottom: 30,
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

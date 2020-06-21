import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ParkingEnv = (props) => {
  const CarCondition = () => {
    if (props.type == "tree") {
      return <View style={style.tree}></View>;
    } else if (props.type == "car_park") {
      if (props.smart) {
        return (
          <View style={style.smartpark}>
            <Text>{props.id}</Text>
          </View>
        );
      } else {
        return (
          <View style={style.car}>
            <Text>{props.id}</Text>
          </View>
        );
      }
    }
  };

  return <CarCondition></CarCondition>;
};
export default ParkingEnv;

const style = StyleSheet.create({
  tree: { height: 50, width: 30, backgroundColor: "brown" },
  car: { height: 50, width: 30, backgroundColor: "blue" },
  smartpark: { height: 50, width: 30, backgroundColor: "lime" },
});

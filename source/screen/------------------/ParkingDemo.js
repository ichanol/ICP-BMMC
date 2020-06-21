import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  Switch,
  Dimensions
} from "react-native";
import MapView from 'react-native-maps';
import Car from "../component/Car";
import ParkingEnv from "../component/ParkingEnv";

const ParkingDemo = (props) => {
  const [refresh, setRefresh] = useState(true);
  const [slotData, setdata] = useState([]);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  const [test, setTest] = useState([
    { key: "0", lot_id: 0, lot_status: null },
    { key: "1", lot_id: 1, lot_status: null },
    { key: "2", lot_id: 2, lot_status: null },
    { key: "3", lot_id: 3, lot_status: null },
    { key: "4", lot_id: 4, lot_status: null },
    { key: "5", lot_id: 5, lot_status: null },
    { key: "6", lot_id: 6, lot_status: null },
    { key: "7", lot_id: 7, lot_status: null },
    { key: "8", lot_id: 8, lot_status: null },
  ]);

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    //const response = await fetch("http://52.221.134.8/11.json");
    const response = await fetch("http://192.168.1.56/ENE490/makeup.json");
    const json = await response.json();
    //setdata(json);
    //console.log(json);
    const newTest = [
      { key: "0", lot_id: 0, lot_status: null },
      { key: "1", lot_id: 1, lot_status: null },
      { key: "2", lot_id: 2, lot_status: null },
      { key: "3", lot_id: 3, lot_status: null },
    ];
    const up = test.concat(json).concat(newTest);
    setTest(up);
    console.log("fetch!");
  };

  const Con = () => {
    return(
        <TouchableOpacity
          onPress={() => {
            setRefresh(!refresh);
            console.log(refresh);
            fetchData();
          }}
        >
          <View
            style={{
              width: 100,
              height: 50,
              backgroundColor: refresh?"green":"red",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white" }}>Refresh</Text>
          </View>
        </TouchableOpacity>
    );  
  };

  return (
    <View>
      <FlatList
        numColumns={3}
        data={slotData}
        keyExtractor={(slotData) => slotData.ID_status}
        renderItem={({ item }) => {
          return (
            <View>
              <Car id={item.lot_id} status={item.lot_status} />
            </View>
            //<View><Text>ID:{item.id}{"\n"}STATUS:{item.Status? "Not Avaiable":"Avaiable"}{"\n"}</Text></View>}
          );
        }}
      />
      <Con></Con>

      <FlatList
        numColumns={3}
        data={test}
        keyExtractor={(test) => test.lot_id}
        renderItem={({ item }) => {
          return (
            <View>
              <Car id={item.lot_id} status={item.lot_status} />
            </View>
            //<View><Text>ID:{item.id}{"\n"}STATUS:{item.Status? "Not Avaiable":"Avaiable"}{"\n"}</Text></View>}
          );
        }}
      />
    </View>
  );
};

export default ParkingDemo;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  id1_4: {
    backgroundColor: "yellow",
    width: 300,
    flex: 1,
  },
  id2: {
    backgroundColor: "red",
    width: 300,
    flex: 1,
  },
  id3: {
    backgroundColor: "green",
    width: "100%",
    flex: 0.5,
    alignItems: "center",
  },
  road: {
    backgroundColor: "black",
    width: "100%",
    flex: 0.25,
  },
  slot: {
    height: 30,
    width: 10,
    backgroundColor: "blue",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "white",
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

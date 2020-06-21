import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import ReactNativeZoomableView from "@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView";
import ParkingEnv from "../component/ParkingEnv";

const Layout = (props) => {
  const [slotData, setdata] = useState([]);
  const check = "eiei";//props.route.params.user;
  useEffect(() => {
    fetchData();
    //setInterval(fetchData, 1000);
  }, []);

  fetchData = async () => {
    const response = await fetch("http://52.221.134.8/11.json");
    const json = await response.json();
    setdata(json);
    //id3xx[0].status =slotData[0].lot_status ;
    //console.log(id3xx[0]);
  };

  // slotData.lot_id
  // slotData.lot_status

  const id3xx = [
    { key: "1", type: "car_park" },
    { key: "2", type: "car_park" },
    { key: "3", type: "car_park" },
    { key: "4", type: "car_park" },
    { key: "5", type: "car_park" },
    { key: "6", type: "car_park" },
    { key: "7", type: "car_park" },
    { key: "8", type: "car_park" },
    { key: "9", type: "car_park" },
    { key: "10", type: "car_park" },
    { key: "11", type: "car_park" },
    { key: "12", type: "car_park" },
    { key: "13", type: "car_park" },
    { key: "14", type: "car_park" },
    { key: "15", type: "car_park" },
    { key: "16", type: "car_park" },
    { key: "17", type: "car_park" },
    { key: "18", type: "car_park" },
    { key: "19", type: "car_park" },
    { key: "20", type: "car_park" },
    { key: "21", type: "car_park" },
    { key: "22", type: "car_park" },
    { key: "23", type: "car_park" },
    { key: "24", type: "car_park" },
    { key: "25", type: "car_park" },
    { key: "26", type: "car_park" },
    { key: "27", type: "car_park" },
    { key: "28", type: "car_park" },
    { key: "29", type: "car_park" },
    { key: "30", type: "car_park" },
    { key: "31", type: "car_park" },
    { key: "32", type: "car_park" },
    { key: "33", type: "car_park" },
    { key: "34", type: "car_park" },
    { key: "35", type: "car_park" },
    { key: "36", type: "car_park" },
  ];

  const id2xx = [
    { key: "1", type: "car_park", smart: true },
    { key: "3", type: "car_park", smart: true },
    { key: "5", type: "car_park", smart: true },
    { key: "7", type: "car_park", smart: true },
    { key: "9", type: "car_park", smart: true },
    { key: "11", type: "car_park", smart: true },
    { key: "13", type: "car_park", smart: true },
    { key: "15", type: "car_park", smart: true },
    { key: "17", type: "car_park", smart: true },
    { key: "19", type: "car_park" },
    { key: "21", type: "car_park" },
    { key: "23", type: "car_park" },
    { key: "25", type: "car_park" },
    { key: "27", type: "car_park" },
    { key: "29", type: "car_park" },
    { key: "31", type: "car_park" },
    { key: "33", type: "car_park" },
    { key: "35", type: "car_park" },
    { key: "37", type: "car_park" },
    { key: "tree1", type: "tree" },
    { key: "39", type: "car_park" },
    { key: "41", type: "car_park" },
    { key: "43", type: "car_park" },
    { key: "45", type: "car_park" },
    { key: "47", type: "car_park" },
    { key: "tree2", type: "tree" },
    { key: "49", type: "car_park" },
    { key: "51", type: "car_park" },
    { key: "53", type: "car_park" },
    { key: "55", type: "car_park" },
    { key: "57", type: "car_park" },
    { key: "59", type: "car_park" },
    { key: "61", type: "car_park" },
    { key: "63", type: "car_park" },
    { key: "65", type: "car_park" },
    { key: "67", type: "car_park" },
    { key: "2", type: "car_park", smart: true },
    { key: "4", type: "car_park", smart: true },
    { key: "6", type: "car_park", smart: true },
    { key: "8", type: "car_park", smart: true },
    { key: "10", type: "car_park", smart: true },
    { key: "12", type: "car_park", smart: true },
    { key: "14", type: "car_park", smart: true },
    { key: "16", type: "car_park", smart: true },
    { key: "18", type: "car_park", smart: true },
    { key: "20", type: "car_park" },
    { key: "22", type: "car_park" },
    { key: "24", type: "car_park" },
    { key: "26", type: "car_park" },
    { key: "28", type: "car_park" },
    { key: "30", type: "car_park" },
    { key: "32", type: "car_park" },
    { key: "34", type: "car_park" },
    { key: "36", type: "car_park" },
    { key: "38", type: "car_park" },
    { key: "tree3", type: "tree" },
    { key: "40", type: "car_park" },
    { key: "42", type: "car_park" },
    { key: "44", type: "car_park" },
    { key: "46", type: "car_park" },
    { key: "48", type: "car_park" },
    { key: "tree4", type: "tree" },
    { key: "50", type: "car_park" },
    { key: "52", type: "car_park" },
    { key: "54", type: "car_park" },
    { key: "56", type: "car_park" },
    { key: "58", type: "car_park" },
    { key: "60", type: "car_park" },
    { key: "62", type: "car_park" },
    { key: "64", type: "car_park" },
    { key: "66", type: "car_park" },
    { key: "68", type: "car_park" },
  ];

  const id1xx = [
    { key: "Building1",type: "car_park" },
    { key: "Building2",type: "car_park" },
    { key: "Building3",type: "car_park" },
    { key: "1", type: "car_park" },
    { key: "2", type: "car_park" },
    { key: "tree1", type: "tree" },
    { key: "3", type: "car_park" },
    { key: "4", type: "car_park" },
    { key: "5", type: "car_park", smart: true },
    { key: "6", type: "car_park", smart: true },
    { key: "7", type: "car_park", smart: true },
    { key: "tree2", type: "tree" },
    { key: "8", type: "car_park", smart: true },
    { key: "9", type: "car_park", smart: true },
  ];

  const id4xx = [
    { key: "1", type: "car_park", smart: true },
    { key: "3", type: "car_park", smart: true },
    { key: "tree1", type: "tree" },
    { key: "5", type: "car_park", smart: true },
    { key: "7", type: "car_park", smart: true },
    { key: "9", type: "car_park", smart: true },
    { key: "11", type: "car_park" },
    { key: "13", type: "car_park" },
    { key: "tree2", type: "tree" },
    { key: "15", type: "car_park" },
    { key: "17", type: "car_park" },
    { key: "19", type: "car_park" },
    { key: "21", type: "car_park" },
    { key: "23", type: "car_park" },
    { key: "25", type: "car_park" },
    { key: "27", type: "car_park" },
    { key: "29", type: "car_park" },
    { key: "2", type: "car_park", smart: true },
    { key: "4", type: "car_park", smart: true },
    { key: "tree3", type: "tree" },
    { key: "6", type: "car_park", smart: true },
    { key: "8", type: "car_park", smart: true },
    { key: "10", type: "car_park", smart: true },
    { key: "12", type: "car_park" },
    { key: "14", type: "car_park" },
    { key: "tree4", type: "tree" },
    { key: "16", type: "car_park" },
    { key: "18", type: "car_park" },
    { key: "20", type: "car_park" },
    { key: "22", type: "car_park" },
    { key: "24", type: "car_park" },
    { key: "26", type: "car_park" },
    { key: "28", type: "car_park" },
    { key: "30", type: "car_park" },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.5, backgroundColor: "white", zIndex: 1, paddingTop:15, paddingLeft:15 }}>
        <Text>Mon. - Fri. 08.00 - 22.00</Text>
        <Text>Sat. - Sun. 08.00 - 20.00</Text>
  <Text>{id3xx[0].status}</Text>
      </View>

      <ReactNativeZoomableView
        maxZoom={1}
        minZoom={0.55}
        zoomStep={0.5}
        initialZoom={0.55}
        //captureEvent={true}
        movementSensibility={1}
        bindToBorders={false}
        style={{
          padding: 10,
          justifyContent: "flex-start",
          alignItems: "center",
          flex: 1,
          //width:1300,
          flexDirection: "column",
          borderWidth: 3,
          borderColor: 'black',
          borderStyle:'solid',
        }}
      >
        <View style={{ height:500, backgroundColor:'grey', alignItems:'center'}}>
          <View style={style.road}></View>
        <View style={style.id3}>
          <FlatList
            data={id3xx}
            horizontal={true}
            renderItem={({ item }) => {
              return (<ParkingEnv type={item.type} id={item.key} smart={item.smart}></ParkingEnv>);
            }}
            keyExtractor={(id3xx) => id3xx.key}
          />
        </View>

        <View style={style.road}></View>

        <View style={style.id2}>
          <FlatList
            data={id2xx}
            numColumns={36}
            renderItem={({ item }) => {
              return (<ParkingEnv type={item.type} id={item.key} smart={item.smart}></ParkingEnv>);
            }}
            keyExtractor={(id3xx) => id3xx.key}
          />
        </View>

        <View style={style.road}></View>

        <View style={style.id1_4}>
          <FlatList
            data={id1xx}
            horizontal={true}
            renderItem={({ item }) => {
              return (<ParkingEnv type={item.type} id={item.key} smart={item.smart}></ParkingEnv>);
            }}
            keyExtractor={(id3xx) => id3xx.key}
          />

          <FlatList
            data={id4xx}
            numColumns={17}
            renderItem={({ item }) => {
              return (<ParkingEnv type={item.type} id={item.key} smart={item.smart}></ParkingEnv>);
            }}
            keyExtractor={(id3xx) => id3xx.key}
          />
        </View>
        <View style={style.road}></View>
        </View>
      </ReactNativeZoomableView>

      <View
        style={{ flex: 0.5, backgroundColor: "white", flexDirection: "row" }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-around",
            backgroundColor: "white",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                marginLeft: 15,
                width: 15,
                height: 15,
                backgroundColor: "red",
              }}
            ></View>
            <Text style={{ paddingLeft: 10 }}>Not Avilable</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                marginLeft: 15,
                width: 15,
                height: 15,
                backgroundColor: "lime",
              }}
            ></View>
            <Text style={{ paddingLeft: 10 }}>Avilable</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                marginLeft: 15,
                width: 15,
                height: 15,
                backgroundColor: "blue",
              }}
            ></View>
            <Text style={{ paddingLeft: 10 }}>For{check == "student" ? " Officer" : " Student"}</Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        ></View>
      </View>
    </View>
  );
};

export default Layout;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  id1_4: {
    //backgroundColor: "yellow",
    width: 1100,
    flex: 1.3,
    flexDirection: "row",
    
  },
  id2: {
    //backgroundColor: "orange",
    width: 1100,
    flex: 1.3,
    alignItems: "center",
  },
  id3: {
    //backgroundColor: "green",
    width: 1100,
    flex: 0.7,
    alignItems: "center",
  },
  road: {
    backgroundColor: "black",
    width: 1200,
    flex: 0.5,
  },
  slot: {
    height: 50,
    width: 30,
    backgroundColor: "blue",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "white",
    color: "white",
  },
});

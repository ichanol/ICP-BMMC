import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Dimensions,
  Modal,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";

import Constants from "expo-constants";
import MapView, {
  Marker,
  Polygon,
  PROVIDER_GOOGLE,
  Callout,
} from "react-native-maps";
import Refresh from "../icon/Refresh";
import Mappin from "../icon/Mappin";
import { MAP_STYLE } from "./Variable";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MapLayout = () => {
  var myref = useRef();
  var lotdata;

  const [refreshtime, setRefreshtime] = useState("");
  const [showtime, setShowtime] = useState(false);
  const [id1xx, setID1xx] = useState([]);
  const [id2xx_1, setID2xx_1] = useState([]);
  const [id2xx_2, setID2xx_2] = useState([]);
  const [id3xx, setID3xx] = useState([]);
  const [id4xx_1, setID4xx_1] = useState([]);
  const [id4xx_2, setID4xx_2] = useState([]);
  const [presentavailable, setPresentavailable] = useState("");
  const [pickerdisplay, setPickerdisplay] = useState(false);
  const [maptype, setMaptype] = useState("hybrid");
  const [mapstyle, setMapstyle] = useState([]);
  const [showName, setShowName] = useState("FIBO");
  const [infodisplay, setInfodisplay] = useState(false);

  const CheckSettings = async () => {
    try {
      const maptypeValue = await AsyncStorage.getItem("maptype");
      const mapstyleValue = await AsyncStorage.getItem("mapstyle");
      setMaptype(maptypeValue);
      if (mapstyleValue == "DEFAULT") {
        setMapstyle([]);
      } else if (mapstyleValue == "AUBERGINE") {
        setMapstyle(MAP_STYLE.AUBERGINE);
      } else if (mapstyleValue == "RETRO") {
        setMapstyle(MAP_STYLE.RETRO);
      }
    } catch (err) {
      console.log(err);
    }
  };
  //Default Region FIBO
  const Region = {
    latitude: 13.654998926783339,
    longitude: 100.49456555396318,
    latitudeDelta: 0.0014,
    longitudeDelta: 0.0014,
  };
  const amountfor1 = 12;
  const amountfor2_3 = 35;
  const amountfor4 = 16;

  const reflot1 = [
    { name: 1, latitude: 13.654807, longitude: 100.494179, status: "" }, //Y,X
    { name: 2, latitude: 13.6547985, longitude: 100.4941996 },
    { name: 3, latitude: 13.6547615, longitude: 100.4941826 },
    { name: 4, latitude: 13.65477, longitude: 100.494162 },
  ];

  const reflot2_1 = [
    { name: 1, latitude: 13.654936, longitude: 100.494244, status: "" },
    { name: 2, latitude: 13.6549275, longitude: 100.4942646 },
    { name: 3, latitude: 13.6548905, longitude: 100.4942476 },
    { name: 4, latitude: 13.654899, longitude: 100.494227 },
  ];

  const reflot2_2 = [
    { name: 1, latitude: 13.654899, longitude: 100.494227, status: "" },
    { name: 2, latitude: 13.6548905, longitude: 100.4942476 }, //1-2=>-85 ,1-2=>+206
    { name: 3, latitude: 13.6548535, longitude: 100.4942306 }, //2-3=>-370, 2-3=>-170
    { name: 4, latitude: 13.654862, longitude: 100.49421 }, //3-4=>+85, -206
  ];

  const reflot3 = [
    { name: 1, latitude: 13.6550342, longitude: 100.4942861 },
    { name: 2, latitude: 13.6550257, longitude: 100.4943067 },
    { name: 3, latitude: 13.6549887, longitude: 100.4942897 },
    { name: 4, latitude: 13.6549972, longitude: 100.4942691 },
  ];

  const reflot4_1 = [
    { name: 1, latitude: 13.6546587, longitude: 100.494535, status: "" }, //Y,X
    { name: 2, latitude: 13.6546502, longitude: 100.4945556 },
    { name: 3, latitude: 13.6546133, longitude: 100.4945386 },
    { name: 4, latitude: 13.6546217, longitude: 100.494518 },
  ];

  const reflot4_2 = [
    { name: 1, latitude: 13.6546217, longitude: 100.494518, status: "" }, //Y,X
    { name: 2, latitude: 13.6546133, longitude: 100.4945386 },
    { name: 3, latitude: 13.6545763, longitude: 100.4945216 },
    { name: 4, latitude: 13.6545848, longitude: 100.494501 },
  ];
  //id1xx [0-4]
  //id4xx [5-14]
  const findavailable = (lotdata) => {
    var available = 0;
    lotdata.map((element, index) => {
      if (element.Lot_Status == "0") {
        available = available + 1;
      } else {
      }
    });
    setPresentavailable(available);
  };

  fetchData = async () => {
    try {
      //const response = await fetch("http://52.221.134.8/11.json");
      //const response = await fetch("http://192.168.1.56/2/makeup.json");
      const response = await fetch("http://52.221.134.8/apiv1.json");
      const json = await response.json();
      lotdata = json;
      console.log(lotdata)
      findavailable(lotdata);
      //console.log(json[15]);
      var gen1 = latlong1xxgen(lotdata);
      var gen2_1 = latlong2xx_1gen(lotdata);
      var gen2_2 = latlong2xx_2gen(lotdata);
      var gen3 = latlongID3xxgen(lotdata);
      var gen4_1 = latlongID4xx_1gen(lotdata);
      var gen4_2 = latlongID4xx_2gen(lotdata);
      setID1xx(gen1);
      setID2xx_1(gen2_1);
      setID2xx_2(gen2_2);
      setID3xx(gen3);
      setID4xx_1(gen4_1);
      setID4xx_2(gen4_2);
      console.log("Fetched");
      lastupdate();
      console.log("Update time!");
    } catch (err) {
      console.log(err);
    }
  };

  const lastupdate = () => {
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    if (hours < 10) {
      hours = "0" + hours;
    } else {
    }
    if (min < 10) {
      min = "0" + min;
    } else {
    }
    if (sec < 10) {
      sec = "0" + sec;
    } else {
    }
    setRefreshtime("Last update: " + hours + ":" + min + ":" + sec);
    setShowtime(true);
  };

  useEffect(() => {
    CheckSettings();
    fetchData();
    console.log("Welocome!");
  }, []);

  const latlong1xxgen = (lotdata) => {
    //แถว1 เลขคี่
    //id2xx [15-32]

    var la1 = reflot1[0].latitude;
    var la2 = reflot1[1].latitude;
    var la3 = reflot1[2].latitude;
    var la4 = reflot1[3].latitude;
    var lon1 = reflot1[0].longitude;
    var lon2 = reflot1[1].longitude;
    var lon3 = reflot1[2].longitude;
    var lon4 = reflot1[3].longitude;

    var temp = [reflot1];

    for (var i = 1; i <= amountfor1; i++) {
      la1 = la2;
      lon1 = lon2;
      la4 = la3;
      lon4 = lon3;

      la2 = la1 - 0.0000085;
      lon2 = lon1 + 0.0000206;
      la3 = la4 - 0.0000085;
      lon3 = lon4 + 0.0000206;

      temp.push([
        { name: 1, latitude: la1, longitude: lon1, status: "" },
        { name: 2, latitude: la2, longitude: lon2 },
        { name: 3, latitude: la3, longitude: lon3 },
        { name: 4, latitude: la4, longitude: lon4 },
      ]);
    }
    temp[4][0].status = "TREE";
    temp[10][0].status = "TREE";
    if (lotdata) {
      var index = 0;

      for (var x = 7; x <= 12; x++) {
        if (temp[x][0].status == "TREE") {
        } else {
          if (index <= 4) {
            temp[x][0].status = lotdata[index].Lot_Status;
            index++;
          } else {
            // console.log("run out of hardware"+x);
          }
        }
      }
    } else {
    }

    //console.log(lotdata[index].lot_id);
    //console.log(temp[17]);
    return temp;
  };

  const RenderID1xx = () => {
    return id1xx.map((slot, index) => {
      var colorbackground, stroke;
      switch (slot[0].status) {
        case "0":
          colorbackground = "rgba(0,255,0,1)";
          stroke = "white";
          break;
        case "1":
          colorbackground = "red";
          stroke = "white";
          break;
        case "TREE":
          colorbackground = "rgba(0,0,0,0)";
          stroke = "rgba(0,0,0,0)";
          break;
        default:
          colorbackground = "rgba(50,60,150,0.75)";
          stroke = "white";
          break;
      }
      return (
        <Polygon
          key={index}
          coordinates={slot}
          fillColor={colorbackground}
          strokeWidth={1}
          strokeColor={stroke}
        ></Polygon>
      );
    });
  };

  const latlong2xx_1gen = (lotdata) => {
    //แถว1 เลขคี่
    //id2xx [15-32]

    var la1 = reflot2_1[0].latitude;
    var la2 = reflot2_1[1].latitude;
    var la3 = reflot2_1[2].latitude;
    var la4 = reflot2_1[3].latitude;
    var lon1 = reflot2_1[0].longitude;
    var lon2 = reflot2_1[1].longitude;
    var lon3 = reflot2_1[2].longitude;
    var lon4 = reflot2_1[3].longitude;

    var temp = [reflot2_1];

    for (var i = 1; i <= amountfor2_3; i++) {
      la1 = la2;
      lon1 = lon2;
      la4 = la3;
      lon4 = lon3;

      la2 = la1 - 0.0000085;
      lon2 = lon1 + 0.0000206;
      la3 = la4 - 0.0000085;
      lon3 = lon4 + 0.0000206;

      temp.push([
        { name: 1, latitude: la1, longitude: lon1, status: "" },
        { name: 2, latitude: la2, longitude: lon2 },
        { name: 3, latitude: la3, longitude: lon3 },
        { name: 4, latitude: la4, longitude: lon4 },
      ]);
    }
    if (lotdata) {
      var index = 15;
      for (var x = 0; x <= 35; x++) {
        if (index <= 32) {
          temp[x][0].status = lotdata[index].Lot_Status;
          index = index + 2;
        } else {
          // console.log("run out of hardware"+x);
        }
      }
    } else {
    }
    temp[19][0].status = "TREE";
    temp[25][0].status = "TREE";

    //console.log(lotdata[index].lot_id);
    //console.log(temp);
    return temp;
  };

  const RenderID2xx_1 = () => {
    //var temp = latlong2xx_1gen();
    //console.log(temp);
    //etID2xx_1(temp);
    //console.log(id2xx_1);
    return id2xx_1.map((slot, index) => {
      var colorbackground, stroke;
      switch (slot[0].status) {
        case "0":
          colorbackground = "rgba(0,255,0,1)";
          stroke = "white";
          break;
        case "1":
          colorbackground = "red";
          stroke = "white";
          break;
        case "TREE":
          colorbackground = "rgba(0,0,0,0)";
          stroke = "rgba(0,0,0,0)";
          break;
        default:
          colorbackground = "rgba(50,60,150,0.75)";
          stroke = "white";
          break;
      }
      return (
        <Polygon
          key={index}
          coordinates={slot}
          fillColor={colorbackground}
          strokeWidth={1}
          strokeColor={stroke}
        ></Polygon>
      );
    });
  };

  const latlong2xx_2gen = (lotdata) => {
    var la1 = reflot2_2[0].latitude;
    var la2 = reflot2_2[1].latitude;
    var la3 = reflot2_2[2].latitude;
    var la4 = reflot2_2[3].latitude;
    var lon1 = reflot2_2[0].longitude;
    var lon2 = reflot2_2[1].longitude;
    var lon3 = reflot2_2[2].longitude;
    var lon4 = reflot2_2[3].longitude;

    var temp = [reflot2_2];

    for (var i = 1; i <= amountfor2_3; i++) {
      la1 = la2;
      lon1 = lon2;
      la4 = la3;
      lon4 = lon3;

      la2 = la1 - 0.0000085;
      lon2 = lon1 + 0.0000206;
      la3 = la4 - 0.0000085;
      lon3 = lon4 + 0.0000206;
      temp.push([
        { name: 1, latitude: la1, longitude: lon1, status: "" },
        { name: 2, latitude: la2, longitude: lon2 },
        { name: 3, latitude: la3, longitude: lon3 },
        { name: 4, latitude: la4, longitude: lon4 },
      ]);
    }
    if (lotdata) {
      var index = 16;
      for (var x = 0; x <= 35; x++) {
        if (index <= 32) {
          temp[x][0].status = lotdata[index].Lot_Status;
          index = index + 2;
        } else {
          // console.log("run out of hardware"+x);
        }
      }
    } else {
    }
    temp[19][0].status = "TREE";
    temp[25][0].status = "TREE";

    return temp;
  };

  const RenderID2xx_2 = () => {
    //setID2xx_2(temp);
    //console.log(id2xx_2);
    return id2xx_2.map((slot, index) => {
      var colorbackground, stroke;
      switch (slot[0].status) {
        case "0":
          colorbackground = "rgba(0,255,0,1)";
          stroke = "white";
          break;
        case "1":
          colorbackground = "red";
          stroke = "white";
          break;
        case "TREE":
          colorbackground = "rgba(0,0,0,0)";
          stroke = "rgba(0,0,0,0)";
          break;
        default:
          colorbackground = "rgba(50,60,150,0.75)";
          stroke = "white";
          break;
      }
      return (
        <Polygon
          key={index}
          coordinates={slot}
          fillColor={colorbackground}
          strokeWidth={1}
          strokeColor={stroke}
        ></Polygon>
      );
    });
  };

  const latlongID3xxgen = () => {
    var la1 = reflot3[0].latitude;
    var la2 = reflot3[1].latitude;
    var la3 = reflot3[2].latitude;
    var la4 = reflot3[3].latitude;
    var lon1 = reflot3[0].longitude;
    var lon2 = reflot3[1].longitude;
    var lon3 = reflot3[2].longitude;
    var lon4 = reflot3[3].longitude;

    var temp = [reflot3];

    for (var i = 1; i <= amountfor2_3; i++) {
      la1 = la2;
      lon1 = lon2;
      la4 = la3;
      lon4 = lon3;

      la2 = la1 - 0.0000085;
      lon2 = lon1 + 0.0000206;
      la3 = la4 - 0.0000085;
      lon3 = lon4 + 0.0000206;
      temp.push([
        { name: 1, latitude: la1, longitude: lon1, status: "" },
        { name: 2, latitude: la2, longitude: lon2 },
        { name: 3, latitude: la3, longitude: lon3 },
        { name: 4, latitude: la4, longitude: lon4 },
      ]);
    }
    return temp;
  };

  const RenderID3xx = () => {
    //setID3xx(temp);
    //console.log(id3xx);
    return id3xx.map((slot, index) => {
      var colorbackground, stroke;
      switch (slot[0].status) {
        case "0":
          colorbackground = "rgba(0,255,0,1)";
          stroke = "white";
          break;
        case "1":
          colorbackground = "red";
          stroke = "white";
          break;
        case "TREE":
          colorbackground = "rgba(0,0,0,0)";
          stroke = "rgba(0,0,0,0)";

          break;
        default:
          colorbackground = "rgba(50,60,150,0.75)";
          stroke = "white";
          break;
      }
      return (
        <Polygon
          key={index}
          coordinates={slot}
          fillColor={colorbackground}
          strokeWidth={1}
          strokeColor={stroke}
        ></Polygon>
      );
    });
  };

  const latlongID4xx_1gen = (lotdata) => {
    //แถว1 เลขคี่
    //id2xx [15-32]

    var la1 = reflot4_1[0].latitude;
    var la2 = reflot4_1[1].latitude;
    var la3 = reflot4_1[2].latitude;
    var la4 = reflot4_1[3].latitude;
    var lon1 = reflot4_1[0].longitude;
    var lon2 = reflot4_1[1].longitude;
    var lon3 = reflot4_1[2].longitude;
    var lon4 = reflot4_1[3].longitude;

    var temp = [reflot4_1];

    for (var i = 1; i <= amountfor4; i++) {
      la1 = la2;
      lon1 = lon2;
      la4 = la3;
      lon4 = lon3;

      la2 = la1 - 0.0000085;
      lon2 = lon1 + 0.0000206;
      la3 = la4 - 0.0000085;
      lon3 = lon4 + 0.0000206;

      temp.push([
        { name: 1, latitude: la1, longitude: lon1, status: "" },
        { name: 2, latitude: la2, longitude: lon2 },
        { name: 3, latitude: la3, longitude: lon3 },
        { name: 4, latitude: la4, longitude: lon4 },
      ]);
    }
    temp[2][0].status = "TREE";
    temp[8][0].status = "TREE";
    if (lotdata) {
      var index = 5;

      for (var x = 0; x <= amountfor4; x++) {
        if (temp[x][0].status == "TREE") {
        } else {
          if (index <= 14) {
            temp[x][0].status = lotdata[index].Lot_Status;
            index = index + 2;
          } else {
            // console.log("run out of hardware"+x);
          }
        }
      }
    } else {
    }

    //console.log(lotdata[index].lot_id);
    //console.log(temp[17]);
    return temp;
  };

  const RenderID4xx_1 = () => {
    //var temp = latlong2xx_1gen();
    //console.log(temp);
    //etID2xx_1(temp);
    //console.log(id2xx_1);
    return id4xx_1.map((slot, index) => {
      var colorbackground, stroke;
      switch (slot[0].status) {
        case "0":
          colorbackground = "rgba(0,255,0,1)";
          stroke = "white";
          break;
        case "1":
          colorbackground = "red";
          stroke = "white";
          break;
        case "TREE":
          colorbackground = "rgba(0,0,0,0)";
          stroke = "rgba(0,0,0,0)";
          break;
        default:
          colorbackground = "rgba(50,60,150,0.75)";
          stroke = "white";
          break;
      }
      return (
        <Polygon
          key={index}
          coordinates={slot}
          fillColor={colorbackground}
          strokeWidth={1}
          strokeColor={stroke}
        ></Polygon>
      );
    });
  };

  const latlongID4xx_2gen = (lotdata) => {
    //แถว1 เลขคี่
    //id2xx [15-32]

    var la1 = reflot4_2[0].latitude;
    var la2 = reflot4_2[1].latitude;
    var la3 = reflot4_2[2].latitude;
    var la4 = reflot4_2[3].latitude;
    var lon1 = reflot4_2[0].longitude;
    var lon2 = reflot4_2[1].longitude;
    var lon3 = reflot4_2[2].longitude;
    var lon4 = reflot4_2[3].longitude;

    var temp = [reflot4_2];

    for (var i = 1; i <= amountfor4; i++) {
      la1 = la2;
      lon1 = lon2;
      la4 = la3;
      lon4 = lon3;

      la2 = la1 - 0.0000085;
      lon2 = lon1 + 0.0000206;
      la3 = la4 - 0.0000085;
      lon3 = lon4 + 0.0000206;

      temp.push([
        { name: 1, latitude: la1, longitude: lon1, status: "" },
        { name: 2, latitude: la2, longitude: lon2 },
        { name: 3, latitude: la3, longitude: lon3 },
        { name: 4, latitude: la4, longitude: lon4 },
      ]);
    }
    temp[2][0].status = "TREE";
    temp[8][0].status = "TREE";
    if (lotdata) {
      var index = 6;

      for (var x = 0; x <= amountfor4; x++) {
        if (temp[x][0].status == "TREE") {
        } else {
          if (index <= 14) {
            temp[x][0].status = lotdata[index].Lot_Status;
            index = index + 2;
          } else {
            // console.log("run out of hardware"+x);
          }
        }
      }
    } else {
    }

    //console.log(lotdata[index].lot_id);
    //console.log(temp[17]);
    return temp;
  };

  const RenderID4xx_2 = () => {
    //var temp = latlong2xx_1gen();
    //console.log(temp);
    //etID2xx_1(temp);
    //console.log(id2xx_1);
    return id4xx_2.map((slot, index) => {
      var colorbackground, stroke;
      switch (slot[0].status) {
        case "0":
          colorbackground = "rgba(0,255,0,1)";
          stroke = "white";
          break;
        case "1":
          colorbackground = "red";
          stroke = "white";
          break;
        case "TREE":
          colorbackground = "rgba(0,0,0,0)";
          stroke = "rgba(0,0,0,0)";
          break;
        default:
          colorbackground = "rgba(50,60,150,0.75)";
          stroke = "white";
          break;
      }
      return (
        <Polygon
          key={index}
          coordinates={slot}
          fillColor={colorbackground}
          strokeWidth={1}
          strokeColor={stroke}
        ></Polygon>
      );
    });
  };

  const indicator_info = [
    { color: "rgba(0,255,0,1)", Text: "Available" /*  + presentavailable  */ },
    { color: "red", Text: "Not Available" },
    { color: "rgba(50,60,150,1)", Text: "Normal Slot" },
  ];

  const location_info = [
    {
      name: "FIBO",
      latlong: {
        latitude: 13.654998926783339,
        longitude: 100.49456555396318,
        latitudeDelta: 0.0014,
        longitudeDelta: 0.0014,
      },
    },
    {
      name: "CB4",
      latlong: {
        latitude: 13.649213,
        longitude: 100.492737,
        latitudeDelta: 0.0014,
        longitudeDelta: 0.0014,
      },
    },
    {
      name: "D'oro",
      latlong: {
        latitude: 13.650266,
        longitude: 100.495715,
        latitudeDelta: 0.0014,
        longitudeDelta: 0.0014,
      },
    },
    {
      name: "CB1",
      latlong: {
        latitude: 13.651008,
        longitude: 100.493298,
        latitudeDelta: 0.0014,
        longitudeDelta: 0.0014,
      },
    },
  ];

  const marker_info = [
    {
      title: "FIBO",
      description: "FIBO PARKING",
      coordinate: {
        latitude: 13.654998926783339,
        longitude: 100.49456555396318,
      },
    },
    {
      title: "CB4",
      description: "CB4 PARKING",
      coordinate: {
        latitude: 13.649213,
        longitude: 100.492737,
      },
    },
    {
      title: "D'oro",
      description: "D'oro PARKING",
      coordinate: {
        latitude: 13.650266,
        longitude: 100.495715,
      },
    },
    {
      title: "CB1",
      description: "CB1 PARKING",
      coordinate: {
        latitude: 13.651008,
        longitude: 100.493298,
      },
    },
  ];

  const action_button = [
    {
      comp: <Refresh></Refresh>,
      action: () => {
        fetchData();
        console.log("Refresh");
      },
    },
    {
      comp: <Mappin></Mappin>,
      action: () => {
        setPickerdisplay(true);
      },
    },
  ];

  const Visibleshowtime = () => {
    return showtime ? (
      <View style={styles.lastupdatetime}>
        <Text style={styles.lastupdatetext}>{refreshtime}</Text>
      </View>
    ) : null;
  };

  const arrow = [
    { latitude: 13.654160643199402, longitude: 100.49454879015684 }, //ซ้ายล่าง
    { latitude: 13.654149891777696, longitude: 100.49460042268039 }, //ขวาล่าง
    { latitude: 13.654228735525527, longitude: 100.49461819231509 }, //ขวาบน
    { latitude: 13.654221242112603, longitude: 100.49465406686068 }, //ขวา
    { latitude: 13.654298782634752, longitude: 100.4946034401655 }, //กลาง
    { latitude: 13.654248283558099, longitude: 100.49453135579824 }, //ซ้าย
    { latitude: 13.654239161143106, longitude: 100.49456588923931 }, //ซ้ายบน
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.indicator}
        onPress={() => setInfodisplay(true)}
      >
        <View style={styles.showInformation}>
          <View style={styles.LEFT}>
            <Text style={{ fontSize: 80, fontWeight: "bold", color: "lime" }}>
              {presentavailable}
            </Text>
          </View>
          <View style={styles.RIGHT}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 75 }}>
              {showName}
            </Text>
          </View>
        </View>
        <View style={styles.indicatorIcon}>
          {indicator_info.map((element, key) => {
            return (
              <View key={key} style={styles.wrap}>
                <View
                  style={{ ...styles.square, backgroundColor: element.color }}
                ></View>
                <Text style={styles.indText}>{element.Text}</Text>
              </View>
            );
          })}
        </View>
      </TouchableOpacity>

      <View style={styles.floatbuttoncontainer}>
        {action_button.map((element, key) => {
          return (
            <TouchableOpacity
              key={key}
              style={styles.floatbutton}
              onPress={element.action}
            >
              {element.comp}
            </TouchableOpacity>
          );
        })}
      </View>

      <Modal
        visible={pickerdisplay}
        transparent={true}
        animationType={"slide"}
        onRequestClose={() => {
          setPickerdisplay(false);
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setPickerdisplay(false);
          }}
          style={{
            //backgroundColor: "red",
            width: windowWidth,
            height: windowHeight,
          }}
        ></TouchableOpacity>

        <View style={styles.modalcontainer}>
          <Text style={styles.modaltextheader}>Select Parking Area</Text>
          <View style={styles.modalchoicescontainer}>
            {location_info.map((element, key) => {
              return (
                <TouchableHighlight
                  key={key}
                  style={styles.modalchoice}
                  activeOpacity={0.9}
                  underlayColor="rgba(0,0,0,0.2)"
                  onPress={() => {
                    myref.animateToRegion(element.latlong, 1500);
                    setPickerdisplay(false);
                    setShowName(element.name);
                  }}
                >
                  <Text>{element.name}</Text>
                </TouchableHighlight>
              );
            })}
          </View>
        </View>
      </Modal>

      <Modal
        visible={infodisplay}
        transparent={true}
        animationType={"slide"}
        onRequestClose={() => {
          setInfodisplay(false);
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setInfodisplay(false);
          }}
          style={{
            //backgroundColor: "red",
            width: windowWidth,
            height: windowHeight,
          }}
        ></TouchableOpacity>

        <View style={styles.infocontainer}>
          <Text style={styles.modaltextheader}>Information</Text>
          <View style={styles.modalchoicescontainer}>
            <View style={{minHeight:300,padding:20}}>
              <Text>อะไรก็ไม่รู้แหละที่พวกมึงอยากได้กูจะเอามาใส่ตรงนี้ โอเคไหม ไม่โอเคก็เรื่องของพวกมึง กูbuild ipaเสร็จเมื่อไหร่กูลาออก!</Text>
            </View>
          </View>
        </View>
      </Modal>

      <Visibleshowtime></Visibleshowtime>

      <MapView
        style={styles.Map}
        provider={PROVIDER_GOOGLE}
        initialRegion={Region}
        showsUserLocation={true}
        ref={(map) => (myref = map)}
        mapType={maptype}
        customMapStyle={mapstyle} //`rgb(${red},${green},${blue})`
      >
        <RenderID1xx></RenderID1xx>
        <RenderID2xx_1></RenderID2xx_1>
        <RenderID2xx_2></RenderID2xx_2>
        <RenderID3xx></RenderID3xx>
        <RenderID4xx_1></RenderID4xx_1>
        <RenderID4xx_2></RenderID4xx_2>
        <Polygon
          coordinates={arrow}
          fillColor={"yellow"}
          strokeWidth={1}
          strokeColor="black"
        ></Polygon>
        {marker_info.map((element, key) => {
          return (
            <Marker
              key={key}
              title={element.title}
              coordinate={element.coordinate}
              onPress={(e) => console.log(e.nativeEvent)}
            >
              <Callout
                onPress={() => {
                  console.log("Pressed");
                }}
              >
                <Text>{element.description}</Text>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};
export default MapLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    position: "relative",
  },
  Map: {
    height: "100%",
  },
  indicator: {
    backgroundColor: "yellow",
    zIndex: 1,
    position: "absolute",
    top: 20,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
  },
  square: {
    width: 15,
    height: 15,
  },
  wrap: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  indText: {
    color: "black",
    //color: "rgba(255,255,255,0.8)",
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  floatbuttoncontainer: {
    position: "absolute",
    bottom: Constants.statusBarHeight,
    left: 20,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  floatbutton: {
    width: 45,
    height: 45,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
    borderRadius: 40,
    marginBottom: 20,
  },
  modalcontainer: {
    paddingVertical: 20,
    left: 20,
    right: 20,
    bottom: 2 * Constants.statusBarHeight + windowHeight / 12,
    backgroundColor: "white",
    position: "absolute",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
    borderRadius: 15,
    alignItems: "center",
    zIndex: 1,
  },
  modaltextheader: {
    paddingVertical: 10,
    fontSize: 18,
  },
  modalchoicescontainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  modalchoice: {
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  lastupdatetime: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.55)",
    bottom: 10,
    zIndex: 1,
    height: windowHeight / 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,

    transform: [{ translateX: windowWidth / 4 }],
  },
  lastupdatetext: {
    textAlign: "center",
    color: "white",
    width: 200,
  },
  indicatorIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  showInformation: {
    height: 120,
    flexDirection: "row",
    display: "flex",
  },
  LEFT: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 5,
  },
  RIGHT: {
    flex: 2,
    backgroundColor: "#212121",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
  },
  infocontainer: {
    paddingVertical: 20,
    left: 20,
    right: 20,
    top: 5 * Constants.statusBarHeight + windowHeight / 12,
    backgroundColor: "white",
    position: "absolute",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
    borderRadius: 15,
    alignItems: "center",
    zIndex: 1,
  },
});

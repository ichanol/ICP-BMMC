import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, AsyncStorage } from 'react-native';
import Menu from '../component/Menu';
import firebase from 'firebase';

const HomeScreen = (props) => {
  const [reg, setReg] = useState("");
  const check = "eiei";//props.route.params.user;

  const CheckReg = async () => {
    try {
      const userValue = await AsyncStorage.getItem("user");
      if (userValue !== null) {
        setReg(userValue);
      }else{
        setReg("clear")
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    CheckReg();
  },[]);
  console.log(props);
  
  var firebaseConfig = {
    apiKey: "AIzaSyAmMPx7xrY5q_ADV8wgQyI51PwgOVdp_kE",
    authDomain: "smartparkingtest-8cc90.firebaseapp.com",
    databaseURL: "https://smartparkingtest-8cc90.firebaseio.com",
    projectId: "smartparkingtest-8cc90",
    storageBucket: "smartparkingtest-8cc90.appspot.com",
    messagingSenderId: "358247520226",
    appId: "1:358247520226:web:4a440507fc81eb63060bbb",
    measurementId: "G-EHGQP6SX5D"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);}
    console.clear();

  


  const router = [
    {name: "FIBO", 
    control:()=>{
      props.navigation.navigate("Firebase",{
        user: check,
      });
      }
    },
    {name: "Parking Demo", 
    control:()=>{
      props.navigation.navigate("Demo",{
        user: check,
      });
      }
    },
    {name: "Layout", 
    control:()=>{
      props.navigation.navigate("Layout",{
        user: check,
      });
      }
    },
    {name: "GGMAP", 
    control:()=>{
      props.navigation.navigate("MAP",{
        user: check,
      });
      }
    },
    {name: "How to", 
    control:()=>{
      props.navigation.navigate("INS",{
        user: check,
      });
      }
    },
    {name: "Nav Bar", 
    control:()=>{
      props.navigation.navigate("NAV",{
        user: check,
      });
      }
    },
    {name: "ROUTE", 
    control:()=>{
      props.navigation.navigate("route",{
        user: check,
      });
      }
    }
  ];

  //var state = 0;
  //state = 1;
  //console.log("state :", state);

  return (
    <View style = {style.List}>
      <Text>{reg}</Text>
      <Text style={{paddingTop:20}}>You are using Intelligent car parking as {check} !</Text>
      <FlatList 
        numColumns={2}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false} 
        keyExtractor={(router)=>router.name}
        data={router} 
        //contentContainerStyle={style.List}
        renderItem={({item}) => {return <Menu name={item.name} action={item.control}/>}}
      />
    </View> 
    
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  List: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
});
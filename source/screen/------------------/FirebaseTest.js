import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList  } from 'react-native';
import firebase from 'firebase';
import Car from '../component/Car';

const FirebaseTest = (props) => {
  const check = props.route.params.user;

    const [slotData, setdata] = useState([]);



    useEffect(()=>{

      let temp = firebase.database().ref('Slot/data');
      temp.on('value', snapshot => {
        setdata(snapshot.val());
      });
    },[]);
    
    console.log("------------------------",slotData);


    return (
      <View>
        <Text>Firebase Test {check}</Text>
        <FlatList
        numColumns = {3}
        data = {slotData}
        keyExtractor = {(slotData)=> slotData.id}
        renderItem = {({item})=>{
          return (<View><Car id={item.id} status={item.Status}/></View>
        //<View><Text>ID:{item.id}{"\n"}STATUS:{item.Status? "Not Avaiable":"Avaiable"}{"\n"}</Text></View>}
          );}}
        />
      </View>
  );
};

export default FirebaseTest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
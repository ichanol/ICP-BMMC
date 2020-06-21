import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Car = (props) => {


//console.log("PROPS",props);


    const CarCondition = () =>{
        
        if(props.status == 1){
        return (
        <View style={style.red}>
            <Text style={style.Text}>ID:{props.id}</Text>
            <Text>STATUS:{props.status}</Text>
        </View>
        );
        }else if(props.status == 0){
            return (
            <View style={style.green}>
                <Text style={style.Text}>ID:{props.id}</Text>
                <Text>STATUS:{props.status}</Text>
            </View>
            );
        }else{
            return (
                <View style={style.null}>
                    <Text style={style.Text}>ID:{props.id}</Text>
                    <Text>STATUS:{props.status}</Text>
                </View>
                );
        }
    };
    


    return(
        <View>
            <CarCondition/>
        </View>
    );
};
export default Car;

const style = StyleSheet.create({
    red:{
        flex:1,
        width:85, 
        height:85,
        backgroundColor:"#f01111",
        marginTop:10,
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        /* borderWidth: 3,
        borderColor: "black",
        borderStyle: "solid", */
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },
    green:{
        flex:1,
        width:85, 
        height:85,
        backgroundColor:"#7ad789",
        marginTop:10,
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        /* borderWidth: 3,
        borderColor: "black",
        borderStyle: "solid", */
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },
    null:{
        flex:1,
        width:85, 
        height:85,
        backgroundColor:"black",
        marginTop:10,
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        /* borderWidth: 3,
        borderColor: "black",
        borderStyle: "solid", */
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
    },
    Text:{
      color: "#fff",
      fontWeight: "300",
    }
  });
  
  
  
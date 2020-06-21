import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
const Menu = (props) => {
    return(
        <TouchableOpacity
        onPress = {props.action}
        style = {style.Box}
        >
            <Text style = {style.Text}>{props.name}</Text>

        </TouchableOpacity>
    );
};
export default Menu;

const style = StyleSheet.create({
    Box:{
        backgroundColor: "#ff7300",
        height: 120,
        width: 120,
        borderRadius: 20,
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    Text:{
        color: "#fff",
        fontSize: 15,
        fontWeight: "600",
    },
});
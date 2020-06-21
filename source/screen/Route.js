import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import NavBar from "./NavBar";
import Instruction from "./Instruction";

const Route = () => {
  let [reg, setReg] = useState(true);

  const CheckReg = async () => {
    try {
      const userValue = await AsyncStorage.getItem("user");
      if (userValue !== null) {
        setReg(true);
      } else {
        setReg(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const Cond = () => {
    return reg? <NavBar></NavBar>:<Instruction></Instruction>;
  };

  useEffect(() => {
    CheckReg();
    Cond();
  }, []);

  return <Cond></Cond>;
};
export default Route;

import React, { useState, useEffect } from 'react'
import { AsyncStorage } from 'react-native'
import NavBar from './NavBar'
import Instruction from './Instruction'

const Route = () => {
  let [reg, setReg] = useState(null)

  const CheckReg = async () => {
    try {
      const userValue = await AsyncStorage.getItem('user')
      if (userValue !== null) {
        setReg(true)
      } else {
        setReg(false)
      }
    } catch (err) {
      console.log(err)
    }
  }
  const Cond = () => {
    switch (reg) {
      case null:
        return null
      case true:
        return <NavBar />
      case false:
        return <Instruction />
      default:
        return null
    }
  }
  useEffect(() => {
    CheckReg()
    Cond()
  }, [])

  return <Cond />
}
export default Route

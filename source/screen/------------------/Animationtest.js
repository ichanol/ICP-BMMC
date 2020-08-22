
import React, {useRef} from 'react'
import { View, Text, Animated, StyleSheet, TouchableOpacity } from 'react-native'
/*Google Certificate Fingerprint:     C6:B7:B0:63:89:81:FF:8A:F3:3E:70:8B:74:AD:70:9E:C8:10:7F:5F
Google Certificate Hash (SHA-1):    C6B7B0638981FF8AF33E708B74AD709EC8107F5F
Google Certificate Hash (SHA-256):  C4E5DA0EBFDA08D6FA188CBABE9A2636A68F1026F36209A044704202A60E83B3
 Keystore password: da9acf0783ff4b8aa3589bb0f9667a8d
  Key alias:         QGljaGFub2wvcGFya2luZ2RlbW93aXRoZmlyZWJhc2U=
  Key password:      43906df44ab6493799cef8c7204448a0*/
const Animationtest = () => {
    const fadeAnim = useRef(new Animated.Value(10)).current
    const animation1 = () => {
        Animated.spring(
            fadeAnim,
            {
              toValue: 200,
            }
          ).start(()=>{
            Animated.spring(
                fadeAnim,
                {
                  toValue: -200,
                }
              ).start()
          });
    };
    return (
    <View style={{flex:1,flexDirection:"column", justifyContent:"center", }}>
        <Animated.View>
            <View style={{borderStyle:'solid',borderWidth:1,borderColor:"black",alignItems:"center"}}>
                <Animated.View style={{width:100,height:100,backgroundColor:"red",marginLeft:fadeAnim}}>
                </Animated.View>
            </View>
        </Animated.View>
        <TouchableOpacity onPress={animation1} style={{backgroundColor:"black",paddingVertical:15,paddingHorizontal:30,marginTop:30, borderRadius:50,alignSelf:'center'}}><Text style={{color:"white"}}>จัดมาดิเบิ่มๆ</Text></TouchableOpacity>
    </View>
    )
}

export default Animationtest;

const styles = StyleSheet.create({})

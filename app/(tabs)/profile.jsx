import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function Profile() {
  const router=useRouter();
  return (
    <View style={{
      marginTop:"100%",
      alignItems:'center'
    }}>

    <TouchableOpacity style={{
        padding:15,
        backgroundColor:"black",
        borderRadius:15,
        paddingHorizontal:30
        
    }}onPress={()=>router.navigate('/discover')}>
        <Text style={{
          color:"white",
          fontFamily:"outfit-bold"
        }}>
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  )
}
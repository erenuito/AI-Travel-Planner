import { View, Text } from 'react-native'
import React from 'react'

export default function OptionCard({option,selectedTraveler}) {
  return (
    <View style={[{
        padding:15,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#f1eff0',
        borderRadius:15,
        marginTop:5
        

    },selectedTraveler?.id==option.id&&{borderWidth:3}]}>
        <View>

        
      <Text style={{
        fontSize:20,
        fontFamily:'outfit-bold'
      }}>{option?.title}</Text>
            <Text style={{
        fontSize:17,
        fontFamily:'outfit',
        color:"gray"
      }}>{option?.desc}</Text>
      </View>

      <Text style={{
        fontSize:35
      }}>{option.icon}</Text>
    </View>
    
  )
}
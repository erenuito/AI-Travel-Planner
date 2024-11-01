import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { router, useNavigation } from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import { CreateTripContext } from '../../context/CreateTripContext';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import moment from 'moment';
import { TouchableOpacity } from 'react-native';

export default function ReviewTrip() {

  const navigation=useNavigation();
  const {tripData,setTripData}=useContext(CreateTripContext)

  useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTransparent:true,
      headerTitle:''
    })
  },[])

  const onClickContinue=()=>{
    router.push('create-trip/review-trip');
  }
  return (
    <View style={{
      padding:25,
      paddingTop:75,
      backgroundColor:'white',
      height:'100%'
    }}
    >
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        marginTop:20
      }}>Review your trip</Text>

      <View style={{
        marginTop:20
      }}>
        <Text style={{
          fontFamily:'outfit-bold',
          fontSize:20,
          marginBottom:15
        }}>Before generating your trip, please review your selection</Text>
      <View style={{
        marginRight:21,
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        gap:20
      }}>
      <Entypo name="location-pin" size={34} color="black" />
      
      <View>
        <Text style={{
          fontFamily:'outfit',
          fontSize:20,
          color:'gray',
        }}>Destination</Text>
        <Text style={{
          fontFamily:'outfit-medium',
          fontSize:20,
        }}>{tripData?.locationInfo?.name}</Text>
      </View>
      </View>

      


      <View style={{
        marginTop:25,
        display:'flex',
        flexDirection:'row',
        gap:20
      }}>
      <Entypo name="calendar" size={34} color="black" />
      
      <View>
        <Text style={{
          fontFamily:'outfit',
          fontSize:20,
          color:'gray',
        }}>Travel Date</Text>
        <Text style={{
          fontFamily:'outfit-medium',
          fontSize:20,
        }}>{moment(tripData?.startDate).format('DD MMM')+" to "
        +moment(tripData.endDate).format('DD MMM'+ "  ")}      
        ({tripData?.totalNoOfDays +""} days)
        
        </Text>
      </View>
      </View>


      <View style={{
        marginTop:25,
        display:'flex',
        flexDirection:'row',
        gap:20
      }}>
      <FontAwesome6 name="bus" size={34} color="black" />
      
      <View>
        <Text style={{
          fontFamily:'outfit',
          fontSize:20,
          color:'gray',
        }}>Who's Traveling</Text>
        <Text style={{
          fontFamily:'outfit-medium',
          fontSize:20,
        }}>{tripData?.traveler?.title}
        
        </Text>
      </View>
      </View>




      <View style={{
        marginTop:25,
        display:'flex',
        flexDirection:'row',
        gap:20
      }}>
      <FontAwesome6 name="sack-dollar" size={34} color="black" />
      
      <View>
        <Text style={{
          fontFamily:'outfit',
          fontSize:20,
          color:'gray',
        }}>Budget</Text>
        <Text style={{
          fontFamily:'outfit-medium',
          fontSize:20,
        }}>{tripData?.budget}
        
        </Text>
      </View>
      </View>
      




      </View>
        
      <TouchableOpacity
    onPress={onClickContinue}
        style={{
        padding:20,
        backgroundColor:"black",
        borderRadius:15,
        marginTop:55
    }}>
        
        <Text style={{
            textAlign:'center',
            color:"white",
            fontFamily:'outfit-medium',
            fontSize:20
        }}>Build My Trip</Text>
    </TouchableOpacity>
    </View>
  )
}
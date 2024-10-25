import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import 'react-native-get-random-values';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {CreateTripContext} from './../../context/CreateTripContext.js';

 
export default function SearchPlace() {

  const navigation=useNavigation();
  const {tripData,setTripData}=useContext(CreateTripContext);
  const router=useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown:true,
      headerTransparent:true,
      headerTitle:'Search'
    })
  },[]);

  useEffect(()=>{
    console.log(tripData);
  }),[tripData]
  
  return (
    <View
    style={{
      padding:25,
      paddingTop:100,
      backgroundColor:"white",
      height:"100%"

    }}>

      <GooglePlacesAutocomplete
      placeholder='Search'
      
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data.description);
        console.log(details?.geometry.location);
        console.log(details?.photos[0]?.photo_reference);
        console.log(details?.url)
        setTripData({
          locationInfo:{
            name:data.description,
            coordinates:details?.geometry.location,
            photoRef:details?.photos[0]?.photo_reference,
            url:details?.url
          }
        })

        router.push('/create-trip/select-traveler')
      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
      }}
      styles={{
        
        textInputContainer:{
          borderWidth:1,
          borderRadius:5,
          marginTop:25,
          
          
          

        }
      }}
    />
   
    </View>
  )
}
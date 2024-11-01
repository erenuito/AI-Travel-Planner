import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import CalendarPicker from 'react-native-calendar-picker';
import { TouchableOpacity } from 'react-native';
import moment from 'moment';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectDates() {

  const navigation= useNavigation();
  const [startDate,setStartDate]=useState();
  const [endDate,setEndDate]=useState();
  const {tripData,setTripData}=useContext(CreateTripContext);
  const router=useRouter();
  useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTransparent:true,
      headerTitle:''
    })
  },[])

  const onDateChange=(date,type)=>{
    console.log(date,type)
    if(type=='START_DATE')
      {
        setStartDate(moment(date))
      }

      else{
        setEndDate(moment(date))
      }
    
  }

  const OnDateSelectionContinue=()=>{
    const totalNoOfDays=endDate.diff(startDate,'days');
    console.log(totalNoOfDays+1);
    setTripData({
      ...tripData,
      startDate:startDate,
      endDate:endDate,
      totalNoOfDays:totalNoOfDays+1
    });

    router.push('/create-trip/select-budget')
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
      }}>TravelDates</Text>

    <View style={{
      marginTop:30
    }}>
    <CalendarPicker onDateChange={onDateChange}
    allowRangeSelection={true}
    maxRangeDuration={14}
    selectedRangeStyle={{
      backgroundColor:'black',
    }}
    selectedDayTextStyle={{
      color:'white'
      }}
    />

    </View>

    <TouchableOpacity
    onPress={OnDateSelectionContinue}
        style={{
        padding:20,
        backgroundColor:"black",
        borderRadius:15,
        marginTop:35
    }}>
        
        <Text style={{
            textAlign:'center',
            color:"white",
            fontFamily:'outfit-medium',
            fontSize:20
        }}>Continue</Text>
    </TouchableOpacity>
    </View>
  )
}
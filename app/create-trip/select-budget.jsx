import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { FlatList } from 'react-native';
import { SelectBudgetOptions } from './../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { TouchableOpacity } from 'react-native';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectBudget() {

  const {tripData,setTripData}=useContext(CreateTripContext);
  const navigation=useNavigation();
  const [selectedOption,setSelectedOption]=useState();
  const router=useRouter();

  useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTransparent:true,
      headerTitle:''
    })
  },[]);

  useEffect(()=>{
    selectedOption&&setTripData({
      ...tripData,
      budget:selectedOption?.title
    })
  },[selectedOption])

  const onClickContinue=()=>{
    router.push('create-trip/review-trip');
  }
  return (
    <View style={{
      paddingTop:75,
      padding:25,
      backgroundColor:'white',
      height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        marginTop:20
      }}>Budget</Text>
      <View style={{
        marginTop:20
      }}>
        <Text style={{
          fontFamily:'outfit-bold',
          fontSize:20
        }}>Choose sepending habits for your trip</Text>

        <FlatList
            data={SelectBudgetOptions}
            renderItem={({item,index})=>(
              <TouchableOpacity 
              onPress={()=>setSelectedOption(item)}>
              <OptionCard option={item} selectedOption={selectedOption}/>
              </TouchableOpacity>
              
        )}
        /> 
      </View>

      <TouchableOpacity
    onPress={onClickContinue}
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
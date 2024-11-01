import { View, Text, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigation } from 'expo-router'
import {SelectTravelersList} from './../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard';
import { TouchableOpacity } from 'react-native';
import { CreateTripContext } from './../../context/CreateTripContext';

export default function SelectTraveler() {

    const navigation=useNavigation();
    const [selectedTraveler,setSelectedTraveler]=useState();
    const {tripData,setTripData}=useContext(CreateTripContext);

    
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransperent:true,
            headerTitle:''

        })
    },[])

    useEffect(()=>{
        setTripData({...tripData,
            traveler:selectedTraveler
        })
    },[selectedTraveler]);
    useEffect(()=>{
        console.log(tripData);
    },tripData)
  return (
    <View
    style={{
        padding:15,
        paddingTop:10,
        backgroundColor:"white",
        height:'100%'
    }}>
    <Text style={{
        fontSize:30,
        fontFamily:'outfit-bold',
        marginTop:20
    }}>
        Who's Traveling? </Text>

     <View style={{
        marginTop:20
     }}>
        <Text style={{
            fontFamily:'outfit-bold',
            fontSize:20,
            marginBottom:15

        }}>
            Choose Your Travelers
        </Text>

        <FlatList
            data={SelectTravelersList}
            renderItem={({item,index})=>(
                <TouchableOpacity 
                onPress={()=>setSelectedTraveler(item)}
                style={{
                    marginBottom:15
                }}>
                    <OptionCard option={item} selectedTraveler={selectedTraveler}/>
                </TouchableOpacity>

            )}
        /> 


        

    </View>
    <TouchableOpacity style={{
        padding:20,
        backgroundColor:"black",
        borderRadius:15,
        marginTop:20
    }}>
        <Link href={'/create-trip/select-date'}

        >
        
        <Text style={{
            textAlign:'center',
            color:"white",
            fontFamily:'outfit-medium',
            fontSize:20
        }}>Continue</Text>
        </Link>
    </TouchableOpacity>
    </View>
  )
}
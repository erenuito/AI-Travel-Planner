import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { CreateTripContext } from '../../context/CreateTripContext'
import { AI_PROMPT } from '../../constants/Options';
import moment from 'moment';
import { chatSession } from '../../configs/AiModal';
import { useRouter } from 'expo-router';
import {auth,db} from './../../configs/firebaseconfigs'
import { doc, setDoc } from "firebase/firestore"; 

export default function GenerateTrip() {

    const {tripData,setTripData}=useContext(CreateTripContext);
    const [ loading,setLoading]=useState(false);
    const router=useRouter();
    const user=auth.currentUser;
    useEffect(()=>{
        GenerateAiTrip()
    },[])

    const GenerateAiTrip=async()=>{
      setLoading(true);

      const FINAL_PROMPT=AI_PROMPT
      .replace('{location}',tripData?.locationInfo?.name)
      .replace('{totalDays}',tripData.totalNoOfDays)
      .replace('{totalNight}',tripData.totalNoOfDays-1)
      .replace('{startDate}',moment(tripData?.startDate).format('DD MMM'))
      .replace('{endDate}',moment(tripData.endDate).format('DD MMM'))
      .replace('{traveler}',tripData?.traveler?.title)
      .replace('{budget}',tripData.budget)
      .replace('{totalDays}',tripData.totalNoOfDays)
      .replace('{totalNight}',tripData.totalNoOfDays-1);

      console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result.response.text());
    const tripResp=JSON.parse(result.response.text());
    setLoading(false)
    const docId=(Date.now()).toString();  
    const result_=await setDoc(doc(db,'UserTrips',docId),{
      userEmail:user.email,
      tripPlan:tripResp, //AI Result
      tripData:JSON.stringify(tripData), // UserSelection
      docId:docId
      
    })

        router.push('(tabs)/mytrip');




    }

  return (
    <View style={{
        padding:25,
        backgroundColor:'white',
        height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        textAlign:'center',
        marginTop:75
      }}>
        Please Wait...
      </Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:25,
        textAlign:'center',
        marginTop:40
      }}>
        We are working to generate your dream trip
      </Text>

      <Image source={require('./../../assets/images/planegif.gif')}
      
      style={{
        width:300,
        height:300,
        marginTop:65,
        objectFit:'contain',
        marginLeft:25,
        marginRight:25,
        borderRadius:20
      }}
      />

      <Text style={{
        fontFamily:'outfit',
        color:'gray',
        fontSize:20,
        textAlign:'center',
        marginTop:25
      }}>Do not Go Back</Text>
      
    </View>
  )
}
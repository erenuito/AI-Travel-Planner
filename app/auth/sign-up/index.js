import { View, Text, StyleSheet, TouchableOpacity, TextInput, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/firebaseconfigs';


export default function SignUp() {
  const navigation=useNavigation();
  const router=useRouter();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [fullName,setFullName]=useState(); 

  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[]);

  const OnCreateAccount=()=>{
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(fullName,email,password)
    console.log(user);
    router.replace('/mytrip')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, errorCode)
    // ..
  });
  }

  return (
    <View style={{
      padding:25,
      paddingTop:50
    }}>
      <TouchableOpacity
        onPress={()=>router.back()}>
      <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{
        fontFamily:"outfit-bold",
        fontSize:30,
        marginTop:30
      }}>Create New Account</Text>

<View style={{
        marginTop:30, 
      }}>
        <Text style={{
          fontFamily:"outfit"
        }}>Full Name</Text>
        <TextInput
        style={styles.input}
         placeholder='Full Name'
         onChangeText={(value)=>setFullName(value)}
         />
      </View>

<View style={{
        marginTop:20, 
      }}>
        <Text style={{
          fontFamily:"outfit"
        }}>E-Mail</Text>
        <TextInput
        style={styles.input}
         placeholder='Enter E-Mail'
         onChangeText={(value)=>setEmail(value)}
         />
      </View>


      <View style={{
        marginTop:20, 
      }}>
        <Text style={{
          fontFamily:"outfit"
        }}>Password</Text>
        <TextInput
        secureTextEntry={true}
        style={styles.input}
         placeholder='Password'
         onChangeText={(value)=>setPassword(value)}
         />
      </View>

      <TouchableOpacity onPress={OnCreateAccount} style={{
        padding:20,
        backgroundColor:"black",
        borderRadius:15,
        marginTop:50
      }}>
        <Text style={{
          color:"white",
          textAlign:"center",

        }}>
        Create Account
        </Text>

      </TouchableOpacity>


      <TouchableOpacity
          onPress={()=>router.replace('auth/sign-in')} 
        style={{
        
        padding:20,
        backgroundColor:"white",
        borderRadius:15,
        marginTop:20,
        borderWidth:1
      }}>
        <Text style={{
          color:"black",
          textAlign:"center",

        }}>
        Sign In
        </Text>

      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  input:{
    color:'black',
    padding:15,
    borderWidth:1,
    borderRadius:15,
    borderColor:'gray',
    fontFamily:"outfit",
  }
})
import { View, Text, TextInput, StyleSheet , TouchableOpacity} from 'react-native'
import React, { useEffect , useState} from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../configs/firebaseconfig';


export default function SignIn() {
  const navigation=useNavigation();
  const router=useRouter();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();

  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])

  const onSignIn=()=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/mytrip')
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });

  }

  return (
    <View style={{
      padding:25,
      paddingTop:80,
      backgroundColor:'white',
      height:'100%'
    }}>
      <TouchableOpacity
        onPress={()=>router.back()}>
      <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        marginTop:20,
      }}>Let's Sign You In</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:30,
        color:'gray',
        marginTop:10
        
      }}>Welcome Back</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:30,
        color:'gray',
        marginTop:10
        
      }}>You've been missed</Text>




      <View style={{
        marginTop:50, 
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

      <TouchableOpacity onPress={onSignIn} style={{
        padding:20,
        backgroundColor:"black",
        borderRadius:15,
        marginTop:50
      }}>
        <Text style={{
          color:"white",
          textAlign:"center",

        }}>
        Sign In
        </Text>

      </TouchableOpacity>


      <TouchableOpacity
          onPress={()=>router.replace('auth/sign-up')} 
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
        Create Account
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
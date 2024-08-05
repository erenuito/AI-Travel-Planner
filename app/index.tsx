import {Text, View } from 'react-native';
import Login from 'C:/Users/19180/Project1/components/Login'
import {auth} from 'C://Users//19180//Project1//configs//firebaseconfig'
import { Colors } from '@/constants/Colors';
import { Redirect } from 'expo-router';
export default function Index(){ 
    const user=auth.currentUser;


    return (
        <View
            style={{
                flex:1,
            }}
        >
            {user?
                <Redirect href={'/mytrip'}/>:
                <Login/> 
            }
            
         

        </View>
    );
}


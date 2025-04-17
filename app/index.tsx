import BigButton from '@/components/button/bigButton'
import {View , Text , StyleSheet} from 'react-native'
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { useEffect } from 'react';
import { BASE_URL } from '@/data/baseUrl';
import axios from 'axios';


export default function GettingStarted() {

    async function UserAuthCheck() {
        try{
            const refreshToken = await SecureStore.getItemAsync('refreshToken');
            console.log('Retrieved the Refresh token');
            if(refreshToken) {
                console.log('Refresh Token Found, Redirecting');


                const {data} = await axios.post(BASE_URL+'/api/v1/auth/refresh' , 
                    {
                        'refresh_token': refreshToken
                    },
                    {
                        headers: {
                            'Content-type': 'application/json'
                        },
                    }
                )
                console.log('API Call sent for new access token');
                const newAccessToken = await SecureStore.setItemAsync('accessToken' , data.data.access_token);
                console.log('Saved the new access token');
                router.replace('/(tabs)/home');
                }}
                catch(error) {
                    console.error(error)
                }
                finally{
                return 0;
                }
                
            }

        
    useEffect(() =>
        {UserAuthCheck();} , []
    )
    return(
        <View>
        <View style={styles.container}>
        </View>
        <View style={styles.mainContainer}>
        <Text style={{color: '#61AC4D' , fontSize: 32 , fontWeight: 'bold' , fontFamily: 'poppins', margin: 10}}>Smart Shop{'\n'}Healthy Living</Text>
        <Text style={{color: 'grey' , fontSize: 20 , fontWeight: 'normal' , fontFamily: 'poppins', margin: 10}}>Modern shopping solution focused on a healthy balanced lifestyle. We provide a variety of quality support for your health needs.</Text>
        <View style={{alignItems: 'center',}}>
        <BigButton label='Get Started' onPress={() => router.push('/pages/login')}/>
        </View>
        </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        height: '60%',
    },
    mainContainer: {
        height: '40%',
        backgroundColor: 'white'
    },
})
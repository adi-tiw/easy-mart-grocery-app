import BigButton from '@/components/button/bigButton';
import EmailInput from '@/components/textinputs/emailInput';
import PasswordInput from '@/components/textinputs/passwordInput';
import { View , Text , StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router'
import axios from 'axios';
import { BASE_URL } from '@/data/baseUrl';
import * as SecureStore from 'expo-secure-store';




export default function Login() {

    async function handleSubmit() {
        try {

        const {data} = await axios.post( BASE_URL + '/api/v1/auth/login' , 
            {
                "api_key": "86fcca7c-2c66-4598-9beb-7b6a942122d3"
            },
            {
                headers: 
            {
                'Content-Type': 'application/json'
            },
            }
            );
            console.log('Logged In Successfully');
            await SecureStore.setItemAsync('accessToken', data.data.access_token);
            console.log('Access Token Stored Successfully');

            await SecureStore.setItemAsync('refreshToken', data.data.refresh_token);
            console.log('Refresh Token Stored Successfully');            

        }
        catch(error) {
            console.error('Error ho gaya')
        }
        finally{
            router.push('/(tabs)/home');
        }

    }

    return(
        <View style={styles.container}>
            <Text style={{fontWeight:'bold' , fontFamily:'poppins', fontSize: 40 , margin: 20}}>Hello!{'\n'}Welcome Back</Text>
            <Text style={{ fontFamily:'poppins', fontSize: 20 , color:'grey' , margin: 20}}>Please login to continue and {'\n'}enjoy your experience</Text>
            <Text style={{ fontFamily:'poppins', fontSize: 20 , color:'black' ,fontWeight:'bold' , margin: 20}}>Email</Text>
            
            <View style={{alignItems:'center'}}>
            <EmailInput placeHolder='Email'/>
            </View>
            <Text style={{ fontFamily:'poppins', fontSize: 20 , color:'black' ,fontWeight:'bold' , margin: 20}}>Password</Text>
            <View style={{alignItems:'center'}}>
            <PasswordInput placeHolder='Password'/>
            </View>
            <View style={styles.forgotPassword}>
                <Pressable onPress={() => router.push('/pages/signUp')}>

                    <Text style={{color: 'black'}}>New User? Sign Up</Text>
                </Pressable>
                <Pressable onPress={() => router.push('/pages/forgotPassword')}>
                    <Text style={{color: 'darkblue'}}>Forgot Password?</Text>
                </Pressable>
            </View>
            <View style={{marginTop: 30 ,alignItems:'center'}}>
            <BigButton label =' Login to Account'
            
            onPress={handleSubmit}/>

            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white',
    },
    forgotPassword: {
        alignItems: 'flex-end',
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 20,
        flexDirection: 'row',
        justifyContent:'space-between'
    }
})
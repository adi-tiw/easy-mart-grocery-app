import BigButton from '@/components/button/bigButton';
import EmailInput from '@/components/textinputs/emailInput';
import PasswordInput from '@/components/textinputs/passwordInput';
import { View , Text , StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router'
 

export default function SignUp() {
    return(
        <View style={styles.container}>
            <Text style={{fontWeight:'bold' , fontFamily:'poppins', fontSize: 40 , margin: 20}}>Hello!{'\n'}Welcome </Text>
            <Text style={{ fontFamily:'poppins', fontSize: 20 , color:'grey' , margin: 20}}>Please Sign Up to continue and {'\n'}enjoy your experience</Text>
            <Text style={{ fontFamily:'poppins', fontSize: 20 , color:'black' ,fontWeight:'bold' , margin: 20}}>Enter Email</Text>
            
            <View style={{alignItems:'center'}}>
            <EmailInput placeHolder='Email'/>
            </View>
            <Text style={{ fontFamily:'poppins', fontSize: 20 , color:'black' ,fontWeight:'bold' , margin: 20}}>Create a Password</Text>
            <View style={{alignItems:'center'}}>
            <PasswordInput placeHolder='Password'/>
            </View>
            <Text style={{ fontFamily:'poppins', fontSize: 20 , color:'black' ,fontWeight:'bold' , margin: 20}}>Confirm Password</Text>
            <View style={{alignItems:'center'}}>
            <PasswordInput placeHolder='Re-enter your password'/>
            </View>
            <View style={styles.forgotPassword}>
                <Pressable onPress={() => router.push('/pages/login')}>
                    <Text style={{color: 'black'}}>Already a User? Login</Text>
                </Pressable>
            </View>
            <View style={{marginTop: 30 ,alignItems:'center'}}>
            <BigButton label ='Register your Account' onPress={() => router.replace('/pages/login')}/>
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
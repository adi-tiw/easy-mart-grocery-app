import BigButton from '@/components/button/bigButton';
import EmailInput from '@/components/textinputs/emailInput';
import { View , Text , StyleSheet } from 'react-native';


export default function ForgotPassword() {
    return(
        <View style = {{flex: 1 , backgroundColor: 'white'}}>
            <Text style={{fontWeight: 'bold' , fontSize: 40 , fontFamily:'poppins', padding: 10}}>Reset Password</Text>
            <Text style={{color: '#61AC4D' ,fontWeight: 'bold' , fontSize: 32 , fontFamily:'poppins', padding: 10}}>Enter your email</Text>
            <View style={{alignItems: 'center' , margin: 30, height: 200 , justifyContent: 'space-between'}}>
            <EmailInput placeHolder='Enter Email'/>
            <BigButton label ='Send Password Reset'/>
            </View>

        </View>
    )
};
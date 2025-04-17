import { View , StyleSheet , Text , Image, Pressable} from 'react-native';
import {useState , useEffect}  from 'react';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import { BASE_URL } from '@/data/baseUrl';

type UserProfileData = {
    id: number;
    name: string;
    id_number: number;
    role: string;
    cart_id: number;
}
const GuestUser: UserProfileData = {
    id: 0,
    name: 'Alex',
    id_number: 0,
    role: 'Guest',
    cart_id: 0,
}

export default function CartHeader() {

    const [CartCount  , setCartCount] = useState(0); 

    const [userData , setUserData] = useState(GuestUser);

    async function FetchUserData() {

        try{
        const accessToken = await SecureStore.getItemAsync('accessToken');
        console.log('Retrieved the access token');
    
        const {data} = await axios.get(BASE_URL+'/api/v1/profile' , {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }});
        console.log('Get Request Successful');
        console.log(data.message);
        setUserData(data.data);

        }
        catch(error){
            console.log('Error ho gaya');
            console.error(error);
        }

    };

    useEffect(() => {
        FetchUserData();} , []
    );

    return(
        <View style={styles.mainContainer}>
            <View style={{justifyContent: 'space-between'}}>
            <Text style={{fontFamily :'poppins' , fontWeight: 'bold' , fontSize: 15 }}>
                123 Alm Street, USA</Text>
            <Text style={{fontFamily :'poppins' , fontWeight: 'bold' , color:'lightgrey', fontSize: 15 }}>Welcome Back, {userData.name}</Text>
            </View>
            
            <View>
                <Pressable onPress={() => router.push('/pages/cart')}>
                <Image source={require('@/assets/images/cart.png')} style={{height: 40, width: 40, }}/>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: 65,
        borderWidth: 0,
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 20,
    }
})
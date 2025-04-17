import { Text , View } from 'react-native';
import { BASE_URL } from '@/data/baseUrl';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import { useEffect, useState } from 'react';

type UserProfileData = {
    id: number;
    name: string;
    id_number: number;
    role: string;
    cart_id: number;
}
const GuestUser: UserProfileData = {
    id: 0,
    name: 'Guest',
    id_number: 0,
    role: 'Guest',
    cart_id: 0,
}

export default function Profile() {

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
        <View style={{flex:1 ,backgroundColor: 'white'}}>
            <Text style={{fontFamily:'poppins' , fontWeight:'bold' ,fontSize: 32 , margin: 10}}>Hello {userData.name}</Text>
        </View>
    )
}
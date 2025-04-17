import { BASE_URL } from '@/data/baseUrl';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

type UserProfileData = {
    id: number;
    name: string;
    id_number: number;
    role: string;
    cart_id: number;
}



async function UserData() {

    try{
    const accessToken = await SecureStore.getItemAsync('accessToken');
    console.log('Retrieved the access token');

    const {data} = await axios.get(BASE_URL+'/api/v1/profile' , {headers: {accessToken}});
    console.log('Get Request Successful');
    }
    catch(error){
        console.log('Error ho gaya');
    }

};

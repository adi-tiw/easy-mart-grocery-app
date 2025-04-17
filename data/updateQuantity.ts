import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import { BASE_URL }  from './baseUrl';

export type CartInfo = {
    item_id: number;
    quantity: number;
};


export default async function UpdateQuantity({item_id , quantity} : CartInfo) {

  try{
    const accessToken = await SecureStore.getItemAsync('accessToken');
    console.log('Retrieved the access token');

    const {data} = await axios.put(BASE_URL+'/api/v1/cart/items/'+item_id , 
        {
            'quantity': quantity
        },
      {
        headers: { 
          'Authorization': `Bearer ${accessToken}`,
          'Content-type': 'application/json'
        }
      });
      console.log('Get Request Successful');
      console.log(data.message);
      return data.data;
    }
    catch(error) {
          console.log('Error ho gaya');
          console.log(error);
          throw error;
    }
  };



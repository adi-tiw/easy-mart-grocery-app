import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import { BASE_URL }  from './baseUrl';

export type ItemData = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string
  image_urls: string[];
  created_at: string;
  updated_at: string;
};

export async function RetrieveCategories() {

  try{
    const accessTokenn = await SecureStore.getItemAsync('accessToken');
    console.log('Retrieved the access token');

    const {data} = await axios.get(BASE_URL+'/api/v1/categories' , 
      {
        headers: {
          Authorization: `Bearer ${accessTokenn}`
        }
      });
      console.log('Get Request Successful');
      console.log(data.message);
      return data.data;
    }
    catch(error) {
          console.log('Error ho gaya');
          throw error;
    }
  };



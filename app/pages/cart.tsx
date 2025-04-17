import { View, Text, StyleSheet, FlatList, Image, Pressable , Platform , StatusBar} from "react-native";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import { BASE_URL } from "@/data/baseUrl";
import { useEffect, useState } from "react";
import UpdateQuantity from "@/data/updateQuantity";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

type CartDataItems = {
  id: number;
  item_id: number;
  item_name: string;
  item_price: number;
  category: string;
  quantity: number;
  total_price: number;
};

type CartData = {
  id: number;
  user_id: number;
  total_price: number;
  total_items: number;
  items: CartDataItems[];
};

const NullItem: CartData = {
  id: 0,
  user_id: 0,
  total_price: 0,
  total_items: 0,
  items: [],
};

const CartItem = ({ cartItems , refreshCart}: { cartItems: CartDataItems  , refreshCart: () => void}) => (
  <View style={styles.itemContainer}>
    <Image style = {{position: 'absolute' , height:'100%' , width: '100%' , borderRadius: 12}} source={require('@/assets/images/gradient-grey.png')}/>
    
    <View style={styles.itemInfoLeft}>
      <Text numberOfLines={1} style={styles.itemName}>{cartItems.item_name}</Text>
      <Text style={styles.itemCategory}>{cartItems.category}</Text>

      <View style={styles.cartCounterContainer}>
        <Pressable
          style={styles.buttonContainer}
          onPress={async () => {
            if(cartItems.quantity === 1) {
                try{
                    const accessToken = await SecureStore.getItemAsync('accessToken');
                    console.log('Retrieved the access token');
                
                    const {data} = await axios.delete(BASE_URL+'/api/v1/cart/items/'+cartItems.item_id , 
                      {
                        headers: { 
                          'Authorization': `Bearer ${accessToken}`,
                        }
                      });
                      console.log('Delete Request Successful');
                      refreshCart();
                    }
                    catch(error) {
                          console.log('Error ho gaya');
                          console.log(error);
                          throw error;
                    }
            }
            else {
            await UpdateQuantity({ item_id: cartItems.id, quantity: cartItems.quantity - 1 });
            refreshCart();  
            }
        }}
        >
          <Image
            source={require('@/assets/images/removefromcart.png')}
            style={styles.imageminus}
          />
        </Pressable>

        <View style={styles.itemCounterContainer}>
          <Text style={styles.counterText}>{cartItems.quantity}</Text>
        </View>

        <Pressable
          style={styles.buttonContainer}
          onPress={async () => {
            await UpdateQuantity({ item_id: cartItems.id, quantity: cartItems.quantity + 1 });
            refreshCart();
          }
        }>
          <Image
            source={require('@/assets/images/addtocart.png')}
            style={styles.imageplus}
          />
        </Pressable>
      </View>
    </View>

    <View style={styles.itemInfoRight}>
      <View style={{ width: '100%', height: '75%', borderRadius: 12 }}>
        <Image
          style={{ width: '100%', height: '100%', borderRadius: 12 }}
          source={require('@/assets/images/grey.png')}
        />
      </View>
      <Text style={styles.priceText}>${cartItems.item_price * cartItems.quantity}</Text>
    </View>
  </View>
);

export default function Cart() {
  const [cartData, setCartData] = useState(NullItem);

  useEffect(() => {
    RetrieveCartData();
  }, []);

  async function ClearCart() {
    try {
        const accessToken = await SecureStore.getItemAsync('accessToken');
  
        const { data } = await axios.delete(BASE_URL + '/api/v1/cart/items', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        console.log('Cleared Cart');

      } catch (error) {
        console.log('Error ho gaya', error);
      }
  }

  async function RetrieveCartData() {
    try {
      const accessToken = await SecureStore.getItemAsync('accessToken');

      const { data } = await axios.get(BASE_URL + '/api/v1/cart', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log('Retrieved Cart details');
      setCartData(data.data);
      console.log('Cart details saved');
    } catch (error) {
      console.log('Error ho gaya', error);
    }
  }

  return (
    <SafeAreaView style={{ flex:1 , alignItems: 'center' , backgroundColor: 'white' , justifyContent: 'space-between'}}>
    <StatusBar hidden={false}/>
    <View style ={styles.header}>
        <Text style={{fontWeight: 'bold' , fontSize: 28, fontFamily: 'poppins' , margin: 10 , color:'white'}}>Your Shopping Cart</Text>
    </View>
    <View style={styles.list}>
      <FlatList
        data={cartData.items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CartItem cartItems={item} refreshCart = {RetrieveCartData}/>}
        showsHorizontalScrollIndicator={Platform.OS === 'web'}
      />
    </View>
    <View style = {styles.footer}>
        <View>
        <Text style={{fontSize: 28 , fontWeight: 'bold' , margin: 10, marginLeft: 20 , color: 'white'}}>${cartData.total_price}</Text>
        <Text style={{fontSize: 28 , fontWeight: 'bold' , margin: 10, marginLeft: 20 , color: 'white'}}>{cartData.total_items} Items</Text>
        </View>

        <View style={{ alignItems:'center'}}>
        <Pressable onPress={() => {alert('Checked Out')}} style={{  height: 50 , width: 150 , borderRadius: 42 , borderWidth: 3 ,backgroundColor: 'white' , marginRight: 30 , alignItems: 'center' , justifyContent: 'center' , marginBottom: 20}}>
            <Text style={{fontSize: 20 , fontWeight: 'bold' }}>Check Out</Text>
        </Pressable>
        <Pressable onPress = {() => {ClearCart(); alert('Cart Cleared'); router.back();} }
        style={{ height: 30 , width: 120 , borderRadius: 42 , borderWidth: 2 ,backgroundColor: 'lightgrey' , marginRight: 30 , alignItems: 'center' , justifyContent: 'center'}}>
            <Text style ={{fontSize: 16 , fontWeight: 'bold' , color: 'white'}}>Clear Cart</Text>
        </Pressable>
        </View>
    </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

    header: {
        height: 70,
        width: '95%',
        backgroundColor: '#61AC4D',
        borderWidth: 0,
        justifyContent: 'center',
        borderRadius: 12,
        marginTop: 10,
    },
    footer: {
        height: 150,
        width: '100%',
        borderWidth: 0,
        backgroundColor: '#61AC4D',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    list: {
        flex: 1,
    },

    itemContainer: {
        width: 400,
        height: 150,
        borderWidth: 0,
        flexDirection: 'row',
        borderRadius: 12,
        marginVertical: 10,
  },
    itemInfoLeft: {
        width: 250,
        height: 150,
        padding: 10,
        paddingLeft: 20,
        borderRadius: 12,
        justifyContent: 'space-evenly',
  },
    itemInfoRight: {
        width: 150,
        height: 150,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 12,
  },
    cartCounterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        width: 140,
        height: 50,
  },
    buttonContainer: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
  },
    imageplus: {
        width: 40,
        height: 40,
  },
    imageminus: {
        width: 50,
        height: 50,
  },
    itemCounterContainer: {
        width: 40,
        alignItems: 'center',
  },
    counterText: {
        fontSize: 22,
        color: 'lightgrey',
        fontWeight: 'bold',
  },
    itemName: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Poppins',
  },
    itemCategory: {
        fontSize: 22,
        color: '#61AC4D',
        fontWeight: 'normal',
        fontFamily: 'Poppins',
  },
    priceText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Poppins',
  },
});

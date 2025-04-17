import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { StatusBar } from 'react-native';
import CartCounter from '@/components/others/cartCounter';
import SmallList from '@/components/lists/smallList';
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddToCart from '@/data/addToCart';
import {useState} from 'react';

export default function ItemPage() {

  const itemData = useLocalSearchParams();

  const [ quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      
        <View style={styles.topContainer}>
        <Image source={require('@/assets/images/verticalgradientgrey.png')} style={{position: 'absolute'}}/>
        <Pressable onPress={()=> router.push('/(tabs)/home')}>
        <Text style={{ margin: 10 ,bottom: 65 ,  fontFamily:'poppins', fontSize:15 , color:'green'}}>Return to Home</Text>
        </Pressable>
        <Text numberOfLines={1} style={{ margin: 10 , bottom: 70, fontFamily:'poppins' , fontWeight:'bold', fontSize:30 , color:'white'}}>{itemData.name}</Text>
        <Text style={{  margin: 10 ,bottom: 70, fontFamily:'poppins' , fontWeight:'normal', fontSize:20 , color:'white'}}>{itemData.description}</Text>

        <View style={styles.counter}><CartCounter quantity={quantity} setQuantity={setQuantity}/></View>
        </View>
    
        <View style={styles.bottomContainer}>
          <Text style ={{margin: 20, fontFamily:'poppins' , fontWeight:'bold', fontSize:25 , color:'#61AC4D'}}>Details</Text>
          <Text style={{marginLeft: 20 , marginTop: 15 , fontFamily:'poppins', fontSize:15 , color:'lightgrey'}}>
          {itemData.description}
          </Text>
          <Text style={{margin: 20 , fontFamily:'poppins', fontSize:18 , color:'#61AC4D' , fontWeight:'bold'}}>Other Products</Text>
          <SmallList />
        </View>
        <View style={styles.addToCart}>
          <Text style={{marginLeft: 20 , marginTop: 15 , fontFamily:'poppins', fontSize:15 , color:'white' , fontWeight:'bold'}}>Price</Text>
          <Text style={{ marginLeft: 20 , marginTop: 3 , fontFamily:'poppins', fontSize:25 , color:'#61AC4D' , fontWeight:'bold' }}>$ {quantity*Number(itemData.price)}</Text>
          <Pressable style={styles.addToCartButton} onPress={() => {AddToCart({quantity: 1 , item_id: Number(itemData.id)}); alert('Added to Cart'); router.push('/pages/cart')}}>
            <Text style={{fontFamily: 'poppins', fontSize: 15, color: 'white', fontWeight: 'bold' }}>Add to Cart</Text>
          </Pressable>

        </View>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  topContainer: {
    height: '40%',
    borderWidth: 0,
    justifyContent : 'flex-end'
  },
  greyGradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  counter: {
    flex:1,
    bottom: -150,
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'flex-start',
    
   },
   addToCart: {
    width: '100%',
    height: '12%',
    borderRadius: 25,
    position: 'absolute',
    bottom: -10,
    backgroundColor:'lightgrey',
    borderWidth: 0,
   },
   addToCartButton: {
    width: '35%',
    height: '50%',
    borderRadius: 25,
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor:'#61AC4D',
    justifyContent:'center',
    alignItems:'center',
   },
});
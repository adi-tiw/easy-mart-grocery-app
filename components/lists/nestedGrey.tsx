import { View, Text , StyleSheet , FlatList , Platform , Pressable , Image, ImageComponent} from 'react-native';
import { router } from 'expo-router'
import { useQuery ,   QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { ItemData , RetrieveItemData } from '@/data/apiProducts';
import { products } from '@/data/products';
import AddToCart from '@/data/addToCart';


type ItemProps = {
    item: ItemData;
  };
const Item = ({item}: ItemProps) => (
    <View style={styles.itemContainer}>
        <Image source={require('@/assets/images/gradient-grey.png')} style={{position:'absolute' , height:'100%', width:'100%', borderRadius:12,}}/>
            <View style={styles.nestedContainer}>
                <Pressable onPress={() => router.push({ pathname:'/pages/[id]' , params: item})}>
                      <Image source={require('@/assets/images/grey.png')} style = {{height: 130 , borderRadius: 12, width:'100%',}}/>
                      <View style={styles.ratingContainer}>
                      <Image source={require('@/assets/images/darkgrey.png')} style={{ position: 'absolute' , height: 20 , width: 40, left: 0 , top: 0, borderRadius: 12, }}/>
                      <Image source={require('@/assets/images/star.png')} style={{position:'absolute' , height: 15 , width: 15 , left: 3 , top: 2}} />
                      <Text style={{color: 'white' , fontWeight:'bold' , fontSize: 9 , position: 'absolute' , right: 0 , top : 3}}>4.5</Text>
                      </View>

                      <Text numberOfLines = {1} style = {{fontFamily: '' , color:'white', fontWeight: 'bold', fontSize: 12, margin: 1}}>{item.name}</Text>
                      <Text style = {{fontFamily: '' , color:'white', fontWeight: 'normal', fontSize: 9, margin: 1}}>{item.description}</Text>
                      <View style={styles.addToCart}>
                      <Text style = {{fontFamily: '' , color:'white', fontWeight: 'bold', fontSize: 15 , margin: 2}}>${item.price}</Text>
                      
                      <Pressable onPress={() => {AddToCart({quantity: 1 , item_id: Number(item.id)}); alert('Added to Cart'); router.push('/pages/cart')}}>
                      <Image source={require('@/assets/images/plus.png')} style={{height: 30 , width: 30 , right: 3 , bottom: 5}} />
                  </Pressable>
                    </View>               
              </Pressable>
            </View>
            <View style={styles.textContent}>
            <Text style={{fontFamily: 'poppins' , color:'white', fontWeight: 'bold', fontSize: 30, margin: 2}}>{item.category}</Text>
            <Text numberOfLines={1} style={{fontFamily: 'poppins' , color:'white', fontWeight: 'bold', fontSize: 20, margin: 2}}>{item.name}</Text>
            <Text style={{fontFamily: 'poppins' , color:'white', fontWeight: 'bold', fontSize: 20, margin: 2}}>Random% Discount</Text>
            <Pressable onPress={() => router.push({ pathname:'/pages/[id]' , params: item})} style={styles.button}>
              <Text style={{color:'white'}}>Buy Now</Text>
            </Pressable>
            </View>
    </View>
  );
export default function NestedGreyList() {

  const {data , isPending , isError} = useQuery({
    queryKey: ['FethProductData'],
    queryFn: RetrieveItemData,
  });
  if(isPending) {
    return(<Text>Loading...</Text>);
  }
  if(isError) {
    return(<Text>Error gathering product data</Text>)
  }


    return (
        <View style={styles.list}>
            <FlatList
                showsVerticalScrollIndicator={Platform.OS === 'web'}
                data={data}
                renderItem={({ item }) => <Item item={item} />}
            />  
            </View>
        );
};
const styles = StyleSheet.create({
  list: {
    paddingBottom: 15,
  },

  itemContainer: {
    width: 390,
    height: 210,
    borderWidth: 0,
    borderRadius: 12,
    margin: 10,
    flexDirection:'row-reverse',
  },
  nestedContainer: {
    flex:1,
    borderWidth:0,
    marginTop: 10,
    marginRight: 20,
    marginBottom: 10,
  },
  textContent:{
    flex:2,
    marginTop: 10,
    marginLeft: 20,
    borderWidth:0,
    marginBottom: 20,
    justifyContent: 'space-evenly'

  },
  ratingContainer: {
    flexDirection:'row',
    borderWidth: 0,
    width: '27%',
    height: '9%',
    position:'absolute',
    top:0
  },
  button: {
    marginTop: 10,
    width: 100,
    height: 25,
    backgroundColor: '#61AC4D',
    marginLeft: 0,
    borderRadius: 5,
    alignItems:'center',
    justifyContent:'center',
  },
  addToCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
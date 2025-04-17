import { View, Text , StyleSheet , FlatList , Platform , Pressable , Image, ImageComponent} from 'react-native';
import { router } from 'expo-router';
import { ItemData , RetrieveItemData } from '@/data/apiProducts';
import { useQuery ,   QueryClient, QueryClientProvider,} from '@tanstack/react-query';
import { products } from '@/data/products';


type ItemProps = {
    productData: ItemData;
  };
const Item = ({productData}: ItemProps) => (
    <View style={styles.itemContainer}>
      <Image source={require('@/assets/images/gradient-grey.png')} style = {{height: '100%', width:'100%', borderRadius: 12}}/>
            <View style={styles.ratingContainer}>
            <Image source={require('@/assets/images/darkgrey.png')} style={{ position: 'absolute' , height: 25 , width: 50, right: 0 , top: 0, borderRadius: 12, }}/>
            <Image source={require('@/assets/images/star.png')} style={{position:'absolute' , height: 20 , width: 20 , right: 30 , top: 2}} />
            <Text style={{color: 'white' , fontWeight:'bold' , fontSize: 13 , position: 'absolute' , right: 10 , top : 3}}>{productData.price}</Text>
            </View>
            <View style={styles.textContent}>
            <Text style={{fontFamily: 'poppins' , color:'white', fontWeight: 'bold', fontSize: 25, margin: 2}}>{productData.category}</Text>
            <Text numberOfLines={1} style={{fontFamily: 'poppins' , color:'white', fontWeight: 'bold', fontSize: 15, margin: 2}}>{productData.name}</Text>
            <Text style={{fontFamily: 'poppins' , color:'white', fontWeight: 'bold', fontSize: 15, margin: 2}}>30% Discount</Text>
            <Pressable onPress={() => router.push({ pathname:'/pages/[id]' , params: productData})} style={styles.button}>
              <Text style={{color:'white'}}>Buy Now</Text>
            </Pressable>
            </View>

    </View>
  );
export default function GradientGreyList() {

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
                horizontal
                showsHorizontalScrollIndicator={Platform.OS === 'web'}
                data={data}
                renderItem={({ item }) => <Item productData={item} />}
            />
            </View>
        );
};
const styles = StyleSheet.create({
  list: {
    height: 150,
    borderWidth: 0,
  },
  itemContainer: {
    width: 300,
    height: 150,
    borderWidth: 0,
    borderRadius: 12,
    marginLeft: 10,
    marginRight: 10,
  },
  ratingContainer: {
    flexDirection:'row',
    borderWidth: 0,
    width: '27%',
    height: '9%',
    position:'absolute',
    top:0,
    right:0,
  },
  textContent:{
    marginTop: 10,
    marginLeft: 20,
    position:'absolute',
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
});
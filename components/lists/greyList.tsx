import { View, Text , StyleSheet , FlatList , Platform , Pressable , Image, ImageComponent} from 'react-native';
import { router } from 'expo-router';
import { products } from '@/data/products';
import { useQuery ,   QueryClient, QueryClientProvider,} from '@tanstack/react-query';
import { ItemData , RetrieveItemData } from '@/data/apiProducts';



type ItemProps = {
    item: ItemData;
  };
const Item = ({item}: ItemProps) => (
    <View style={styles.itemContainer}>
      <Image source={require('@/assets/images/grey.png')} style = {{height: '100%', width:'100%', borderRadius: 12}}/>
            <View style={styles.ratingContainer}>
            <Image source={require('@/assets/images/darkgrey.png')} style={{ position: 'absolute' , height: 25 , width: 50, right: 0 , top: 0, borderRadius: 12, }}/>
            <Image source={require('@/assets/images/star.png')} style={{position:'absolute' , height: 20 , width: 20 , right: 30 , top: 2}} />
            <Text style={{color: 'white' , fontWeight:'bold' , fontSize: 13 , position: 'absolute' , right: 10 , top : 3}}>4.5</Text>
            </View>
            <View style={styles.textContent}>
            <Text style={{fontFamily: 'poppins' , color:'#61AC4D', fontWeight: 'bold', fontSize: 30, margin: 2}}>{item.category}</Text>
            <Text numberOfLines={1} style={{fontFamily: 'poppins' , color:'#61AC4D', fontWeight: 'bold', fontSize: 15, margin: 2}}>{item.name}</Text>
            <Text style={{fontFamily: 'poppins' , color:'grey', fontWeight: 'bold', fontSize: 15, margin: 2}}>Random% Discount</Text>
            <Pressable onPress={() => router.push({ pathname:'/pages/[id]' , params: item})} style={styles.button}>
              <Text style={{color:'white'}}>Buy Now</Text>
            </Pressable>
            </View>

    </View>
  );
export default function GreyList() {

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
                renderItem={({ item }) => <Item item={item} />}
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
    width: 350,
    height: 150,
    borderWidth: 0,
    borderRadius: 12,
    marginRight: 10,
    marginLeft: 10,
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
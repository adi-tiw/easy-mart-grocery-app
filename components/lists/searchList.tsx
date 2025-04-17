import { View, Text , StyleSheet , FlatList , Platform , Pressable , Image, } from 'react-native';
import { router } from 'expo-router';
import { ItemData , RetrieveItemData} from '@/data/apiProducts';
import { useQuery } from '@tanstack/react-query';
import AddToCart from '@/data/addToCart';
 
type SearchItem = {
  searchInput: string;
}

type ItemProps = {
    item: ItemData;
  };

const Item = ({item}: ItemProps) => (
    <View style = {styles.itemContainer}>
    <Pressable onPress={() => router.push({ pathname:'/pages/[id]' , params: item})}>
      <Image source={require('@/assets/images/grey.png')} style = {{height: 130 , borderRadius: 12, width:'100%',}}/>
      <View style={styles.ratingContainer}>
      <Image source={require('@/assets/images/darkgrey.png')} style={{ position: 'absolute' , height: 22 , width: 52, left: 0 , top: 0, borderRadius: 12, }}/>
      <View style={{flexDirection:'row' ,alignItems:'center'}}>
      <Image source={require('@/assets/images/star.png')} style={{ height: 20 , width: 20}} />
      <Text style={{color: 'white' , fontWeight:'bold' , fontSize: 13}}>4.5</Text>
      </View>
      </View>
      <Text numberOfLines={1} style={{fontFamily: '' , color:'#61AC4D', fontWeight: 'bold', fontSize: 13, margin: 2}}>{item.name}</Text>
      <Text style = {{fontFamily: '' , color:'grey', fontWeight: 'normal', fontSize: 10, margin: 2 , height: 27}}>{item.description}</Text>
      <View style={styles.addToCart}>
      <Text style = {{fontFamily: '' , color:'#61AC4D', fontWeight: 'bold', fontSize: 15 , margin: 2}}>${item.price}</Text>
      <Pressable onPress={() => {AddToCart({quantity: 1 , item_id: Number(item.id)}); alert('Added to Cart');}}>
      <Image source={require('@/assets/images/plus.png')} style={{height: 30 , width: 30 , right: 3 , bottom: 5}} />
      </Pressable>
      </View>
    </Pressable>    
    </View>
  );
export default function SmallList({searchInput} : SearchItem) {

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

    const searchResults = data.filter(item =>
      item.name.match(searchInput)
    )

    return (
        <View style={styles.list}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={Platform.OS === 'web'}
                data={searchResults}
                renderItem={({ item }) => <Item item={item} />}
            />
            </View>
        );
};
const styles = StyleSheet.create({
  list:{
    borderWidth:0,

    height: 205,
    paddingRight: 15,
  },
  itemContainer: {
    borderWidth: 0,

    width: 125,
    height: 205,
    borderRadius: 12,
    marginRight: 10,
    marginLeft:10,
  },
  ratingContainer: {
    flexDirection:'row',
    borderWidth: 0,
    width: '27%',
    height: '9%',
    position:'absolute',
    top:0
  },
  addToCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 3,
  },
});
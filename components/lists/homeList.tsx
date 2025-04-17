import { View, Text , StyleSheet , FlatList , Platform , Pressable , Image, } from 'react-native';
import { router } from 'expo-router';
import { useQuery ,   QueryClient, QueryClientProvider,} from '@tanstack/react-query';
import { ItemData , RetrieveItemData } from '@/data/apiProducts';
import AddToCart from '@/data/addToCart';
import { products } from '@/data/products';
import { useEffect } from 'react';

const queryClient = new QueryClient();

type ItemProps = {
    item: ItemData;
  };

type HomeListProps = {
  selectedCategory: string;
}

const Item = ({item}: ItemProps) => (
    <View style = {styles.itemContainer}>
    <Pressable onPress={() => router.push({ pathname:'/pages/[id]' , params: item})}>
      <Image source={require('@/assets/images/grey.png')} style = {{height: 175 , borderRadius: 12, width:'100%',}}/>
      <View style={styles.ratingContainer}>
      <Image source={require('@/assets/images/darkgrey.png')} style={{ position: 'absolute' , height: 25 , width: 60, left: 0 , top: 0, borderRadius: 12, }}/>
      <Image source={require('@/assets/images/star.png')} style={{position:'absolute' , height: 20 , width: 20 , left: 3 , top: 2}} />
      <Text style={{color: 'white' , fontWeight:'bold' , fontSize: 13 , position: 'absolute' , right: 10 , top : 3}}>4.5</Text>
      </View>
      <Text numberOfLines={1} style = {{fontFamily: '' , color:'#61AC4D', fontWeight: 'bold', fontSize: 15, margin: 2}}>{item.name}</Text>
      <Text style = {{fontFamily: '' , color:'grey', fontWeight: 'normal', fontSize: 14, margin: 2 , height: 32}}>{item.description}</Text>

      <View style={styles.addToCart}>
      <Text style = {{fontFamily: '' , color:'#61AC4D', fontWeight: 'bold', fontSize: 15 , margin: 2}}>${item.price}</Text>
      <Pressable onPress={() => {AddToCart({quantity: 1 , item_id: Number(item.id)}); alert('Added to Cart'); router.push('/pages/cart')}}>
      <Image source={require('@/assets/images/plus.png')} style={{height: 30 , width: 30 , right: 3 , bottom: 3}} />
      </Pressable>
      </View>
    </Pressable>    
    </View>
  );
export default function HomeList({selectedCategory} : HomeListProps) {

      const {data , isPending , isError} = useQuery({
          queryKey: ['FetchProductData'],
          queryFn: RetrieveItemData,
        });
        if(isPending) {
          return(<Text>Loading...</Text>);
        }
        if(isError) {
          return(<Text>Error gathering product data</Text>)
        }

        let items;
        if (selectedCategory === 'All') {
          items = data;
        } else {
          items = data.filter(item => item.category.includes(selectedCategory));
        }
      
      
      
    return (

        <View style={styles.list}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={Platform.OS === 'web'}
                data={items}
                renderItem={({ item }) => <Item item={item} />}
            />
            </View>
        );
}

const styles = StyleSheet.create({
  list:{
    height: 275,
    borderWidth:0,
  },
  itemContainer: {
    borderWidth: 0,

    width: 175,
    height: 275,
    borderRadius: 12,
    marginLeft: 10,
    marginRight: 10,
  },
  ratingContainer: {
    flexDirection:'row',
    borderWidth: 0,
    width: '32%',
    height: '9%',
    position:'absolute',
    top:0
  },
  addToCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
import { View, Text , StyleSheet , FlatList , Platform , Pressable} from 'react-native';
import { useState } from 'react';
import { ItemData , RetrieveItemData } from '@/data/apiProducts';
import { useQuery ,   QueryClient, QueryClientProvider,} from '@tanstack/react-query';
import { RetrieveCategories } from '@/data/retrieveCategories';
import { category } from '@/data/products';

type ItemProps = {
    category:  string;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
  };
type CategoryListProps = {
  selectedCategory: string;
  setSelectedCategory: (item: string) => void;
}


const Item = ({category, onPress, backgroundColor, textColor}: ItemProps) => (
    <Pressable onPress={onPress} style={[styles.item, {backgroundColor}]}>
      <Text style={[styles.title, {color: textColor}]}>{category}</Text>
    </Pressable>
  );
export default function CategoryList({selectedCategory , setSelectedCategory}: CategoryListProps) {


  const {data , isPending , isError} = useQuery({
    queryKey: ['FetchCategories'],
    queryFn: RetrieveCategories,
  });
  if(isPending) {
    return(<Text>Loading...</Text>);
  }
  if(isError) {
    return(<Text>Error gathering product data</Text>)
  }

  const List = ['All' , ...(data as string[])];

    const renderItem = ({item} : {item : string}) => {
        const backgroundColor = item === selectedCategory ? '#61AC4D' : 'white';
        const color = item === selectedCategory ? 'white' : 'rgba(56, 56, 56, 0.7)';
    
    return (
            <Item
              category={item}
              onPress={() => setSelectedCategory(item)}
              backgroundColor={backgroundColor}
              textColor={color}
            />
          );
        };

    return (
        <View style={styles.list}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={Platform.OS === 'web'}
                data={List}
                renderItem={renderItem}
                />
        </View>
      );
    }

const styles = StyleSheet.create({

    list: {
        height: 50,
    },

    item: {
        paddingLeft: 15,
        paddingRight: 15,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: 'rgba(56, 56, 56, 0.3)',
        boxShadow: '2px 0px 5px rgba(61, 61, 61, 0.1)',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'Poppins',
        color: 'rgba(56, 56, 56, 0.71)',
    },
    selectedItem: {
        borderWidth: 0,
        backgroundColor: '#61AC4D',
    }
});
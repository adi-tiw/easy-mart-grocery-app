import { Text, View , Image, FlatList, ScrollView , StatusBar} from "react-native";
import { SafeAreaView , SafeAreaProvider} from 'react-native-safe-area-context';
import GreyList from "@/components/lists/greyList";
import HomeList from "@/components/lists/homeList";
import CartHeader from "@/components/others/cartHeader";
import SearchHome from "@/components/others/searchHome";
import ViewAll from "@/components/others/viewAll";
import CategoryList from "@/components/lists/categoriesList";
import { useState } from "react";



export default function Home() {

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  return (
  <SafeAreaProvider>
  <SafeAreaView
      style={{backgroundColor:'white' , flex:1 , paddingBottom: 100}}>
      <StatusBar hidden={false} />
  <ScrollView>
  <View style = {{ marginTop: 10 , marginBottom: 10}}>  
    <CartHeader/>
  </View>

  <View style = {{ marginTop: 10 , marginBottom: 10}}>  
  <SearchHome/>
  </View>

  <View style = {{ marginTop: 10 , marginBottom: 10}}>  
  <ViewAll label="Recommendations"/>
  </View>

  <View style = {{ marginTop: 0 , marginBottom: 10 , marginLeft: 10}}>  
  <CategoryList selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
  </View>

  <View style = {{ marginTop: 10 , marginBottom: 10}}>  
  <HomeList selectedCategory={selectedCategory}/>
  </View>

  <View style = {{ marginTop: 10 , marginBottom: 10}}>  
  <GreyList/>
  </View>
  </ScrollView>
  </SafeAreaView>
  </SafeAreaProvider>
  );
}



import {  ScrollView, Text , View , StatusBar} from 'react-native';
import SearchBox from '@/components/textinputs/search';
import GradientGreyList from '@/components/lists/gradientGreyList';
import ViewAll from '@/components/others/viewAll';
import SearchList from '@/components/lists/searchList';
import SmallList from '@/components/lists/smallList';
import SafeAreaView from 'react-native-safe-area-view';
import {useState} from 'react'

export default function Search() {

    const[searchInput , setSearchInput] = useState('');

    return(
    <SafeAreaView style={{backgroundColor:'white' , flex:1 , paddingBottom: 105}}>
              <StatusBar backgroundColor="white" barStyle="dark-content" />

        <ScrollView> 
            <View style={{marginBottom: 5, marginTop: 3}}>
            <SearchBox placeHolder="Search" onChangeText={setSearchInput}/>
            </View>
            <GradientGreyList />
            <ViewAll label ='Recommendations'/>
            <SearchList searchInput={searchInput}/>
            <ViewAll label ='Favourites'/>
            <SmallList/>
        </ScrollView>
    </SafeAreaView>
    )
}
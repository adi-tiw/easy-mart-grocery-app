import NestedGreyList from '@/components/lists/nestedGrey';
import CartHeader from '@/components/others/cartHeader';
import {  Text , View , StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CategoriesPage() {
    return(
        <SafeAreaView style={{backgroundColor:'white'}}>
            <CartHeader/>
            <View style={styles.list}>     
            <NestedGreyList/>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    list: {
    paddingTop: 15,
    paddingBottom:220,
    },
})
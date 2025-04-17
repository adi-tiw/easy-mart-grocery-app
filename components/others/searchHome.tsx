import { View , StyleSheet , Text , Image, Pressable} from 'react-native';
import { router } from 'expo-router';

export default function SearchHome() {
    return(
        <View style={styles.mainContainer}>
            <View style={{justifyContent: 'space-between'}}>
            <Text style={{fontFamily :'poppins' , fontWeight: 'bold' , fontSize: 25 }}>
                Get Healthy</Text>
            <Text style={{fontFamily :'poppins' , fontWeight: 'bold' , color:'#61AC4D', fontSize: 20, marginTop:5 }}>It's the best investment!</Text>
            </View>
            
            <View>
                <Pressable onPress={() => router.push('/(tabs)/search')}>
                <Image source={require('@/assets/images/homesearch.png')} style={{height: 85, width: 85, right: 20, bottom:10}}/>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        borderWidth: 0,

        width: '100%',
        height: 65,
        flexDirection:'row',
        justifyContent: 'space-between',
        margin: 10,
        paddingLeft: 10,
    }
})
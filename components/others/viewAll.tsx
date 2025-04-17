import { View , StyleSheet , Text , Image, Pressable} from 'react-native';

type label = {
    label: string
}

export default function ViewAll(label : label) {
    return(
        <View style={styles.mainContainer}>
            <View style={{justifyContent: 'space-between'}}>
            <Text style={{fontFamily :'poppins' , fontWeight: 'bold' , fontSize: 18 }}>
                {label.label}</Text>
            </View>
            
            <View>
                <Pressable onPress={() => {alert('pressed!')}}>
                <Text style={{color: '#61AC4D'}}>View All</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        borderWidth: 0,

        width: 400,
        height: 30,
        borderRadius: 10,
        flexDirection:'row',
        justifyContent: 'space-between',
        margin: 10,
        paddingLeft: 20,
        paddingRight: 20,
    }
})
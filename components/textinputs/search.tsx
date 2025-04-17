import { View , StyleSheet , TextInput , Image} from "react-native";

type inputProps = {
    placeHolder : string;
    onChangeText: (text: string)=> void;
}


export default function SearchBox({placeHolder , onChangeText} : inputProps) {
    
    
    return(
        <View style = {styles.box}>
            <TextInput
                style = {styles.textInput}
                placeholder = {placeHolder}
                onChangeText={onChangeText}
                />
            <Image source = {require('@/assets/images/search.png')}
             style = {{width: 20 , height: 20 , left: 20  , position:'absolute',
            }} />

        </View>
    )
}
const styles = StyleSheet.create({
    box: {
        borderWidth: 0,


        flexDirection: 'row',
        height:70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput : {
        backgroundColor: '#fff',
        color: 'grey',
        height: 65,
        width: 400,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 42,
        borderWidth: 0.5,
        borderColor: 'lightgrey',
        fontFamily: 'Poppins',
        fontSize: 16,
        paddingLeft: 50,
    }
})
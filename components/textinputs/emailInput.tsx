import { View , StyleSheet , TextInput , Image} from "react-native";

type InputProps = {
    placeHolder : string;
}


export default function EmailInput({placeHolder} : InputProps) {
    return(


        <View style = {styles.box}>
            <TextInput
                style = {styles.textInput}
                placeholder = {placeHolder}
                />
            <Image source = {require('@/assets/images/email.png')}
             style = {{width: 30 , height: 30 , left: 10  , position:'absolute',
            }} />

        </View>
    )
}
const styles = StyleSheet.create({
    box: {
        backgroundColor: '#F0F0F1',
        height: 65,
        width: 400,
        alignItems:'flex-start',
        justifyContent:'center',
        borderRadius: 20,
        borderWidth: 2,
        boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.7)',
        fontFamily: 'Poppins',
        fontSize: 16,
        paddingLeft: 20,
        
    },
    textInput : {
        left: 30,
        width: 300,
        borderWidth: 0,
    }
})
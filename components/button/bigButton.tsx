import { View , Text , Pressable , StyleSheet} from 'react-native';

type ButtonProps = {
    label: string;
    onPress?:() => void;
}

export default function BigButton({label , onPress}: ButtonProps) {
    return(
        <View>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style = {{ fontFamily: 'poppins' , fontSize: 16 , fontWeight: 'bold', color: 'white'}}>{label}</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    button: {
        borderWidth: 0,
        height: 75,
        width: 400,
        backgroundColor: '#61AC4D', 
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
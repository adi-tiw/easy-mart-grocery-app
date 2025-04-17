import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useState } from "react";

type CartProps = {
    quantity: number
    setQuantity: (quantity: number) => void;
}

export default function CartCounter({quantity , setQuantity}: CartProps) {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.cartCounterContainer}>
                <Pressable 
                    style={styles.buttonContainer} 
                    onPress={() => {
                        if (quantity > 0) setQuantity(quantity - 1);
                    }}
                >
                    <Image 
                        source={require('@/assets/images/removefromcart.png')} 
                        style={styles.imageminus} 
                    />
                </Pressable>
                <View style={styles.itemCounterContainer}>
                    <Text style={styles.counterText}>{quantity}</Text>
                </View>
                <Pressable 
                    style={styles.buttonContainer} 
                    onPress={() => setQuantity(quantity + 1)}
                >
                    <Image 
                        source={require('@/assets/images/addtocart.png')} 
                        style={styles.imageplus} 
                    />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cartCounterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(85, 85, 85, 0.0)',
        borderRadius: 8, 
        paddingHorizontal: 5,
        paddingVertical: 3,
        width: 140,
        height: 50,
    },
    buttonContainer: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageplus: {
        width: 40,
        height: 40,
    },
    imageminus: {
        width: 50,
        height: 50,
    },
    itemCounterContainer: {
        width: 40,
        alignItems: 'center',
    },
    counterText: {
        fontSize: 22,
        color: 'white',
        fontWeight: 'bold',
    },
});

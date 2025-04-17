import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router , useRouter } from 'expo-router';
import BigButton from '@/components/button/bigButton';

export default function NotFound() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>404 - Page Not Found</Text>

            <BigButton label='Go to Login' onPress={() => router.replace('/pages/login')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 50,
    },
});


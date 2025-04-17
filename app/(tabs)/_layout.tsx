import { Tabs } from "expo-router";
import { Image , Pressable , StatusBar} from "react-native";
import { router } from 'expo-router';

export default function TabsLayout() {
    return(
        
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#61AC4D',
                tabBarInactiveTintColor: '#B7B7B7',
                tabBarLabelStyle: { fontSize: 15 , fontFamily: 'Poppins' , marginTop: 10},
                tabBarStyle: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 100, backgroundColor: '#fff' },
                
                headerTitleStyle: {
                    fontWeight: 'bold',
                    justifyContent:'center',

                },
                headerLeft: () => (
                    <Pressable onPress={() => router.back()}>
                        <Image source={require('@/assets/images/back.png')} style = {{height: 50, width: 50 , marginLeft: 10}}/>
                    </Pressable>
                )
                
            }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
    
            <Tabs.Screen name='home' 
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: () => (
                <Image source={require('../../assets/images/home.png')} style={{width: 25, height: 25}}/>
                )
                }}/>    
            <Tabs.Screen name='search' 
            options={{
                title: 'Search',
                tabBarIcon: () => (
                <Image source={require('../../assets/images/search.png')} style={{width: 25, height: 25}}/>
                )
                }}/>
            <Tabs.Screen name='categories' 
            options={{
                title: 'Categories',
                tabBarIcon: () => (
                <Image source={require('../../assets/images/categories.png')} style={{width: 25, height: 25}}/>
                )
                }}/>
            <Tabs.Screen name='profile' 
            options={{
                title: 'Profile',
                tabBarIcon: () => (
                <Image source={require('../../assets/images/profile.png')} style={{width: 25, height: 25}}/>
                )
                }}/>
        </Tabs>
    )
}

import blurBg from '../src/assets/bgBlur.png'
import Stripes from '../src/assets/stripes.svg'

import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet } from 'react-native';


import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import { SplashScreen, Stack } from 'expo-router';
import * as SecureStore from 'expo-secure-store'
import { useEffect, useState } from 'react';


export default function Layout() {

    const [isUserAuthenticated,setIsUserAuthenticated] = useState<null | boolean>(null);

    const [hasLoadedFonts] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
        BaiJamjuree_700Bold
    });

    useEffect(()=>{
        SecureStore.getItemAsync('token').then(token => {
            setIsUserAuthenticated(!!token);
        });
    },[])

    if (!hasLoadedFonts)
        return <SplashScreen />;


    return (
        <ImageBackground
            source={blurBg}
            style={[styles.back, { paddingHorizontal: 34 }]}
            imageStyle={{ position: 'absolute', left: '-100%' }}
        >
            <Stripes style={{ position: 'absolute', left: 2 }} />
            <StatusBar style="auto" translucent />
            <Stack screenOptions={{
                headerShown: false,
                contentStyle:{
                    backgroundColor: 'transparent'
                },
            }} >
                 <Stack.Screen name='index' redirect={isUserAuthenticated}/>
                 <Stack.Screen name='new' />
                 <Stack.Screen name='memories' />
            </Stack>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121215',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    back:{
        flex: 1,
        backgroundColor: '#121215',
        justifyContent: 'center',
        position: 'relative',
    },
    gray50: {
        color: '#eaeaea'
    },
    gray100: {
        color: '#bebebf'
    },
    title: {
        fontFamily: 'Roboto_700Bold',
    },
    body: {
        fontFamily: 'Roboto_400Regular'
    },
    alt: {
        fontFamily: 'BaiJamjuree_700Bold'
    },
    button: {
        borderRadius: 25,
        backgroundColor: '#04d361',
        paddingBottom: 12,
        paddingTop: 20,
    },
})
import React from 'react';
import {SafeAreaProvider,SafeAreaView} from "react-native-safe-area-context";
import {ImageBackground, StyleSheet, Text} from "react-native";

const image = {uri : 'https://reactnative.dev/img/tiny_logo.png'};

const AppsImageBackgroud = () => (
    <SafeAreaProvider>
        <SafeAreaView style={ibStyles.container} edges={['left', 'right']}>
            <ImageBackground source={image} resizeMode="cover" style={ibStyles.image}>
                <Text style={ibStyles.text}>Inside</Text>
             </ImageBackground>
        </SafeAreaView>
    </SafeAreaProvider>
);

const ibStyles = StyleSheet.create({
    container: {
        flex : 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontSize : 42,
        lineHeight: 84,
        fontWeight : 'bold',
        textAlign: 'center',
        backgroundColor: 'white',
    },
})

export default AppsImageBackgroud;
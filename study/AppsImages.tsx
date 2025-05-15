import React from 'react';
import {Image, SafeAreaView, StyleSheet} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";

const iStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tinyLogo : {
        width: 50,
        height: 50,
    },
    logo : {
        width: 66,
        height: 58,
    },
});

const AppsImages = () => (
    <SafeAreaProvider>
        <SafeAreaView style={[iStyles.container, iStyles.tinyLogo]}>
            <Image
                style={iStyles.tinyLogo}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
        </SafeAreaView>
    </SafeAreaProvider>
);

export default AppsImages;
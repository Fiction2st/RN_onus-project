import React from 'react';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Text, View} from "react-native";

const SView = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{height: 100, flexDirection: 'row'}}>
                <View style={{backgroundColor: 'blue', flex: 0.2}} />
                <View style={{backgroundColor: 'red', flex: 0.4}} />
                <Text>Hello World!</Text>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default SView;
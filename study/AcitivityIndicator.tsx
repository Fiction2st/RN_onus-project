import React from 'react';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {ActivityIndicator, SafeAreaView, StyleSheet} from "react-native";

const AcitivityIndicator = () => {
    <SafeAreaProvider>
        <SafeAreaView style={[indicatorStyles.container, indicatorStyles.horizontal]}>
            <ActivityIndicator />
            <ActivityIndicator size="large" />
            <ActivityIndicator size="small" color="red" />
            <ActivityIndicator size="large" color="blue"/>
        </SafeAreaView>
    </SafeAreaProvider>
};

const indicatorStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },
})

export default AcitivityIndicator;
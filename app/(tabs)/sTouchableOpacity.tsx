import React, {useState} from 'react';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {SafeAreaView, StyleSheet, TouchableOpacity, View, Text} from "react-native";
import styles from "react-native-webview/lib/WebView.styles";

const STouchableOpacity = () => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={toStyles.container}>
                <View style={toStyles.countContainer}>
                    <Text>Count: {count}</Text>
                </View>
                <TouchableOpacity style={toStyles.button} onPress={onPress}>
                    <Text>Press Here</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const toStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
    },
    countContainer: {
        alignItems: 'center',
        padding: 10,
    },
})
export default STouchableOpacity;
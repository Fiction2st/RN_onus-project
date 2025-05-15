import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

const STouchableHighlight = () => {
    const [count, setCount] = React.useState(0);
    const onPress = () => setCount(count + 1);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={thStyles.container}>
                <TouchableHighlight onPress={onPress}>
                    <View style={thStyles.button}>
                        <Text>여기를 터치</Text>
                    </View>
                </TouchableHighlight>
                <View style={thStyles.countContainer}>
                    <Text style={thStyles.countText}>{count||null}</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const thStyles = StyleSheet.create({
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
    countText: {
        color: '#FF00FF',
    },
})
export default STouchableHighlight;
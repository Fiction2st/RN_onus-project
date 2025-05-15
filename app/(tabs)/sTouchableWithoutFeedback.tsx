import React, {useState} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

const STouchableWithoutFeedback = () => {
    const [count, setCount] = useState(0);

    const onPress = () => {
        setCount(count + 1);
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={twfStyles.container}>
                <View style={twfStyles.countContainer}>
                    <Text style={twfStyles.countText}>Count: {count}</Text>
                </View>
                <TouchableWithoutFeedback onPress={onPress}>
                    <View style={twfStyles.button}>
                        <Text>Touch Here</Text>
                    </View>
                </TouchableWithoutFeedback>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const twfStyles = StyleSheet.create({
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
export default STouchableWithoutFeedback;
import React from 'react';
import {StyleSheet, TextInput} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

const STextInput = () => {
    const [text,onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <TextInput
                    style = {tiStyles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <TextInput
                    style = {tiStyles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder={'Useless placeholder'}
                    keyboardType={'numeric'}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const tiStyles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})
export default STextInput;
import React from 'react';
import {StyleSheet, Text} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";

const SText = () => {
    const [titleText, setTitleText] = React.useState("공부입니다.");
    const bodyText = '이것은 주말 공부입니다.'

    const onPressTitle = () => {
        setTitleText("공부입니다.[눌림]");
    };

    return (
        <SafeAreaProvider>
            <SafeAreaProvider style={txtStyles.container}>
                <Text style={txtStyles.baseText}>
                    <Text style={txtStyles.titleText} onPress={onPressTitle}>
                        {titleText}
                        {'\n'}
                        {'\n'}
                    </Text>
                    <Text numberOfLines={5}>{bodyText}</Text>
                </Text>

            </SafeAreaProvider>
        </SafeAreaProvider>
    );
};

const txtStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})
export default SText;
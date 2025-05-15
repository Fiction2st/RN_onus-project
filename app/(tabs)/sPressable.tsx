import React, {useState} from 'react';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Pressable, StyleSheet, Text, View} from "react-native";

const SPressable = () => {
    const [timePressed, setTimePressed] = useState(0);

    let textLog = '';
    if (timePressed > 1) {
        textLog = timePressed + '번 누름';
    } else if (timePressed > 0) {
        textLog = '누른횟수 카운팅합니다';
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={pStyles.container}>
                <Pressable
                    onPress={() => {
                        setTimePressed(current => current + 1);
                    }}
                    style={({pressed}) => [
                        {
                            backgroundColor:pressed ? 'rgb(210, 230, 255)' : 'white',
                        },
                        pStyles.wrapperCustom,
                    ]}>
                    {({pressed}) => (
                        <Text style={pStyles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
                    )}
                </Pressable>
                <View style={pStyles.logBox}>
                    <Text testID={"pressable_press_console"}>{textLog}</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const pStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    },
    logBox: {
        padding: 20,
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9',
    },
});
export default SPressable;
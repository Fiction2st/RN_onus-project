import React from 'react';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {ScrollView, StyleSheet, Text, StatusBar} from "react-native";

const SScrollView = () => {
    <SafeAreaProvider>
        <SafeAreaView style={scStyles.container} edges={['top']}>
            <ScrollView style={scStyles.scrollView}>
                <Text style={scStyles.text}>
                    아무말이나길게쓰는글을 작성합니다.아무말이나길게쓰는글을 작성합니다.아무말이나길게쓰는글을 작성합니다.
                    아무말이나길게쓰는글을 작성합니다.아무말이나길게쓰는글을 작성합니다.아무말이나길게쓰는글을 작성합니다.
                    아무말이나길게쓰는글을 작성합니다.아무말이나길게쓰는글을 작성합니다.아무말이나길게쓰는글을 작성합니다.
                </Text>
            </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>
};

const scStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: 'pink',
    },
    text: {
        fontSize: 42,
        padding: 12,
    },
});

export default SScrollView;
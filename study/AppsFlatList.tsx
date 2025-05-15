import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from "react-native";
import styles from "react-native-webview/lib/WebView.styles";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";

const DATA = [
    {
        id : '123123123-adsdg-123123',
        title : 'First Item',
    },
    {
        id : '123123123-sfgdg-195123',
        title : 'Second Item',
    },
    {
        id : '123123123-954gka-123123',
        title : 'Third Item',
    },
];

type ItemProps = {title : string};
const Item = ({title}: ItemProps) => (
    <View style={fStyles.item}>
        <Text style={fStyles.title}>{title}</Text>
    </View>
);

const AppsFlatList = () => (
    <SafeAreaProvider>
        <SafeAreaView style={fStyles.container}>
            <FlatList
                data={DATA}
                renderItem={({item}) => <Item title={item.title} />}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    </SafeAreaProvider>
);


const fStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
export default AppsFlatList;
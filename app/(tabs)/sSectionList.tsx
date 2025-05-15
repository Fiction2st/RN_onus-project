import React from 'react';
import {SectionList, StatusBar, StyleSheet, Text, View} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

const DATA = [
    {
        title: 'Main dishes',
        data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
        title: 'Sides',
        data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
        title: 'Drinks',
        data: ['Water', 'Coke', 'Beer'],
    },
    {
        title: 'Desserts',
        data: ['Cheese Cake', 'Ice Cream'],
    },
]

const SSectionList = () => {
    <SafeAreaProvider>
        <SafeAreaView style={slStyles.container} edges={['top']}>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => (
                    <View style={slStyles.item}>
                        <Text style={slStyles.title}>{item}</Text>
                    </View>
                )}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={slStyles.header}>{title}</Text>
                )}
            />
        </SafeAreaView>
    </SafeAreaProvider>
};

const slStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
    },
    header: {
        fontSize: 32,
        backgroundColor: 'white',
        color : 'black',
    },
    title: {
        fontSize: 24,
        color: 'white',
    },
})

export default SSectionList;
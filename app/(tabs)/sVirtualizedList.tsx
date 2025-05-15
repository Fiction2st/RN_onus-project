import React from 'react';
import {StatusBar, StyleSheet, View, Text, VirtualizedList} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

type ItemData = {
    id : string,
    title : string,
};

const getItem = (_data : unknown, index:number):ItemData => ({
    id : Math.random().toString(12).substring(0),
    title:`Item ${index + 1}`,
});

const getItemCount = (_data: unknown) => 50;

type ItemProps = {
    title : string;
}

const Item = ({title}: ItemProps) => (
    <View style={vStyles.container}>
        <Text style={vStyles.title}>{title}</Text>
    </View>
);

const SVirtualizedList = () => {
    <SafeAreaProvider>
        <SafeAreaView style={vStyles.container} edges={['top']}>
            <VirtualizedList
                initialNumToRender={4}
                renderItem={({item}) => <Item title={item.title} />}
                keyExtractor={item=>item.id}
                getItemCount={getItemCount}
                getItem={getItem}
            />
        </SafeAreaView>
    </SafeAreaProvider>
};

const vStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    item: {
        backgroundColor: '#f9c2ff',
        height: 150,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
    },
    title: {
        fontSize: 32,
    },
})
export default SVirtualizedList;
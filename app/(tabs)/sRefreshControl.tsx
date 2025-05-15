import React from 'react';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {RefreshControl, ScrollView, StyleSheet, Text} from "react-native";

const SRefreshControl = () => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={rStyles.container}>
                <ScrollView
                    contentContainerStyle={rStyles.scrollView}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }>
                    <Text>RefreshControl Pull Down!</Text>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const rStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export default SRefreshControl;
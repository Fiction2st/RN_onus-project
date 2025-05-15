import React, {useState} from 'react';
import {Button, Platform, StatusBar, StatusBarStyle, StyleSheet, View, Text} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import styles from "react-native-webview/lib/WebView.styles";

const STYLES =['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS= ['fade','slide','none'] as const;

const SSTAUSBAR = () => {
    const [hidden, setHidden] = React.useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
        STYLES[0],
    );
    const [statusBarTransition, setStatusBarTransition] = useState<'fade' | 'slide' | 'none'>
    (TRANSITIONS[0]);

    const changeStatusBarVisibility = () => setHidden(!hidden);

    const changeStatusBarStyle = () => {
        const styleId = STYLES.indexOf(statusBarStyle) + 1;
        if (styleId === STYLES.length) {
            setStatusBarTransition(TRANSITIONS[0]);
        } else {
            setStatusBarStyle(STYLES[styleId]);
        }
    }

    const changeStatusBarTransition = () => {
        const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
        if (transition === TRANSITIONS.length) {
            setStatusBarTransition(TRANSITIONS[0]);
        } else {
            setStatusBarTransition(TRANSITIONS[transition]);
        }
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={sbStyles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#61dafb"
                    barStyle={statusBarStyle}
                    showHideTransition={statusBarTransition}
                    hidden={hidden}
                />
                <Text style={sbStyles.textStyle}>
                    StatusBar Visibility:{'\n'}
                    {hidden ? 'Hidden' : 'Visible'}
                </Text>
                <Text style={sbStyles.textStyle}>
                    StatusBar Style:{'\n'}
                    {statusBarStyle}
                </Text>
                {Platform.OS === 'ios' ? (
                    <Text style={sbStyles.textStyle}>
                        StatusBar Transition:{'\n'}
                        {statusBarTransition}
                    </Text>
                ) : null}
                <View style={sbStyles.buttonsContainer}>
                    <Button
                        title="Toggle StatusBar"
                        onPress={changeStatusBarVisibility}
                    />
                    <Button
                        title="Change StatusBar Style"
                        onPress={changeStatusBarStyle}
                    />
                    {Platform.OS === 'ios' ? (
                        <Button
                            title="Change StatusBar Transition"
                            onPress={changeStatusBarTransition}
                        />
                    ) : null}
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const sbStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ECF0F1',
    },
    buttonsContainer: {
        padding: 10,
    },
    textStyle: {
        textAlign: 'center',
        marginBottom: 8,
    },
})
export default SSTAUSBAR;
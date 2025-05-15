import React from 'react';
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Text,
    Platform,
    TouchableWithoutFeedback,
    Button,
    Keyboard,
} from 'react-native';

const AppsKeyboardAvoidingView = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? 'padding' : 'height'}
            style={kStyles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={kStyles.inner}>
                    <Text style={kStyles.inner}>헤더임</Text>
                    <TextInput placeholder="Username" style={kStyles.textInput} />
                    <View style={kStyles.btnContainer}>
                        <Button title="submit" onPress={() => null}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const kStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
        color : 'white',
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
        color: 'white',
    },
    textInput: {
        height: 40,
        borderColor: 'white',
        borderBottomWidth: 1,
        marginBottom: 36,
        color: 'white',
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12,
    },
})
export default AppsKeyboardAvoidingView;
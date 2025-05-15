import React, {useState} from 'react';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {Alert, Modal, Pressable, StyleSheet, Text, View} from "react-native";

const AppsModal = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaProvider>
            <SafeAreaView style={mStyle.centeredView}>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed')
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={mStyle.centeredView}>
                        <View style={mStyle.modalView}>
                            <Text style={mStyle.modalText}>Hello world</Text>
                            <Pressable
                                style={[mStyle.button, mStyle.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={mStyle.textStyle}>Hide Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[mStyle.button, mStyle.buttonOpen]}
                    onPress={() => setModalVisible(true)}>
                    <Text style={mStyle.textStyle}>Show Modal</Text>
                </Pressable>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const mStyle = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})
export default AppsModal;
import React from 'react';
import {StyleSheet, Button, View, Text, Alert} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Separator = () => <View style={styles.separator} />;

const AppsButton = () => (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    안녕하세요오.
                </Text>
                <Button
                    title="Press me"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
            <Separator />
            <View>
                <Text style={styles.title}>
                    iOS 버튼 안녕하세요
                </Text>
                <Button
                    title="Press me"
                    color="#f194ff"
                    onPress={() => Alert.alert('Button with adjusted color pressed')}
                />
            </View>
            <Separator />
            <View>
                <Text style={styles.title}>
                    비활성 버튼입니다.
                </Text>
                <Button
                    title="Press me"
                    disabled
                    onPress={() => Alert.alert('Cannot press this one')}
                />
            </View>
            <Separator />
            <View>
                <Text style={styles.title}>
                    왼쪽은 취소, 오른쪽은 확인
                </Text>
                <View style={styles.fixToText}>
                    <Button
                        title="Left button"
                        onPress={() => Alert.alert('Left button pressed')}
                    />
                    <Button
                        title="Right button"
                        onPress={() => Alert.alert('Right button pressed')}
                    />
                </View>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        color : 'white',
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});

export default AppsButton;
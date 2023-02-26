import React from 'react';

import store from "./redux/store";
import { Provider } from 'react-redux';

import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import { InitStack } from './navigation/Startup';

import {SafeAreaView} from 'react-native-safe-area-context';


export default function App() {

    return (
    <Provider store={store}>
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <SafeAreaView style={styles.container}>
                <InitStack/>
                <StatusBar style="auto" />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    </Provider>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF5C5C',
    },
});

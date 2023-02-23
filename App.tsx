import React, { useEffect } from 'react';

import store from "./redux/store";
import { Provider, useDispatch } from 'react-redux';

import { StatusBar } from 'expo-status-bar';
import { Keyboard, SafeAreaView, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import Header from './components/Header';
import TabBar from './navigation/TabBar';
import { InitStack } from './navigation/Startup';

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





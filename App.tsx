import React from 'react';

import store from "./redux/store";
import { Provider } from 'react-redux';

import { StatusBar } from 'expo-status-bar';
import { Keyboard, SafeAreaView, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import Header from './components/Header';
import TabBar from './navigation/TabBar';

export default function App() {


    return (
    <Provider store={store}>
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <SafeAreaView style={styles.container}>
                <Header />
                <TabBar/>
                <StatusBar style="auto" />
            </SafeAreaView>
        </TouchableWithoutFeedback >
    </Provider>

  );
}

const tabOptions = {
    tabBarShowLabel: false,
    tabBarStyle: {
        backgroundColor: "#FF5C5C"
    },
    tabBarActiveTintColor: "white",
    tabBarInactiveTintColor: "black"
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF5C5C',
  },
});





import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';

import Header from './components/Header';
import TabBar from './components/TabBar';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
        <Header/>
        <TabBar/>
        <StatusBar style="auto" />
    </SafeAreaView>
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
        backgroundColor: 'white',

  },
});

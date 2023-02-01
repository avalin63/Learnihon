import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Learn    from './pages/Learn';
import List from './pages/List';
import Playground from './pages/Playground';

import Header from './components/Header';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView style={styles.container}>
        <Header/>
          <StatusBar style="auto" />
          <NavigationContainer >
              <Tab.Navigator>
                  <Tab.Screen name="List" component={List} />
                  <Tab.Screen name="Learn" component={Learn} />
                  <Tab.Screen name="Playground" component={Playground} />
              </Tab.Navigator>
          </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

  },
});

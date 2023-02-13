import React from 'react';

import { StyleSheet, TouchableNativeFeedback, useColorScheme, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBarButtonProps, BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { List as ListIcon } from "react-native-feather";
import { Edit2 as PlaygroundIcon } from "react-native-feather";
import { BookOpen as LearnIcon } from "react-native-feather";

import Learn from '../pages/Learn';
import List from '../pages/List';
import Playground from '../pages/Playground';



const LearnButton = (props: BottomTabBarButtonProps) => {

    const learnButtonStyle = useColorScheme() == 'light' ? learnButtonStyle_light : learnButtonStyle_dark;

    return (
        <View
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <View
                style={learnButtonStyle.button2}>
            </View>

            <TouchableNativeFeedback onPress={props.onPress}>
                <View
                    style={learnButtonStyle.button}>
                    {props.children}
                </View>
            </TouchableNativeFeedback>
        </View>
    )

}

const learnButtonStyle_light = StyleSheet.create({
    button: {
        backgroundColor: "#FF5C5C",
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    button2: {
        backgroundColor: "#f5f5f4",
        width: 90,
        height: 90,
        borderRadius: 45,
        position: "absolute"
    },
});

const learnButtonStyle_dark = StyleSheet.create({
    button: {
        backgroundColor: "#FF5C5C",
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    button2: {
        backgroundColor: "#2b2b2b",
        width: 90,
        height: 90,
        borderRadius: 45,
        position: "absolute"
    },
});

const TabBar = () => {

    const Tab = createBottomTabNavigator();
    return (
            <NavigationContainer>
                <Tab.Navigator
                screenOptions={tabOptions}
                initialRouteName="Learn"
                >
                    <Tab.Screen
                        options={{
                            tabBarIcon: ({ color }) => (
                                <ListIcon color={color} />
                            )
                        }}
                        name="List"
                        component={List}
                    />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ color }) => (
                            <LearnIcon color={color} width={32} height={32} />
                        ),
                        tabBarButton: (props) => (
                            <LearnButton { ... props}/>
                        )
                        }}
                        name="Learn"
                        component={Learn} />
                    <Tab.Screen
                        options={{
                            tabBarIcon: ({ color }) => (
                                <PlaygroundIcon color={color} />
                            )
                        }}
                        name="Playground"
                        component={Playground} />
                </Tab.Navigator>
            </NavigationContainer>
    );
}

const tabOptions: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        backgroundColor: "#FF5C5C",
    },
    tabBarActiveTintColor: "white",
    tabBarInactiveTintColor: "black",
};

export default TabBar;

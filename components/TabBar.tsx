import React from 'react';

import { StyleSheet, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBarButtonProps, BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { List as ListIcon } from "react-native-feather";
import { Edit2 as PlaygroundIcon } from "react-native-feather";
import { BookOpen as LearnIcon } from "react-native-feather";

import Learn from '../pages/Learn';
import List from '../pages/List';
import Playground from '../pages/Playground';


const LearnButton = (props: BottomTabBarButtonProps) => {

    return (
        <View
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <TouchableNativeFeedback onPress={props.onPress}>
                <View
                    style={learnButtonStyle.button}>
                    {props.children}
                </View>
            </TouchableNativeFeedback>
        </View>
    )

}

const learnButtonStyle = StyleSheet.create({
    button: {
        backgroundColor: "#FF5C5C",
        width: 80,
        height: 80,
        borderRadius: 40,
        borderColor: "#f5f5f4",
        borderWidth: 5
    }
});

const TabBar  = () => {

    const Tab = createBottomTabNavigator();

    return (
            <NavigationContainer >
                <Tab.Navigator
                    screenOptions={tabOptions}

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
        backgroundColor: "#FF5C5C"
    },
    tabBarActiveTintColor: "white",
    tabBarInactiveTintColor: "black",
};

export default TabBar;

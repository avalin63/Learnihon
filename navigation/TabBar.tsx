import React from 'react';

import { BottomTabBarButtonProps, BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableWithoutFeedback, useColorScheme, View } from 'react-native';

import { BookOpen as LearnIcon, Edit2 as PlaygroundIcon, List as ListIcon } from "react-native-feather";

import { learnihonColors } from '../assets/colors';
import Learn from '../pages/Learn';
import Playground from '../pages/Playground';
import KanjiStackNavigator from './Stack';



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

            <TouchableWithoutFeedback onPress={props.onPress}>
                <View
                    style={learnButtonStyle.button}>
                    {props.children}
                </View>
            </TouchableWithoutFeedback>
        </View>
    )

}

const learnButtonStyle_light = StyleSheet.create({
    button: {
        backgroundColor: learnihonColors.main,
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    button2: {
        backgroundColor: learnihonColors.light,
        width: 90,
        height: 90,
        borderRadius: 45,
        position: "absolute"
    },
});

const learnButtonStyle_dark = StyleSheet.create({
    button: {
        backgroundColor: learnihonColors.main,
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    button2: {
        backgroundColor: learnihonColors.dark,
        width: 90,
        height: 90,
        borderRadius: 45,
        position: "absolute"
    },
});

const TabBar = () => {

    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
        screenOptions={tabOptions}
        initialRouteName="Learn">
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <ListIcon color={color} />
                    )
                }}
                name="List"
            component={KanjiStackNavigator}/>
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
    );
}





const tabOptions: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
        backgroundColor: learnihonColors.main,
    },
    tabBarActiveTintColor: "white",
    tabBarInactiveTintColor: "black",
};

export default TabBar;

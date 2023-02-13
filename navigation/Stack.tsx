import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import React from "react";
import Detail from "../pages/Detail";
import List from "../pages/List";

export default function KanjiStackNavigator() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="List"
            screenOptions={stackOptions}
        >
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
    )
}


const stackOptions: StackNavigationOptions = {
    headerShown: false, 
    presentation: "modal"
};
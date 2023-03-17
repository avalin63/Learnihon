import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import React from "react";
import Detail from "../pages/Detail";
import List from "../pages/List";

export default function KanjiStackNavigator() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName="KanjiList"
            screenOptions={stackOptions}
        >
            <Stack.Screen name="KanjiList" component={List} />
            <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
    )
}

const stackOptions: StackNavigationOptions = {
    headerShown: false,
    presentation: "modal"
};

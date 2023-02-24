import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useDispatch } from "react-redux";
import { fetchKanjis } from "../redux/thunks/fetchKanjis";
import TabBar from "./TabBar";


const stackOptions: StackNavigationOptions = {
    headerShown: false,
    presentation: "modal"
};

export const InitStack = () => {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName="Startup"
                screenOptions={stackOptions}
            >
                <Stack.Screen name="Startup" component={Startup} />
                <Stack.Screen name="Main"
                    component={TabBar}
                    options={{ animationEnabled: false }} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default function Startup() {

    const navigator = useNavigation();
    const dispatch = useDispatch();

    const init = async () => {
        
        await (await fetchKanjis())(dispatch);
        //await new Promise(resolve => setTimeout(resolve, 5000));
        navigator.replace("Main");
    }

    useEffect(() => {
        init()
    }, []);

    return (
        <View style={splashscreenStyle.container}>
            <Text style={splashscreenStyle.title}>LEARNIHON</Text>
        </View>
    )

}

const splashscreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: '#FF5C5C',
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 50,
    }
})



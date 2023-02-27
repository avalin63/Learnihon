import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { learnihonColors } from '../assets/colors';
import { SafeAreaView } from 'react-native-safe-area-context';


const Header = () => {

    return (
        <SafeAreaView style={headerStyle.container}>
            <Text style={headerStyle.title}>LEARNIHON</Text>
        </SafeAreaView>
    );
};

const headerStyle = StyleSheet.create({
    container: {
        backgroundColor: learnihonColors.main,
        width: '100%',
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
    }
})

export default Header;
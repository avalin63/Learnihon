import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const Header = () => {

    return (
        <View style={headerStyle.container}>
            <Text style={headerStyle.title}>LEARNIHON</Text>
        </View>
    );
};

const headerStyle = StyleSheet.create({
    container: {
        backgroundColor: '#FF5C5C',
        width: '100%',
        padding: 10
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
    }
})

export default Header;
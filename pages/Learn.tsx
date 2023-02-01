import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import KanjiCard from '../components/KanjiCard';


const Learn = () => {

    return (
        <View style={headerStyle.container}>
            <Text>Play !</Text>
        </View>
    );
};

const headerStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Learn;
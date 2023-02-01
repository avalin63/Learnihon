import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import KanjiCard from '../components/KanjiCard';


const Playground = () => {

    return (
        <View style={playgroundStyle.container}>
            <Text>Play !</Text>
        </View>
    );
};

const playgroundStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Playground;
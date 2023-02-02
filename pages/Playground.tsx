import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DrawingCanva from '../components/DrawingCanva';
import KanjiCard from '../components/KanjiCard';


const Playground = () => {

    return (
        <View style={playgroundStyle.container}>
            <DrawingCanva backgroundImage="https://media.kanjialive.com/kanji_strokes/otozu(reru)_11.svg"/>
        </View>
    );
};

const playgroundStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f5f5f4"

    }
})

export default Playground;
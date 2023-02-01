import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import KanjiCard from '../components/KanjiCard';


const Learn = () => {

    return (
        <View style={learnStyle.container}>
            <KanjiCard kanji="所"></KanjiCard>
        </View>
    );
};

const learnStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f5f5f4"
    }
})

export default Learn;
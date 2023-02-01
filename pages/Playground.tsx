import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import KanjiCard from '../components/KanjiCard';


const Playground = () => {

    return (
        <View style={headerStyle.container}>
            <KanjiCard kanji="?"></KanjiCard>
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

export default Playground;
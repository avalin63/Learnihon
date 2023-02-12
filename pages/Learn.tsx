import React from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import KanjiCard from '../components/KanjiCard';


const Learn = () => {

    const learnStyle = useColorScheme() == 'light' ? learnStyle_light : learnStyle_dark;


    return (
        <View style={learnStyle.container}>
            <KanjiCard kanji="所"></KanjiCard>
        </View>
    );
};


const learnStyle_light = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f5f5f4"
    }
})


const learnStyle_dark = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B2B2B',
    },
});

export default Learn;
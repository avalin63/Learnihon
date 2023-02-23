import React from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import KanjiCard from '../components/KanjiCard';
import { Kanji } from '../model/kanji';
import { KanjiListByGrade } from '../model/kanjiListByGrades';


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
        backgroundColor: "#f5f5f5"
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
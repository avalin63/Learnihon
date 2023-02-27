import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { learnihonColors } from '../assets/colors';
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
        backgroundColor: learnihonColors.light
    }
})


const learnStyle_dark = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: learnihonColors.dark,
    },
});

export default Learn;
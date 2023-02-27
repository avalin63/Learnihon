import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { learnihonColors } from '../assets/colors';
import DrawingCanva from '../components/DrawingCanva';
import KanjiPlaygroundList from '../components/KanjiPlaygroundList';


const Playground = () => {
    const playgroundStyle = useColorScheme() == 'light' ? playgroundStyle_light : playgroundStyle_dark;

    return (
        <View style={playgroundStyle.container}>
            <KanjiPlaygroundList/>
            <DrawingCanva backgroundImage="https://media.kanjialive.com/kanji_strokes/otozu(reru)_11.svg"/>
        </View>
    );
};

const playgroundStyle_light = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: learnihonColors.light

    }
})


const playgroundStyle_dark = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: learnihonColors.dark,
    },
});




export default Playground; 
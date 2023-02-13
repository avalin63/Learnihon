import React from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import DrawingCanva from '../components/DrawingCanva';
import KanjiPlaygroundList from '../components/KanjiPlaygroundList';
import { Kanji } from '../model/kanji';


const Playground = () => {
    // 親 雨 序 余 貴 郷

    const playgroundStyle = useColorScheme() == 'light' ? playgroundStyle_light : playgroundStyle_dark;

    return (
        <View style={playgroundStyle.container}>
            <KanjiPlaygroundList data={[
                new Kanji("親", "parent", "https://media.kanjialive.com/kanji_strokes/shita(shii)_16.svg"),
                new Kanji("雨", "rain", "https://media.kanjialive.com/kanji_strokes/u-ame_8.svg"),
                new Kanji("貴", "noble", "https://media.kanjialive.com/kanji_strokes/ki-touto(i)_12.svg")
            ]} />
            <DrawingCanva backgroundImage="https://media.kanjialive.com/kanji_strokes/otozu(reru)_11.svg"/>
        </View>
    );
};

const playgroundStyle_light = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f5f5f5"

    }
})


const playgroundStyle_dark = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B2B2B',
    },
});




export default Playground; 
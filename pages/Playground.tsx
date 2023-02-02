import React from 'react';
import { View, StyleSheet } from 'react-native';
import DrawingCanva from '../components/DrawingCanva';
import KanjiPlaygroundList from '../components/KanjiPlaygroundList';


const Playground = () => {

    return (
        <View style={playgroundStyle.container}>
            <KanjiPlaygroundList data={["親", "雨", "序", "余", "貴", "郷", "a", "b", "c", "d", "e", "f", "g"]}/>
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
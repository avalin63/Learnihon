import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { Kanji } from '../model/kanji';

interface kanjiListCellProps {
    kanji: Kanji;
}

const KanjiListCell = React.memo((props: kanjiListCellProps) => {

    const cellStyle = useColorScheme() == 'light' ? cellStyle_light : cellStyle_dark;

    const navigator = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigator.navigate("Detail", {"kanji": props.kanji})} style={cellStyle.item}>
            <Text style={cellStyle.kanji}>{props.kanji.character}</Text>
            <Text style={cellStyle.text}>{props.kanji.meaning}</Text>
        </TouchableOpacity>
    );
});

const cellStyle_light = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#e6e6e6',
    },
    text: {
        color: "black",
        width: "90%"
    },
    kanji: {
        fontWeight: "bold",
        color: "black",
        fontSize: "20em",
        width: "10%"
    }
})

const cellStyle_dark = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#1c1c1c',
    },
    text: {
        color: "white",
        width: "90%"
    },
    kanji: {
        fontWeight: "bold",
        color: "white",
        fontSize: "20em",
        width: "10%"
    },
})

export default KanjiListCell;
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, useColorScheme } from 'react-native';
import { learnihonColors } from '../assets/colors';
import { Kanji } from '../model/kanji';
import { calcCorrectGuessesRatio, getColorByRatio, KanjiGuess } from '../model/kanjiGuess';
import { retrieveGuess } from '../storage/storage';

interface kanjiListCellProps {
    kanji: Kanji;
}

const KanjiListCell = React.memo((props: kanjiListCellProps) => {

    const cellStyle = useColorScheme() == 'light' ? cellStyle_light : cellStyle_dark;

    const navigator = useNavigation();
    const [guessColor, setGuessColor] = useState(cellStyle.text.color);
    const [ratio, setRatio] = useState(-1);
    var ratioStyle = StyleSheet.create({
        text:
        {
            color: guessColor,
            textAlign: "right",
            fontWeight: "bold",
            position: "absolute",
            right: 15
        }
    });

    const memoizedValues = useMemo(async () => {
        const guess = await retrieveGuess(props.kanji.character);
        const ratio = guess ? await calcCorrectGuessesRatio(guess) : -1;
        setRatio(ratio);
    }, []);

    useEffect(() => {
        setGuessColor(getColorByRatio(ratio));
    }, [ratio]);

    return (
        <TouchableOpacity onPress={() => navigator.navigate("Detail", {"kanji": props.kanji})} style={cellStyle.item}>
            <Text style={cellStyle.kanji}>{props.kanji.character}</Text>
            <Text style={cellStyle.text}>{props.kanji.meaning}</Text>
            {ratio!=-1 && (<Text style={ratioStyle.text}>{ratio}%</Text>)}
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
        backgroundColor: learnihonColors.light_2,
    },
    text: {
        color: "black",
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
        backgroundColor: learnihonColors.dark_2,
    },
    text: {
        color: "white",
    },
    kanji: {
        fontWeight: "bold",
        color: "white",
        fontSize: "20em",
        width: "10%",
    },
})
 
export default KanjiListCell;
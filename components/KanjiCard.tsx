import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, useColorScheme, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SvgUri, SvgXml } from 'react-native-svg';
import { useSelector } from 'react-redux';
import { Kanji } from '../model/kanji';
import { KanjiListByGrade } from '../model/kanjiListByGrades';
import { KanjiMapper } from '../model/kanjiMapper';
import KanjiAnswerField from './KanjiAnswerField';

type KanjiProps = {
    kanji: string;
}

const KanjiCard = (props: KanjiProps) => {

    var kanjiCardStyle = useColorScheme() == 'light' ? kanjiCardStyle_light : kanjiCardStyle_dark;
    const [answerTextColor, setAnswerTextColor] = useState(kanjiCardStyle.text.color); 
    var textAnswerStyle = StyleSheet.create({
        text: {
            color: answerTextColor,
            fontWeight: "bold",
            fontSize: "20em"
        }
    })

    const nextKanji = () => allKanjis[Math.floor(Math.random() * allKanjis.length)];

    const [kanji, setKanji] = useState((): Kanji | null => { return null });
    const [imgXml, setImgXml] = useState('<svg></svg>');
    const [hasAnswered, setHasAnswered] = useState(false);
    const [answer, setAnswer] = React.useState("");

    var kanjis: KanjiListByGrade = useSelector(state => state.kanjiReducer.kanjis);

    const allKanjis: Kanji[] = [].concat(...Object.values(kanjis))


    const fetchXml = async () => {
        if (kanji) {
            const xml = await (await fetch(kanji?.image!)).text();
            setImgXml(xml);  
        }
    }

    useEffect(() => {
        setKanji(nextKanji());
    }, []);

    useEffect(() => {
        fetchXml().then(_ => {
        });
    }, [kanji]);

    const computeAnswer = () => {
        setAnswerTextColor(isAnswerRight() ? "green" : "red");
        setHasAnswered(true);
    }
    const computeNext = () => {
        setKanji(nextKanji());
        setAnswer("");
        setHasAnswered(false);
    }

    const isAnswerRight = () => {
        const arr1 = answer.toLowerCase().split(',').map(word => word.trim()).sort();
        const arr2 = kanji?.meaning.toLowerCase().split(',').map(word => word.trim()).sort();
        return JSON.stringify(arr1) === JSON.stringify(arr2);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={kanjiCardStyle.container}>
            <ScrollView contentContainerStyle={kanjiCardStyle.container}
                showsVerticalScrollIndicator={false}>

                <Text style={kanjiCardStyle.text}>{kanji?.onyomi}</Text>
                <Text style={kanjiCardStyle.text}>{kanji?.kunyomi}</Text>

                <SvgXml
                    xml={imgXml
                        .replace(/fill="#[0-9a-f]{6}"/g, `fill=${kanjiCardStyle.svg.color}`)}
                    width="200"
                    height="200"
            />

            {!hasAnswered && (
                <>
                    <KanjiAnswerField answer={answer} setAnswer={setAnswer} />
                    <Button title="OK" color="#FF5C5C" onPress={computeAnswer} />
                </>
            ) || (
                <>
                    <Text style={textAnswerStyle.text}>{kanji?.meaning}</Text>
                    <Text style={kanjiCardStyle.text}>{answer}</Text>
                    <Button title="NEXT" color="#FF5C5C" onPress={computeNext}/>
                </>
                    )}
            </ScrollView>
        </KeyboardAvoidingView>

    );
}; 

const kanjiCardStyle_light = StyleSheet.create({
    svg: {
        color: "black",
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "100%"
    },
    text: {
        color: "black"
    }
})

const kanjiCardStyle_dark = StyleSheet.create({
    svg: {
        color: "white",
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "100%"
    },
    text: {
        color: "white"
    }
})

export default KanjiCard;
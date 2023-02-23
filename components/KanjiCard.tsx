import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, useColorScheme } from 'react-native';
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

    const kanjiCardStyle = useColorScheme() == 'light' ? kanjiCardStyle_light : kanjiCardStyle_dark;



    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '19516a9900mshce10de76f99976bp10f192jsn8c8d82222baa',
            'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
        }
    }

    const [kanji, setKanji] = useState((): Kanji | null => { return null });
    const [imgXml, setImgXml] = useState('<svg></svg>');


    var kanjis: KanjiListByGrade = useSelector(state => state.kanjiReducer.kanjis);

    const allKanjis: Kanji[] = [].concat(...Object.values(kanjis))
    const selectedKanji = allKanjis[Math.floor(Math.random() * allKanjis.length)]



    const fetchXml = async () => {
        if (kanji) {
            const xml = await (await fetch(kanji?.image!)).text();
            setImgXml(xml);  
        }
    }

    useEffect(() => {
        setKanji(selectedKanji);
    }, []);

    useEffect(() => {
        fetchXml().then(_ => {
        });
    }, [kanji]);

    return (
        <View style={kanjiCardStyle.container}>

            <Text style={kanjiCardStyle.text}>{kanji?.onyomi}</Text>
                <SvgXml
                    xml={imgXml
                        .replace(/fill="#[0-9a-f]{6}"/g, `fill=${kanjiCardStyle.svg.color}`)}
                    width="200"
                    height="200"
                />
            <Text style={kanjiCardStyle.text}>{kanji?.meaning}</Text>
            <KanjiAnswerField />
            <Button title="OK" color="#FF5C5C" />
        </View>
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
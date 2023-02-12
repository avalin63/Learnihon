import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, useColorScheme } from 'react-native';
import { SvgUri, SvgXml } from 'react-native-svg';
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

    const [loading, setLoading] = useState(true);
    const [res, setData] = useState(null);
    const [imgXml, setImgXml] = useState('<svg></svg>');

    const fetchData = async () => {
        await fetch(`https://kanjialive-api.p.rapidapi.com/api/public/kanji/${props.kanji}`, options)
            .then(async response => { 
                const data = await response.json()
                setData(data);
                const xml = await (await fetch(data.kanji.video.poster)).text();
                setImgXml(xml);
            })
            .catch(err => console.log(err)); 
    }

    useEffect(() => {
        setLoading(true);
        fetchData().then(_ => {
            setLoading(false);
        });
    }, []);



    return (
            <View style={kanjiCardStyle.container}>

            <Text style={kanjiCardStyle.text}> {loading ? <Text>Loading...</Text> : <Text>{res.kanji.onyomi.katakana}</Text>}</Text>
            {!loading && (
                <SvgXml
                    xml={imgXml
                        .replace(/fill="#[0-9a-f]{6}"/g, `fill=${kanjiCardStyle.svg.color}`)}
                    width="200"
                    height="200"
                />
                    )}
            <Text style={kanjiCardStyle.text}> {loading ? <Text/> : <Text>{res.kanji.meaning.english}</Text>}</Text>
                <KanjiAnswerField/>
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
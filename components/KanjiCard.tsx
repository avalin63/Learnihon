import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SvgUri } from 'react-native-svg';
import KanjiAnswerField from './KanjiAnswerField';

type KanjiProps = {
    kanji: string;
}

const KanjiCard = (props: KanjiProps) => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '19516a9900mshce10de76f99976bp10f192jsn8c8d82222baa',
            'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
        }
    }

    const [loading, setLoading] = useState(true);
    const [res, setData] = useState(null);

    const fetchData = async () => {
        await fetch(`https://kanjialive-api.p.rapidapi.com/api/public/kanji/${props.kanji}`, options)
            .then(async response => {
                setData(await response.json());
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

                <Text> {loading ? <Text>Loading...</Text> : <Text>{res.kanji.onyomi.katakana}</Text>}</Text>
                {!loading && (<SvgUri
                    width="200"
                    uri={res.kanji.video.poster}
                />)}
                <Text> {loading ? <Text/> : <Text>{res.kanji.meaning.english}</Text>}</Text>
                <KanjiAnswerField/>
                <Button title="OK" color="#FF5C5C" />
            </View>
    );
};

const kanjiCardStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: "100%"
    }
})

export default KanjiCard;
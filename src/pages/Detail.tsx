import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { learnihonColors } from '../assets/colors';
import DetailExamples from '../components/DetailExamples';
import DetailRadical from '../components/DetailRadical';
import { Kanji } from '../model/kanji';


const Detail = ({route}) => {
    const kanji:Kanji = route.params.kanji;
    const detailStyle = useColorScheme() == 'light' ? detailStyle_light : detailStyle_dark;


    const [loadingImg, setLoadingImg] = useState(false);
    const [iconXml, setIconXml] = useState('<svg></svg>');
    const [imgXml, setImgXml] = useState('<svg></svg>');

    const fetchXml = async () => {
        const imgxml = await (await fetch(kanji.image)).text();
        setImgXml(imgxml);
        if (kanji.radical.position) {
            const iconxml = await (await fetch(kanji.radical.position))?.text();
            setIconXml(iconxml);
        }
    }

    useEffect(() => {
        console.log(kanji)
        setLoadingImg(true);
        fetchXml().then(_ => {
            setLoadingImg(false);
        });
    }, []);


    return (
        <View style={detailStyle.container}>
            <View style={detailStyle.pronounciation}>
                <Text style={detailStyle.text}>{kanji.onyomi}</Text>
                <Text style={detailStyle.text}>{kanji.kunyomi}</Text>
            </View>
            {loadingImg ? 
                (
                    <View style={detailStyle.loader}>
                        <ActivityIndicator size="large" color={learnihonColors.main} />
                    </View>
                ):(<SvgXml
                xml={imgXml
                    .replace(/fill="#[0-9a-f]{6}"/g, `fill=${detailStyle.svg.color}`)}
                width="100"
                height="100" />)}

            <Text style={detailStyle.tinyText}>{kanji.strokes + " strokes"}</Text>
            <Text style={detailStyle.meaningText}>{kanji.meaning}</Text>

            {!!(kanji.radical.position && kanji.radical.character) &&
                (<>
                    <Text style={detailStyle.title}>Radical</Text>
                    <DetailRadical character={kanji.radical.character} icon={iconXml}/>
                </>)}
            {kanji.examples &&
                (<>
                    <Text style={detailStyle.title}>Examples</Text>
                    <DetailExamples data={kanji.examples} />
                </>)}
        </View>
    );
};

 

const detailStyle_light = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: learnihonColors.light_2,
        height: "100%",
        width: "100%"
    },
    pronounciation: {
        alignItems: "center"
    },
    svg: {
        color: "black"
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
    },
    text: {
        color: "black"
    },
    tinyText: {
        fontSize: 10,
        color: "black"
    },
    meaningText: {
        fontSize: 20,
        color: learnihonColors.main,
        fontWeight: "900",
        textAlign: "center"
    },
    loader: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100
    }
})


const detailStyle_dark = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: learnihonColors.dark_2,
    },
    pronounciation: {
        alignItems: "center"
    },
    svg: {
        color: "white"
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        color: "white"
    },
    text: {
        color: "white"
    },
    tinyText: {
        fontSize: 10,
        color: "white"
    },
    meaningText: {
        fontSize: 20,
        color: learnihonColors.main,
        fontWeight: "900",
        textAlign: "center"

    },
    loader: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100
    }
});

export default Detail;
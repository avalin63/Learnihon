import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useSelector } from 'react-redux';
import { learnihonColors } from '../assets/colors';
import { Kanji } from '../model/kanji';
import { KanjiListByGrade } from '../model/kanjiListByGrades';
import GradeChipList from './GradeChipList';
import KanjiAnswerField from './KanjiAnswerField';

const KanjiCard = () => {

    var kanjiCardStyle = useColorScheme() == 'light' ? kanjiCardStyle_light : kanjiCardStyle_dark;
    const [answerTextColor, setAnswerTextColor] = useState(kanjiCardStyle.text.color); 
    var textAnswerStyle = StyleSheet.create({
        text: {
            color: answerTextColor,
            fontWeight: "bold",
            fontSize: "20em"
        }
    })
    const [loadingSvg, setLoadingSvg] = useState(false);
    const [selectedItems, setSelectedItems] = useState<{ title: string, data: Kanji[] }[]>([]);
    const updateSelectedItems = (item: string, isSelected: Boolean) => {
        if (!isSelected) {
            setSelectedItems([...selectedItems, {
                title: item,
                data: kanjis[item]
            }]);
        } else {
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem.title !== item));
        }
    };

    const nextKanji = () => {
        if (selectedItems.length) {
            var items= [].concat(...Object.values(selectedItems.map(it => it.data)))
            return items[Math.floor(Math.random() * items.length)]
        }
        return allKanjis[Math.floor(Math.random() * allKanjis.length)]
    };

    const [kanji, setKanji] = useState((): Kanji | null => { return null });
    const [imgXml, setImgXml] = useState('<svg></svg>');
    const [hasAnswered, setHasAnswered] = useState(false);
    const [answer, setAnswer] = React.useState("");

    var kanjis: KanjiListByGrade = useSelector(state => state.kanjiReducer.kanjis);

    const allKanjis = [].concat(...Object.values(kanjis))

    const fetchXml = async () => {
        if (kanji) {
            setLoadingSvg(true);
            const xml = await (await fetch(kanji?.image!)).text();
            setImgXml(xml);  
            setLoadingSvg(false);
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
        setAnswerTextColor(isAnswerRight() ? learnihonColors.correct : learnihonColors.wrong);
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
        <View style={kanjiCardStyle.container}>
            <GradeChipList onSelect={updateSelectedItems} />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={kanjiCardStyle.container}>


                <ScrollView contentContainerStyle={kanjiCardStyle.container}
                    showsVerticalScrollIndicator={false}>

                    <Text style={kanjiCardStyle.text}>{kanji?.onyomi}</Text>
                    <Text style={kanjiCardStyle.text}>{kanji?.kunyomi}</Text>
                    {loadingSvg ?
                        (
                            <View style = {kanjiCardStyle.loader}>
                                <ActivityIndicator size="large" color={learnihonColors.main} />
                            </View>
                        )
                        : (<SvgXml
                        xml={imgXml
                            .replace(/fill="#[0-9a-f]{6}"/g, `fill=${kanjiCardStyle.svg.color}`)}
                        width="200"
                        height="200"
                    />)}

                {!hasAnswered && (
                    <>
                        <KanjiAnswerField answer={answer} setAnswer={setAnswer} />
                        <Button title="OK" color={learnihonColors.main} onPress={computeAnswer} />
                    </>
                ) || (
                    <>
                        <Text style={textAnswerStyle.text}>{kanji?.meaning}</Text>
                        <Text style={kanjiCardStyle.text}>{answer}</Text>
                        <Button title="NEXT" color={learnihonColors.main} onPress={computeNext}/>
                    </>
                        )}
                </ScrollView>
            </KeyboardAvoidingView>
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
    loader: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200
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
    loader: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200
    },
    text: {
        color: "white"
    }
})

export default KanjiCard;
import React from 'react';
import { Text, SectionList, View, StyleSheet, useColorScheme } from 'react-native';
import { Kanji } from '../model/kanji';
import KanjiListCell from './KanjiListCell';


const KanjiList = () => {

    const kanjiListStyle = useColorScheme() == 'light' ? kanjiListStyle_light : kanjiListStyle_dark;

    return (
        <View style={kanjiListStyle.container}>
            <SectionList sections={[
                {
                    title: "N5",
                    data: [
                        new Kanji("親", "parent", "https://media.kanjialive.com/kanji_strokes/shita(shii)_16.svg"),
                        new Kanji("雨", "rain", "https://media.kanjialive.com/kanji_strokes/u-ame_8.svg"),
                        new Kanji("貴", "noble", "https://media.kanjialive.com/kanji_strokes/ki-touto(i)_12.svg")
                    ]
                },
                {
                    title: "N4",
                    data: [
                        new Kanji("親", "parent", "https://media.kanjialive.com/kanji_strokes/shita(shii)_16.svg"),
                        new Kanji("雨", "rain", "https://media.kanjialive.com/kanji_strokes/u-ame_8.svg"),
                        new Kanji("貴", "noble", "https://media.kanjialive.com/kanji_strokes/ki-touto(i)_12.svg")
                    ]
                }
            ]}
                renderItem={
                    ({ item }) => <KanjiListCell kanji={item} />
                }
                renderSectionHeader={({ section }) => (
                    <Text style={kanjiListStyle.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={item => `basicListEntry-${item}`}
            >
            </SectionList>
        </View>
    );
};

const kanjiListStyle_light = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 10
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 20,
        fontWeight: 'bold',
        color: "black",
        backgroundColor: '#d5d5d5',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

const kanjiListStyle_dark = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 10
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 20,
        fontWeight: 'bold',
        color: "white",
        backgroundColor: '#0d0d0d',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})


export default KanjiList;
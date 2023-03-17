import React, { useEffect, useState } from 'react';
import { SectionList, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { learnihonColors } from '../assets/colors';
import { Kanji } from '../model/kanji';
import { KanjiListByGrade } from '../model/kanjiListByGrades';
import GradeChipList from './GradeChipList';
import KanjiListCell from './KanjiListCell';


const KanjiList = () => {

    const kanjiListStyle = useColorScheme() == 'light' ? kanjiListStyle_light : kanjiListStyle_dark;

    let kanjis: KanjiListByGrade = useSelector(state => state.kanjiReducer.kanjis);

    const [selectedItems, setSelectedItems] = useState<{title: string, data: Kanji[]}[]>([]);
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

    return (
        <View style={kanjiListStyle.container}>
            <GradeChipList onSelect={updateSelectedItems} />

            {selectedItems.length ?
            (<SectionList
                    sections={selectedItems}
                    windowSize={50}
                    renderItem={
                        ({ item }) => <KanjiListCell kanji={item} />
                    }
                    renderSectionHeader={({ section }) => (
                        <Text style={kanjiListStyle.sectionHeader}>{section.title}</Text>
                    )}
                    keyExtractor={item => `basicListEntry-${item.character}`}/>
                ) : (
                    <View style={kanjiListStyle.container}>
                        <Text style={kanjiListStyle.text}>Select a grade</Text>
                    </View>
                )}
        </View>
    );
}; 

const kanjiListStyle_light = StyleSheet.create({
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 20,
        fontWeight: 'bold',
        color: "black",
        backgroundColor: learnihonColors.light_3,
    },
    text: {
        textAlign: "center",
        fontWeight: "bold",
        color: "black",
        opacity: 0.5
    },
    container: {
        flex: 1
    },
})

const kanjiListStyle_dark = StyleSheet.create({
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 20,
        fontWeight: 'bold',
        color: "white",
        backgroundColor: learnihonColors.dark_3,
    },
    text: {
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
        opacity: 0.5
    },
    container: {
        flex: 1
    },
})


export default KanjiList;
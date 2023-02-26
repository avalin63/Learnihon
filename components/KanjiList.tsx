import React, { useEffect, useState } from 'react';
import { Text, SectionList, View, StyleSheet, useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Kanji } from '../model/kanji';
import { KanjiListByGrade } from '../model/kanjiListByGrades';
import KanjiListCell from './KanjiListCell';
import GradeChipList from './GradeChipList';


const KanjiList = () => {

    const kanjiListStyle = useColorScheme() == 'light' ? kanjiListStyle_light : kanjiListStyle_dark;
    const dispatch = useDispatch();



    const [res, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    var kanjis: KanjiListByGrade = useSelector(state => state.kanjiReducer.kanjis);

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

    useEffect(() => {



    }, [dispatch]);

    return (
        <View>
            <GradeChipList onSelect={updateSelectedItems} />

            {selectedItems.length ?
            (<SectionList
                sections={selectedItems}
                renderItem={
                    ({ item }) => <KanjiListCell kanji={item} />
                }
                renderSectionHeader={({ section }) => (
                    <Text style={kanjiListStyle.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={item => `basicListEntry-${item.character}`}/>) 
                : (
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
        backgroundColor: '#d5d5d5',
    },
    text: {
        textAlign: "center",
        fontWeight: "bold",
        color: "black",
        opacity: 0.5
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        backgroundColor: '#0d0d0d',
    },
    text: {
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
        opacity: 0.5
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})


export default KanjiList;
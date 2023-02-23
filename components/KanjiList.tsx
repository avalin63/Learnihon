import React, { useEffect, useState } from 'react';
import { Text, SectionList, View, StyleSheet, useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Kanji } from '../model/kanji';
import { KanjiListByGrade } from '../model/kanjiListByGrades';
import KanjiListCell from './KanjiListCell';
import KanjiListSearchPanel from './KanjiListSearchPanel';


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
            <KanjiListSearchPanel onSelect={updateSelectedItems} />
            <SectionList 
                sections={selectedItems}
                renderItem={
                    ({ item }) => <KanjiListCell kanji={item} />
                }
                renderSectionHeader={({ section }) => (
                    <Text style={kanjiListStyle.sectionHeader}>{section.title}</Text>
                )}
                keyExtractor={item => `basicListEntry-${item.character}`
                }
                style={kanjiListStyle.list}
            >
            </SectionList>
            

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
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200,
        backgroundColor: "white",
        borderRadius: 20,
        borderColor: "black"
    },
})

const kanjiListStyle_dark = StyleSheet.create({
    list: {
    },
    chipList: {
        height: 10
    },
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 20,
        borderColor: "black"
    },
})


export default KanjiList;
import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Kanji } from '../model/kanji';
import { setSelectedKanji } from '../redux/actions/setSelectedKanji';



interface kanjiPlaygroundListProps {
    data: Kanji[]
}

const KanjiPlaygroundList = (props: kanjiPlaygroundListProps) => {

    const kanjiPlaygroundList = useColorScheme() == 'light' ? kanjiPlaygroundList_light : kanjiPlaygroundList_dark;


    const selectedKanji = useSelector(state => state.kanjiReducer.selectedKanji);
    const dispatch = useDispatch();

    return (
        <View style={kanjiPlaygroundList.container}>
            <TextInput style={kanjiPlaygroundList.input}
                placeholder="Search kanji here"></TextInput>
            <FlatList 
                numColumns={4}
                data={props.data}
                renderItem={
                    ({ item }) => (
                        <TouchableOpacity onPress={() => { dispatch(setSelectedKanji(item)); console.log(item) }} style={kanjiPlaygroundList.entry}>
                            <Text style={kanjiPlaygroundList.entryText}>{item.character}</Text>
                        </TouchableOpacity>
                    )
                }
                keyExtractor={item => `basicListEntry-${item}`}>
            </FlatList>
        </View>
    );
};

const kanjiPlaygroundList_light = StyleSheet.create({
    container: {
        width: '70%',
        height: '30%',
        margin: 5,
    },
    entry: {
        padding: 5,
        margin: 1,
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#e6e6e6',
    },
    entryText: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
    },
    input: {
        height: "20%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "75%",
        backgroundColor: "white",
        borderRadius: 20,
        alignSelf: "center"
    },
})

const kanjiPlaygroundList_dark = StyleSheet.create({
    container: {
        width: '70%',
        height: '30%',
        margin: 5,
    },
    entry: {
        padding: 5,
        margin: 1,
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#1c1c1c',
    },
    entryText: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
        color: "white"
    },
    input: {
        height: "20%",
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: "75%",
        backgroundColor: "white",
        borderRadius: 20,
        alignSelf: "center"
    },
})

export default KanjiPlaygroundList;
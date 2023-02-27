import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { learnihonColors } from '../assets/colors';
import { Kanji } from '../model/kanji';
import { setSelectedKanji } from '../redux/actions/setSelectedKanji';
import { searchKanjis } from '../redux/thunks/searchKanjis';




const KanjiPlaygroundList = () => {

    const kanjiPlaygroundListStyle = useColorScheme() == 'light' ? kanjiPlaygroundListStyle_light : kanjiPlaygroundListStyle_dark;
    const [search, setSearch] = React.useState("");

    const [loadingList, setLoadingList] = useState(false);
    const searchResult: Kanji[] = useSelector(state => state.kanjiReducer.playgroundList);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(searchResult);
    }, [searchResult])

    return (
        <View style={kanjiPlaygroundListStyle.container}>
            <TextInput style={kanjiPlaygroundListStyle.input}
                placeholder="Search kanji here"
                placeholderTextColor="gray"
                value={search}
                onChangeText={setSearch}
                onBlur={async () => {
                    setLoadingList(true);
                    await (await searchKanjis(search.toLowerCase()))(dispatch);
                    setLoadingList(false);
                }}
            ></TextInput>
            {loadingList ? (
                <ActivityIndicator size="large" color={learnihonColors.main} />
            ) : (
                <FlatList
                    numColumns={4}
                    data={searchResult}
                    renderItem={
                        ({ item }) => (
                            <TouchableOpacity onPress={() => { dispatch(setSelectedKanji(item)) }} style={kanjiPlaygroundListStyle.entry}>
                                <Text style={kanjiPlaygroundListStyle.entryText}>{item.character}</Text>
                            </TouchableOpacity>
                        )
                    }
                    keyExtractor={item => `basicListEntry-${item.character}`}>
                </FlatList>
            )}
        </View>
    );
};

const kanjiPlaygroundListStyle_light = StyleSheet.create({
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
        backgroundColor: learnihonColors.light_2,
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
        alignSelf: "center",
    },
})

const kanjiPlaygroundListStyle_dark = StyleSheet.create({
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
        backgroundColor: learnihonColors.dark_2,
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
        alignSelf: "center",

    },
})

export default KanjiPlaygroundList;
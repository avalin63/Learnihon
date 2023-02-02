import React from 'react';
import { FlatList, Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';


interface kanjiPlaygroundListProps {
    data: string[]
}

const KanjiPlaygroundList = (props: kanjiPlaygroundListProps) => {

    return (
        <View style={kanjiPlaygroundList.container}>
            <TextInput style={kanjiPlaygroundList.input}
                placeholder="Search kanji here"></TextInput>
            <FlatList 
                numColumns={4}
                data={props.data}
                renderItem={
                    ({ item }) => (
                        <View style={kanjiPlaygroundList.entry}  onStartShouldSetResponder={() => true}>
                            <Text style={kanjiPlaygroundList.entryText}>{item}</Text>
                        </View>
                    )
                }
                keyExtractor={item => `basicListEntry-${item}`}>
            </FlatList>
        </View>
    );
};

const kanjiPlaygroundList = StyleSheet.create({
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

export default KanjiPlaygroundList;
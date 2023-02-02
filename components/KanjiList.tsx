import React, { useEffect, useState } from 'react';
import { Text, SectionList, View, StyleSheet } from 'react-native';


const KanjiList = () => {

    return (
        <View style={kanjiListStyle.container}>
            <SectionList sections={[
                {
                    title: "N5",
                    data: ["aa", "aaa"]
                },
                {
                    title: "N4",
                    data: ["b", "bbb"]
                }
            ]}
                renderItem={
                    ({item}) => <Text style={kanjiListStyle.item}>{item}</Text>
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

const kanjiListStyle = StyleSheet.create({
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
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: '#e6e6e6',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

export default KanjiList;
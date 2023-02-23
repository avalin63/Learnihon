import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, TextInput, StyleSheet, View } from "react-native";
import GradeChip from './GradeChip';

interface kanjiListSeachPanelProps {
    onSelect: (item: string, isSelected: Boolean) => void;
}

const KanjiListSearchPanel = (props: kanjiListSeachPanelProps) => {

    const navigator = useNavigation();

    return (
        <View style={panelStyle.container}>
            <TextInput style={panelStyle.input} />
            <FlatList
                data={[1, 2, 3, 4, 5, 6]}
                renderItem={(item) => <GradeChip grade={item.item} onSelect={props.onSelect} />}
                horizontal={true}
                showsHorizontalScrollIndicator={false}

            >
            </FlatList>
        </View>
    );
};


const panelStyle = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200,
        backgroundColor: "white",
        borderRadius: 20,
        borderColor: "black",
        width: "80%"
    },
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: "20%"
    }
})


export default KanjiListSearchPanel;
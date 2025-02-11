import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GradeChip from './GradeChip';

interface KanjiListSeachPanelProps {
    onSelect: (item: string, isSelected: boolean) => void;
}

const GradeChipList = (props: KanjiListSeachPanelProps) => {

    return (
        <View style={panelStyle.container}>
            <FlatList
                data={[1, 2, 3, 4, 5, 6]}
                renderItem={(item) => <GradeChip grade={item.item} onSelect={props.onSelect} />}
                horizontal={true}
                showsHorizontalScrollIndicator={false}/>
        </View>
    );
};


const panelStyle = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: "10%",
        marginTop: 5,
        marginBottom: 5
    }
})


export default GradeChipList;
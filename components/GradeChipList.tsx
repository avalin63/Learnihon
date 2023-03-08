import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GradeChip from './GradeChip';

interface kanjiListSeachPanelProps {
    onSelect: (item: string, isSelected: Boolean) => void;
}

const GradeChipList = (props: kanjiListSeachPanelProps) => {

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
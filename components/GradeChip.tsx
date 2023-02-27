import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Check } from "react-native-feather";
import { learnihonColors } from '../assets/colors';

interface gradeChipProps {
    grade: number;
    onSelect: (item: string, isSelected: Boolean) => void;
}

const GradeChip = (props: gradeChipProps) => {

    const [chipStyle, setChipStyle] = useState(style);

    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        setChipStyle(isSelected ? styleSELECTED : style);
    }, [isSelected]);

    const select = () => {
        setIsSelected(!isSelected);
        props.onSelect("Grade " + props.grade, isSelected);

    }

    return (
        <TouchableOpacity style={chipStyle.chip} onPress={() => { select() }}>
            <Text style={chipStyle.text}>Grade {props.grade}</Text>
            {isSelected && (<Check style={chipStyle.icon} />)}
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    chip: {
        backgroundColor: learnihonColors.main,
        borderRadius: 10,
        margin: 5,
        justifyContent: "center",
    },
    icon: {
        color: "white",
        margin: 5
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: "18em",
        padding: 5

    },
})

const styleSELECTED = StyleSheet.create({
    chip: {
        backgroundColor: learnihonColors.main,
        borderRadius: 10,
        margin: 5,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        color: "white",
        margin: 5
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: "18em",
        padding: 5

    },
})



export default GradeChip;
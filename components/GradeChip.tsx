import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, useColorScheme, Animated  } from 'react-native';
import { Check } from "react-native-feather";

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
        props.onSelect("Grade "+props.grade, isSelected);
        setIsSelected(!isSelected);
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
        backgroundColor: "#FF5C5C",
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
        backgroundColor: "#FF5C5C",
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
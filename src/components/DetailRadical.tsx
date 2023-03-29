import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { learnihonColors } from '../assets/colors';



interface DetailRadicalProps {
    character: string,
    icon: string
}

const DetailRadical = (props: DetailRadicalProps) => {

    const detailRadicalStyle = useColorScheme() == 'light' ? detailRadicalStyle_light : detailRadicalStyle_dark;
    return (
        <View style={detailRadicalStyle.container}>
            <Text style={detailRadicalStyle.radicalText}>{props.character}</Text>
            <SvgXml
                xml={props.icon
                    .replace(/fill="#[0-9a-f]{6}"/g, `fill=${detailRadicalStyle.svg.color}`)}
                width="30"
                height="30"
                opacity={0.5}
                style={detailRadicalStyle.radicalIcon}

            />
        </View>
    );
};

const detailRadicalStyle_light = StyleSheet.create({
    container: {
        height: 30,
        width: 30,
    },
    svg: {
        color: learnihonColors.main
    },
    radicalIcon: {
        position: "absolute"
    },
    radicalText: {
        fontWeight: "bold",
        textAlign: "center",
        width: 30,
        height: 30,
        fontSize: 25
    },
})

const detailRadicalStyle_dark = StyleSheet.create({
    container: {
        height: 30,
        width: 30,
    },
    svg: {
        color: learnihonColors.main
    },
    radicalIcon: {
        position: "absolute"
    },
    radicalText: {
        fontWeight: "bold",
        textAlign: "center",
        width: 30,
        height: 30,
        fontSize: 25,
        color: "white"
    },
})

export default DetailRadical;
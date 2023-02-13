import React from 'react';
import { FlatList, StyleSheet, Text, useColorScheme, View } from 'react-native';



interface detailExamplesProps {
    data: { japanese: string, english: string }[]
}

const DetailExamples = (props: detailExamplesProps) => {

    const detailExamplesStyle = useColorScheme() == 'light' ? detailExamplesStyle_light : detailExamplesStyle_dark;

    return (
        <View style={detailExamplesStyle.container}>
            <FlatList data={props.data} keyExtractor={item => item.japanese + item.english}
                renderItem={
                    ({ item }) =>
                        <View style={detailExamplesStyle.cellContainer} onStartShouldSetResponder={() => true}>
                            <Text style={detailExamplesStyle.textJapanese}>{item.japanese}</Text>
                            <Text style={detailExamplesStyle.textEnglish}>{item.english}</Text>
                        </View>
                }>
            </FlatList>
        </View>
    );
};

const detailExamplesStyle_light = StyleSheet.create({
    container: {
        width: '100%',
        paddingBottom: 50,
    },
    cellContainer: {
        flex: 1,
        flexDirection: "row"
    },
    textJapanese: {
        width: "50%"
    },
    textEnglish: {
        textAlign: "right",
        width: "50%"
    }
})

const detailExamplesStyle_dark = StyleSheet.create({
    container: {
        width: '100%',
        paddingBottom: 50,
    },
    cellContainer: {
        flex: 1,
        flexDirection: "row"
    },
    textJapanese: {
        width: "50%",
        color: "white"
    },
    textEnglish: {
        textAlign: "right",
        width: "50%",
        color: "white"
    }
})

export default DetailExamples;
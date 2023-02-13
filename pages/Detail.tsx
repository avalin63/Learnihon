import React from 'react';
import { Text, View, StyleSheet, useColorScheme } from 'react-native';
import KanjiListCell from '../components/KanjiListCell';
import { Kanji } from '../model/kanji';


const Detail = ({route}) => {
    const kanji = route.params.kanji;
    const detailStyle = useColorScheme() == 'light' ? detailStyle_light : detailStyle_dark;


    return (
        <View style={detailStyle.container}>
            <KanjiListCell kanji={kanji}/>
        </View>
    );
};


const detailStyle_light = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#e4e4e4"
    }
})


const detailStyle_dark = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3c3c3c',
    },
});

export default Detail;
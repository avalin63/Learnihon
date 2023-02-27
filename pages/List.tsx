import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { learnihonColors } from '../assets/colors';
import KanjiList from '../components/KanjiList';


const List = () => {
    
    const listStyle = useColorScheme() == 'light' ? listStyle_light : listStyle_dark;

    return (
        <View style={listStyle.container}>
            <KanjiList/>
        </View>
    );
};


const listStyle_light = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: learnihonColors.light,
    }
})


const listStyle_dark = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: learnihonColors.dark,
    },
});

export default List;
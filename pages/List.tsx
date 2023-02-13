import React  from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
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
        backgroundColor: "#f5f5f5"
    }
})


const listStyle_dark = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B2B2B',
    },
});

export default List;
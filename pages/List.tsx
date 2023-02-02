import React  from 'react';
import { View, StyleSheet } from 'react-native';
import KanjiList from '../components/KanjiList';


const List = () => {

    return (
        <View style={listStyle.container}>
            <KanjiList/>
        </View>
    );
};

const listStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f5f5f4"
    }
})

export default List;
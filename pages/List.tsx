import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import KanjiCard from '../components/KanjiCard';


const List = () => {

    return (
        <View style={listStyle.container}>
            <Text>Some list</Text>
        </View>
    );
};

const listStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default List;
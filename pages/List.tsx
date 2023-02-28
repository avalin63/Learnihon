import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { learnihonColors } from '../assets/colors';
import KanjiList from '../components/KanjiList';
import LearnihonPage from './LearnihonPage';


const List = () => {
    return (
        <LearnihonPage>
            <KanjiList/>
        </LearnihonPage>
    );
};
export default List;
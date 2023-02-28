import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { learnihonColors } from '../assets/colors';
import DrawingCanva from '../components/DrawingCanva';
import KanjiPlaygroundList from '../components/KanjiPlaygroundList';
import LearnihonPage from './LearnihonPage';


const Playground = () => {
    return (
        <LearnihonPage>
            <KanjiPlaygroundList/>
            <DrawingCanva/>
        </LearnihonPage>
    );
};
export default Playground; 
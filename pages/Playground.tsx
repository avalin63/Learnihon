import React from 'react';
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
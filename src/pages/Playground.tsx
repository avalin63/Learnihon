import React from 'react';
import DrawingCanvas from '../components/DrawingCanvas';
import KanjiPlaygroundList from '../components/KanjiPlaygroundList';
import LearnihonPage from './LearnihonPage';


const Playground = () => {
    return (
        <LearnihonPage>
            <KanjiPlaygroundList/>
            <DrawingCanvas/>
        </LearnihonPage>
    );
};
export default Playground; 
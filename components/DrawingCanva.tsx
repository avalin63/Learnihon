import React, {useEffect, useRef, useState }  from 'react';
import { SketchCanvas, SketchCanvasRef } from 'rn-perfect-sketch-canvas';
import { StyleSheet, Button, View, Text } from 'react-native';
import { SvgUri } from 'react-native-svg';
import Slider  from '@react-native-community/slider'

import { useSelector } from 'react-redux';
import { Kanji, KanjiMapper } from '../model/kanji';

type DrawingCanvaProps = {
    backgroundImage: string;
} 

const DrawingCanva = (props: DrawingCanvaProps) => {

    const canvasRef = useRef<SketchCanvasRef>(null);
    const [strokeWidth, setStroke] = useState(5);
    const [isCanvasReady, setIsCanvasReady] = useState(false);

    const selectedKanji = KanjiMapper.SerializedObjectToKanji(useSelector(state => state.kanjiReducer.selectedKanji));


    useEffect(() => {
        if (canvasRef.current) {
            setIsCanvasReady(true);
        }
    }, [canvasRef.current]);


    return (
        <View style={styles.container}>
            {selectedKanji && (<SvgUri
                width="75%"
                height="75%"
                uri={selectedKanji.image}
                style={styles.back}
                opacity={0.1}
            />)}
            <SketchCanvas
                ref={canvasRef}
                strokeColor={'black'}
                strokeWidth={strokeWidth}
                containerStyle={styles.canvas}
            />
            <Slider
                style={styles.slider}
                onValueChange={(val) => setStroke(val)}
                minimumValue={5}
                maximumValue={10}
                minimumTrackTintColor={"#FF5C5C"}
            />
            {isCanvasReady && (<View style={styles.menu}>
                <Button color="#FF5C5C" onPress={canvasRef.current?.reset} title="Reset" />
                <Button color="#FF5C5C" onPress={canvasRef.current?.undo} title="Undo" />
            </View>)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
    back: {
        alignSelf: "center",
        width: "75%",
        height: "75%",
        position: "absolute"
    },
    canvas: {
        alignSelf: "center",
        height: "75%",
        width: "75%",
        borderWidth: 2,
        borderColor: "black"
    },
    menu: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    slider: {
        width: "75%",
        alignSelf: "center",
    }
});

export default DrawingCanva;

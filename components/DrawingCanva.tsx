import React, {useEffect, useRef, useState }  from 'react';
import { SketchCanvas, SketchCanvasRef } from 'rn-perfect-sketch-canvas';
import { StyleSheet, Button, View, Text, useColorScheme } from 'react-native';
import { SvgXml } from 'react-native-svg';
import Slider  from '@react-native-community/slider'

import { useSelector } from 'react-redux';
import { Kanji, KanjiMapper } from '../model/kanji';

type DrawingCanvaProps = {
    backgroundImage: string;
} 

const DrawingCanva = (props: DrawingCanvaProps) => {

    const style = useColorScheme() == 'light' ? style_light : style_dark;

    const canvasRef = useRef<SketchCanvasRef>(null);
    const [strokeWidth, setStroke] = useState(5);
    const [isCanvasReady, setIsCanvasReady] = useState(false);
    const [imgXml, setImgXml] = useState('<svg></svg>');

    const selectedKanji = KanjiMapper.SerializedObjectToKanji(useSelector(state => state.kanjiReducer.selectedKanji));


    useEffect(() => {
        if (canvasRef.current) {
            fetchXml();
            setIsCanvasReady(true);
        }
    }, [canvasRef.current]);

    const fetchXml = async () => {
        const xml = await (await fetch(selectedKanji.image)).text();
        setImgXml(xml);
    }


    return (
        <View style={style.container}>
            {selectedKanji && (
                 <SvgXml
                    xml={imgXml
                        .replace(/fill="#[0-9a-f]{6}"/g, `fill=${style.svg.color}`)}
                    width="75%"
                    height="75%"
                    opacity={0.1}
                    style={style.back}
                />)}
            <SketchCanvas
                ref={canvasRef}
                strokeColor={style.canvas.strokeColor}
                strokeWidth={strokeWidth}
                containerStyle={style.canvas}
            />
            <Slider
                style={style.slider}
                onValueChange={(val) => setStroke(val)}
                minimumValue={5}
                maximumValue={10}
                minimumTrackTintColor={"#FF5C5C"}
            />
            {isCanvasReady && (<View style={style.menu}>
                <Button color="#FF5C5C" onPress={canvasRef.current?.reset} title="Reset" />
                <Button color="#FF5C5C" onPress={canvasRef.current?.undo} title="Undo" />
            </View>)}
        </View>
    );
};

const style_light = StyleSheet.create({
    svg: {
      color: "black"  
    },
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
        borderColor: "black",
        strokeColor: "black"
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

const style_dark = StyleSheet.create({
    svg: {
        color: "white"
    },
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
        borderColor: "white",
        strokeColor: "white"

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

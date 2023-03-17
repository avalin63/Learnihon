import Slider from '@react-native-community/slider';
import React, { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, TouchableOpacity, useColorScheme, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { SketchCanvas, SketchCanvasRef } from 'rn-perfect-sketch-canvas';

import { useSelector } from 'react-redux';
import { Kanji } from '../model/kanji';
import { KanjiMapper } from '../model/kanjiMapper';

import { Eye, EyeOff } from "react-native-feather";
import { learnihonColors } from '../assets/colors';

const DrawingCanva = () => {

    const style = useColorScheme()  == 'light' ? style_light : style_dark;

    const canvasRef = useRef<SketchCanvasRef>(null);
    const [strokeWidth, setStroke] = useState(5);
    const [isCanvasReady, setIsCanvasReady] = useState(false);
    const [imgXml, setImgXml] = useState('<svg></svg>');
    const selectedKanji = KanjiMapper.SerializedObjectToKanji(useSelector(state => state.kanjiReducer.selectedKanji));

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        fetchXml();
        if (canvasRef.current) {
            setIsCanvasReady(true);
        }
    }, [canvasRef.current, selectedKanji]);

    const fetchXml = async () => {
        if (selectedKanji instanceof Kanji) {
            const xml = await (await fetch(selectedKanji.image)).text();
            setImgXml(xml);
        }
    }

    return (
        <View style={style.container}>

            <TouchableOpacity style={style.visibility} onPress={() => setIsVisible(!isVisible)}>
                {isVisible ? (<Eye stroke={style.svg.color} opacity={0.5} />) :
                    (<EyeOff stroke={style.svg.color} opacity={0.5} />)}
            </TouchableOpacity>

            {selectedKanji && isVisible && (
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
                maximumValue={15}
                minimumTrackTintColor={learnihonColors.main}
            />
            {isCanvasReady && (<View style={style.menu}>
                <Button color={learnihonColors.main} onPress={() => {
                    canvasRef.current?.reset();
                    setStroke(strokeWidth);
                }} title="Reset" />
                <Button color={learnihonColors.main}
                    onPress={() => {
                    canvasRef.current?.undo();
                    setStroke(strokeWidth);
                }} title="Undo" />
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
    },
    visibility: {
    position: "absolute",
    right: 50,
    top: -25
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
    },
    visibility: {
        position: "absolute",
        right: 50,
        top: -25
    }
});



export default DrawingCanva;

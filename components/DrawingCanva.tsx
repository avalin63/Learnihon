import React, { useRef }  from 'react';
import { SketchCanvas, SketchCanvasRef } from 'rn-perfect-sketch-canvas';
import { StyleSheet, Button, View } from 'react-native';
import { SvgUri } from 'react-native-svg';


type DrawingCanvaProps = {
    backgroundImage: string;
}

const DrawingCanva = (props: DrawingCanvaProps) => {

    const canvasRef = useRef<SketchCanvasRef>(null);



    return (
        <View style={styles.container}>
            <SvgUri width="250"
                uri={props.backgroundImage}
                style={styles.back}
                opacity={0.1}
                />
        <SketchCanvas
                ref={canvasRef}
                strokeColor={'black'}
                strokeWidth={4}
                containerStyle={styles.canvas}
            />

            <View style={styles.menu}>
                <Button color="#FF5C5C" onPress={canvasRef.current?.reset} title="Reset" />
                <Button color="#FF5C5C" onPress={canvasRef.current?.undo} title="Undo" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        alignItems: "center"
    },
    back: {
        position: "absolute"
    },
    canvas: {
        height: 250,
        width: 250,
        borderWidth: 2,
        borderColor: "black"
    },
    menu: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    }
});

export default DrawingCanva;

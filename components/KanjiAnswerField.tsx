import React from 'react';
import { Animated, StyleSheet, TextInput } from 'react-native';
import { startAnimation, stopAnimation, animatedStyles } from '../assets/animations/answerAnimation'

interface kanjiAnswerFieldProps { 
    answer: string,
    setAnswer: React.Dispatch<React.SetStateAction<string>>
}

const KanjiAnswerField = (props: kanjiAnswerFieldProps) => {


    return (
        <Animated.View style={[animatedStyles]}>
            <TextInput
                style={answerFieldStyle.input}
                onChangeText={props.setAnswer}
                value={props.answer}
                placeholder="Answer here"
            />
        </Animated.View>
    );
};

const answerFieldStyle = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200,
        backgroundColor: "white",
        borderRadius:20
    },
})

export default KanjiAnswerField;
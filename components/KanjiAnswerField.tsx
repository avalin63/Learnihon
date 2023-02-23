import React from 'react';
import { Animated, StyleSheet, TextInput } from 'react-native';
import { startAnimation, stopAnimation, animatedStyles } from '../assets/animations/answerAnimation'

const KanjiAnswerField = () => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '19516a9900mshce10de76f99976bp10f192jsn8c8d82222baa',
            'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
        }
    }

    const [answer, onChangeText] = React.useState("");

    return (
        <Animated.View style={[animatedStyles]}>
            <TextInput
                style={answerFieldStyle.input}
                onChangeText={onChangeText}
                value={answer}
                onFocus={startAnimation}
                onBlur={stopAnimation}
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
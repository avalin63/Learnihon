import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface KanjiAnswerFieldProps { 
    answer: string,
    setAnswer: React.Dispatch<React.SetStateAction<string>>
}

const KanjiAnswerField = (props: KanjiAnswerFieldProps) => {


    return (
        <View>
            <TextInput
                style={answerFieldStyle.input}
                onChangeText={props.setAnswer}
                value={props.answer}
                placeholder="Answer here"
                returnKeyType="send"
            />
        </View>
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
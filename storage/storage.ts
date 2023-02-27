import AsyncStorage from '@react-native-async-storage/async-storage';
import { KanjiGuess } from '../model/kanjiGuess'

export const retrieveGuess = async (kanji: string) => {
    try {
        const value = await AsyncStorage.getItem(kanji);
        if (value === null) {
            return null;
        }
        const guess: KanjiGuess = await JSON.parse(value!)
        return guess;
    } catch (error) {
        console.log(error)
        return null;
    }
};

export const storeGuess = async (kanji: string, wasRight: boolean) => {

    const guess = await retrieveGuess(kanji)
    if (guess === null) {
        try {
            await AsyncStorage.setItem(
                kanji,
                JSON.stringify({ totalGuesses: 1, totalCorrectGuesses: wasRight ? 1 : 0 }),
            );
        } catch (error) {
            console.log(error)
        }
    } else {
        try {
            await AsyncStorage.setItem(
                kanji,
                JSON.stringify({
                    totalGuesses: guess.totalGuesses + 1,
                    totalCorrectGuesses: wasRight ? guess.totalCorrectGuesses + 1 : guess.totalCorrectGuesses
                }),
            );
        } catch (error) {
            console.log(error)
        }
    }
};

import { learnihonColors } from "../assets/colors";

export type KanjiGuess = {
    totalGuesses: number,
    totalCorrectGuesses: number
}

export const calcCorrectGuessesRatio = (guess: KanjiGuess): number => {
    return (guess.totalCorrectGuesses / guess.totalGuesses) * 100;
}

export const getColorByRatio = (ratio: number): string => {
    return ratio <= 33 ? learnihonColors.wrong : ratio <= 66 ? learnihonColors.warning : learnihonColors.correct;
}
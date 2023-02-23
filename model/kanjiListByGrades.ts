import { Kanji } from "./kanji"

export type KanjiListByGrade = {
    "Grade 1": Kanji[],
    "Grade 2": Kanji[],
    "Grade 3": Kanji[],
    "Grade 4": Kanji[],
    "Grade 5": Kanji[],
    "Grade 6": Kanji[],
}[]

export const initKanjiListByGrade = (): KanjiListByGrade => {
    return {
        "Grade 1": [],
        "Grade 2": [],
        "Grade 3": [],
        "Grade 4": [],
        "Grade 5": [],
        "Grade 6": [],
    }
}
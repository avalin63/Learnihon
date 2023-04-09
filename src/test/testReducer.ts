import { Kanji } from "../model/kanji";
import { initKanjiListByGrade } from "../model/kanjiListByGrades";
import kanjiReducer from "../redux/reducers/kanjiReducer";


const initialState = {
    kanjis: initKanjiListByGrade(),
    selectedKanji: null,
    playgroundList: [
        new Kanji("訪", "visit", "", "", 11, "ホウ", "おとずれる", { character: "", position: "" }, [{
            english: "visit", japanese: "訪ねる（たずねる）"
        }]),
        new Kanji("雨", "rain", "", "", 8, "ウ", "あめ、あま", { character: "", position: "" }, []),
    ]
}

export default (state = initialState, action) => {
    return kanjiReducer(initialState, action);
}
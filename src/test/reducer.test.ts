import { Kanji } from "../model/kanji";
import { initKanjiListByGrade, KanjiListByGrade } from "../model/kanjiListByGrades";
import kanjiReducer from "../redux/reducers/kanjiReducer";

describe('test reducer', () => {

    let initialState = {
        kanjis: initKanjiListByGrade(),
        selectedKanji: null,
        playgroundList: []
    }

    it('should return initial state', () => {
        expect(kanjiReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle SET_SELECTED_KANJI', () => {
        const kanji = new Kanji("訪", "visit", "", "", 11, "ホウ", "おとずれる", { character: "", position: "" }, [{
            english: "visit", japanese: "訪ねる（たずねる）"
        }]);
        expect(
            kanjiReducer(initialState, {
                type: 'SET_SELECTED_KANJI',
                payload: kanji
            })
        ).toEqual({
            kanjis: initKanjiListByGrade(),
            selectedKanji: kanji,
            playgroundList: []
        });
    });

    it('should handle SET_KANJIS', () => {
        const kanjis: KanjiListByGrade = initKanjiListByGrade();
        kanjis["Grade 1"] = [
            new Kanji("訪", "visit", "", "", 11, "ホウ", "おとずれる", { character: "", position: "" }, [{
                english: "visit", japanese: "訪ねる（たずねる）"
            }]),
            new Kanji("訪", "visit", "", "", 11, "ホウ", "おとずれる", { character: "", position: "" }, [{
                english: "visit", japanese: "訪ねる（たずねる）"
            }])];
        expect(
            kanjiReducer(initialState, {
                type: 'SET_KANJIS',
                payload: kanjis
            })
        ).toEqual({
            kanjis: kanjis,
            selectedKanji: null,
            playgroundList: []
        });
    });

    it('should handle SET_PLAYGROUND_LIST', () => {
        const kanjis = [
            new Kanji("訪", "visit", "", "", 11, "ホウ", "おとずれる", { character: "", position: "" }, [{
                english: "visit", japanese: "訪ねる（たずねる）"
            }]),
            new Kanji("訪", "visit", "", "", 11, "ホウ", "おとずれる", { character: "", position: "" }, [{
                english: "visit", japanese: "訪ねる（たずねる）"
            }])];
        expect(
            kanjiReducer(initialState, {
                type: 'SET_PLAYGROUND_LIST',
                payload: kanjis
            })
        ).toEqual({
            kanjis: initKanjiListByGrade(),
            selectedKanji: null,
            playgroundList: kanjis
        });
    });

});
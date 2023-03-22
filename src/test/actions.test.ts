import { Kanji } from "../model/kanji";
import { setSelectedKanji } from "../redux/actions/setSelectedKanji";
import { initKanjiListByGrade, KanjiListByGrade } from "../model/kanjiListByGrades";
import { setKanjis } from "../redux/actions/setKanjis";
import { setPlaygroundList } from "../redux/actions/setPlaygroundList";

describe("test actions", () => {
    it('should create an action with SET_SELECTED_KANJI type', () => {
        const payload = new Kanji("訪", "visit", "", "", 11, "ホウ", "おとずれる", { character: "", position: "" }, [{
            english: "visit", japanese: "訪ねる（たずねる）"
            }]);
        const expectation = {
            type: 'SET_SELECTED_KANJI',
            payload: payload.toObject(),
        };

        expect(setSelectedKanji(payload)).toEqual(expectation);
    });

    it('should create an action with SET_KANJIS type', () => {
        const payload: KanjiListByGrade = initKanjiListByGrade();
        const expectation = {
            type: 'SET_KANJIS',
            payload: payload,
        };

        expect(setKanjis(payload)).toEqual(expectation);
    });

    it('should create an action with SET_PLAYGROUND_LIST type', () => {
        const payload: Kanji[] = [
            new Kanji("訪", "visit", "", "", 11, "ホウ", "おとずれる", { character: "", position: "" }, [{
                english: "visit", japanese: "訪ねる（たずねる）"
            }]),
            new Kanji("訪", "visit", "", "", 11, "ホウ", "おとずれる", { character: "", position: "" }, [{
                english: "visit", japanese: "訪ねる（たずねる）"
            }])
        ];
        const expectation = {
            type: 'SET_PLAYGROUND_LIST',
            payload: payload,
        };

        expect(setPlaygroundList(payload)).toEqual(expectation);
    });

});
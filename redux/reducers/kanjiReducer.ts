import { initKanjiListByGrade } from '../../model/kanjiListByGrades';
import * as c from '../constants';

const initialState = {
    kanjis: initKanjiListByGrade(),
    selectedKanji: null,
}

// @ts-ignore
export default function kanjiReducer(state = initialState, action) {
    switch (action.type) {
        case c.SET_KANJIS:
            // @ts-ignore
            return { ...state, kanjis: action.payload };
        case c.SET_SELECTED_KANJI:
            // @ts-ignore
            return { ...state, selectedKanji: action.payload };
        default:
            return state;
    }
}


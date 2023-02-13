import * as c from '../constants';

const initialState = {
    kanjis: [],
    selectedKanji: null
}

// @ts-ignore
export default function kanjiReducer(state = initialState, action) {
    switch (action.type) {
        case c.FETCH_KANJIS:
            // @ts-ignore
            return { ...state, kanjis: state.kanjis.push(action.payload) };
        case c.SET_SELECTED_KANJI:
            // @ts-ignore
            console.log("select" + action.payload.meaning);
            return { ...state, selectedKanji: action.payload };
        default:
            return state;
    }
}


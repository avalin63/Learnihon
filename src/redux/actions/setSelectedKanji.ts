import { Kanji } from '../../model/kanji';
import { SET_SELECTED_KANJI } from '../constants';

export const setSelectedKanji = (kanji: Kanji) => {
    return {
        type: SET_SELECTED_KANJI,
        payload: kanji.toObject(),
    };
}
import { Kanji } from '../../model/kanji';
import { SET_KANJIS } from '../constants';
import { KanjiListByGrade } from '../../model/kanjiListByGrades';

export const setKanjis = (kanjis: kanjiListByGrade) => {
    return {
        type: SET_KANJIS,
        payload: kanjis,
    };
}
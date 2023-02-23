import { SET_KANJIS } from '../constants';
import { KanjiListByGrade } from '../../model/kanjiListByGrades';

export const setKanjis = (kanjis: KanjiListByGrade) => {
    return {
        type: SET_KANJIS,
        payload: kanjis,
    };
}
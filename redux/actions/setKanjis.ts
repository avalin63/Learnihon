import { KanjiListByGrade } from '../../model/kanjiListByGrades';
import { SET_KANJIS } from '../constants';

export const setKanjis = (kanjis: KanjiListByGrade) => {
    return {
        type: SET_KANJIS,
        payload: kanjis,
    };
}
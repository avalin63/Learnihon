import { Kanji } from '../../model/kanji';
import { FETCH_KANJIS } from '../constants';

export const fetchKanjis = (kanjis: Kanji[]) => {
    return {
        type: FETCH_KANJIS,
        payload: kanjis,
    };
}
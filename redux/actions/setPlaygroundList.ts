import { Kanji } from '../../model/kanji';
import { SET_PLAYGROUND_LIST } from '../constants';

export const setPlaygroundList = (kanjis: Kanji[]) => {
    console.log("SET");
    return {
        type: SET_PLAYGROUND_LIST,
        payload: kanjis,
    };
}
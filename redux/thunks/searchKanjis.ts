import { useDispatch } from 'react-redux';
import { Kanji } from '../../model/kanji';
import { initKanjiListByGrade, KanjiListByGrade } from '../../model/kanjiListByGrades';
import { KanjiMapper } from '../../model/kanjiMapper';
import { setPlaygroundList } from '../actions/setPlaygroundList';

// @ts-ignore
export const searchKanjis = async (search: string) => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '19516a9900mshce10de76f99976bp10f192jsn8c8d82222baa',
            'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
        }
    };

    return async (dispatch) => {
        const fetchAll = async () => {
            const data = await fetch(`https://kanjialive-api.p.rapidapi.com/api/public/search/${search}`, options)
                .then(response => response.json());

            const fetchPromises = data.map(it =>
                fetch(`https://kanjialive-api.p.rapidapi.com/api/public/kanji/${it.kanji.character}`, options)
                    .then(detail => detail.json())
            );

            const kanjis = await Promise.all(fetchPromises)
                .then(details => details.map(detail_data => KanjiMapper.ApiJsonToKanji(detail_data)));

            return kanjis;
        };

        return fetchAll()
            .then(kanjis => dispatch(setPlaygroundList(kanjis)))
            .catch(err => console.log("ERR : " + err));


    };
} 
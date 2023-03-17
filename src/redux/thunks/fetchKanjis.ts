import { initKanjiListByGrade, KanjiListByGrade } from '../../model/kanjiListByGrades';
import { KanjiMapper } from '../../model/kanjiMapper';
import { setKanjis } from '../actions/setKanjis';

// @ts-ignore
export const fetchKanjis = async () => {

    const kanjis: KanjiListByGrade = initKanjiListByGrade();

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '19516a9900mshce10de76f99976bp10f192jsn8c8d82222baa',
            'X-RapidAPI-Host': 'kanjialive-api.p.rapidapi.com'
        }
    };

    const fetchData = async (grade: string) => {
        return fetch(`https://kanjialive-api.p.rapidapi.com/api/public/search/advanced/?grade=${grade}`, options)
    }
    return async (dispatch) => {
        const fetchAll = async () => {
            for (let i = 1; i <= 6; i++) {

                const data = await fetchData(i.toString()).then(response => response.json());

                const fetchPromises = data.map(it =>
                    fetch(`https://kanjialive-api.p.rapidapi.com/api/public/kanji/${it.kanji.character}`, options)
                        .then(detail => detail.json())
                );

                kanjis['Grade ' + i] = await Promise.all(fetchPromises)
                    .then(details => details.map(detail_data => KanjiMapper.ApiJsonToKanji(detail_data)));
            }
        }
        return fetchAll().then(_ => dispatch(setKanjis(kanjis)))
                  .catch((err) => console.log("ERR : " + err));

    };  
} 

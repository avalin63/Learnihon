import { Kanji } from "./kanji";

export class KanjiMapper {

    static ApiJsonToKanji(json: any): Kanji {
        var radical: { character: string, position: string } = {
            character: json.radical.character,
            position: json.radical.position.icon
        };

        var examples: { japanese: string, english: string }[] = [];

        json.examples.forEach(
            (entry) => {
                examples.push({
                    japanese: entry.japanese,
                    english: entry.meaning.english
                })
            }
        )

        return new Kanji(json.kanji.character, json.kanji.meaning.english, json.kanji.video.poster,
            json.kanji.video.mp4, json.kanji.strokes.count, json.kanji.onyomi.katakana, json.kanji.kunyomi.hiragana,
            radical, examples);
    }

    // @ts-ignore
    static SerializedObjectToKanji(obj): Kanji | null {
        if (!obj) return null;
        return new Kanji(obj.character, obj.meaning, obj.image, obj.animation, obj.strokes, obj.onyomi, obj.kunyomi, obj.radical, obj.examples);
    }

}
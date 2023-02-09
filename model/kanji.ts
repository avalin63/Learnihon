export class Kanji {
    private _character: string;
    private _meaning: string;
    private _image: string;

    constructor(character: string, meaning: string, image: string) {
        this._character = character;
        this._meaning = meaning;
        this._image = image;
    }

    get character(): string {
        return this._character;
    }

    get meaning(): string {
        return this._meaning;
    }

    get image(): string {
        return this._image;
    }

    toObject() {
        return {
            character: this._character,
            meaning: this._meaning,
            image: this._image
        };
    }

}

export class KanjiMapper {

    static ApiJsonToKanji(json: any): Kanji {
        console.log(typeof json)
        return new Kanji(json.kanji.character, json.kanji.meaning.english, json.kanji.video.poster);
    }

    // @ts-ignore
    static SerializedObjectToKanji(obj): Kanji | null {
        if (!obj) return null;
        return new Kanji(obj.character, obj.meaning, obj.image);
    }

}



export class Kanji {
    private _character: string;
    private _meaning: string;
    private _image: string;
    private _animation: string;
    private _strokes: number;
    private _onyomi: string;
    private _kunyomi: string;
    private _radical: {
        character: string,
        position: string
    }
    private _examples: {
        japanese: string,
        english: string
    }[]

    constructor(character: string, meaning: string, image: string,
                animation: string, strokes: number, onyomi: string,
                kunyomi: string,
                radical: { character: string, position: string },
                examples: { japanese: string, english: string }[]
    ) {
        this._character = character;
        this._meaning = meaning;
        this._image = image;
        this._animation = animation;
        this._strokes = strokes;
        this._onyomi = onyomi;
        this._kunyomi = kunyomi;
        this._radical = radical;
        this._examples = examples;
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

    get animation(): string {
        return this._animation;
    }

    get strokes(): number {
        return this._strokes;
    }

    get onyomi(): string {
        return this._onyomi;
    }

    get kunyomi(): string {
        return this._kunyomi;
    }

    get radical(): { character: string, position: string } {
        return this._radical;
    }

    get examples(): { japanese: string, english: string }[] {
        return this._examples;
    }

    toObject() {
        return {
            character: this._character,
            meaning: this._meaning,
            image: this._image,
            animation: this._animation,
            strokes: this._strokes,
            onyomi: this._onyomi,
            kunyomi: this.kunyomi,
            radical: this._radical,
            examples: this._examples
        };
    }

}



export class Kanji {
  private _symbol: string;
  private _meaning: string;
  private _longitude: number;

  constructor(name: string, latitude: string, longitude: number) {
      this._symbol = name;
      this._meaning = latitude;
      this._longitude = longitude;
  }

}

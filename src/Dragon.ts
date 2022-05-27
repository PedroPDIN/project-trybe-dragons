import Monster from './Monster';

export default class Dragon extends Monster {
  protected _livePoint: number;

  constructor() {
    super();
    this._livePoint = 999;
  }

  public get livePoint(): number { return this._livePoint; }
}
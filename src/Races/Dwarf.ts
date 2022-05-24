import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoint: number;
  static _counter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoint = 80;
  }

  get maxLifePoints(): number {
    return this._maxLifePoint;
  }

  static createdRacesInstances(): number {
    this._counter += 1;
    return this._counter;
  }
}
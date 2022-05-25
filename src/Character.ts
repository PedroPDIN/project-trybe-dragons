import Archetype, { Mage } from './Archetypes';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: number;

  constructor(name: string) {
    this._race = new Elf(name, 10),
    this._archetype = new Mage(name),
    this._maxLifePoints = new Elf(name, 10).maxLifePoints / 2,
    this._lifePoints = new Elf(name, 10).maxLifePoints,
    this._strength = this.getRandom(1, 10),
    this._defense = this.getRandom(1, 10),
    this._dexterity = new Elf(name, 10).dexterity,
    this._energy = { new }
  }

  // link da logica para gerar um numero randômico
  // http://devfuria.com.br/javascript/gerar-numero-randomico-entre-2-numeros-quaisquer/
  private getRandom = (min: number, max: number) => {
   return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
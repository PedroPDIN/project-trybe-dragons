import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._race = new Elf(name, 10);
    this._archetype = new Mage(name);
    this._maxLifePoints = Math.floor(this._race.maxLifePoints / 2);
    this._lifePoints = this._race.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = this._race.dexterity;
    this._energy = { 
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get race(): Race { return this._race; }
  public get archetype(): Archetype { return this._archetype; }
  public get lifePoints(): number { return this._lifePoints; }
  public get strength(): number { return this._strength; }
  public get defense(): number { return this._defense; }
  public get dexterity(): number { return this._dexterity; }
  public get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  public receiveDamage(attackPoint: number) {
    const damage = attackPoint - this._defense;
    
    if (damage > 0) this._lifePoints -= damage;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    
    return this.lifePoints;
  }
  
  public attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }
  
  public levelUp(): void {
    const valueInclement = getRandomInt(1, 10);

    this._maxLifePoints += valueInclement;
    this._strength += valueInclement;
    this._dexterity += valueInclement;
    this._defense += valueInclement;
    this._energy.amount = 10;

    if (this._maxLifePoints > this._lifePoints) {
      this._maxLifePoints = this._lifePoints;
      this._lifePoints = this._maxLifePoints;
    }
  }

  special(enemy: Fighter): void {
    if (this._lifePoints < 4) {
      enemy.levelUp();
    }
  }
}
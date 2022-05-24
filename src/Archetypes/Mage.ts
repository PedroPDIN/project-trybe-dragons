import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _skill: EnergyType;
  static _counterSkill = 0;

  constructor(name: string) {
    super(name);
    this._skill = 'mana';
  }

  get energyType(): EnergyType {
    return this._skill;
  }

  static createdArchetypeInstances(): number {
    this._counterSkill += 1;
    return this._counterSkill;
  }
}
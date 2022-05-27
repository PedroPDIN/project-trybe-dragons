import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  constructor(player: Fighter, private _monster: SimpleFighter[]) {
    super(player);
  }

  fight(): number {
    this._monster.forEach((monster) => {
      this.player.levelUp();
      this.player.attack(monster);

      monster.attack(this.player);
    });

    return super.fight();
  }
}
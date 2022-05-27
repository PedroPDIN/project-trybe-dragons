import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  constructor(player1: Fighter, private _player2: Fighter) {
    super(player1);
  }

  fight(): number {
    this.player.attack(this._player2);
    this._player2.attack(this.player);

    this.player.special(this._player2);
    this._player2.special(this.player);

    this.player.attack(this._player2);
    this._player2.attack(this.player);
    
    return super.fight();
  }
}
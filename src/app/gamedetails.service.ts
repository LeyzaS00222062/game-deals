import { Injectable } from '@angular/core';
import { Game } from './game.model';

@Injectable({
  providedIn: 'root'
})
export class GamedetailsService {

  gamesList=[new Game()];

  getGameDetails(){
    return this.gamesList;
  }

}

import { Injectable } from '@angular/core';
import { GamedetailsService } from './gamedetails.service';
import { Game } from './game.model';

@Injectable({
  providedIn: 'root'
})
export class GamedealService {

  constructor() { }

  selectGame(gameChosen:Game):void{
    console.log(gameChosen)
    this.currentGame = gameChosen;
  }

  isSelected(game:Game):boolean{
    return false;
  }
}

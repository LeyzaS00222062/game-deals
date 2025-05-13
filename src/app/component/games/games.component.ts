import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamedetailsService } from '../../gamedetails.service';
import { GamedealService } from '../../gamedeal.service';
import { Game, Gamedeals } from '../../game.model';
import { CheapskateApiService } from '../../cheapskate-api.service';

@Component({
  selector: 'app-games',
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  title = "Game CheapSkate"
  gameData: Game | undefined;
  errorMessage:any;

  constructor(private _cheapSkateApiService:CheapskateApiService){}

  getGameData(gameTitle:string): boolean {
    this._cheapSkateApiService.getGameData(gameTitle).subscribe(
      gameData =>{
        this.gameData=gameData;

      }
    )
    return false;
  }

}

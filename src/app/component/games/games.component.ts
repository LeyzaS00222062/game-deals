import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamedetailsService } from '../../gamedetails.service';
import { GamedealService } from '../../gamedeal.service';
import { Game } from '../../game.model';

@Component({
  selector: 'app-games',
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {

  games:any[]=[];
  private currentGame!: Game;

  @Output() onSelectedGame EventEmitter<Game>;

  constructor(private gamedetails:GamedetailsService){
    this.onSelectedGame = new EventEmitter();
  }

  

}

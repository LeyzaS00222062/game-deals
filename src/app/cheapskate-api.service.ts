import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { Game } from './game.model';

@Injectable({
  providedIn: 'root'
})
export class CheapskateApiService {

  private _cheapskateURL = "https://www.cheapshark.com/api/1.0/games?title="
  constructor(private _http:HttpClient) { }

  getGameData(gameName:string):Observable<Game>{
    return this._http.get<Game>(this._cheapskateURL+gameName)
    .pipe(
      tap(data => console.log("Gamedata/Error" + JSON.stringify(data))
      ),
      catchError(this.handleError)
    );
  }

  private handleError(err:HttpErrorResponse){
    console.log("CheapSharkApiService:" + err.message);

    return throwError(() => new Error("CheapSharkApiService:" + err.message))
  }
}

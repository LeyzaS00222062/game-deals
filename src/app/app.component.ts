import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GamesComponent } from './component/games/games.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { AboutComponent } from './component/about/about.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, GamesComponent, WishlistComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'game-deals';
}

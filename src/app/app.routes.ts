import { Routes } from '@angular/router';
import { GamesComponent } from './component/games/games.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { AboutComponent } from './component/about/about.component';


export const routes: Routes = [
    {path:'',component:GamesComponent},
    {path:'wishlist',component:WishlistComponent},
    {path:'about',component:AboutComponent},
];

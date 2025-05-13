export class Game {
    constructor(
        public gameTitle: string,
        public gameID: string,
        public cheapestSale: string
    ) {}
}

export interface Gamedeals{
    Search:gameDetails[];
    totalResults:number;
    Error:string;
}

interface gameDetails{
    Title:string;
    gameID:string;
    cheapestDealID:string;
    cheapest:string;
    thumb:string;
    Error:string;
}
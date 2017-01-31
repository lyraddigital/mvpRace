import { GameLogEntry } from './gameLog';

export class BasketballPlayer {
    id: number;
    name: string;
    bio: string;
    imagePath: string;
    cardCssClass: string;
    gameLogs: GameLogEntry[];
}
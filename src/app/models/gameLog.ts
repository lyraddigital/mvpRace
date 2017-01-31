export class GameLogEntry {
    points: number;
    rebounds: number;
    assists: number;

    constructor(points: number, rebound: number, assists: number) {
        this.points = points;
        this.rebounds = rebound;
        this.assists = assists;
    }
}
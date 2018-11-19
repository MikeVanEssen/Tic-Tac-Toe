import { AngularFireDatabase} from 'angularfire2/database';
import { Injectable } from '@angular/core';


@Injectable()
export class GameService {

  constructor(private db:AngularFireDatabase) {
  }

  addScore(player1, player2, result){
    let createScore = this.db.database.ref().push();
    createScore.set({
        player1: player1,
        player2: player2,
        result: result
    })
  }
}
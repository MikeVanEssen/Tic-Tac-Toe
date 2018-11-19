import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  playfields = []
  playedfields = []
  fieldnumberpressed : number
  gameover = false
  player = true
  player1 = []
  player2 = []
  message = ""

  constructor(private gameservice: GameService) { }

  ngOnInit() {
    this.createPlayfield(9)
  }

   createPlayfield(fields: Number){
      for (let index = 0; index < fields; index++) {
        this.playfields.push(index)
      }
  }

  fieldClick(){
    this.checkPlayer(this.fieldnumberpressed)
    this.checkGame()
  }

  checkPlayer(fieldnumber){
     if(!this.playedfields.includes(fieldnumber) && this.gameover==false){
      if(this.player){
        this.player1.push(fieldnumber)
        this.playedfields.push(this.fieldnumberpressed)
        this.player = !this.player;
      }
      else if(!this.player){
        this.player2.push(fieldnumber)
        this.playedfields.push(this.fieldnumberpressed)
        this.player = !this.player; 
      }
     } else {
       console.log("Kan niet");
     }
  }

  receiveMessage(event){
    this.fieldnumberpressed = parseInt(event)
  }

  checkGame(){
    let winningOptions = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]

    winningOptions.forEach(element => {
      if(this.checkWinner(element,this.player1)){
        this.gameover = true
        this.message = "Player 1 wins"
        this.gameservice.addScore(this.player1,this.player2,"Player 1 Wins");
      } else if (this.checkWinner(element,this.player2)) {
        this.gameover = true
        this.message = "Player 2 wins"
        this.gameservice.addScore(this.player1,this.player2,"Player 2 Wins");
      }
    }); 
    if(this.playedfields.length == this.playfields.length && this.gameover == false){
      this.message = "Draw"
      this.gameover = true;
      this.gameservice.addScore(this.player1,this.player2,"Draw");
    }
  }

  checkWinner(winOptions, playerArray){ 
    for(var i = 0; i < winOptions.length; i++){
       if(playerArray.indexOf(winOptions[i]) == -1) return false;
    }
    return true;
  }
  
  resetGame(){
    this.gameover = false
    this.player1 = []
    this.player2 = []
    this.playedfields = []
    this.player = true
  }
}

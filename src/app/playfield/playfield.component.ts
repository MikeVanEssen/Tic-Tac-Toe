import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playfield',
  templateUrl: './playfield.component.html',
  styleUrls: ['./playfield.component.css']
})
export class PlayfieldComponent implements OnInit {

  @Input() fieldplace: number;
  @Input() player : boolean
  @Input() gameover : boolean
  selected : string

  @Output() messageEvent = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
    this.selected = ""
  }

  selectField(){
    if(!this.makeBoolean(this.gameover)){
      if(this.makeBoolean(this.player) && this.selected == ""){
        this.selected = "X"
      } else if (!this.makeBoolean(this.player) && this.selected == ""){
        this.selected = "O"
      }
      this.messageEvent.emit(this.fieldplace) 
    }    
  }

  makeBoolean(value){
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    return value;
  };

}

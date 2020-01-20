import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
@Output() Start = new EventEmitter<number>();
@Output() Stop = new EventEmitter();
interval: any;
current = -1;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    // this.Start.emit(++this.current);
    this.interval = setInterval(() => {
      this.current++;
      this.Start.emit(this.current);
    }, 1000);
  }

  onStop() {
    if (this.interval){
      clearInterval(this.interval);
    }
  }
}

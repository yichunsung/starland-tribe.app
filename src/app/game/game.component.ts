import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as PIXI from 'pixi.js';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements AfterViewInit {

  @ViewChild('gameCvs', {static: false}) gameCvs?: ElementRef;

  public context?: CanvasRenderingContext2D;

  constructor() { }

  ngAfterViewInit(): void {
    this.context = this.gameCvs?.nativeElement.getContext('2d');
  }

  check() {
    console.log(this.gameCvs);
    console.log(this.context);
  }

}

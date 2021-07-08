import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as PIXI from 'pixi.js';

// interfaces
import { PixiDefaultOption } from './interfaces/options.interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements AfterViewInit {

  @ViewChild('gameCvs', {static: false}) gameCvs?: ElementRef;

  private defaultOption: PixiDefaultOption = {
    width: 1280,
    height: 720,
    antialias: true,
    transparent: false,
    backgroundColor: 0x000000
  };

  public context?: CanvasRenderingContext2D;

  public gameApp: any;

  constructor() { }

  ngAfterViewInit(): void {
    // this.context = this.gameCvs?.nativeElement.getContext('2d');
    this.detectWindow();
  }

  detectWindow(): void {
    this.defaultOption.width = window.innerWidth;
    this.defaultOption.height = window.innerHeight;
    this.setup()
  }

  setup(): void {
    this.gameApp = new PIXI.Application({
      view: this.gameCvs?.nativeElement,
      ...this.defaultOption
    });
    this.gameApp.renderer.autoResize = true; // 確保寬度及高度正確而使用的屬性
    this.gameApp.renderer.resize(window.innerWidth, window.innerHeight);

    const newContainer = new PIXI.Container();
    this.gameApp.stage.addChild(newContainer);
    // const PIXIText = new PIXI.Text('這是一段話');
    const role = PIXI.Sprite.from('https://cdnb.artstation.com/p/assets/images/images/000/741/959/large/tyler-ryan-recon016.jpg?1474548194');
    role.anchor.set(0.3);
    role.x = this.gameApp.screen.width / 3;
    role.y = this.gameApp.screen.height / 2;
    newContainer.addChild(role);
  }

  check(): void {
    console.log(this.gameCvs);
    console.log(this.context);
  }

}

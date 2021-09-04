import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as PIXI from 'pixi.js';
import * as PIXIEvents from "@pixi/events";

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
    autoDensity: true,
    alpha: 1.0,
    backgroundColor: 0x000000
  };

  public context?: CanvasRenderingContext2D;

  public gameApp: any;

  public role: any;

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
    delete PIXI.Renderer.__plugins.interaction;

    this.gameApp = new PIXI.Application({
      view: this.gameCvs?.nativeElement,
      ...this.defaultOption
    });
    this.gameApp.renderer.autoResize = true; // 確保寬度及高度正確而使用的屬性
    this.gameApp.renderer.resize(window.innerWidth, window.innerHeight);
    if (!('events' in this.gameApp.renderer)) {
      this.gameApp.renderer.addSystem(PIXIEvents.EventSystem, 'events');
    }

    const newContainer = new PIXI.Container();
    this.gameApp.stage.addChild(newContainer);
    const PIXIText = new PIXI.Text('這是一段話');
    const map = PIXI.Sprite.from('../../assets/images/map/road.png');
    const role = PIXI.Sprite.from('../../assets/images/role/knight.png');
    map.anchor.set(0.5);
    role.anchor.set(0.3);
    map.x = this.gameApp.screen.width / 2;
    map.y = this.gameApp.screen.height / 2;
    newContainer.addChild(map);
    role.x = this.gameApp.screen.width / 2;
    role.y = this.gameApp.screen.height / 2;
    role.width = 270;
    role.height = 205;
    this.role = role;
    newContainer.addChild(role);

    const graphics = new PIXI.Graphics();

    // Rectangle
    graphics.beginFill(0x000000);
    graphics.drawRect(10, 10, 100, 50);
    graphics.endFill();

    const button = newContainer.addChild(graphics);

    button.interactive = true;

    // Make stage interactive so you can click on it too
    this.gameApp.stage.interactive = true;
    this.gameApp.stage.hitArea =  this.gameApp.renderer.screen;

    button.addEventListener('click', (e: any) => {
      this.down();
    });
  }

  down(): void {
    this.role.y = this.role.y += 10;
  }

  up(): void {
    this.role.y = this.role.y -= 10;
  }

  left(): void {
    this.role.x = this.role.x -= 10;
  }

  right(): void {
    this.role.x = this.role.x += 10;
  }

}

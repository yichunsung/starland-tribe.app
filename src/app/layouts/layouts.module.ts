import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [LayoutsComponent, MenuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutsComponent
  ]
})
export class LayoutsModule { }

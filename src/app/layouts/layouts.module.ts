import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { LayoutsComponent } from './layouts.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [LayoutsComponent, MenuComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    LayoutsComponent
  ]
})
export class LayoutsModule { }

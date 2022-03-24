import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsComponent } from './cats.component';
import { CatsRoutingModule } from './cats-routing.module';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CatsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CatsRoutingModule
  ],
  providers:[]
})
export class CatsModule { }

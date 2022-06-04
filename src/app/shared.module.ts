// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [MaterialModule, RouterModule],
  declarations: [],
  exports: [],
})
export class SharedModule {}

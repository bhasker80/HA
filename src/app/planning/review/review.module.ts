//balance.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material.module';
import { ReviewRoutingModule } from './review-routing.module';

import { ReviewComponent } from './review.component';
import { ReviewNavComponent } from './review-nav/review-nav.component';
import { SourcesComponent } from './sources/sources.component';

@NgModule({
  imports: [CommonModule, MaterialModule, ReviewRoutingModule],
  declarations: [ReviewComponent, ReviewNavComponent, SourcesComponent],
})
export class ReviewModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { PlanningRoutingModule } from './planning-routing.module';
import { PlanningComponent } from './planning.component';
import { PlanningTabsComponent } from './planning-tabs/planning-tabs.component';

@NgModule({
  imports: [CommonModule, MaterialModule, PlanningRoutingModule],
  declarations: [PlanningComponent, PlanningTabsComponent],
})
export class PlanningModule {}

//balance.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material.module';
import { UseCaseRoutingModule } from './use-case-routing.module';
import { EnergySaleComponent } from './energy-sale/energy-sale.component';
import { EnergyShiftComponent } from './energy-shifting/energy-shift.component';
import { CapacityComponent } from './capacity/capacity.component';
import { WheelingChargeComponent } from './wheeling/wheeling-charge.component';
import { RECComponent } from './REC/REC.component';
import { FCASComponent } from './FCAS/FCAS.component';

import { UseCaseNavComponent } from './use-case-nav/use-case-nav.component';
import { UseCaseComponent } from './use-case.component';

@NgModule({
  imports: [CommonModule, MaterialModule, UseCaseRoutingModule],
  declarations: [
    UseCaseNavComponent,
    UseCaseComponent,
    EnergySaleComponent,
    EnergyShiftComponent,
    CapacityComponent,
    WheelingChargeComponent,
    RECComponent,
    FCASComponent,
  ],
})
export class UseCaseModule {}

//balance.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material.module';
import { AdvSettingRoutingModule } from './adv-setting-routing.module';

import { AdvSettingComponent } from './adv-setting.component';
import { AdvSettingNavComponent } from './adv-setting-nav/adv-setting-nav.component';

import { OandMComponent } from './o&m/o&m.component';
import { CapexComponent } from './capex/capex.component';
import { FinanceComponent } from './finance/finance.component';
import { SizingComponent } from './sizing/sizing.component';
import { AvailabilityComponent } from './availability/availability.component';
import { LossComponent } from './loss/loss.component';
import { AuxComponent } from './aux/aux.component';
import { OptimizationComponent } from './optimization/optimization.component';

@NgModule({
  imports: [CommonModule, MaterialModule, AdvSettingRoutingModule],
  declarations: [
    AdvSettingNavComponent,
    AdvSettingComponent,
    OandMComponent,
    CapexComponent,
    FinanceComponent,
    SizingComponent,
    AvailabilityComponent,
    LossComponent,
    AuxComponent,
    OptimizationComponent,
  ],
})
export class AdvSettingModule {}

//balance-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvSettingComponent } from './adv-setting.component';

import { OandMComponent } from './o&m/o&m.component';
import { CapexComponent } from './capex/capex.component';
import { FinanceComponent } from './finance/finance.component';
import { SizingComponent } from './sizing/sizing.component';
import { AvailabilityComponent } from './availability/availability.component';
import { LossComponent } from './loss/loss.component';
import { AuxComponent } from './aux/aux.component';
import { OptimizationComponent } from './optimization/optimization.component';

const routes: Routes = [
  {
    path: '',
    component: AdvSettingComponent,
    children: [
      {
        path: 'o&m',
        component: OandMComponent,
      },
      {
        path: 'capex',
        component: CapexComponent,
      },
      {
        path: 'finanace',
        component: FinanceComponent,
      },
      {
        path: 'sizing',
        component: SizingComponent,
      },
      {
        path: 'availablity',
        component: AvailabilityComponent,
      },
      {
        path: 'efficiency',
        component: LossComponent,
      },
      {
        path: 'aux',
        component: AuxComponent,
      },
      {
        path: 'optimization',
        component: OptimizationComponent,
      },
      {
        path: '',
        redirectTo: 'o&m',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvSettingRoutingModule {}

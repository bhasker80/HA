//balance-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UseCaseComponent } from './use-case.component';

import { EnergySaleComponent } from './energy-sale/energy-sale.component';
import { EnergyShiftComponent } from './energy-shifting/energy-shift.component';
import { CapacityComponent } from './capacity/capacity.component';
import { WheelingChargeComponent } from './wheeling/wheeling-charge.component';
import { RECComponent } from './REC/REC.component';
import { FCASComponent } from './FCAS/FCAS.component';

const routes: Routes = [
  {
    path: '',
    component: UseCaseComponent,
    children: [
      {
        path: 'sale',
        component: EnergySaleComponent,
      },
      {
        path: 'shift',
        component: EnergyShiftComponent,
      },
      {
        path: 'capacity',
        component: CapacityComponent,
      },
      {
        path: 'wheeling',
        component: WheelingChargeComponent,
      },
      {
        path: 'REC',
        component: RECComponent,
      },
      {
        path: 'FCAS',
        component: FCASComponent,
      },
      {
        path: '',
        redirectTo: 'sale',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UseCaseRoutingModule {}

//balance-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnergySourceComponent } from './energy-source.component';
import { SolarComponent } from './solar/solar.component';
import { WindComponent } from './wind/wind.component';
import { GridComponent } from './grid/grid.component';
import { BatteryComponent } from './battery/battery.component';
import { ThermalComponent } from './thermal/thermal.component';

const routes: Routes = [
  {
    path: '',
    component: EnergySourceComponent,
    children: [
      {
        path: 'solar',
        component: SolarComponent,
      },
      {
        path: 'wind',
        component: WindComponent,
      },
      {
        path: 'grid',
        component: GridComponent,
      },
      {
        path: 'battery',
        component: BatteryComponent,
      },
      {
        path: 'thermal',
        component: ThermalComponent,
      },
      {
        path: '',
        redirectTo: 'solar',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnergySourceRoutingModule {}

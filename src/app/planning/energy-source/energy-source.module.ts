//balance.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../material.module';
import { EnergySourceRoutingModule } from './energy-source-routing.module';

import { EnergySourceNavComponent } from './energy-source-nav/energy-source-nav.component';
import { HeroComponent } from './hero/hero.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

import { EnergySourceComponent } from './energy-source.component';
import { SolarComponent } from './solar/solar.component';
import { WindComponent } from './wind/wind.component';
import { GridComponent } from './grid/grid.component';
import { BatteryComponent } from './battery/battery.component';
import { ThermalComponent } from './thermal/thermal.component';

@NgModule({
  imports: [CommonModule, MaterialModule, EnergySourceRoutingModule],
  declarations: [
    EnergySourceNavComponent,
    SolarComponent,
    EnergySourceComponent,
    WindComponent,
    BatteryComponent,
    GridComponent,
    ThermalComponent,
    HeroComponent,
    ProjectDetailComponent,
  ],
})
export class EnergySourceModule {}

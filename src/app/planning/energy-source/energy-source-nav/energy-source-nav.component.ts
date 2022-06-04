import { Component, OnInit } from '@angular/core';

interface energySource {
  icon: string;
  label: string;
  info?: string;
  desc: string;
  link: string;
  active: boolean;
  disabled: boolean;
}

const ENERGY_SOURCES: energySource[] = [
  {
    icon: 'grid_3x3',
    label: 'Grid',
    info: 'Select to use grid to charge storage (MVAC)',
    desc: 'Configure constraints on grid output from storage.',
    link: 'grid',
    active: false,
    disabled: false,
  },
  {
    icon: 'gas_meter',
    label: 'Battery',
    info: 'Model reservoirs on-site (AC or DC coupled)',
    desc: 'Optimal number of reservoirs can be determined.',
    link: 'battery',
    active: false,
    disabled: false,
  },
  {
    icon: 'wind_power',
    label: 'Wind',
    desc: 'Setup farm location and capacity to model pure wind production or hybrid configuration.',
    link: 'wind',
    active: false,
    disabled: false,
  },
  {
    icon: 'solar_power',
    label: 'Solar',
    desc: 'Setup panel types and location to model pure PV production or hybrid configuration.',
    link: 'solar',
    active: true,
    disabled: false,
  },
  {
    icon: 'heat_pump',
    label: 'Thermal',
    info: 'Model reservoirs on-site (AC or DC coupled)',
    desc: 'Setup thermal asset to match output demand, or perform load reduction.',
    link: 'thermal',
    active: false,
    disabled: false,
  },
];

@Component({
  selector: 'energy-source-nav',
  templateUrl: './energy-source-nav.component.html',
  styleUrls: [],
})
export class EnergySourceNavComponent implements OnInit {
  energySources = ENERGY_SOURCES;
  activeLink = this.energySources[3];

  constructor() {}

  ngOnInit(): void {}

  clickPrevent(e: Event) {
    e.stopPropagation();
  }
}

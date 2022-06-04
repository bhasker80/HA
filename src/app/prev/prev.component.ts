import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'prev-analysis',
  templateUrl: './prev.component.html',
  styleUrls: ['./prev.component.scss'],
})
export class PrevComponent implements AfterViewInit {
  displayedColumns = [
    'project',
    'version',
    'date',
    'region',
    'location',
    'npv',
    'irr',
    'lcoe',
    'capex',
    'revenue',
    'note',
    'pv',
    'wind',
    'thermal',
    'solar',
    'grid',

    'star',
  ];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() {}

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  clickPrevent(e: Event) {
    e.stopPropagation();
  }
}

export interface PeriodicElement {
  project: string;
  version: number;
  date: string;
  region: string;
  location: string;
  npv: number;
  irr: number;
  lcoe: number;
  capex: number;
  revenue: number;
  note: boolean;
  pv: boolean;
  wind: boolean;
  thermal: boolean;
  solar: boolean;
  grid: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    project: 'Test case with admin access',
    version: 1,
    date: '25 Apr 2022',
    region: 'USA',
    location: 'USA AZ CASA GRANDA',
    npv: 0,
    irr: 0,
    lcoe: 0,
    capex: 0,
    revenue: 0,
    note: true,
    pv: true,
    wind: true,
    thermal: false,
    solar: true,
    grid: false,
  },
  {
    project: 'QA_Test_Case11_AE_Sizing_LG',
    version: 3.1,
    date: '20 Apr 2022',
    region: 'USA',
    location: 'USA AZ CASA GRANDA',
    npv: 0,
    irr: 0,
    lcoe: 0,
    capex: 0,
    revenue: 0,
    note: true,
    pv: false,
    wind: false,
    thermal: false,
    solar: true,
    grid: false,
  },
  {
    project: 'QA_Test_Case8_PV+GT+BESS_Load_Reduction',
    version: 1,
    date: '25 Apr 2022',
    region: 'USA',
    location: 'USA AZ CASA GRANDA',
    npv: 70.61,
    irr: 26.98,
    lcoe: 0.073,
    capex: 183.24,
    revenue: 34.33,
    note: true,
    pv: false,
    wind: false,
    thermal: true,
    solar: true,
    grid: false,
  },
  {
    project: 'QA_Test_Case4_PV+BESS_arbitrage+Regulation',
    version: 1,
    date: '18 Apr 2022',
    region: 'USA',
    location: 'USA AZ CASA GRANDA',
    npv: 0,
    irr: 0,
    lcoe: 0,
    capex: 0,
    revenue: 0,
    note: false,
    pv: true,
    wind: false,
    thermal: true,
    solar: false,
    grid: false,
  },
  {
    project: 'test LTSA',
    version: 6.3,
    date: '25 Apr 2022',
    region: 'MENAT',
    location: '-',
    npv: 0,
    irr: 0,
    lcoe: 0,
    capex: 0,
    revenue: 0,
    note: false,
    pv: true,
    wind: false,
    thermal: false,
    solar: true,
    grid: false,
  },
  {
    project: 'QA_Test_Case3_optimize_PV+Wind',
    version: 2.1,
    date: '15 Apr 2022',
    region: 'USA',
    location: 'USA AZ CASA GRANDA',
    npv: 15.76,
    irr: 26.35,
    lcoe: 0.026,
    capex: 85.01,
    revenue: 7.48,
    note: true,
    pv: true,
    wind: true,
    thermal: true,
    solar: true,
    grid: false,
  },
  {
    project: 'QA_Test_Case2_PV+Wind',
    version: 3,
    date: '09 Apr 2022',
    region: 'USA',
    location: 'USA AZ CASA GRANDA',
    npv: 14.55,
    irr: 25.62,
    lcoe: 0.026,
    capex: 86.13,
    revenue: 7.39,
    note: false,
    pv: false,
    wind: true,
    thermal: false,
    solar: false,
    grid: false,
  },

  {
    project: 'Hunterston_410MW2hr',
    version: 6,
    date: '02 Mar 2022',
    region: 'USA',
    location: 'USA AZ CASA GRANDA',
    npv: 0,
    irr: 0,
    lcoe: 0,
    capex: 0,
    revenue: 0,
    note: true,
    pv: true,
    wind: true,
    thermal: false,
    solar: true,
    grid: false,
  },
  {
    project: 'Rotterdam 7MW6hr',
    version: 4,
    date: '27 Feb 2022',
    region: 'India',
    location: 'Anantpur, Gujrat',
    npv: 0,
    irr: 0,
    lcoe: 0,
    capex: 0,
    revenue: 0,
    note: true,
    pv: false,
    wind: true,
    thermal: false,
    solar: false,
    grid: true,
  },
  {
    project: 'QA_Test_Case5_PV+BESS_arbitrage_multiscenario',
    version: 1,
    date: '21 Feb 2022',
    region: 'MENAT',
    location: 'Burj Riyal, UAE',
    npv: 0,
    irr: 0,
    lcoe: 0,
    capex: 0,
    revenue: 0,
    note: true,
    pv: true,
    wind: true,
    thermal: false,
    solar: false,
    grid: false,
  },
];

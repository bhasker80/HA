import { Component, OnInit } from '@angular/core';

interface advSetting {
  icon?: string;
  label: string;
  info?: string;
  desc?: string;
  link: string;
  active?: boolean;
  disabled?: boolean;
}

const ADV_SETTINGS: advSetting[] = [
  {
    label: 'O&M Costs',
    desc: 'O&M, insurance & land lease cost.',
    link: 'o&m',
  },
  {
    label: 'Capacity Add & CAPEX Costs',
    desc: 'Capex scaling for each added component.',
    link: 'capex',
  },
  {
    label: 'Tax / Debt / Finance',
    desc: 'Tax & finance calculation based on tenure.',
    link: 'finanace',
  },
  {
    label: 'Equipment Sizing',
    desc: 'Equipment sizing description.',
    link: 'sizing',
  },
  {
    label: 'Equipment Availability',
    desc: 'O&M cost description.',
    link: 'availablity',
  },
  {
    label: 'Efficiency / Loss',
    desc: 'Efficiency / loss description.',
    link: 'efficiency',
  },
  {
    label: 'Aux / Degrade / SOC',
    desc: 'Aux / degrade / SOC description.',
    link: 'aux',
  },
  {
    label: 'Optimization Settings',
    desc: 'Optimize configuration with various settings.',
    link: 'optimization',
  },
];

@Component({
  selector: 'adv-setting-nav',
  templateUrl: './adv-setting-nav.component.html',
  styleUrls: [],
})
export class AdvSettingNavComponent implements OnInit {
  advSettings = ADV_SETTINGS;
  activeLink = this.advSettings[0];

  constructor() {}

  ngOnInit(): void {}

  clickPrevent(e: Event) {
    e.stopPropagation();
  }
}

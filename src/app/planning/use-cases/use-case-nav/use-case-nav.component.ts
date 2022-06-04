import { Component, OnInit } from '@angular/core';

interface useCase {
  icon?: string;
  label: string;
  info?: string;
  desc: string;
  link: string;
  active: boolean;
  disabled: boolean;
}

const USE_CASES: useCase[] = [
  {
    label: 'Energy Sale',
    desc: 'Define energy sale price scheme.',
    link: 'sale',
    active: true,
    disabled: false,
  },
  {
    label: 'Energy Shifting',
    info: 'Requires energy storage reservoir',
    desc: 'Set the strategies for charging and discharging energy storage reservoir.',
    link: 'shift',
    active: true,
    disabled: false,
  },
  {
    label: 'Capacity',
    desc: 'Apply capacity credits from sources.',
    link: 'capacity',
    active: false,
    disabled: false,
  },
  {
    label: 'Wheeling Charge',
    desc: 'Apply wheeling charges.',
    link: 'wheeling',
    active: false,
    disabled: false,
  },
  {
    label: 'Renewable Energy Credit (REC)',
    desc: 'Apply renewable energy credits from sources.',
    link: 'REC',
    active: false,
    disabled: false,
  },
  {
    label: 'Ancillary Service (FCAS)',
    info: 'Requires energy storage reservoir or gas turbine/engine',
    desc: 'Set the strategies for charging and discharging energy storage reservoir.',
    link: 'FCAS',
    active: false,
    disabled: false,
  },
];

@Component({
  selector: 'use-case-nav',
  templateUrl: './use-case-nav.component.html',
  styleUrls: [],
})
export class UseCaseNavComponent implements OnInit {
  useCases = USE_CASES;
  activeLink = this.useCases[0];

  constructor() {}

  ngOnInit(): void {}

  clickPrevent(e: Event) {
    e.stopPropagation();
  }
}

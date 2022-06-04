import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface pageModuleNew {
  icon: string;
  label: string;
  link: string;
  index: number;
}

const PAGE_MODULES: pageModuleNew[] = [
  {
    icon: 'electric_bolt',
    label: 'Energy Sources',
    link: './sources',
    index: 0,
  },
  { icon: 'cases', label: 'Use Cases', link: './cases', index: 1 },
  { icon: 'tune', label: 'Adv. Settings', link: './adv-setting', index: 2 },
  { icon: 'reviews', label: 'Review Conf.', link: './review', index: 3 },
  // { icon: 'assessment', label: 'Analysis Result', link: '' },
];

@Component({
  selector: 'planning-tabs',
  templateUrl: './planning-tabs.component.html',
  styleUrls: [],
})
export class PlanningTabsComponent implements OnInit {
  links = PAGE_MODULES;
  navLinks: any[];
  activeLinkIndex = -1;
  //   activeLink = this.links[0];

  constructor(private router: Router) {
    this.navLinks = PAGE_MODULES;
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find((tab) => tab.link === '.' + this.router.url)
      );
    });
  }
}

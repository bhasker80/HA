import { Component, OnInit } from '@angular/core';

interface review {
  icon?: string;
  label: string;
  info?: string;
  desc?: string;
  link: string;
  active?: boolean;
  disabled?: boolean;
}

const REVIEW: review[] = [
  {
    label: 'Energy Sources',
    link: 'energy-sources',
  },
  {
    label: 'Use Cases',
    link: 'use-cases',
  },
  {
    label: 'Adv. Settings / Finance',
    link: 'finanace',
  },
  {
    label: 'Adv. Settings / Optimization',
    link: 'optimization',
  },
];

@Component({
  selector: 'review-nav',
  templateUrl: './review-nav.component.html',
  styleUrls: [],
})
export class ReviewNavComponent implements OnInit {
  reviews = REVIEW;
  activeLink = this.reviews[0];

  constructor() {}

  ngOnInit(): void {}

  clickPrevent(e: Event) {
    e.stopPropagation();
  }
}

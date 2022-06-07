import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hero-img',
  templateUrl: './hero.component.html',
  styleUrls: [],
})
export class HeroComponent implements OnInit {
  @Input() imgSrc: string = '';
  constructor() {}
  ngOnInit(): void {}
}

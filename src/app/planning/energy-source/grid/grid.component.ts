import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grid-form',
  templateUrl: './grid.component.html',
  styleUrls: [],
})
export class GridComponent implements OnInit {
  hero = 'grid.jpg';
  constructor() {}

  ngOnInit(): void {}
}

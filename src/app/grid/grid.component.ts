import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  selected = [];

  rows = new Array(10).fill(0).map((_, i) => ({
    id: 1 + i,
    name: 'test' + i,
    description: new Array(i * 2).fill(i).toString(),
  }));
  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl']
})
export class SearchComponent implements OnInit {

  @Output() query: string

  constructor() { }

  ngOnInit() {
  }

}

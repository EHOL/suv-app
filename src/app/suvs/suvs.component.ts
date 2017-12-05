import { Component, OnInit } from '@angular/core';
import { Suv } from '../suv';
import { SUVS } from '../mock-suvs';

@Component({
  selector: 'app-suvs',
  templateUrl: './suvs.component.html',
  styleUrls: ['./suvs.component.css']
})
export class SuvsComponent implements OnInit {
	
  suvs = SUVS;
  
  selectedSuv: Suv;

  constructor() { }

  ngOnInit() {
  }

  onSelect(suv: Suv): void {
    this.selectedSuv = suv;
  }

}

import { Component, OnInit } from '@angular/core';
import { Suv } from '../suv';

@Component({
  selector: 'app-suvs',
  templateUrl: './suvs.component.html',
  styleUrls: ['./suvs.component.css']
})
export class SuvsComponent implements OnInit {
	suv: Suv = {
		id: 1,
		name: 'Jeep Grand Cherokee'
	}

  constructor() { }

  ngOnInit() {
  }

}

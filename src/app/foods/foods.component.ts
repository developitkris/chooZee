import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Foods } from './models/choozee.model';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css'],
  providers: []
})
export class FoodsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { HerosService,  } from './../services/heros.service';
import {  HerosInterface } from './../../components/interface/interfaceHeros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {


  herosLocal: HerosInterface[] = [];
  constructor(private herosService1: HerosService) { }

  ngOnInit() {

    this.herosLocal = this.herosService1.getHeros();
    console.log(this.herosLocal);


  }

}

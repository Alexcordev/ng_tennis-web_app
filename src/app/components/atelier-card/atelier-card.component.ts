import { Component, OnInit } from '@angular/core';
import { workshops } from 'src/data';

@Component({
  selector: 'app-atelier-card',
  templateUrl: './atelier-card.component.html',
  styleUrls: ['./atelier-card.component.scss']
})
export class AtelierCardComponent implements OnInit {

  data: any = workshops;
  items: any[] = [];


  constructor() { }

  ngOnInit() {
    this.data.forEach((element: any) => {
      console.log(element)
      this.items.push(element);
    });
  }

}

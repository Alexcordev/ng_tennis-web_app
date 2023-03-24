import { Component, OnInit } from '@angular/core';
import { popular } from "../../../data";

@Component({
  selector: 'app-favorite-card',
  templateUrl: './favorite-card.component.html',
  styleUrls: ['./favorite-card.component.scss']
})
export class FavoriteCardComponent implements OnInit {


  data: any[] = popular;
  items: any[] = [];

  constructor() { }

  ngOnInit() {
    this.data.forEach((element) => {
      console.log(element)

      this.items.push(element);
    });
  }

}

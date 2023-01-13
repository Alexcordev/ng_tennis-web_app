import { Component, OnInit } from '@angular/core';
import { articles } from "../../../data";
import { Article } from "../../interfaces/article";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  article: Article = {title: "", image: "", description: ""};
  items: Article[] = [];
  data: any = articles;

  constructor() { }

  ngOnInit() {
    this.data.forEach((element: Article) => {
      console.log(element)
      this.article = {title: element.title, image: element.image, description: element.description };
      this.items.push(this.article);
    });

  }

}

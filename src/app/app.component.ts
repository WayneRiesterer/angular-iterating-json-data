import { Component } from '@angular/core'
import { data } from './data'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  data = data

  getFruits() {
    return data.children
  }

  getFruit(fruit: string) {
    return data[fruit]
  }

  getVarieties(fruit) {
    return data[fruit].children
  }

  getVariety(fruit, variety) {
    return data[fruit][variety]
  }

  getArticles(fruit, variety) {
    return data[fruit][variety].articles
  }

  getArticle(fruit, variety, article) {
    return data[fruit][variety][article]
  }
}

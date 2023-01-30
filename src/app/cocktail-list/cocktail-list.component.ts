import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../Cocktail';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [];
  constructor(public serviceCocktail: CocktailService) {}

  ngOnInit() {
    this.cocktails = this.serviceCocktail.getCocktails();
  }
}

import { Injectable } from '@angular/core';
import { Livre } from '../../models/livre';;
import { Categorie } from '../../models/categorie';;

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  private livres: Livre[] = [
    new Livre(1, 'Titre du livre 1', 'Auteur 1', new Date(2023, 0, 1), [1, 2]),
    new Livre(2, 'Titre du livre 2', 'Auteur 2', new Date(2022, 6, 15), [2, 3]),
    new Livre(3, 'Titre du livre 3', 'Auteur 3', new Date(2021, 3, 30), [1, 3])
  ];

  private categories: Categorie[] = [
    new Categorie(1, 'Romans'),
    new Categorie(2, 'Fantasy'),
    new Categorie(3, 'Science-fiction')
  ];

  constructor() { }

  getLivres(): Livre[] {
    return this.livres;
  }

  getCategories(): Categorie[] {
    return this.categories;
  }
}

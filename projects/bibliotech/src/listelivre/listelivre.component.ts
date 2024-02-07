import { Component, OnInit } from '@angular/core';
import { Livre } from '../app/models/livre';;
import { LivreService } from '../app/services/services/livre.service';;
import { Page } from '../app/models/page';;
import { PageService } from '../app/services/page.service';
import { Categorie } from '../app/models/categorie';
;

@Component({
  selector: 'app-livre-details',
  templateUrl: './livre-details.component.html',
  styleUrls: ['./livre-details.component.css']
})
export class LivreDetailsComponent implements OnInit {
  livre: Livre;
  nouvellesPagesContenu: string[] = [];
  categories: Categorie[] = [];

  constructor(private livreService: LivreService) { }

  ngOnInit(): void {
    this.livre = this.livreService.getLivre(1);
    this.categories = this.livreService.getCategories();
  }

  ajouterPage(): void {
    // ...
  }

  supprimerPage(page: Page): void {
    // ...
  }

  ajouterLivre(): void {
    // ...
  }

  ajouterCategorie(livreId: number, categorieId: number): void {
    const livre = this.livreService.getLivre(livreId);
    if (livre) {
      livre.categories.push(categorieId);
    }
  }
}

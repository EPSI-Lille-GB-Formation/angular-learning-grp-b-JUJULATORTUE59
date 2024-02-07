import { Page } from "./page";

export class Livre {
  id: number;
  titre: string;
  auteur: string;
  datePublication: Date;
  dateModification: Date;
  pages: Page[]; // Liste des pages du livre

  constructor(id: number, titre: string, auteur: string, datePublication: Date) {
    this.id = id;
    this.titre = titre;
    this.auteur = auteur;
    this.datePublication = datePublication;
    this.dateModification = new Date();
    this.pages = [];
  }
}

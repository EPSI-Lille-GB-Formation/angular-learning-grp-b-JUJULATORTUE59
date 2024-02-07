import { Injectable } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';;

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private utilisateurs: Utilisateur[] = [
    new Utilisateur(1, 'Doe', 'John', 'john@example.com', 'motdepasse', 'admin'),
    new Utilisateur(2, 'Smith', 'Jane', 'jane@example.com', 'motdepasse', 'user')
  ];

  constructor() { }

  getUtilisateurs(): Utilisateur[] {
    return this.utilisateurs;
  }

  // Autres méthodes pour CRUD des utilisateurs (create, update, delete)...
}

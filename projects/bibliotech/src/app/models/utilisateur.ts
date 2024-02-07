export class Utilisateur {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    motDePasse: string;
    role: string; // 'user' ou 'admin'
  
    constructor(id: number, nom: string, prenom: string, email: string, motDePasse: string, role: string) {
      this.id = id;
      this.nom = nom;
      this.prenom = prenom;
      this.email = email;
      this.motDePasse = motDePasse;
      this.role = role;
    }
  }
  
// interface sert à définir les données d'un incident
export interface IncidentInterface {

  id: number;
  titre: string;
  categorie: 'Voirie' | 'Électricité' | 'Sécurité' | 'Assainissement' | 'Autre';
  description: string;   // minimum 20 caractères
  localisation: string;
  image?: string;        // URL, facultatif
  date: Date;
  supports: number;      // compteur de soutiens
}


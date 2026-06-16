export interface IncidentInterface {

  id: number;
  titre: string;
  categorie: 'Voirie' | 'Électricité' | 'Propreté' | 'Autre';
  description: string;   // minimum 20 caractères
  localisation: string;
  image?: string;        // URL, facultatif
  date: Date;
  supports: number;      // compteur de soutiens
}


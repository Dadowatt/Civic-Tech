// interface sert à définir les données d'un incident
export interface IncidentInterface {

  id: number;
  titre: string;
  categorie: 'Voirie' | 'Électricité' | 'Sécurité' | 'Assainissement' | 'Autre';
  description: string;   // minimum 20 caractères
  localisation: string;
  image?: string;       
  date: Date;
  supports: number;
  supported?: boolean;
}


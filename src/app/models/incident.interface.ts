export interface IncidentInterface {

  id: number;
  titre: string;
  categorie: 'Voirie' | 'Électricité' | 'Assainissement' | 'Autre';
  description: string;   
  localisation: string;
  image?: string;       
  date: Date;
  supports: number;
  supported?: boolean;
}


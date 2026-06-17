import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IncidentInterface } from '../models/incident.interface'; // interface pour le mock

// Service pour gérer les incidents
@Injectable({ providedIn: 'root' })  // injectable dans le module app (pour injecter le service dans les composants)
export class IncidentService  {
  private incidentsSubject = new BehaviorSubject<IncidentInterface[]>([]);
  public incidents$: Observable<IncidentInterface[]> = this.incidentsSubject.asObservable();

  // Données mock initiales (si localStorage vide)
  private mockIncidents: IncidentInterface[] = [
    {
      id: 1,
      titre: 'Incident de voirie',
      categorie: 'Voirie',
      description: "Nid de poule dangereux sur l'avenue Cheikh Anta Diop, près de l'école.",
      localisation: 'Avenue Cheikh Anta Diop, Dakar',
      image: '',
      date: new Date(),
      supports: 3,
    },
    {
      id: 2,
      titre: 'Incident électrique',
      categorie: 'Électricité',
      description: "Lampadaire éteint depuis une semaine, rue de la République, risque d'insécurité.",
      localisation: 'Rue de la République, Dakar',
      image: '',
      date: new Date(),
      supports: 7,
    },
    {
      id: 3,
      titre: 'Incident de propreté',
      categorie: 'Assainissement',
      description: 'Poubelle débordante au marché Sandaga, odeurs et animaux errants.',
      localisation: 'Marché Sandaga, Dakar',
      image: '',
      date: new Date(),
      supports: 2,
    },
  ];

constructor() {
  if (typeof window !== 'undefined') {
    this.loadFromLocalStorage();
  }
}

  private loadFromLocalStorage(): void {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem('incidents');
    if (stored) {
      // Restaurer les dates (car JSON les convertit en string)
      const incidents: IncidentInterface[] = JSON.parse(stored);
      incidents.forEach(inc => inc.date = new Date(inc.date));
      this.incidentsSubject.next(incidents);
    } else {
      // Initialiser avec les mocks et sauvegarder
      this.incidentsSubject.next(this.mockIncidents);
      this.saveToLocalStorage();
    }
  }
// Sert à sauvegarder les incidents dans localStorage
private saveToLocalStorage(): void {
  if (typeof window === 'undefined') return;

  const current = this.incidentsSubject.getValue();
  localStorage.setItem('incidents', JSON.stringify(current));
}

  // Récupérer tous les incidents (via observable, pour réactivité)
  getIncidents(): Observable<IncidentInterface[]> {
    return this.incidents$;
  }

  // Récupérer un incident par son id (synchrone, car on a le tableau)
  getIncidentById(id: number): IncidentInterface | undefined {
    return this.incidentsSubject.getValue().find(inc => inc.id === id);
  }

  // Ajouter un nouvel incident
  addIncident(incident: Omit<IncidentInterface, 'id' | 'supports' | 'date'>): void {
    const current = this.incidentsSubject.getValue();
    const newId = current.length > 0 ? Math.max(...current.map(i => i.id)) + 1 : 1;
    const newIncident: IncidentInterface = {
      ...incident,
      id: newId,
      supports: 0,
      date: new Date(),
    };
    const updated = [newIncident, ...current];
    this.incidentsSubject.next(updated);
    this.saveToLocalStorage();
  }


  // Incrémenter le compteur de soutiens pour un incident
  supportIncident(id: number): void {
    const current = this.incidentsSubject.getValue(); // on récupère la liste
    const incident = current.find(inc => inc.id === id);
    if (!incident) return;

    if (incident.supported) {
      incident.supports--;
      incident.supported = false
    }else{
      incident.supports++;
      incident.supported = true;
    }
    this.incidentsSubject.next([...current]); // immutable update
    this.saveToLocalStorage();
  }

  // Optionnel : mettre à jour un incident (si besoin) 
  updateIncident(updated: IncidentInterface): void {
    const current = this.incidentsSubject.getValue();
    const index = current.findIndex(inc => inc.id === updated.id);
    if (index !== -1) {
      current[index] = updated;
      this.incidentsSubject.next([...current]);
      this.saveToLocalStorage();
    }
  }

  deleteIncident(id: number): void {
  const current = this.incidentsSubject.getValue();
  const updated = current.filter(
    incident => incident.id !== id
  );
  this.incidentsSubject.next(updated);
  this.saveToLocalStorage();
}
}
import { Component } from '@angular/core';
import { IncidentInterface } from '../../models/incident.interface';
import { IncidentService } from '../../services/incident.service';
import { IncidentCard } from "../../components/incident-card/incident-card";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-incident-list',
  imports: [IncidentCard, CommonModule],
  templateUrl: './incident-list.html',
  styleUrl: './incident-list.css',
})
export class IncidentList {
  incidents: IncidentInterface[] = [];
  filteredIncidents: IncidentInterface[] = [];
  selectedCategorie: string = 'Tous';

  constructor(private incidentService: IncidentService){}

  // On initialise le composant
ngOnInit() {
  this.incidentService.getIncidents().subscribe(data => {
    this.incidents = data;
    this.filteredIncidents = [...data];
  });
}

  // calculer le nombre total d'incidents
  get totalIncidents(): number {
    return this.incidents.length;
  }

  // calculer le nombre de catégories
  get totalCategories(): number {
    return [...new Set(this.incidents.map(i => i.categorie))].length;
  }

  // calculer le nombre de soutiens
  get totalSupports(): number {
    return this.incidents.reduce((acc, cur) => acc + cur.supports, 0);
  }

  // Rechercher un incident par categorie 

  searchIncidents(categorie: string): void {
  this.selectedCategorie = categorie;
  if (categorie === 'Tous') {

    this.filteredIncidents = [...this.incidents];

  } else {

    this.filteredIncidents = this.incidents.filter(
      i => i.categorie === categorie
    );
  }
}
}

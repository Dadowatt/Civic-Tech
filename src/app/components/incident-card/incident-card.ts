import { Component, Input} from '@angular/core';
import { IncidentInterface } from '../../models/incident.interface';

import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { IncidentService } from '../../services/incident.service';

@Component({
  selector: 'app-incident-card',
  imports: [RouterLink, CommonModule],
  templateUrl: './incident-card.html',
  styleUrl: './incident-card.css',
})

export class IncidentCard {
@Input() incident!: IncidentInterface;

  constructor(
    private incidentService: IncidentService
  ){}

confirmDelete() {
  const confirmAction = confirm(
    "Es-tu sûr de vouloir supprimer cet incident ?"
  );

  if (confirmAction) {
    this.incidentService.deleteIncident(this.incident.id);
  }
}

  supportIncident() {
  this.incidentService.supportIncident(this.incident.id);
}

getCategoryClass(categorie: string): string {
  switch (categorie) {
    case 'Voirie':
      return 'badge bg-secondary';

    case 'Électricité':
      return 'badge bg-warning text-dark';

    case 'Assainissement':
      return 'badge bg-primary';

    case 'Autre':
      return 'badge bg-success';

    default:
      return 'badge bg-dark';
  }
}
  
}


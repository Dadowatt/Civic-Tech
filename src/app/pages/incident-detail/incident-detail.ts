import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router , RouterModule} from '@angular/router';
import { IncidentInterface } from '../../models/incident.interface';
import { IncidentService } from '../../services/incident.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-incident-detail',
  imports: [CommonModule,RouterModule],
  templateUrl: './incident-detail.html',
  styleUrl: './incident-detail.css',
})
export class IncidentDetail implements OnInit{
  incident!: IncidentInterface;
  erreur = false;

  constructor(private incidentService: IncidentService,
              private route: ActivatedRoute, 
              private router: Router) {}

     // On initialise le composant
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // On vérifie qu'il existe un id
    if (isNaN(id)){
      this.erreur = true;
      return;
    }
    // On récupère l'incident
    this.incident = this.incidentService.getIncidentById(id) as IncidentInterface;
    if (!this.incident){
      this.erreur = true;
    }
  }
  supportIncident(): void {
    if (this.incident){
      this.incidentService.supportIncident(this.incident.id);
      // rafraichir la page
      this.incident = this.incidentService.getIncidentById(this.incident.id) as IncidentInterface;
    }
  }
  goBack(): void {
    this.router.navigate(['/']);
  }


}

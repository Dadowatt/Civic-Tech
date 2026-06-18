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

export class IncidentDetail implements OnInit {

  incident!: IncidentInterface;
  erreur = false;

  constructor(
    private incidentService: IncidentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (isNaN(id)) {
      this.erreur = true;
      return;
    }

    this.incidentService.getIncidents()
      .subscribe(incidents => {

        this.incident = incidents.find(
          incident => incident.id === id
        ) as IncidentInterface;

        if (!this.incident) {
          this.erreur = true;
        }

      });

  }
  supportIncident(): void {

    if (this.incident) {

      this.incidentService.supportIncident(
        this.incident.id
      );

    }

  }
  goBack(): void {
    this.router.navigate(['/']);
  }

}





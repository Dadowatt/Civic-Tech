import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Incident } from '../../models/incident.model';
import { IncidentService } from '../../services/incident.service';

@Component({
  selector: 'app-incident-detail',
  imports: [CommonModule],
  templateUrl: './incident-detail.html',
  styleUrl: './incident-detail.css',
})
export class IncidentDetail implements OnInit{
  incident!: Incident;
  constructor(private incidentService: IncidentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id){
      this.router.navigate(['incidents']);
      return;
    }
    this.incidentService.getIncidents(this.route.snapshot.paramMap.get('id')!).subscribe(incident => {
      this.incident = incident;
    });
  }

  onBack(){
    this.router.navigate(['incidents']);
  }
}

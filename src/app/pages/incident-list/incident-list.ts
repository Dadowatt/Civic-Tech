import { Component } from '@angular/core';
import { IncidentInterface } from '../../models/incident.interface';
import { IncidentService } from '../../services/incident.service';

@Component({
  selector: 'app-incident-list',
  imports: [],
  templateUrl: './incident-list.html',
  styleUrl: './incident-list.css',
})
export class IncidentList {
  incidents: IncidentInterface[] = [];

  constructor(private incidentService: IncidentService){}

  ngOninit(){
    this.incidentService.getIncidents().subscribe(data => {
      this.incidents = data;
    })
  }
}

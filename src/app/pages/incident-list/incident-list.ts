import { Component } from '@angular/core';
import { IncidentInterface } from '../../models/incident.interface';
import { IncidentService } from '../../services/incident.service';
import { IncidentCard } from "../../components/incident-card/incident-card";
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-incident-list',
  imports: [IncidentCard, CommonModule, RouterLink],
  templateUrl: './incident-list.html',
  styleUrl: './incident-list.css',
})
export class IncidentList {
  incidents: IncidentInterface[] = [];

  constructor(private incidentService: IncidentService){}

 ngOnInit(){
    this.incidentService.getIncidents().subscribe(data => {
      console.log("Liste reçue :", data);
      this.incidents = data;
    })
  }

}

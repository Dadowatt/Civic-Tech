import { Component } from '@angular/core';
import { IncidentInterface } from '../../models/incident.interface';
import { IncidentService } from '../../services/incident.service';
import { IncidentCard } from "../../components/incident-card/incident-card";
import { Navbar } from "../../components/navbar/navbar";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-incident-list',
  imports: [IncidentCard, Navbar, CommonModule],
  templateUrl: './incident-list.html',
  styleUrl: './incident-list.css',
})
export class IncidentList {
  incidents: IncidentInterface[] = [];

  constructor(private incidentService: IncidentService){}

 ngOnInit(){
    this.incidentService.getIncidents().subscribe(data => {
      this.incidents = data;
    })
  }

}

import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { IncidentInterface } from '../../models/incident.interface';
import { IncidentService } from '../../services/incident.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
 // nombe total de soutiens depuis IncidentList
export class Navbar {
  incidents: IncidentInterface[] = [];
  support = 0;
  constructor(private incidentService: IncidentService){}
  ngOnInit(): void {
    this.incidentService.getIncidents().subscribe(data => {
      this.incidents = data;
      this.support = this.incidents.reduce((acc, cur) => acc + cur.supports, 0);
    });
  }
   get totalSupports(): number {
    return this.incidents.reduce((acc, cur) => acc + cur.supports, 0);
  } 

}


import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IncidentService } from '../../services/incident.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {

  totalSupports = 0;

  constructor(
    private incidentService: IncidentService,
    private cdr: ChangeDetectorRef
  ) {}


  ngOnInit(): void {

    this.incidentService.getIncidents()
      .pipe(
        map(incidents =>
          incidents.reduce(
            (total, incident) => total + incident.supports,
            0
          )
        )
      )
      .subscribe(total => {
        this.totalSupports = total;
        this.cdr.detectChanges();

      });

  }

}
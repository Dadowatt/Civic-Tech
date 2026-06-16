import { Component, Input} from '@angular/core';
import { IncidentInterface } from '../../models/incident.interface';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-incident-card',
  imports: [RouterLink, CommonModule],
  templateUrl: './incident-card.html',
  styleUrl: './incident-card.css',
})

export class IncidentCard {
@Input() incident!: IncidentInterface;
  
}


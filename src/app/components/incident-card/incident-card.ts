import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-incident-card',
  imports: [],
  templateUrl: './incident-card.html',
  styleUrl: './incident-card.css',
})
export class IncidentCard {
  @Input() incident!: any;
  
}

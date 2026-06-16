import { Routes} from '@angular/router';
import { IncidentList }  from './pages/incident-list/incident-list';
import { IncidentDetail }  from './pages/incident-detail/incident-detail';
import { IncidentForm } from './pages/incident-form/incident-form';

export const routes: Routes = [
    //incident card
  { path: '', component: IncidentList },
  { path: 'nouveau', component: IncidentForm },
  { path: 'incident/:id', component: IncidentDetail},
  { path: '**', redirectTo: '' } // redirection si route inconnue
];


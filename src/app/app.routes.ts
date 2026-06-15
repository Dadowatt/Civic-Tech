import { Routes } from '@angular/router';
import { IncidentList } from './pages/incident-list/incident-list';
import { IncidentForm } from './pages/incident-form/incident-form';


export const routes: Routes = [
    { path: '', component: IncidentList },
    { path: 'nouveau', component: IncidentForm },
];

import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IncidentService } from '../../services/incident.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-incident-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './incident-form.html',
  styleUrl: './incident-form.css',
})

export class IncidentForm {

  constructor(private incidentService: IncidentService,  private router: Router) {}

  imagePreview: string | null = null;

  form = new FormGroup({
    titre: new FormControl('', Validators.required),
    categorie: new FormControl('', Validators.required),
    localisation: new FormControl('', Validators.required),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(20)
    ]),
    image: new FormControl<string | null>(null)
  });

  onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;

  if (!input.files || input.files.length === 0) {
    return;
  }

  const file = input.files[0];

  const reader = new FileReader();

  reader.onload = () => {
    const base64 = reader.result as string;
    this.imagePreview = base64;

    this.form.patchValue({
      image: base64
    });
  };

  reader.readAsDataURL(file);
}

  onSubmit(){

    if (this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }

    const newIncident = {
      titre: this.form.value.titre || '',
      categorie: this.form.value.categorie as any,
      localisation: this.form.value.localisation || '',
      description: this.form.value.description || '',
      image: this.form.value.image || '',
    };

    this.incidentService.addIncident(newIncident);
    this.form.reset();
    this.router.navigate(['/']);
  }

}

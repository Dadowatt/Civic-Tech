import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Navbar } from "../../components/navbar/navbar";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-incident-form',
  imports: [ReactiveFormsModule],
  templateUrl: './incident-form.html',
  styleUrl: './incident-form.css',
})
export class IncidentForm {
  form = new FormGroup({
    titre: new FormControl('', Validators.required),
    categorie: new FormControl('', Validators.required),
    localisation: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.minLength(20)]),
    image: new FormControl(null)
  });

  onSubmit(){
    if (this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }

    const newIncident = {
      id: Date.now(),
      titre: this.form.value.titre || '',
      categorie: this.form.value.categorie || '',
      localisation: this.form.value.localisation || '',
      description: this.form.value.description || '',
      image: this.form.value.image || null,
      supports: 0,
      date: new Date()
    };
    console.log('Incident créé :', newIncident);

    this.form.reset();
  }

}

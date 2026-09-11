import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscripcion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inscripcion.html',
  styleUrl: './inscripcion.css'
})


export class Inscripcion {

  formulario = new FormGroup({

    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),

    apellido: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),

    correo: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    carrera: new FormControl('', [
      Validators.required
    ]),

    actividad: new FormControl('', [
      Validators.required
    ]),

    jornada: new FormControl('', [
      Validators.required
    ]),

    comentario: new FormControl('')
  });



  enviar() {

    if (this.formulario.valid) {

      console.log(this.formulario.value);

      alert('Inscripción realizada correctamente');

      this.formulario.reset();

    } else {

      this.formulario.markAllAsTouched();

    }

  }

}
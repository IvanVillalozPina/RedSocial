import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  generos: string[] = ['Masculino', 'Femenino', 'Transgenero'];
  formNuevoUsuario !: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {} 

  ngOnInit(): void {
    this.formNuevoUsuario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      apellidos: ['',Validators.required],
      genero: ['Masculino'],
      correo:['', [Validators.required, Validators.email]],
      direccion: this.fb.group({
        calle: ['', Validators.required],
        ciudad: ['',Validators.required],
        estado: ['',Validators.required],
        codigoPostal: ['']
      }),
    });
  }

  guardar(){
    console.log('Guardar');
    console.log(this.formNuevoUsuario);
  }

  getFormato(componente:string){
    let formato:string = 'form-control';

    if (this.formNuevoUsuario.get(componente)?.invalid && this.formNuevoUsuario.get(componente)?.touched){
      formato = 'form-control is-invalid';
    } else if (this.formNuevoUsuario.get(componente)?.valid && this.formNuevoUsuario.get(componente)?.touched){
      formato = 'form-control is-valid';
    }
    return formato;
  }

  getErrorMessage(componente:string){
    let message: string = '';
    let length: string = '';

    if(this.formNuevoUsuario.get(componente)?.hasError('required')){
      message = 'Este campo es requerido';
    } else if (this.formNuevoUsuario.get(componente)?.hasError('minlength')){
      length = this.formNuevoUsuario.get(componente)?.errors?.['minlength']?.['requiredLength'];
      message = ` La longitud mínima de este campo es de ${ length } caracteres. `;
    } else if (this.formNuevoUsuario.get(componente)?.hasError('email')){
      message = 'Correo con formato incorrecto';
    }
    return message;
  }

}

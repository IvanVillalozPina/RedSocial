import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/interfaces/Materia';
import { MateriasService } from 'src/app/services/materias.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css'],
})
export class MateriasComponent implements OnInit {
  semestreSeleccionado: number = 1;
  materias: Materia[] = [];
  constructor(private _materiasService: MateriasService) {
    this.materias = this._materiasService.getMaterias();
  }

  ngOnInit(): void {}
}

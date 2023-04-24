import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/interfaces/IPais';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: Pais[] = [];

  constructor(private paisesService: PaisesService) {
    this.paisesService.getPaises().subscribe((data: any) => this.paises = data);
   }

  ngOnInit(): void {
  }

}

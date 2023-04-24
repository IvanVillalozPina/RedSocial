import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pais } from 'src/app/interfaces/IPais';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-paises-detalle',
  templateUrl: './paises-detalle.component.html',
  styleUrls: ['./paises-detalle.component.css']
})
export class PaisesDetalleComponent implements OnInit {

  pais: any;

  constructor(private activatedRoute: ActivatedRoute, private _paisesService: PaisesService) { 
    this.activatedRoute.params.subscribe(params => {
      const id = params['id']
      this._paisesService.getPais(id).subscribe(response => {
        this.pais = response
        this.pais = this.pais[0]
        this.paisLanguagesMaker();
        console.log(this.pais)
      })
      
    })
  }

  ngOnInit(): void {
    // console.log(this.pais)
  }

  paisLanguagesMaker(){
    let languages = "";
    let spacer = ', ';
    for (let i in this.pais.languages){
      languages = languages + spacer + this.pais.languages[i].name;
    }
    languages = languages.slice(spacer.length)
    this.pais.kustom = {
      "languages": languages
    }
  }
  
}

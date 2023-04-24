import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises-tarjeta',
  templateUrl: './paises-tarjeta.component.html',
  styleUrls: ['./paises-tarjeta.component.css']
})
export class PaisesTarjetaComponent implements OnInit {

  @Input() pais: any;

  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.pais)
    this.paisLanguagesMaker();
  }

  paisLanguagesMaker(){
    let languages = "";
    let spacer = ', ';
    for (let i in this.pais.languages){
      languages = languages + spacer + this.pais.languages[i];
    }
    languages = languages.slice(spacer.length)
    this.pais.kustom = {
      "languages": languages
    }
  }
}

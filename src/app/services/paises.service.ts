import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor( private httpClient: HttpClient) { }

  private apiPaises = 'https://restcountries.com/v3.1/all';

  getPaises() {
    return this.httpClient.get(this.apiPaises);
  }

  getPais(pais: string) {
    const apiPais: string = `https://restcountries.com/v2/name/${pais}`;
    return this.httpClient.get(apiPais); 
  }
}

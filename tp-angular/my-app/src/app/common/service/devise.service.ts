import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  private tabDevises = [
    new Devise('EUR','Euro',1),
    new Devise('USD','Dollar',1.1),
    new Devise('GBP','Livre',0.9),
    new Devise('JPY','YEN',122)
  ];

  public convertir(montant:number ,
     codeMonnaieSource : string ,
     codeMonnaieCible : string ) : Observable<number> {
      return of(1.12345678); //simulation
    }

  public recupererDevises() :Observable<Devise[]>{
    return of(this.tabDevises); //simulation
  }

  //injecter http de type HttpClient (et aussi HttpClientModule dans app.module.ts)
  constructor() { }
}

import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  private tabDevises = [
    new Devise('EUR','Euro',1),
    new Devise('USD','Dollar',1.1),
    new Devise('GBP','Livre',0.9),
  ];

  //nouveau type de retour :Observable<number>
  public convertir(montant:number ,
     codeMonnaieSource : string ,
     codeMonnaieCible : string ) : number {
      return 1.12345; //simulation
    }
//nouveau type de retour :Observable<Devise[]>
  public recupererDevises() : Devise[]{
    return this.tabDevises; //simulation
  }

  constructor() { }
}

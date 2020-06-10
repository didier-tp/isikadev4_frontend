import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { Observable, of } from 'rxjs';
import { map , flatMap ,toArray ,filter} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {
/*
  private tabDevises = [
    new Devise('EUR','Euro',1),
    new Devise('USD','Dollar',1.1),
    new Devise('GBP','Livre',0.9),
    new Devise('JPY','YEN',122)
  ];
  */

  public convertir(montant:number ,
     codeMonnaieSource : string ,
     codeMonnaieCible : string ) : Observable<number> {
      //return of(1.12345678); //simulation
      //let url ="http://localhost:8282/devise-api/public/convert?source=EUR&target=USD&amount=200";
    let url =`./devise-api/public/convert/`
      +`?source=${codeMonnaieSource}&target=${codeMonnaieCible}&amount=${montant}`; 
      //url relative avec ng serve --proxy-config proxy.conf.json en mode DEV pour dediriger vers nodeJs
    return this.http.get<object>(url)
            .pipe(
               map((objResConv:any)=>{return objResConv.result; })
            );
    }

  public recupererDevises() :Observable<Devise[]>{
    //return of(this.tabDevises); //simulation
    //let url ="http://localhost:8282/devise-api/public/devise";
    let url ="./devise-api/public/devise"; //url relative avec 
    // ng serve --proxy-config proxy.conf.json en mode DEV pour dediriger vers nodeJs
    return this.http.get<Devise[]>(url);
  }

  //injecter http de type HttpClient (et aussi HttpClientModule dans app.module.ts)
  constructor(private http: HttpClient) { }
}

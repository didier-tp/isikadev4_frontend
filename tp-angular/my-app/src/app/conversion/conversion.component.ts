import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../common/service/devise.service';
import { Devise } from '../common/data/devise';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {
  montant : number ;
  codeMonnaieSource : string ;
  codeMonnaieCible : string ;
  listeDevises : Devise[];
  resConversion : number;

  constructor(public deviseService : DeviseService) { 
   
    deviseService.recupererDevises()
      .subscribe(
        (tabDevises)=>{this.listeDevises=tabDevises; 
                       this.codeMonnaieSource=this.listeDevises[0].code;
                        this.codeMonnaieCible=this.listeDevises[1].code;} ,
        (error) => { console.log(error); }
      );
     /*
     ObservableRetournéImmediatement.subscribe(
       callbackDéclenchéeEnDifféréEnCasDeSuccès,
       callbackDéclenchéeEnDifféréEnCasDeErreur
       );
    */
  }

  onConvertir(){
    this.deviseService.convertir(this.montant,
                                this.codeMonnaieSource,
                                this.codeMonnaieCible)
                      .subscribe(
                          (montantConverti)=>{this.resConversion=montantConverti; } ,
                          (error) => { console.log(error); }
                      );
  }

  ngOnInit(): void {
  }

}

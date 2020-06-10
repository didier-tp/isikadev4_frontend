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
    this.listeDevises = deviseService.recupererDevises();
    this.codeMonnaieSource=this.listeDevises[0].code;
    this.codeMonnaieCible=this.listeDevises[1].code;
  }

  onConvertir(){
    this.resConversion = this.deviseService.convertir(this.montant,
                                                      this.codeMonnaieSource,
                                                      this.codeMonnaieCible);
  }

  ngOnInit(): void {
  }

}

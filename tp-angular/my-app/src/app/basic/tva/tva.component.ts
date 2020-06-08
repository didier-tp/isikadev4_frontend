import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.scss']
})
export class TvaComponent implements OnInit {

  calcul = { ht : 0 ,
             taux : 20 ,
             tva : 0 , 
             ttc : 0 };

   listeTaux = [ 5 , 10 , 20]  ;          

  onCalculerTvaEtTtc(){
    this.calcul.tva = this.calcul.ht * this.calcul.taux / 100;
    this.calcul.ttc = Number(this.calcul.ht) + Number(this.calcul.tva);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

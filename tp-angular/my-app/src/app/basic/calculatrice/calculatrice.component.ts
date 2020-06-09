import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss']
})
export class CalculatriceComponent implements OnInit {

calcul = { a : 0 ,
           b : 0 ,
          res : 0};

  onAddition(evt){
      this.calcul.res=Number(this.calcul.a)+Number(this.calcul.b);
  }

  onMultiplication(){
    this.calcul.res=Number(this.calcul.a)*Number(this.calcul.b);
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}

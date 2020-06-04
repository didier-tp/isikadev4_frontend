import { Personne } from "./Personne";

export class Employe extends Personne{
    salaire : number;
  
    constructor(public numero : number =0 , 
                prenom = "?" , 
                nom="?" ){
      super(prenom,nom);
      this.salaire=0; //par defaut
    }
  
    afficherV1(){
      super.afficherV1();
      console.log(`avec numero=${this.numero} , salaire=${this.salaire}`)
   }
  
  }
  
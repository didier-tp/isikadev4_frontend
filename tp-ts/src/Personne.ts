export class Personne {
  private _age : number;

  constructor(public prenom : string ="?",
              public nom : string ="?"){
    this._age = 0;
    //Object.defineProperty(this, '_age', {enumerable: false});
  }

  incrementerAge():void{
    this.age++;
  }

  public get age() : number { return this._age;}
  public set age(newAge: number)  {
    if(newAge>=0)
       this._age = newAge;
    else console.log("age negatif interdit");
  }

  afficherV1(){
     console.log(`${this.prenom} ${this.nom} , age=${this.age}`)
  }

  afficherV2(){
    console.log(JSON.stringify(this));
  }
}


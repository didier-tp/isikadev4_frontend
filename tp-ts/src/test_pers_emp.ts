import { Personne } from "./Personne";
import { Employe } from "./Employe";



var p1 : Personne  = new Personne("jean","Bon");
p1.age = 30; 
p1.age = -50;
console.log("age de p1 :" + p1.age);
p1.incrementerAge();
console.log("age de p1 :" + p1.age);
console.log("prenom et nom de p1 :" + p1.prenom + " " + p1.nom);
console.log("p1 au format json =" + JSON.stringify(p1));
p1.afficherV1();
p1.afficherV2();

var e1 :Employe  = new Employe();
e1.age=20; e1.prenom="alex"; e1.nom="Therieur";
e1.numero=567;
e1.afficherV1();
var e2 :Employe  = new Employe(999,"axelle","Aire");
e2.age=30;
e2.salaire=2000;
e2.afficherV1();



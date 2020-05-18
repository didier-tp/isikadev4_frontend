
//variables globales:
var zoneBodyTableau;
//...
var tabDevises = [];

window.onload = function(){
	initialiserPage();
}

function initialiserPage(){
	console.log("initialiserPage");
	zoneBodyTableau=document.getElementById("bodyTableau");
	
	tabDevises.push({code:'EUR' , nom : 'Euro' , change : 1})
	tabDevises.push({code:'USD' , nom : 'Dollar' , change : 1.1})
	
	for(i=0;i<tabDevises.length;i++){
		var noeudTr = document.createElement("tr");
		zoneBodyTableau.appendChild(noeudTr);
		var noeudTd1 = document.createElement("td");
		noeudTr.appendChild(noeudTd1);noeudTd1.innerHTML = tabDevises[i].code;
		var noeudTd2 = document.createElement("td");
		noeudTr.appendChild(noeudTd2);noeudTd2.innerHTML = tabDevises[i].nom;
		var noeudTd3 = document.createElement("td");
		noeudTr.appendChild(noeudTd3);noeudTd3.innerHTML = tabDevises[i].change;
	}
}

function AjoutDevise(){
	//récuperer le contenu des zones saisies (code , nom , change)
	var valCode = ....;
	var valNom = ...;
	var valChange = ...;
	
	var nouvelleDevise = {
	     code : valCode,
		 nom : valNom,
		 change : valChange
	  } 
	  
	//ajout de nouvelleDevise dans le tableau javascript tabDevises
	//...
	
	//ajout de nouvelleDevise dans le tableau HTML (partie zoneBodyTableau)
}



//variables globales:
var zoneBodyTableau;
var zoneCode;
var zoneNom;
var zoneChange;
var tabDevises = [];

window.onload = function(){
	initialiserPage();
}

function initialiserPage(){
	console.log("initialiserPage");
	zoneBodyTableau=document.getElementById("bodyTableau");
	zoneCode=document.getElementById("code");
	zoneNom=document.getElementById("nom");
	zoneChange=document.getElementById("change");
	
	tabDevises.push({code:'EUR' , nom : 'Euro' , change : 1})
	tabDevises.push({code:'USD' , nom : 'Dollar' , change : 1.1})
	
	for(i=0;i<tabDevises.length;i++){
		/*
		var noeudTr = document.createElement("tr");
		zoneBodyTableau.appendChild(noeudTr);
		var noeudTd1 = document.createElement("td");
		noeudTr.appendChild(noeudTd1);noeudTd1.innerHTML = tabDevises[i].code;
		var noeudTd2 = document.createElement("td");
		noeudTr.appendChild(noeudTd2);noeudTd2.innerHTML = tabDevises[i].nom;
		var noeudTd3 = document.createElement("td");
		noeudTr.appendChild(noeudTd3);noeudTd3.innerHTML = tabDevises[i].change;
		*/
		var newRow = zoneBodyTableau.insertRow(-1) ;
        var newCell1 = newRow.insertCell(0); newCell1.innerHTML = tabDevises[i].code;
		newRow.insertCell(1).innerHTML = tabDevises[i].nom;
		newRow.insertCell(2).innerHTML = tabDevises[i].change;
	}
}

function ajoutDevise(){
	//récuperer le contenu des zones saisies (code , nom , change)
	var valCode = zoneCode.value;
	var valNom = zoneNom.value;
	var valChange = Number(zoneChange.value);
	
	var nouvelleDevise = {
	     code : valCode,
		 nom : valNom,
		 change : valChange
	  } 
	  
	//ajout de nouvelleDevise dans le tableau javascript tabDevises
	tabDevises.push(nouvelleDevise);
	
	//ajout de nouvelleDevise dans le tableau HTML (partie zoneBodyTableau)
	var newRow = zoneBodyTableau.insertRow(-1) ;//-1 pour ajout à la fin
	var newCell1 = newRow.insertCell(0); newCell1.innerHTML = nouvelleDevise.code;
	newRow.insertCell(1).innerHTML = nouvelleDevise.nom;
	newRow.insertCell(2).innerHTML = nouvelleDevise.change;
}


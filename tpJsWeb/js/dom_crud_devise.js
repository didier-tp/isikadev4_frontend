
//variables globales:
var zoneBodyTableau;
var zoneCode;
var zoneNom;
var zoneChange;
var idSelected; 
var currentDevise;
var tabDevises = [];

window.onload = function(){
	initialiserPage();
}

function reInitEmptyDevise(){
	idSelected=undefined;
	currentDevise={ code : "" , nom : "" , change : "" };
	displayDevise(currentDevise);
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
		/*
		var newRow = zoneBodyTableau.insertRow(-1) ;
        var newCell1 = newRow.insertCell(0); newCell1.innerHTML = tabDevises[i].code;
		newRow.insertCell(1).innerHTML = tabDevises[i].nom;
		newRow.insertCell(2).innerHTML = tabDevises[i].change;
		*/
		addDeviseRow(tabDevises[i]);
		document.getElementById("bntAdd").disabled = false; 
		document.getElementById("bntUpdate").disabled = true; 
		document.getElementById("bntDelete").disabled = true; 
	}
	reInitEmptyDevise();
}

function readDevise(devise){
	//récuperer le contenu des zones saisies (code , nom , change)
	//et peupler les parties de l'objet devise existant
	devise.code = zoneCode.value;
	devise.nom = zoneNom.value;
	devise.change = Number(zoneChange.value);
}

function displayDevise(devise){
	//afficher les parties de l'objet devise dans les zones de la page
	 zoneCode.value=devise.code ;
	 zoneNom.value=devise.nom ;
	 zoneChange.value=devise.change;
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
	 if(testValidId(valCode)){ 
		//ajout de nouvelleDevise dans le tableau javascript tabDevises
		tabDevises.push(nouvelleDevise);
		//ajout de nouvelleDevise dans le tableau HTML:
		addDeviseRow(nouvelleDevise);
		reInitEmptyDevise();
		mettreEnValeurLigneSelectionnee(null);
	 }else{
		alert("invalid id (duplicated or empty)!!!");
		zoneCode.focus()
	 }
}

function updateDevise(){
	if(idSelected!=null){
		readDevise(currentDevise);
		if(currentDevise.code == idSelected){
		    remplacerValeursDeLigneDansTableau(currentDevise);
		}
		else{
			alert("invalid change of id/code for update !!!");
		    zoneCode.focus()
		}
	}
}


function newDevise(){
	reInitEmptyDevise();
	document.getElementById("bntAdd").disabled = false; 
	document.getElementById("bntUpdate").disabled = true; 
	document.getElementById("bntDelete").disabled = true; 
	mettreEnValeurLigneSelectionnee(null);
}

function deleteDevise(){
	if(idSelected!=null){
	    var d = null;
		for(i=0;i<tabDevises.length;i++){
			if(tabDevises[i] && tabDevises[i].code == idSelected){
				d=tabDevises[i]; 
				//delete tabDevises[i]; break;
			  //NB: delete ...[i] met à null ...[i]
			  tabDevises.splice(i,1); break;
			  //tabDevises.splice(i,2,val1,val2);
			  //remplace [i] et [i+1] par val1 et val2
			  //tabDevises.splice(i,1); 
			  //remplace par rien et donc supprime
			}
		}
		if(d!=null){
			//********** A FAIRE EN TP:
			//récupérer un accès à la ligne du tableau dont
			//l'id est "tr_"+idSelected
			//si cette ligne existe , la supprimer vis à vis de l'élément parent
			//de l'arbre DOM ...parentNode , .removeChild(...)
			var trASupprimer = document.getElementById("tr_"+idSelected);
			if(trASupprimer){
				var parentDeTrDansArbreDom = trASupprimer.parentNode;
				parentDeTrDansArbreDom.removeChild(trASupprimer);
			}
			//************************
			reInitEmptyDevise();
		}
	}
}

function tabDeviseElementFromCode(code){
	var d = null;
	for(i=0;i<tabDevises.length;i++){
		if(tabDevises[i].code == code){
			d=tabDevises[i]; break;
		}
	}
	return d;
}

function mettreEnValeurLigneSelectionnee(selectedTr){
	var trNodeList = zoneBodyTableau
	        .getElementsByTagName("tr");
	var nbLines = trNodeList.length;
	for(i=0;i<nbLines;i++){
		var tr = trNodeList.item(i);
		if(tr == selectedTr){
			//********** A FAIRE EN TP:
			//sur tr.querySelector("td") changer le style backgroundColor 
			//à la valeur="lightblue";
			tr.querySelector("td").style.backgroundColor="lightblue";
			//****************************
		}else{
			//********** A FAIRE EN TP:
			//sur tr.querySelector("td") changer le style backgroundColor 
			//à la valeur="white";
			tr.querySelector("td").style.backgroundColor="white";
			//****************************
		}
	}
}

function selectionnerDevise(code){
	idSelected=code;
	console.log("idSelected="+idSelected);
	currentDevise=tabDeviseElementFromCode(idSelected);
	displayDevise(currentDevise);
	document.getElementById("bntAdd").disabled = true; 
	document.getElementById("bntUpdate").disabled = false; 
	document.getElementById("bntDelete").disabled = false; 
}

function testValidId(newId){
	if(newId==undefined || newId == "") return false;
	var res=true;
	for(i in tabDevises){
		if( tabDevises[i] && tabDevises[i].code == newId){
			res=false;
		}
	}
	return res;
}

function addDeviseRow(devise){
	//ajout de nouvelleDevise dans le tableau HTML (partie zoneBodyTableau)
	var newRow = zoneBodyTableau.insertRow(-1) ;//-1 pour ajout à la fin
	//************ A FAIRE EN TP:
	//sur newRow fixer l'attribut "id" à la valeur "tr_"+devise.code
	newRow.setAttribute("id","tr_"+devise.code);
	//****************************
	//pour acces rapide future suppression et autre
	var newCell1 = newRow.insertCell(0);
	//************ A FAIRE EN TP:
	//enregistrer un déclenchement en différé des 2 lignes d'instructions
	//suivante lors d'un futur événement "click" sur l'élément myCell1:
	newCell1.addEventListener("click" , function () { 
		selectionnerDevise(devise.code);
		mettreEnValeurLigneSelectionnee(newRow);
	});	
	//*************************************
	newCell1.innerHTML = devise.code;
	newRow.insertCell(1).innerHTML = devise.nom;
	newRow.insertCell(2).innerHTML = devise.change;
}

function remplacerValeursDeLigneDansTableau(devise){
	var trAModif = 
	   document.getElementById("tr_"+devise.code);
	   if(trAModif){
	      //var listeTd = trAModif.querySelectorAll("td");
		  var listeTd = trAModif.getElementsByTagName("td");
		  listeTd[0].innerHTML=devise.code;
		  listeTd[1].innerHTML=devise.nom;
		  listeTd[2].innerHTML=devise.change;
	   }
}

//********** A FAIRE GLOBALEMENT EN TP :
//comprendre la logique du code
//ajouter d'éventuelles améliorations ou variantes
//ne pas hésitez à tout reprogrammer en partant de zéro si temps suffisant
//pour s'entraîner .

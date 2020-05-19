
window.onload = function () {
	//code js décleché au chargement de la page
	var zoneBtnAdd = document.getElementById("btnAdd");
	
	zoneBtnAdd.addEventListener("click", function (){
		 calculerOperation('+');
		 //....
		 //....
	});
	
}


var zoneRes;
var cpt=0;

function initZones(){
	zoneRes=document.getElementById("spanRes");
}

function calculerOperation(pOperation){
		  initZones();
		  var a =  document.getElementById("a").value;
		  console.log("a="+a);
		  var b =   document.getElementById("b").value;
		  console.log("b="+b);
		  
		  var res = 0;
		  switch(pOperation){
		  case '+':
		      res = Number(a)+Number(b); // le + déclenche une concaténation entre 2 string
		                 //ou bien une addition entre 2 choses numériques
			  break;
		  case '*':
			  res=a*b;  break;
		  case '-':
			  res=a-b;  break;
		  case '/':
			  res=a/b;  break;
		  default:
			  res="?";  break;
		   }
		  
		  //document.getElementById("spanRes").innerHTML = res;
          zoneRes.innerHTML = res;
		 
		  var zoneUlHisto = document.getElementById("ulHistorique");
          var noeudLi = document.createElement("li");
		  cpt++;
		  noeudLi.setAttribute("id","li"+cpt);
		  zoneUlHisto.appendChild(noeudLi);
		  var texteCalcul = "a="+a + " op=" + pOperation + 
		     " b=" + b + " res=" +res;
		  //var noeudTexte=document.createTextNode(texteCalcul);
		  //noeudLi.appendChild(noeudTexte);
		  noeudLi.innerHTML = texteCalcul;
		}
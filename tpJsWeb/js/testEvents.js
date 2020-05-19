window.onload = function () {
	
	var zoneDivA = document.querySelector("#divA");
	
	zoneDivA.addEventListener("mousemove",function (evt){
		console.log("evt.type="+evt.type);
		console.log("evt.target.id="+evt.target.id);
		
		console.log("evt.pageX="+evt.pageX);
		console.log("par rapport à la page, evt.pageY="+evt.pageY);
		console.log("par rapport à divA, y="+(evt.pageY - zoneDivA.offsetTop));
	});
	
	
	var zoneSelectCategorie = document.querySelector("#categorie");
	
	zoneSelectCategorie.addEventListener("change",function (evt){
		var valeurCategorieChoisie = zoneSelectCategorie.value;
		document.querySelector("#msg2").innerHTML= valeurCategorieChoisie;
	});
}
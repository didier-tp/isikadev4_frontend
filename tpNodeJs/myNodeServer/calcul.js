function tva(ht,taux){
	return ht*taux/100;
}

function ttc(ht,taux){
	return ht + tva(ht,taux) ;
}

exports.ttc = ttc ; 

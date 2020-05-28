var express = require('express');
const apiRouter = express.Router();

var myGenericMongoClient = require('./my_generic_mongo_client');

function replace_mongoId_byCode(devise){
	devise.code = devise._id;
	delete devise._id; 
	return devise;
}

function replace_mongoId_byCode_inArray(deviseArray){
	for(i in deviseArray){
		replace_mongoId_byCode(deviseArray[i]);
	}
	return deviseArray;
}

function findDevisesWithChangeMini(devises,changeMini){
	var selDevises=[];
	for(i in devises){
		if(devises[i].change >= changeMini){
			  selDevises.push(devises[i]);
		}
	}
	return selDevises;
}


//exemple URL: http://localhost:8282/devise-api/public/devise/EUR
apiRouter.route('/devise-api/public/devise/:code')
.get( function(req , res  , next ) {
	var codeDevise = req.params.code;
	myGenericMongoClient.genericFindOne('devises',
										{ '_id' : codeDevise },
									    function(err,devise){
										   res.send(replace_mongoId_byCode(devise));
									   });
	
});

//exemple URL: http://localhost:8282/devise-api/public/devise (returning all devises)
//             http://localhost:8282/devise-api/public/devise?changeMini=1.05
apiRouter.route('/devise-api/public/devise')
.get( function(req , res  , next ) {
	var changeMini = req.query.changeMini;
	myGenericMongoClient.genericFindList('devises',{},function(err,allDevises){
		if(changeMini){
			res.send(replace_mongoId_byCode_inArray(findDevisesWithChangeMini(allDevises,changeMini)));
		}else{
		   res.send(replace_mongoId_byCode_inArray(allDevises));
		}
	});//end of genericFindList()
});

// http://localhost:8282/devise-api/private/role-admin/devise en mode post
// avec { "code" : "mxy" , "name" : "monnaieXy" , "change" : 123 } dans req.body
apiRouter.route('/devise-api/private/role-admin/devise')
.post( function(req , res  , next ) {
	var nouvelleDevise = req.body;
	console.log("POST,nouvelleDevise="+JSON.stringify(nouvelleDevise));
	nouvelleDevise._id=nouvelleDevise.code;
	myGenericMongoClient.genericInsertOne('devises',
										nouvelleDevise,
									     function(err,devise){
										     res.send(nouvelleDevise);
									    });
});

// http://localhost:8282/devise-api/private/role-admin/devise en mode PUT
// avec { "code" : "USD" , "name" : "Dollar" , "change" : 1.123 } dans req.body
apiRouter.route('/devise-api/private/role-admin/devise')
.put( function(req , res  , next ) {
	var newValueOfDeviseToUpdate = req.body;
	console.log("PUT,newValueOfDeviseToUpdate="+JSON.stringify(newValueOfDeviseToUpdate));
	myGenericMongoClient.genericUpdateOne('devises',
	newValueOfDeviseToUpdate.code ,
	{ nom : newValueOfDeviseToUpdate.nom , 
	  change : newValueOfDeviseToUpdate.change} ,
	function(err,devise){
			if(err){
				res.status(404).json({ error : "no devise to update with code=" + newValueOfDeviseToUpdate.code });
			}else{
					res.send(newValueOfDeviseToUpdate);
			 }
	});	//end of genericUpdateOne()
});

// http://localhost:8282/devise-api/private/role-admin/devise/EUR en mode DELETE
apiRouter.route('/devise-api/private/role-admin/devise/:code')
.delete( function(req , res  , next ) {
	var codeDevise = req.params.code;
	console.log("DELETE,codeDevise="+codeDevise);
	myGenericMongoClient.genericRemove('devises',{ _id : codeDevise },
									     function(err,devise){
										     res.send({ deletedDeviseCode : codeDevise } );
									    });
});

exports.apiRouter = apiRouter;
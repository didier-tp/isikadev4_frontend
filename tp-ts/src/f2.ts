var tab1 = [ "javascript" , "typescript" , "dom" ];
var tab2 : string[] = []; 
for(let val of tab1){
    tab2.push(val.toUpperCase());
}
console.log(tab2);

/*
cet exemple necessite 
     "lib": ["es2015","dom"],
et   "downlevelIteration": true,  
  dans tsconfig.json
*/
var m = new Map();
m.set("hiver", "froid , neige");
m.set("primptemps", "fleur , vert");
for(let [k,v] of m.entries()){
    console.log("saison "+ k + " -- " + v);
    }

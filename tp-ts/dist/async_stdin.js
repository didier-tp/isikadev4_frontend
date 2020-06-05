
var stdin = process.stdin;
var stdout = process.stdout;
function ask(question, callback) {
    stdin.resume();
    stdout.write(question + ": ");
    stdin.once('data', function(data) {
        data = data.toString().trim();
        callback(data);
    });
}	
//ask("nom", function(nomSaisi){ console.log("nomSaisi="+nomSaisi); });
var a;
var x;
var b;
var res;

ask("a", function(sA){ 
   a = Number(sA);
   ask("x", function(sX){
	   x= Number(sX);
	   ask("b", function(sB){
	      b= Number(sB);
		  res=a*x+b;
		  console.log("a*x+b="+res);
		  process.exit()
       });
   });
});

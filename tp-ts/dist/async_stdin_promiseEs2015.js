
var stdin = process.stdin;
var stdout = process.stdout;

function ask_(question) {
    return new Promise ((resolve,reject)=> {
        stdin.resume();
        stdout.write(question + ": ");
        stdin.once('data', function(data) {
        data = data.toString().trim();
        if(data=="fin")
           reject("end/reject");
        else
           resolve(data);
        });
    });
 }

var a;
var x;
var b;
var res;

ask_("a")
.then((sA)=>{  a = Number(sA); return ask_("x");})
.then((sX)=> {  x= Number(sX); return ask_("b");})
.then((sB)=> { b= Number(sB);
                res=a*x+b;
                console.log("a*x+b="+res);
                process.exit()
})
.catch((err)=>{console.log(err);process.exit();});



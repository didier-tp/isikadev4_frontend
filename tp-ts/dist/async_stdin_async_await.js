
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

 async function ask_and_compute_a_fois_x(){
   try{
      let a,x;
      const valA = await ask_("a"); a=Number(valA);
      const valX = await ask_("x"); x=Number(valX);
      let aFoisX=a*x ;   return aFoisX;
   }
   catch(e){
      console.log(e);
      throw new Error("aFoisX-error:"+e);
   }
}
async function a_fois_x_plus_b(){
   try{ 
      const aFoisX = await ask_and_compute_a_fois_x();
      const valB = await ask_("b"); const b=Number(valB);
      let res=aFoisX +b ;console.log("a*x+b=" +res);
   }
   catch(e){
         console.log(e);
   }
   process.exit();
}

a_fois_x_plus_b();


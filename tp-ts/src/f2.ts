var tab1 = [ "javascript" , "typescript" , "dom" ];
var tab2 : string[] = []; 
for(let val of tab1){
    tab2.push(val.toUpperCase());
}
console.log(tab2);
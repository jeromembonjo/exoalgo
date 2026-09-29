let nombreEnFarenthein ;
const readline = require('readline');
const rl =readline.createInterface({input :process.stdin,output:process.stdout});
rl.question("quelle est la temperature  ?", (nombreEnCellecus) =>{
    if (nombreEnCellecus<=0){
        console.log(nombreEnCellecus);
       nombreEnFarenthein=nombreEnCellecus;
    }else{
        nombreEnFarenthein=nombreEnCellecus*(9/5)+32;
    }
    console.log(nombreEnFarenthein)
    rl.question("remise ?",(remise)=>{
        console.log(remise);
    } )
})
rl.close();
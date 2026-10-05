let tailleDuTableuDeMultiplication=0
let valeurDeLaTable=[]
let hautdelatable=[];

function pad(num, width) {
    return String(num).padStart(width, " ");
}

const prompt = require('prompt-sync')();
tailleDuTableuDeMultiplication =prompt('taille Du Tableau De Multiplication ? ')

for(let k=0;k<tailleDuTableuDeMultiplication;k++){
    hautdelatable+=pad(parseInt(k+1),6);
}
console.log(hautdelatable);
console.log("----|" + "------".repeat(tailleDuTableuDeMultiplication));
for (let i=0; i<tailleDuTableuDeMultiplication; i++){
    let ligne=pad(i,3)+" |";

    for (let j=1; j<tailleDuTableuDeMultiplication; j++){

        ligne += pad(parseInt(i)*parseInt(j+1),4)+" |";


    }

console.log(ligne)

}

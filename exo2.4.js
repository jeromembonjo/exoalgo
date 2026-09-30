let motdepasse;
let logueurvalide=false;
let majuscule=false;
let mininucule=false;
let nombre=false;
let valide=false;
//déclaration des variable
const prompt = require('prompt-sync')();
motdepasse=prompt('un mots de passe  ? ');//saisir un mot de passe
if (motdepasse.length>=8){//si al longueur est superieur à 8
    logueurvalide=true;//la vriable logueurvalide passe à true

}
for (let i=0;i<motdepasse.length;i++) {//parcourir le mot de passe
    if ((motdepasse[i] >= "A") && (motdepasse[i] <= "Z")) {//si la valeur parcour est comprise entre "A" et "Z"

        majuscule=true;//la variable majuscule passe à true
    }
    if ((motdepasse[i] >= "a") && (motdepasse[i] <= "z")) {//si la valeur parcour est comprise entre "a" et "z"

        mininucule=true;//la variable miniucule passe à true
    }
    if ((motdepasse[i] >= "0") && (motdepasse[i] <= "9")) {//si la valeur parcour est comprise entre "0" et "9"

        nombre=true;//la variable nombre passe à true

    }
    console.log(motdepasse.length);

}
if(logueurvalide===true && majuscule===true && mininucule===true && nombre===true){//si toutes les valriable sont à true
    valide=true;//la varible valide prend elle aussi true
    console.log("votre mot de passe est valide ");

}else{//sinon le mot de passe est pas valide
    console.log("votre mot de passe est invalide");
}
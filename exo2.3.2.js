let nombreDeEntre=0;
let resultat;
//declaration des variable
let mupltipeDe5=false;
let mupltipeDe3=false;
const prompt = require('prompt-sync')();
nombreDeEntre=prompt('un nombre ? ');//saisir du nombre
nombreDeEntre=parseInt(nombreDeEntre)
for (let i=1;i<(nombreDeEntre+1);i++){//boucle pour le nombre

    if (i%5===0){
        resultat+="fizz";//si le nombre est divible par 5 afficher FIZZ
        mupltipeDe5=true;

    }
    if(i%3===0 ){
        resultat+="buzz"//si il est divible par 3 rajouter BUZZ
        mupltipeDe3=true;

    }
    if(i%7===0 ){
        resultat+="wazz"//si il est divible par 5 rajouter wazz

    }



    if(i%5!==0&&i%3!==0&&i%7!==0){
        resultat=i;//cas par défault

    }
    console.log(resultat);
resultat="";

}
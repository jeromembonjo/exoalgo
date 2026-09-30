let nombreDeEntre=0;
let resultat;
//declaration des variable
let mupltipeDe5=false;
const prompt = require('prompt-sync')();
nombreDeEntre=prompt('un nombre ? ');//saisir du nombre
nombreDeEntre=parseInt(nombreDeEntre)
for (let i=1;i<(nombreDeEntre+1);i++){//boucle pour le nombre
    if (i%5===0){
        resultat="fizz";//si le nombre est divible par 5 afficher FIZZ
        mupltipeDe5=true;
    }
    if(i%3===0 && mupltipeDe5===true){
        resultat+="buzz"//si il est divible par 5 et par 3 rajouter BUZZ
    }
    if(i%3===0 && mupltipeDe5===false){
        resultat="buzz"//si il est par divisible par 5 afficher buzz 
    }
    if(i%5!==0&&i%3!==0){
        resultat=i;
    }
    console.log(resultat);
    resultat="";
}
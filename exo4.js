
let nombreAleatoire=Math.random()
let nombreRentre=0;
let compteur=1;
//declaration des variable
const prompt = require('prompt-sync')();


nombreAleatoire = parseInt(nombreAleatoire * 100);
do{
    nombreRentre=prompt("entrez un nombre?");




console.log(nombreAleatoire);
        nombreRentre = parseInt(nombreRentre);
//typer le nombre

        if (nombreAleatoire < nombreRentre) {
            //si trop petit
            console.log('trop petit');
            compteur++;

        } else if (nombreAleatoire > nombreRentre) {
            //si trop grand
            console.log('trop grand');

            compteur++;

        }



        }while(nombreRentre!==nombreAleatoire)

console.log("barvo vous avez trouvez en "+compteur);
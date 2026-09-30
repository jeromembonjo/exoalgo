let nombre1=0;
let nombre2=0;
let operateur;
let resultat;
//déclaration des valeurs
const readline = require('readline');
const rl =readline.createInterface({input :process.stdin,output:process.stdout});
rl.question("quelle est le nombre 1 ?", (nombre1) => {
    //affectation du nombre1
    nombre1=parseInt(nombre1);

    rl.question("quelle est le nombre 2 ?", (nombre2) => {
        //affectation du nombre2
        nombre2=parseInt(nombre2);
        rl.question("quelle est opérateur  ?", (operateur ) => {
            //affectation du operateur
            switch (operateur){
                case "+":
                    //si operateur ==="+"
                    console.log("+");
                    resultat=nombre1+nombre2;
                    //calcul du résultat
                 console.log(resultat);
                 //affichage du résultat
                 break;
                case "-":
                //si operateur ==="-"
                    resultat=nombre1-nombre2;
                    //calcul du résultat
                    console.log(resultat);
                    //affichage du résultat
                    break;
                case "*":
                    //si operateur ==="*"
                    resultat=nombre1*nombre2;
                    //calcul du résultat
                    console.log(resultat);
                    //affichage du résultat
                    break;
                case "/":
                    //si operateur ==="/"
                    if (nombre1!==0 && nombre2!==0){
                        //si nombre1 && nombre2 <> 0
                        resultat=nombre1/nombre2;
                        //calcul du résultat
                        console.log(resultat);
                        //affichage du résultat
                    }else{
                        //sinon
                        console.log("division par 0 impossible ");
                    }
                break;
                default:
                    console.log("operateur inconnu");

            }
            rl.close();
        });
    });

});

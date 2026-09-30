let prixht;
let TV;
let remise;
let prixTTC=0;
//insalisation des variable
const readline = require('readline');
const rl =readline.createInterface({input :process.stdin,output:process.stdout});
rl.question("quelle est le prix ?", (prixht) => {
    parseInt(prixht);
    ///atribution de la variable prix
    console.log(prixht)
    rl.question("taux remise ?", (remise) => {
        console.log(remise);
        ///inisalisation de la variable remise
        remise=prixht*remise/100;
        prixht=parseFloat(parseInt(remise)-parseInt(prixht));
        ///calcul de la remise
        console.log(prixht);
        console.log(remise);
        rl.question("TVA ?", (TVA) => {
            console.log(TVA);
            ///insialisation de la TVA
            parseInt(TVA);
            console.log((parseInt(prixht)-parseInt(remise)))
            TVA=parseFloat(prixht)*(TVA/100);
            ///calcul de la tva
            console.log(TVA);
            prixTTC=parseInt(prixht)-parseInt(TVA);
            ///calcul du prix total
            console.log(prixTTC);
            rl.close();
        })
    })

})


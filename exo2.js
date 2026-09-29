let prixht;
let TV;
let remise;
let prixTTC=0;
const readline = require('readline');
const rl =readline.createInterface({input :process.stdin,output:process.stdout});
rl.question("quelle est le prix ?", (prixht) => {
parseInt(prixht);
    console.log(prixht)
    rl.question("taux remise ?", (remise) => {
        console.log(remise);
        remise=prixht*remise/100;
        prixht=parseFloat(parseInt(remise)+parseInt(prixht));
        console.log(prixht);
        console.log(remise);
        rl.question("TVA ?", (TVA) => {
            console.log(TVA);
            parseInt(TVA);
            console.log((parseInt(prixht)-parseInt(remise)))
TVA=parseFloat(prixht)*(TVA/100);
            console.log(TVA);
            prixTTC=parseInt(prixht)-parseInt(TVA);
            console.log(prixTTC);
            rl.close();
        })
    })

})


// Declaration

const calcul = (num1, num2) => {
    return new Promise ((resolve,reject)=>{

        const result = num1*num2

        if (result<100000){
            resolve(result)
        }
        else{
            reject("resultat trop petit")
        }
    })
}



//UTILISATION

calcul(200,32).then(function(result) {
    console.log('Resultat : ' + result)
}).catch((err) => {
    console.log("Oups")
})
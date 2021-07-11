
function checkAge(age){
    if(age>=18){
        return true;
    }else{
        return confirm('Do you have permission from your parents?');
    }

}



function showPrimes(n){
    for(let i=2; i<n;i++){
        if(!isPrime(i)) continue;
        console.log(i + ' is a Prime number');
    }
}

function isPrime(n){
    for (let i=2;i<n;i++){
        if(n%i==0) return false;
    }
    return true;
}


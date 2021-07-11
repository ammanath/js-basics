
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

function min(a,b){
    return a<b?a:b;
}

function pow(x,n){
    let result=x;
    for(let i=1;i<n;i++){
        result *= x;
    }
    return result;

}


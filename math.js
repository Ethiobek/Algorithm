function fibonacci(n){
    const list = [0,1];
    for(i=2;i<n;i++){
        list[i]=list[i-1]+list[i-2];
    }
    return list;
}

function factorial(n){
    for(i=n-1;i>1;i--){
        n=n*i;
    }
    return n;
}

function isPrime(n){
    if(n<2){
        return false;
    }
    for(i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}

// Outputs
console.log(fibonacci(7))
console.log(factorial(3))
console.log(isPrime(1))
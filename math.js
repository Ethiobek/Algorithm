function fibonacci(n){
    const list = [0,1];
    for(i=2;i<n;i++){
        list[i]=list[i-1]+list[i-2];
    }
    return list;
}
console.log(fibonacci(7))
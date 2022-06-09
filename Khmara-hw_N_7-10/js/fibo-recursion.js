function recursion_fib(val){
    if(val==1 || val==2){
        return 1;
    } else {
        return recursion_fib(val-2) + recursion_fib(val-1);
    }

}

console.log('Task N10: recursion (for number 6) = ' + recursion_fib(6)); 
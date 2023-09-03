let pow = (num, pow) => {
    let result = 1;

    for(let i = 1; i <= pow; i++){
        result *= num;
    }

    return result;
}

console.log(pow(12, 2));
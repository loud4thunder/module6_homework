function isPrime(num){
    if (num < 2 || num > 1000) {
        return "Данные некорректны!";
    }
    else {
        for (let i = 2; i < num; i++){
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}

let num = Math.floor(Math.random() * 2000);

if(isPrime(num) === false){
    console.log("Число " + num + ' не простое');
}
else if(isPrime(num) === true){
    console.log("Число " + num + ' простое');
}
else{
    console.log("Число " + num +  " некорректно!");
}
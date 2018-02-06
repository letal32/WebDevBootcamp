function isEven(x) {
    return x % 2 === 0;
}

function factorial(x) {

    var factorized = 1;
    for (var i=2; i <= x; i++){
        factorized *= i; 
    }

    return factorized;
}

function kebabToSnake(str) {

    return str.replace(/-/g, "_");
}
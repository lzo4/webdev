function CalcAndDisp(calcFn,dispFn,...numbers) {
    let result = calcFn(numbers);
    dispFn(result);
}

function add(...numbers) {
    let sum = 0;
    for (number of numbers){
        sum += number;
    }
    return sum;
}

function minus(...numbers) {
    let sum = 0;
    for (number of numbers){
        sum -= number;
    }
    return sum;
}
function CalcAndDisp(calcFn,dispFn,...numbers) {
    let result = calcFn(...numbers);
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
    let sum = numbers[0];
    for (let i =1;i < numbers.length;i++){
        sum -= numbers[i];
    }
    return sum;
}

CalcAndDisp(add,console.log,...[9,10,0,4,10]);
CalcAndDisp(minus,alert,...[5,4,4]);
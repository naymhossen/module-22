function checkPositiveNumber (numbers){
    let positiveNumber = [ ];
    for (let i=0; i <=  numbers.length; i++ ){
        let number = numbers[i];

        if(number >= 0){
            positiveNumber.push(number);
        }
        else{
            break;
        }
    }
    return positiveNumber;
}

const numbers = [3, 6, 8, 10, -2, 4, 7, -5, 12];
const getPositive = checkPositiveNumber(numbers);
console.log(getPositive);
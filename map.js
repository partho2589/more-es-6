const numbers  = [4, 6, 8, 10, 12];
const output = [];

/* function objectOld (number){
    return number * 2;
} */

const numberIt = number => number*2;
/* for (const number of numbers){
    const result =numberIt(number) ;
    output.push (result);
};
console.log(output) */

const squares = numbers.map(numbers => numbers * numbers)
console.log(squares)

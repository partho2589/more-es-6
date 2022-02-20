
// 1 lat and const 
const hubby = 'Omor sani';
let phon = 'vivo Y71';
// phon = 'samsung A20'

// 2. difault function
function maxNumber (array = []){
     const max = Math.max(...array)
     return max
}
const biggest = maxNumber( )
console.log(biggest)

// 3 Tamplate string
const myNote = `This is my computer. This is my phon name ${phon}`
// console.log(myNote)

// 4 spread or three (...)

// 5 arrow function
/* function square (x){
    return x*x
} */
const square = x => x*x;
console.log(square(8))
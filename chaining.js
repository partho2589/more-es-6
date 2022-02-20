// declare variable based on the name of an object porarti

const myObject = {x:36, y:37, z: 69, a: 499, b: 699, c:200}
const {x, b, a, c, y} = myObject;
// console.log(x, b, a)

const array = [10, 50, 55, 11, 11, 22, 55, 88, ];
const [frist, second, thrid, ] = array;
// console.log(frist, second, thrid);

const compani = { 
    name: 'GP', 
    web:{ 
        frist:'html', thrid:'tailwine', 
        second: 'css',
         fiemwork:{ 
             siteName:'bootstrap',
             amplary:{
                 manth:500, 
                 jobName: "developer",
                  salari:50000}
             }
            } 
        };

const manth = compani?.bwev?.fiemwork.amplary.manth
console.log(manth)
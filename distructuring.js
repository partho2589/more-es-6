const fish = { name: 'elish', id:50, phon:01736646522, color: 'silver', price: 1200};

// const name = fish.name
// const id = fish.id;
// const color = fish.color;
// console.log(name, id, color);

const {name, id} = fish;
// console.log( name, id)


const compani = { 
    name: 'GP', 
    web:{ 
        frist:'html', 
        second: 'css',
         fiemwork:{ 
             siteName:'bootstrap',
             }
            } 
        };


const {fiemwork} = compani.web
console.log(fiemwork)
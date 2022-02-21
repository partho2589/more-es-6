class Support {
    name;
    disignation = 'support '
    address = 'BD'
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, 'start a support session')
    }
}
const aamir = new Support('amir', 'dhaka');
const sulaiman = new Support ( 'sulaiman', 'madariput')
aamir.startSession();
sulaiman.startSession();
// console.log( aamir, sulaiman )
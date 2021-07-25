/* ************CLASSES: blueprint for objects************ */

class Invoice{
    // client: string;
    // details: string;
    // amount: number;


    constructor(
        readonly client: string,
        readonly details: string,
        public amount: number
    ){}

    format(){
        return `${this.client} owes ${this.amount}€ for ${this.details}`
    };
}

const invOne = new Invoice('xxx', 'portfolio', 3000);
const invTwo = new Invoice('yyy', 'portfolio', 2500)

console.log(invOne.format()); 
console.log(invTwo.format()); 

let invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

invoices.forEach(e =>{
    console.log(e.client, e.details, e.amount);
})


const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

//inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) =>{
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
})
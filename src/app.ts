import { Invoice } from "./classes/invoice.js";
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter';

/* let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('javier', 'portfolio', 2500);
docTwo = new Payment('jose', 'portfolio work', 2500);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);

docs.forEach(e =>{
    console.log(docTwo.format());
    console.log(docOne.format());
})
 */
/* interface IsPerson{
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'jose',
    age: 30,
    speak(text: string): void{
        console.log(text);
    },
    spend(amount: number): number{
        console.log('i spend', amount);
        return amount;
    }
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
    console.log(e.client, e.amount);
}) */


const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

//inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) =>{
    e.preventDefault();

    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    console.log(doc);
});
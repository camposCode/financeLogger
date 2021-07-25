import { Invoice } from "./classes/invoice.js";
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter'

interface IsPerson{
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
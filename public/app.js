"use strict";
/* ************CLASSES: blueprint for objects************ */
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + "\u20AC for " + this.details;
    };
    ;
    return Invoice;
}());
var invOne = new Invoice('xxx', 'portfolio', 3000);
var invTwo = new Invoice('yyy', 'portfolio', 2500);
console.log(invOne.format());
console.log(invTwo.format());
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
var form = document.querySelector('.new-item-form');
// console.log(form.children);
//inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

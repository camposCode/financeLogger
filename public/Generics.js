"use strict";
//Creating a random ID
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'jose', age: 35 });
console.log(docOne);

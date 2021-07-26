//Creating a random ID

const addUID = <T>(obj: T) =>{
    let uid = Math.floor(Math.random() * 100);
    return{...obj, uid};
}

let docOne = addUID({name: 'jose', age: 35});
console.log(docOne);

//with Interfaces
interface Resource<T>{
    uid: number;
    resourceName: string;
    data: T;
}
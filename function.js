function sayHello(){
    return function(){
        return "hello john"
    }
}
let fn=sayHello();
console.log(fn())


const person={name:'john', address:{country:'kenya', city:'Nairobi'}};
const updated={...person, name:'junior', age:30}
person.address.city='Eldoret'
console.log(updated)

numbers=[1,2,3]

//adding

const newnumber=[...numbers, 4]
console.log(newnumber)

const index=numbers.indexOf(3)
console.log(index)
const added=[...numbers.slice(0, index),4, ...numbers.slice(index) ]
console.log(added)
//removing
const removed=numbers.filter(x=>x!==2)
console.log(removed)
//updating
const updatedno=numbers.map(n=>n==2? 20:n)
console.log(updatedno)
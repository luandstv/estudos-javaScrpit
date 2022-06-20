// for...in

let person = {
    name: 'lucas',
    age: 30,
    weight: 88.6
}

for(let property in person) {
    console.log(property)
    console.log(person.age)
    console.log(person.weight)

}
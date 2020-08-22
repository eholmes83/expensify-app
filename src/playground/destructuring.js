 /**
 * Object Destructuring
*/


// const person = {
//     name: 'Chuck',
//     age: 34,
//     location: {
//        city: 'Atlanta',
//         temp: 78
//     }
// }

// // const name = person.name
// // const age = person.age

// // changing variable name and setting defaults if property doesn't exist

// const { name: firstName = 'Anonymous', age } = person
// console.log(`${firstName} is ${age}`)

// const { city, temp } = person.location

// if (city && typeof temp === 'number') {
//   console.log(`It's ${temp} in ${city}`)
// }

// const book = {
//   title: 'Deez Nuts',
//   author: 'Jeezy',
//   publisher: { 
//     name: 'Malcolm Y'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName) // Malcolm Y, Self-Published


/**
 * Array Destructuring
*/

const address = ['123 Main Street', 'Atlanta', 'Georgia', '30339']
const [, city, state] = address
console.log(`You are in ${city}, ${state}.`)


const item = ['Coffee (iced)', '$2.00', '$2.50', '$2.75']
const [drink, , ,price] = item

console.log(`expected: A medium Coffee (hot) is $2.50`)
console.log(`actual: A large ${drink} is ${price}`)
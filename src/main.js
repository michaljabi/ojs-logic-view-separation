import { getFruitList, sortByPrice, sortByName } from './2nd-attempt.js'

console.log('BASE:')
console.log(JSON.stringify(getFruitList()))

sortByName()
console.log('Sorted by Name:')
console.log(JSON.stringify(getFruitList()))

sortByPrice()
console.log('Sorted by Price:')
console.log(JSON.stringify(getFruitList()))

sortByPrice()
console.log('Sorted by Price Again:')
console.log(JSON.stringify(getFruitList()))

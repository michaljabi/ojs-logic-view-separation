import { fruitService } from './2nd-attempt.js'

console.log('BASE:')
console.log(JSON.stringify(fruitService.getFruitList()))

fruitService.sortByName()
console.log('Sorted by Name:')
console.log(JSON.stringify(fruitService.getFruitList()))

fruitService.sortByPrice()
console.log('Sorted by Price:')
console.log(JSON.stringify(fruitService.getFruitList()))

fruitService.sortByPrice()
console.log('Sorted by Price Again:')
console.log(JSON.stringify(fruitService.getFruitList()))

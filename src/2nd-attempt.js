// Najpierw definiujemy nasze dane:
const fruits = [
	{name: 'Cherry', price: 0.2},
	{name: 'Banana', price: 1},
	{name: 'Apple', price: 2},
	{name: 'Mango', price: 10}
]

// Tutaj podobnie aktualny stan rzeczy co do sortowania:
const DIRECTIONS = { ASC: 'ASC', DESC: 'DESC' };

let currentDirection = DIRECTIONS.ASC;

const getBaseAccordingToDirection = (a, b) => (currentDirection === DIRECTIONS.ASC) ? {base1: a, base2: b} : {base1: b, base2: a};
const changeSortDirection = () => {
	currentDirection = (currentDirection === DIRECTIONS.ASC) ? DIRECTIONS.DESC : DIRECTIONS.ASC;
}

export const fruitService = {
	// PUBLICZNE operacje, które możemy wykonać na danych:
	sortByName() {
		fruits.sort((f1, f2) => {
			const { base1, base2 } = getBaseAccordingToDirection(f1, f2);
			return base1.name.localeCompare(base2.name);
		})
		changeSortDirection();
	},
	sortByPrice() {
		fruits.sort((e1, e2) => {
			const { base1, base2 } = getBaseAccordingToDirection(e1, e2)
			return base1.price - base2.price;
		});
		changeSortDirection();
	},
	getFruitList() {
		return fruits;
	}
}

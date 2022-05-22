const $list = document.querySelector('ul');
const $fruits = document.querySelectorAll('li');
const [ $btnSortByName, $btnSortByPrice ] = document.querySelectorAll('button');

const DIRECTIONS = { ASC: 'ASC', DESC: 'DESC' };

const getBaseAccordingToDirection = (a, b) => (direction === DIRECTIONS.ASC) ? {base1: a, base2: b} : {base1: b, base2: a};
const getFruitName = el => el.innerText.toLowerCase().trim();
const getFruitPrice = el => {
	const [textPrice] = el.innerText.match(/\d\.?\d*/g) || ['0'];
	return Number(textPrice);
}
const domRefs = Array.from($fruits);

let direction = DIRECTIONS.ASC;

$btnSortByName.addEventListener('click', () => {
	domRefs.sort((e1, e2) => {
		const { base1, base2 } = getBaseAccordingToDirection(e1, e2)
		return getFruitName(base1).localeCompare(getFruitName(base2))
	} );
	updateDOM();
})

$btnSortByPrice.addEventListener('click', () => {
	domRefs.sort((e1, e2) => {
		const { base1, base2 } = getBaseAccordingToDirection(e1, e2)
		return getFruitPrice(base1) - getFruitPrice(base2)
	});
	updateDOM();
})

function updateDOM() {
	direction = (direction === DIRECTIONS.ASC) ? DIRECTIONS.DESC : DIRECTIONS.ASC;
	$list.append(...domRefs);
}

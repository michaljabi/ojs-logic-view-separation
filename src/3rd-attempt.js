import { fruitService } from './2nd-attempt.js'
const $list = document.querySelector('[data-fruit-list]');
const $sortBtns = document.querySelectorAll('[data-sort]');

$sortBtns.forEach($btn => {
	$btn.addEventListener('click', ({target}) => {
		const { sort } = target.dataset;
		if(sort === 'byName') {
			fruitService.sortByName();
		} else if(sort === 'byPrice') {
			fruitService.sortByPrice();
		}
		renderList();
	})
})

renderList();

function makeElement({name, price}) {
	const liElement = document.createElement('li');
	liElement.textContent = `${name} | ${price}zł`;
	return liElement;
}

function renderList() {
	$list.innerHTML = '';
	$list.append(...fruitService.getFruitList().map(makeElement))
}

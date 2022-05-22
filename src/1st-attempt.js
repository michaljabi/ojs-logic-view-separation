// Bierzemy referencje do wszystkich obsługiwanych elementów DOM:
const $list = document.querySelector('ul');
const $fruits = document.querySelectorAll('li');
const [ $btnSortByName, $btnSortByPrice ] = document.querySelectorAll('button');

// Ustalamy, jaka jest kolejność sortowania aktualnie:
let direction = 'ASC';

$btnSortByName.addEventListener('click', () => {
	 const domRefs = Array.from($fruits);
	 domRefs.sort((e1, e2) => {
		 let base1, base2;
		 const getText = el => el.innerText.toLowerCase().trim();
		 if(direction === 'ASC') {
			 base1 = e1;
			 base2 = e2;
		 } else {
			 base1 = e2;
			 base2 = e1;
		 }
		 return getText(base1).localeCompare(getText(base2))
	 } );
	 direction = direction === 'ASC' ? 'DESC' : 'ASC';
	 // Jeszcze raz "Wpinam" posortowane elementy do DOM
	 // korzystając z własność, że na drzewie DOM nie może występować 2 razy ta sama referencja:
	 $list.append(...domRefs);
})

// Kod obsługujący 2 button — to w większości powtórzenia...
// Jednak nie szkodzi - MAKE IT WORK!
$btnSortByPrice.addEventListener('click', () => {
	const domRefs = Array.from($fruits);
	domRefs.sort((e1, e2) => {
		let base1, base2;
		const getPrice = el => {
			const [textPrice] = el.innerText.match(/\d\.?\d*/g) || ['0'];
			return Number(textPrice);
		}
		if(direction === 'ASC') {
			base1 = e1;
			base2 = e2;
		} else {
			base1 = e2;
			base2 = e1;
		}
		return getPrice(base1) - getPrice(base2)
	} );
	direction = direction === 'ASC' ? 'DESC' : 'ASC';
	$list.append(...domRefs);
})

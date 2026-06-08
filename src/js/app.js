export function orderByProps(obj, sort) {

	let entries = Object.entries(obj);
	let entriesSort = entries.sort();
	let result = [];
	let firstSorted = [];
	let elementSorted = [];
	let ensSorted = [];

	for (let i in entriesSort) {
		if (!sort.includes(entriesSort[i][0])) {
			ensSorted.push(entries[i]);
		} else {
			elementSorted.push(entries[i]);
		}
	}

	for (let i in sort) {

		let index = elementSorted.findIndex((item) => item[0] === sort[i])
		result.push(elementSorted[index]);
	}
	result.push(...ensSorted);
	return result
};

const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 }
let sort = ["name", "level"];

console.log(orderByProps(obj, sort));

const character = {
	name: 'Лучник',
	type: 'Bowman',
	health: 50,
	level: 3,
	attack: 40,
	defence: 10,
	special: [
		{
			id: 8,
			name: 'Двойной выстрел',
			icon: 'http://...',
			description: 'Двойной выстрел наносит двойной урон'
		},
		{
			id: 9,
			name: 'Нокаутирующий удар',
			icon: 'http://...'
			// <- обратите внимание, описание "засекречено"
		}
	]
}

export function getDescription(Obj) {
	const result = [];
	const { special } = Obj;
	if (!special) {
		return [];
	}

	for (let i = 0; i < special.length; i += 1) {
		if (!special[i].description) {
			special[i].description = 'Описание недоступно';
		}
		result.push({
			id: special[i].id,
			name: special[i].name,
			icon: special[i].icon,
			description: special[i].description,
		});
	}

	return result;
}
console.log(getDescription(character));
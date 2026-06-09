export function orderByProps(obj, sort) {

	let entries = Object.entries(obj);
	let entriesSort = entries.sort();
	let result = [];
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
}

const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 }
let sort = ["name", "level"];

console.log(orderByProps(obj, sort));

const character = {
	name: "Лучник",
	type: 'Bowman',
	health: 50,
	level: 3,
	attack: 40,
	defence: 10,

}

export function getDescription({ special = [] } = Obj) {
	let result = [];

	for (let i = 0; i < special.length; i += 1) {
		let { id, name, icon, description = 'Описание недоступно' } = special[i];
		result.push({ id, name, icon, description, });
	}

	return result;
}
console.log(getDescription(character));
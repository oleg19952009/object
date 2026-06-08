import { orderByProps, getDescription } from "../app";

test("sort", () => {
	expect(
		orderByProps(
			{ name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 }, ["name", "level"]
		)
	).toEqual(
		Object.entries({ name: 'мечник', level: 2, attack: 80, defence: 40, health: 10 })
	)

});
test("description ", () => {
	expect(
		getDescription({
			special: [
				{
					id: 8,
					name: 'Двойной выстрел',
					icon: 'http://...',
					description: 'Двойной выстрел наносит двойной урон'
				},
			]
		})
	).toEqual(
		[{
			description: "Двойной выстрел наносит двойной урон",
			icon: "http://...",
			id: 8,
			name: "Двойной выстрел",
		}]
	)

});
test("description classified", () => {
	expect(
		getDescription({
			special: [
				{
					id: 9,
					name: 'Нокаутирующий удар',
					icon: 'http://...'
					// <- обратите внимание, описание "засекречено"
				}
			]
		})
	).toEqual(
		[{
			description: "Описание недоступно",
			icon: "http://...",
			id: 9,
			name: "Нокаутирующий удар",
		}]
	)

});
test("special undefend", () => {
	expect(
		getDescription({

		})
	).toEqual(
		[]
	)

});
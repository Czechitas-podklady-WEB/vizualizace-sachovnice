const sachovnice = [
	[0, 0, 0, 0, 0, -4, -6, 0],
	[0, 0, 0, 0, 0, -1, -1, -1],
	[0, 0, -1, 0, 0, 0, 0, 0],
	[0, -1, 1, 0, -1, 0, 0, 0],
	[0, 1, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 3, 0, 1],
	[0, 0, 0, 0, 2, 1, 1, 0],
	[0, 0, 0, 0, 0, 0, 6, 0],
]

const radky = ['8', '7', '6', '5', '4', '3', '2', '1']
const sloupce = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const typy = ['pesec', 'strelec', 'kun', 'vez', 'dama', 'kral']
const figurky = document.querySelector('.figurky')
const zobraz = (sachovnice) => {
	// @TODO: kontrola vstupu
	figurky.innerHTML = ''
	sachovnice.forEach((radek, indexRadku) => {
		radek.forEach((typ, indexSloupce) => {
			if (typ === 0) {
				return
			}
			const figurka = document.createElement('div')
			figurka.classList.add('figurka')
			figurka.classList.add(`figurka--barva-${typ > 0 ? 'bila' : 'cerna'}`)
			figurka.classList.add(`figurka--typ-${typy[Math.abs(typ) - 1]}`)
			figurka.classList.add(`figurka--rada-${radky[indexRadku]}`)
			figurka.classList.add(`figurka--sloupec-${sloupce[indexSloupce]}`)
			figurky.appendChild(figurka)
		})
	})
}

zobraz(sachovnice)

sachovnice[3][4] = 3
sachovnice[5][5] = 0

setTimeout(() => {
	zobraz(sachovnice)
}, 1000)

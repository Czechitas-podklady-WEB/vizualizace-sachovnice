const parametrSachovnice = new URLSearchParams(window.location.search).get('s')
if (parametrSachovnice === null) {
	throw new Error('Parametr "sachovnice" v URL chybí.')
}
if (typeof parametrSachovnice !== 'string') {
	throw new Error('Parametr v URL je ve špatném formátu.')
}
const sachovnice = (() => {
	try {
		return JSON.parse(parametrSachovnice)
	} catch (error) {
		throw new Error('Parametr v URL je ve špatném formátu.')
	}
})()

if (
	!Array.isArray(sachovnice) ||
	sachovnice.length !== 8 ||
	sachovnice.some(
		(radek) =>
			!Array.isArray(radek) ||
			radek.length !== 8 ||
			radek.some(
				(policko) => typeof policko !== 'number' || Math.abs(policko) > 6,
			),
	)
) {
	throw new Error('Parametr v URL je ve špatném formátu.')
}

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

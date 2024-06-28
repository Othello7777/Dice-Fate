const valueBar = (name, valueHP, valueSP) => ({ name, valueHP, valueSP });
const attr = (name, color) => ({ name, value: 3, color });
const tree = (name, talents) => ({ name, talents });
const talent = (name, value) => ({ name, value: 0 });

export const valueBarsState = [
	valueBar("Lekka konsekwencja", 1, 4),
	valueBar("Średnia konsekwencja", 2, 8),
	valueBar("Ciężka konsekwencja", 3, 12),
	valueBar("Wrota Śmierci", 4, 16),
];

export const attrsState = [
	attr("Siła", "orange"),
	attr("Zręczność", "green"),
	attr("Umysł", "blue"),
	attr("Zmysł", "purple"),
	attr("Witalność", "red"),
];

export const treesState = [
	tree("Bojowe", [
		talent("Kowalstwo"),
		talent("Ostrza"),
		talent("Obuchy"),
		talent("Rąbane"),
		talent("Parowania"),
		talent("Strzelectwa"),
	]),
	tree("Przetrwanie", [
		talent("Trofea"),
		talent("Tropienie"),
		talent("Tresura"),
		talent("Zaopatrzenie"),
		talent("Zwiad"),
		talent("Pierwsza pomoc"),
	]),
	tree("Magiczne", [
		talent("Alchemia"),
		talent("Medycyna"),
		talent("Języki"),
		talent("Wiedza"),
		talent("Runy"),
		talent("Zaklinanie"),
	]),
	tree("Złodziejskie", [
		talent("Zamki"),
		talent("Pułapki"),
		talent("Akcesoria wsparcia"),
		talent("Skardanie"),
		talent("Granadier"),
		talent(" -- brak -- "),
	]),
	tree("Charyzmy", [
		talent("Pogaduszki"),
		talent("Przekonywanie"),
		talent("Dominacja"),
		talent("Manipulacja"),
		talent("Inspiracja"),
		talent("Medytacja"),
	]),
];

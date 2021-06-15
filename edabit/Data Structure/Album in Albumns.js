function releaseYear(album) {
	const albums = {
		2015: ['Vulnicura', 'Honeymoon', 'Rebel Heart'],
		2016: ['Lemonade', 'Blackstar', 'A Moon Shaped Pool'],
		2017: ['Flower Boy', 'Antisocialites'],
		2018: ['El Mal Querer', 'Someone Out There', 'Cranberry', 'Kamikaze'],
		2019: ['thank u next', 'Magdalene', 'Ode to Joy'],
		2020: ['Rough and Rowdy Ways', 'folklore', 'Future Nostalgia', 'Colores'],
	};

	for (const year in albums) {
		if (albums[year].includes(album)) {
			return year;
		}
	}
    return 'Unknown';
}

console.log(releaseYear('Ode to Joy'));
console.log(releaseYear('Honeymoon'));
console.log(releaseYear('Fake_album'));

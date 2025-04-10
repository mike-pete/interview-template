class Car {
	#make: string // this is private https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties
	model: string

	constructor(make: string, model: string) {
		this.#make = make
		this.model = model
	}

	honk() {
		console.log('Honk!')
	}

	get makeUpperCase() {
		return this.#make.toUpperCase()
	}

	get make() {
		return this.#make
	}

	set make(newMake: string) {
		this.#make = newMake
	}
}

const civic = new Car('honda', 'civic')
console.log(civic.makeUpperCase)
console.log(civic.model)

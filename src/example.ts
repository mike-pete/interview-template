class Car {
	private make: string
	model: string

	constructor(make: string, model: string) {
		this.make = make
		this.model = model
	}

	honk() {
		console.log('Honk!')
	}

	get makeUpperCase() {
		return this.make.toUpperCase()
	}
}

const civic = new Car('honda', 'civic')
console.log(civic.makeUpperCase)
console.log(civic.model)
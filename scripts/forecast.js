class Forecast {
	constructor() {
		this.key = "jt2AXMcIwzbG4YvvVs16EypGiSAS6FYz";
		this.weatherURI =
			"http://dataservice.accuweather.com/currentconditions/v1/";
		this.cityURI =
			"http://dataservice.accuweather.com/locations/v1/cities/search";
	}

	//updateCity is responsable for take the city from input, call getCity to obtain all the relevant data, pass the city key to getWeather that will use it as the necessary code to search the weather of that city
	async updateCity(city) {
		const cityDets = await this.getCity(city);
		const weather = await this.getWeather(cityDets.Key);

		//object shorthand notation
		return { cityDets, weather };
	}

	async getCity(city) {
		//query paramenters
		const query = `?apikey=${this.key}&q=${city}&language=pt-br`;

		// wait until have a response
		const response = await fetch(this.cityURI + query);
		// json method returns a promise, in that case we gonna wait
		const data = await response.json();
		//getCity is a async function thus it returns a promise, so we can use then
		return data[0];
	}

	async getWeather(id) {
		const query = `${id}?apikey=${this.key}&language=pt-br`;

		const response = await fetch(this.weatherURI + query);
		const data = await response.json();

		return data[0];
	}

	//end class
}

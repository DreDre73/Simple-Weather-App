class WeatherApi {
    constructor(key){

        this.url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'

        this.key = key
    }

    buildURL(location){

        const fullUrl = `${this.url}${location}?key=${this.key}`;
        
        return fullUrl;
    }

    async getWeather(location) {

        const url = this.buildURL(location)

        const response = await fetch(url)
        const data = await response.json()

        return data
    }
}

export default WeatherApi
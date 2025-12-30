import WeatherApi from "./WeatherApi";

class WeatherData{
    constructor(rawData){
        this.rawData = rawData

        //Current Conditions
        this.location = rawData.resolvedAddress
        this.temp = rawData.currentConditions.temp
        this.feelsLike = rawData.currentConditions.feelslike
        this.dayHigh = rawData.days[0].tempmax
        this.dayLow = rawData.days[0].tempmin
        this.description = rawData.days[0].description
        this.icon = rawData.currentConditions.icon
    }
}

export default WeatherData

class WeatherUI{
    constructor(){
        this.location = document.querySelector('#location')
        this.temperature = document.querySelector('#temp')
        this.realFeel = document.querySelector('#real-feel')
        this.highTemp = document.querySelector('#high-temp')
        this.lowTemp = document.querySelector('#low-temp')
        this.description = document.querySelector('#description')
    }

    render(data){
        this.location.textContent = data.location
        this.temperature.textContent = `${data.temp}°`
        this.realFeel.textContent = `Feels Like: ${data.feelsLike}°`
        this.highTemp.textContent = `H: ${data.dayHigh}°`
        this.lowTemp.textContent = `L: ${data.dayLow}°`
        this.description.textContent = data.description 
    }

}

export default WeatherUI
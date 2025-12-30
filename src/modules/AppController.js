import WeatherData from "./WeatherData";

class AppController{
    constructor(api, ui){
        this.api = api
        this.ui = ui
        this.dataParser = WeatherData
        this.searchBar = document.querySelector('.search-bar')
        this.searchButton = document.querySelector('.search-btn')
    }

     initialize(){

        this.searchButton.addEventListener("click", async () => {

            const newLocation = this.searchBar.value
            const data = await this.api.getWeather(newLocation)
            const parsedData = new this.dataParser(data)

            this.ui.render(parsedData);
        })
    }

    async start() {
        try {
            const defaultLocation = 'Richmond, VA';
    
            const rawData = await this.api.getWeather(defaultLocation);
    
            const parsedData = new this.dataParser(rawData);
    
            this.ui.render(parsedData);
        } catch (error) {
            alert("Error loading default weather:", error);
        }
    }
}

export default AppController
import "./styles/styles.css"
import WeatherApi from "./modules/WeatherApi"
import WeatherUI from "./modules/WeatherUI"
import AppController from "./modules/AppController"

const api = new WeatherApi('KUQNHBVN7X3UADS9XJRYQ5NYX')
const ui = new WeatherUI()

const controler = new AppController(api, ui)

controler.initialize()
controler.start()












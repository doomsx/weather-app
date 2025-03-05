import axios from "axios"

export const API_KEY = process.env.API_KEY

export const fetchData = async (city: string = "manila") => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    const response = await axios.get(URL)
    return response.data
}

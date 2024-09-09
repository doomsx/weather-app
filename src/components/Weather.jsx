import { FaWater, FaWind, FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import axios from 'axios'
const API_KEY = import.meta.env.VITE_APP_ID

const Weather = () => {
    const [city, setCity] = useState("")
    const [data, setData] = useState(false)

    const handleCity = (event) => {
        setCity(event.target.value)
    }

    const handleSubmit = () => {
        search(city)
    }

    const search = async (city) => {
        try {
            const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
            const response = await axios.get(URL)
            console.log(response.data)
            setData({
                humidity: response.data.main.humidity,
                windSpeed: response.data.wind.speed,
                name: response.data.name,
                temp: Math.floor(response.data.main.temp),
                weather: response.data.weather[0].icon
            })
        } catch (error) {
            console.log(`${error.status}  invalid input`)
        }
    }

    useEffect(() => {
        search('manila')
    }, [])

    return (
        <div className="flex justify-center items-center flex-col border border-gray-400 max-w-[550px] w-full mt-10 rounded-xl p-4 bg-[#301934]">
            <h1 className="font-black text-3xl text-white">Weather App</h1>

            <div className="mt-10 space-x-2 flex items-center">
                <input
                    type="text"
                    placeholder="Enter a Place"
                    className="px-4 py-3 rounded-full text-lg w-[350px] outline-none text-[#151515]"
                    value={city}
                    onChange={handleCity}
                />
                <button className='p-3 rounded-[50%] bg-white' onClick={handleSubmit}>
                    <FaMagnifyingGlass className='inline text-2xl text-[#626262]' alt="search" />
                </button>
            </div>

            <div className='mt-10 mb-10'>
                <div className='text-center'>
                    <div className='flex justify-center items-center'>
                        <img
                            src={`https://openweathermap.org/img/wn/${data.weather}@2x.png`}
                            alt="weather Icon"
                            className='w-[150px] h-[150px]'
                        />
                    </div>
                    <h3 className='text-2xl text-white font-bold'>{data.temp}°C</h3>
                    <h2 className='text-4xl text-white font-extrabold'>{data.name}</h2>
                </div>

                <div className='flex gap-20 mt-10 items-center '>
                    <div className='flex flex-col items-center justify-center text-white'>
                        <FaWater className='text-3xl ' />
                        <p className='text-xl '>{data.humidity} %</p>
                        <span>Humidity</span>
                    </div>

                    <div className='flex flex-col items-center justify-center text-white'>
                        <FaWind className='text-3xl text-white' />
                        <p className='text-xl'>{data.windSpeed} km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather

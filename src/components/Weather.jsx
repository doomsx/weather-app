import { CiSearch } from 'react-icons/ci'
import { TiWeatherSunny } from 'react-icons/ti'
import { FaWater, FaWind } from "react-icons/fa6";

const Weather = () => {
    return (

        <div className="flex justify-center items-center flex-col border border-gray-400 max-w-[550px] w-full mt-10 rounded-xl p-4 bg-[#301934]">
            <h1 className="font-black text-3xl text-white">Weather App</h1>

            <div className="mt-10 space-x-2 flex items-center">
                <input
                    type="text"
                    placeholder="Enter a Place"
                    className="p-3 rounded-full text-lg w-[350px] outline-none text-[#626262]"
                />
                <button className='p-3 rounded-[50%] bg-white'>
                    <CiSearch className='inline text-2xl text-[#626262]' alt="search" />
                </button>
            </div>

            <div className='mt-10 mb-10'>
                <div className='text-center'>
                    <TiWeatherSunny className='text-[200px] text-yellow-300 font-black' />
                    <h3 className='text-2xl text-white font-bold'>16°C</h3>
                    <h2 className='text-4xl text-white font-extrabold'>London</h2>
                </div>

                <div className='flex justify-between gap-10 mt-10 items-center '>
                    <div className='flex flex-col items-center justify-center text-white'>
                        <FaWater className='text-3xl ' />
                        <p className='text-xl '>91 %</p>
                        <span>Humidity</span>
                    </div>

                    <div className='flex flex-col items-center justify-center text-white'>
                        <FaWind className='text-3xl text-white' />
                        <p className='text-xl'>50 km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather

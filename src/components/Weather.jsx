import { CiSearch } from 'react-icons/ci'

const Weather = () => {
    return (
        <div className="flex justify-center items-center flex-col border border-gray-400 max-w-[550px] w-full mt-10 rounded-xl p-4 ">
            <h1 className="font-black text-3xl">Weather App</h1>

            <div className="mt-10 space-x-2 flex items-center">
                <input
                    type="text"
                    placeholder="Enter a Place"
                    className="px-3 py-2 border border-gray-400 rounded-full text-lg"
                />
                <button className='border border-gray-400 px-3 py-2 rounded-full'>
                    <CiSearch className='inline text-2xl' />
                </button>
            </div>
        </div>
    )
}

export default Weather

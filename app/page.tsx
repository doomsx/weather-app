import SearchForm from "@/components/SearchForm";
import { fetchData } from "@/lib/actions";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
    const query = (await searchParams)?.query
    let data = null
    let error = null

    try {
        data = await fetchData(query)
    } catch (err) {
        error = err instanceof Error ? err.message : "Failed to fetch data";
    }

    return (
        <section className="px-5 py-3 flex items-center justify-center h-screen flex-col ">
            <div>
                <SearchForm query={query} />
            </div>
            {error &&
                <p className="text-4xl font-bold text-red-600 mt-10 uppercase">{error}</p>
            }

            {!error && data &&
                <div className="flex flex-col md:flex-row gap-0 mt-5 backdrop-blur-sm rounded-2xl border">
                    <div className="flex flex-col justify-center items-center gap-2 px-5 py-10 md:px-10 md:gap-4 border-b md:border-b-0 md:border-r md:rounded-l-2xl md:py-20">
                        <h1 className="text-2xl md:text-5xl font-bold text-gray-50">{data.name}</h1>
                        <p className="text-xl md:text-3xl font-semibold text-gray-50">{data.main.temp} °C</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 p-5">
                            <div className="data_content">
                                <p className="data_title">Feels Like</p>
                                <p className="data_details">{data.main.feels_like} °C</p>
                            </div>

                            <div className="data_content">
                                <p className="data_title">Temperature Min</p>
                                <p className="data_details">{data.main.temp_min} °C</p>
                            </div>

                            <div className="data_content">
                                <p className="data_title">Temperature Max</p>
                                <p className="data_details">{data.main.temp_max} °C</p>
                            </div>

                            <div className="data_content">
                                <p className="data_title">Humidity</p>
                                <p className="data_details">{data.main.humidity}%</p>
                            </div>

                            <div className="data_content">
                                <p className="data_title">Pressure:</p>
                                <p className="data_details">{data.main.pressure} hPa</p>
                            </div>

                            <div className="data_content">
                                <p className="data_title">Clouds:</p>
                                <p className="data_details">{data.clouds.all}%</p>
                            </div>

                            <div className="data_content">
                                <p className="data_title">Wind Speed:</p>
                                <p className="data_details">{data.wind.speed} m/s</p>
                            </div>
                            <div className="data_content">
                                <p className="data_title">Wind Degrees:</p>
                                <p className="data_details">{data.wind.deg}°</p>
                            </div>
                    </div>
                </div>
            }
        </section>
    )
}

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
                <div className="flex gap-0 mt-5 backdrop-blur-sm">
                    <div className="flex flex-col justify-center items-center px-10 gap-4 border-l border-t border-b rounded-l-2xl py-20">
                        <h1 className="text-5xl font-bold text-gray-50">{data.name}</h1>
                        <p className="text-3xl font-semibold text-gray-50">{data.main.temp} °C</p>
                    </div>
                    <div className="flex gap-10 justify-center items-center border rounded-r-2xl px-10">
                        <div className="space-y-5">
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
                        </div>

                        <div className="space-y-5">
                            <div className="data_content">
                                <p className="data_title">Humidity</p>
                                <p className="data_details">{data.main.humidity} </p>
                            </div>

                            <div className="data_content">
                                <p className="data_title">Pressure:</p>
                                <p className="data_details">{data.main.pressure}</p>
                            </div>

                            <div className="data_content">
                                <p className="data_title">Clouds:</p>
                                <p className="data_details">{data.clouds.all}</p>
                            </div>
                        </div>

                        <div className="space-y-5">
                            <div className="data_content">
                                <p className="data_title">Wind Speed:</p>
                                <p className="data_details">{data.wind.speed}</p>
                            </div>
                            <div className="data_content">
                                <p className="data_title">Wind Degrees:</p>
                                <p className="data_details">{data.wind.deg}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}

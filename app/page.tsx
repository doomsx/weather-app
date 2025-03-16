import SearchForm from "@/components/SearchForm";
import { fetchData } from "@/lib/actions";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {

    const query = (await searchParams)?.query
    const data = await fetchData("tokyo")
    console.log(data)
    return (
        <section className="px-5 py-3 flex items-center justify-center h-screen flex-col">
            <div>
                <SearchForm query={query} />
            </div>

            <div className="flex gap-10 mt-10">
                <div className="flex flex-col justify-center items-center px-10">
                    <h1>{data.name}</h1>
                    <p>{data.main.temp} °C</p>
                </div>
                <div className="flex gap-10">
                    <div className="space-y-5">
                        <div className="data_content">
                            <p>Feels Like</p>
                            <p>{data.main.feels_like} °C</p>
                        </div>

                        <div className="data_content">
                            <p>Temperature Min</p>
                            <p>{data.main.temp_min} °C</p>
                        </div>

                        <div className="data_content">
                            <p>Temperature Max</p>
                            <p>{data.main.temp_max} °C</p>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div className="data_content">
                            <p>Humidity</p>
                            <p>{data.main.humidity}</p>
                        </div>

                        <div className="data_content">
                            <p>Pressure:</p>
                            <p>{data.main.pressure}</p>
                        </div>

                        <div className="data_content">
                            <p>Clouds:</p>
                            <p>{data.clouds.all}</p>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <div className="data_content">
                            <p>Wind Speed:</p>
                            <p>{data.wind.speed}</p>
                        </div>
                        <div className="data_content">
                            <p>Wind Degrees:</p>
                            <p>{data.wind.deg}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

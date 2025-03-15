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
                <div className="text-center">
                    <h1>{data.name}</h1>
                    <p>{data.main.temp} °C</p>
                </div>
                <div className="flex gap-5">
                    <div>
                        <p>Feels Like:
                            <span>
                                {data.main.feels_like} °C
                            </span>
                        </p>
                        <p>Temperature Min:
                            <span>
                                {data.main.temp_min}
                            </span>
                        </p>
                        <p>Temperature Max:
                            <span>
                                {data.main.temp_max}
                            </span>
                        </p>
                    </div>
                    <div>
                        <p>Humidity:
                            <span>
                                {data.main.humidity} °C
                            </span>
                        </p>
                        <p>Pressure:
                            <span>
                                {data.main.pressure}
                            </span>
                        </p>
                        <p>Clouds:
                            <span>
                                {data.clouds.all}
                            </span>
                        </p>
                    </div>
                    <div>
                        <p>Wind Speed:
                            <span>
                                {data.wind.speed}
                            </span>
                        </p>
                        <p>Wind Degrees:
                            <span>
                                {data.wind.deg}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

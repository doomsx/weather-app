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
                <div>
                    <p>Feels Like: {data.main.feels_like} °C</p>
                    <p>Humidity: {data.main.humidity} °C</p>
                </div>
            </div>
        </section>
    )
}

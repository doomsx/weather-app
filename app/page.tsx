import SearchForm from "@/components/SearchForm";
import { fetchData } from "@/lib/actions";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {

    const query = (await searchParams)?.query
    const data = await fetchData("tokyo")
    console.log(data)
    return (
        <section>
            <SearchForm query={query} />
            <h1>{data.name}</h1>
            <p>{data.main.temp} °C</p>
            <p>{data.main.feels_like} °C</p>
            <p>{data.main.humidity} °C</p>
        </section>
    )
}

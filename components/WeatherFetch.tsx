import { fetchData } from '@/lib/actions'
import React from 'react'

const WeatherFetch = async () => {
    const data = await fetchData("tokyo")
    console.log(data)
    return (
        <section>
            <h1>{data.name}</h1>
            <p>{data.main.temp} °C</p>
            <p>{data.main.feels_like} °C</p>
            <p>{data.main.humidity} °C</p>
        </section>
    )
}

export default WeatherFetch

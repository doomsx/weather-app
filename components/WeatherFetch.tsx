import { fetchData } from '@/lib/actions'
import React from 'react'

const WeatherFetch = async () => {
    const data = await fetchData("tokyo")
    console.log(data)
    return (
        <div>WeatherFetch</div>
    )
}

export default WeatherFetch

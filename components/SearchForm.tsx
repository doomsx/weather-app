import React from 'react'
import Form from "next/form"
import { Search } from 'lucide-react'

const SearchForm = ({ query }: { query?: string }) => {
    return (
        <Form action='/' scroll={false} className='flex gap-2'>
            <input
                name='query'
                defaultValue={query}
                className='search-input'
                placeholder='Enter a City'
            />

            <button type='submit' className='search-btn text-white'><Search /></button>
        </Form>
    )
}

export default SearchForm

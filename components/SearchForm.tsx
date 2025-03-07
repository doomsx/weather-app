import React from 'react'
import Form from "next/form"

const SearchForm = ({ query }: { query?: string }) => {
    return (
        <Form action='/' scroll={false}>
            <input
                name='query'
                defaultValue={query}
                className=''
                placeholder='Enter a City'
            />

            <input type='submit' value={"submit"} />
        </Form>
    )
}

export default SearchForm

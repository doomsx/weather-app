import React from 'react'

const SearchForm = ({ query = "Manila" }: { query?: string }) => {
    console.log(query)
    return (
        <div>SearchForm</div>
    )
}

export default SearchForm

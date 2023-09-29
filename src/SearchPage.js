import React from 'react'
import SearchBar from './SearchBar'

const SearchPage = ({ query, books, searchedBooks, searchedBooksFn, updatedShelves }) => {
    return (
        <div>
            <SearchBar
                query={query}
                books={books}
                searchedBooks={searchedBooks}
                searchedBooksFn={searchedBooksFn}
                updatedShelves={updatedShelves}
            />
        </div>
    )
}

export default SearchPage
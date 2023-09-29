import React from 'react'
import { Link } from 'react-router-dom';
import ShelvesList from './ShelvesList';

const SearchBar = ({ query, searchedBooks, searchedBooksFn, updatedShelves, books }) => {

    return (
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                    {/* create a link to navigate to the home page */}
                    <Link className="close-search" to={{ pathname: '/' }}></Link>
                    <div className="search-books-input-wrapper">
                        {/* catch the query and pass it to the searchedBooksFn to search for the books by it */}
                        <input type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => searchedBooksFn(event.target.value)}
                        />
                    </div>
                </div>
                <br />
                <div>
                    {/* display the books that searched for */}
                    <ol className="books-grid">
                        {
                            // change the bookshelf of any book that exist in the books in the main page
                            searchedBooks.forEach((searchedBook) => {
                                books.forEach((book) => {
                                    if (searchedBook.id === book.id) searchedBook.shelf = book.shelf
                                })
                            })
                        }
                        <ShelvesList books={searchedBooks} updatedShelves={updatedShelves} />
                    </ol>
                </div>
            </div>
        </div>
    )
}
export default SearchBar
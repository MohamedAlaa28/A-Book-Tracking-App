import React from 'react'
import SetShelf from './SetShelf'
import { Link } from 'react-router-dom'

const HomePage = ({ books, updatedShelves }) => {
    return (
        <div>
            <div className="list-books-content">
                <div className="list-books list-books-title">
                    <img className='list-books-img' src='vectorStock.png' alt='vectorStock' />
                    <h1>My Reads</h1>
                </div>
            </div>
            {/* passing the data to the shelves */}
            <SetShelf
                books={books}
                updatedShelves={updatedShelves}
            />
            <div className="open-search">
                {/* create a link to navigate to the search page */}
                <Link to={{ pathname: '/search' }}>Add A Book </Link>
            </div>
        </div>
    )
}

export default HomePage
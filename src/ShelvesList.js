import React from 'react'
import BooksList from './BooksList'

const ShelvesList = ({books ,shelf,updatedShelves}) => {
  
    return( 
        <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
        {/* filter the books that have no authors or thumbnail and map the rest */}
        {books.filter((book)=>book.imageLinks && book.authors != null).map((book)=>(<li key={book.id}><BooksList book={book} updatedShelves={updatedShelves}/></li>)) }
        </ol>
        </div>
        </div>      
  )      
}
export default ShelvesList;
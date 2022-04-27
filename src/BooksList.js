import React from 'react'

const BooksList = ({book,updatedShelves}) => {

    return (
      <div>
        {/* setting key  for the book element */}
        <div className="book" key={book.id}>
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                <div className="book-shelf-changer">
                    <select value={book.shelf ? book.shelf : "none"} onChange={(e) =>updatedShelves(book,e.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading" >Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors.join("")}</div>
        </div>
      </div>
    )
}
export default BooksList
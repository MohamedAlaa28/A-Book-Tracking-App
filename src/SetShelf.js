import React from 'react'
import ShelvesList from './ShelvesList'

const SetShelf = ({ books, updatedShelves }) => {

    // separating the shelf to tree shelves
    const currentlyReading = books.filter((book) => book.shelf === "currentlyReading")
    const wantToRead = books.filter((book) => book.shelf === "wantToRead")
    const read = books.filter((book) => book.shelf === "read")

    return (
        <div>
            {/* distribute the books to their shelves */}
            <ShelvesList books={currentlyReading} updatedShelves={updatedShelves} shelf={"Currently Reading"} />
            <ShelvesList books={wantToRead} updatedShelves={updatedShelves} shelf={"Want to Read"} />
            <ShelvesList books={read} updatedShelves={updatedShelves} shelf={"Read"} />
        </div>

    )
}
export default SetShelf
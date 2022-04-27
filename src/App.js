import {Link,BrowserRouter,Route} from 'react-router-dom';
import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBar from './SearchBar'
import SetShelf from './SetShelf'



class BooksApp extends Component {
  state = {
    books : [],
    query : '',
    searchedBooks : [],
  }
  //getting all books by using getAll function which in BookAPI
  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState(()=>({
        books
      }))
    })
  }
  //updating the shelves for each book
  updatedShelves = async(book,shelf)=>{
    await BooksAPI.update(book,shelf)
    await BooksAPI.getAll().then((books)=>{
      this.setState(()=>({
        books
      }))
    })
  }
  //searching for books data by using the search function which in BookAPI
  searchedBooksFn = async(query) => {
    //make query clear before using it in the searching
    this.setState(() => ({
      query: query.replaceAll("^[ \"]+|[ \"]+$", "")
    }))
    // using await to avoid any error by the speed of typing
    await BooksAPI.search(query).then((searchedBooks)=>{
      //check if there is a query or not
      if(query){
        //check if the query matches the data or not
        if(!searchedBooks.error){
          this.setState(()=>({
            searchedBooks
          }))
        }else{
          console.log("there is no book with that name")
          this.setState(()=>({
            //reset the page if there is no match
            searchedBooks: []
          }))
        }
      }else{
        console.log("search page")
        this.setState(()=>({
          //reset the page if the query is empty
          searchedBooks: []
        }))
      }
    })
  }
  render() {
    const {books,query,searchedBooks} = this.state
    const {updatedShelves,searchedBooksFn} = this
    return (
      <div className="app">
        <div className="list-books-content">
          {/* route the two-page search and home */}
          {/* passing the data to the search bar */}
          <BrowserRouter>
          <Route path='/search' render={()=>
          <SearchBar query={query}  
          books={books} 
          searchedBooks={searchedBooks}
          searchedBooksFn={searchedBooksFn}
          updatedShelves={updatedShelves} />}/>
          <Route exact path='/' render={()=> 
          <div>
          <div className="list-books-content">
              <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
              </div>
          </div>
          {/* passing the data to the shelves */}
            <SetShelf books={books} 
            updatedShelves={updatedShelves}/>
            <div className="open-search">
              {/* create a link to navigate to the search page */}
                <Link to={{ pathname:'/search'}}>Add A Book</Link>
            </div>
          </div>}/>
          </BrowserRouter>
       </div>
      </div>
    )
  }
}

export default BooksApp


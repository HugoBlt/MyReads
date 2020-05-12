import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class SearchBook extends Component {
    state = {
        query: '',
        searchedBooks: []
      }
    updateQuery = (query) => {
      query !== '' 
      ?
      BooksAPI.search(query).then(
        (searchedBooks) => {
          this.setState(() => ({ 
            searchedBooks : searchedBooks 
          }))
      })
      :
      BooksAPI.search(query).then(
        (searchedBooks) => {
          this.setState(() => ({ 
            searchedBooks : [] 
          }))
      })
    }
    render () {
      const { query } = this.state.query
        return (
              <div className="search-books">
                <div className="search-books-bar">
                <Link to = '/'>
                    <button className="close-search">Close</button>
                </Link>
                  <div className="search-books-input-wrapper">
                    {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
    
                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
                    <input 
                      type="text" 
                      placeholder="Search by title or author"
                      value = {query}
                      onChange = {(event) => this.updateQuery(event.target.value)}/>
                  </div>
                </div>
                <div className="search-books-results">
                    {/*JSON.stringify(this.state.searchedBooks)*/}
                    {typeof this.state.searchedBooks.items == "undefined"
                    ?
                    <ol className="books-grid">
                      {this.state.searchedBooks.map((book) => (
                        <li>
                          <Book
                          book = {book}
                          shelf = "none"
                          onMoveBook = {this.props.onMoveBook}
                          listOfShelf = {this.props.listOfShelf}
                          />
                        </li>
                      ))}
                    </ol>
                    :
                    <div> <h2>No books find </h2></div>} 
                </div>
              </div>
        )
    }

}

export default SearchBook
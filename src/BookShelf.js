import React, {Component} from 'react'
import Book from './Book'


class BookShelf extends Component {
    render () {
        return (
            <div className="list-books">
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title"> {this.props.name} </h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.listOfBooksShelf.map((book) => (
                            <li key={book.id}>
                                <Book
                                book = {book}
                                onMoveBook = {this.props.onMoveBook}
                                listOfShelf = {this.props.listOfShelf}
                                />
                            </li>
                        ))} 
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }

}

export default BookShelf
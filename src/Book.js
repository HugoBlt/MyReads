import React, {Component} from 'react'
import Modal from './Modal'


class Book extends Component {
    state = {
      show: false
    };
    showModal = e => {
      this.setState({
        show: !this.state.show
      });
    };
    onClose = e => {
      this.props.onClose && this.props.onClose(e);
    };
    render () {
        const { book, selectedShelf } = this.props
        const imageLink = (typeof book.imageLinks === "undefined" ) ? "" : `url(${book.imageLinks.thumbnail})`;
        return (
            <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: imageLink }}>
                <button class="book-details" onClick={(event) => this.showModal()}> </button>
                <Modal onClose={this.showModal} show={this.state.show}>
                  <div>{`Average Note : ${book.averageRating}`}</div>
                  <div>{`${book.pageCount} pages`}</div>
                </Modal>
              </div>
              <div className="book-shelf-changer">
                <select onChange = {(event) => this.props.onMoveBook(book, event.target.value)}>
                <option value="move" selected disabled>Move to...</option>
                  {this.props.listOfShelf.map((shelf) => (
                    <option value= {shelf.id} /*selected={shelf.id === selectedShelf ? "selected" : ""}*/> {shelf.nameShelf} </option>
                        ))}
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
        )
    }

}

export default Book
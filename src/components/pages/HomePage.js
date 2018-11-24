import React, { Component } from 'react'
//importing Link from library 'react-router-dom'
import { Link } from 'react-router-dom'
// import BooksAPI
import * as BooksAPI from '../../BooksAPI'
//importing Rack Component
import Rack from '../Rack'

export default class HomePage extends Component {
  //setting the initial state as Facebook React Docs
  constructor(props) {
    super(props)
    this.state = {
      lib: []
    }
  }
//instantiate request into componentDidMount for laoding books
  componentDidMount() {
    BooksAPI.getAll()//calling the method from BookAPI
    .then(allBooks => {
      // console.log(allBooks);
      this.setState({lib: allBooks })
    })
  }

  //This method is for updating the book
  bookReloader = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(response => {
      book.shelf = shelf
      this.setState(state => ({
        lib: state.lib.filter( bk => bk.id !== book.id).concat([book])
      }))
    })
  }

  render() {
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads App</h1>
          </div>
          <div className="list-books-content">
            <div>
              {/*passing the 2 props name and books to the components based on the data extracted from the console.log and from the oldREADME.md*/}
              <Rack bookReloader={this.bookReloader} name="Currently Reading" books={this.state.lib.filter(f => f.shelf === "currentlyReading")} />
              <Rack bookReloader={this.bookReloader} name="Want to Read" books={this.state.lib.filter(f => f.shelf === "wantToRead")} />
              <Rack bookReloader={this.bookReloader} name="Read" books={this.state.lib.filter(f => f.shelf === "read")} />
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

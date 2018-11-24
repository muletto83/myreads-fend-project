import React, { Component } from 'react'
//importing Link from library 'react-router-dom'
import { Link } from 'react-router-dom'
// import BooksAPI
import * as BooksAPI from '../../BooksAPI'

export default class SearchPage extends Component {

  //setting the initial state as Facebook React Docs
  constructor(props) {
    super(props);
    this.state = {
      lib: [],
      results: []
    }
  }
//instantiate request into componentDidMount for laoding books
  componentDidMount() {
    BooksAPI.getAll()//calling the method from BookAPI
    .then(allBooks => {
      //console.log(allBooks);
      this.setState({lib: allBooks })
    })
  }

  //This method is for updating the book
  bookReloader = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(response => {
      book.shelf = shelf;
      this.setState(state => ({
        lib: state.lib.filter( bk => bk.id !== book.id).concat([book])
      }))
    })
  }

  render() {
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              {/*wrapping the button into Link to get the routing working*/}
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
            </Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author"/>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
//importing Link from library 'react-router-dom'
import { Link } from 'react-router-dom'
// import all from  BooksAPI
import * as BooksAPI from '../../BooksAPI'
//import the book components
import Book from '../Book'

export default class SearchPage extends Component {
  //setting the initial state in the Facebook React Docs "way"
  constructor(props) {
    super(props);
    this.state = {
      lib: [],
      results: [],
      query: ""
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

  //updateQuery method to change the state
  updateQuery = query => {
		this.setState({ query: query }, this.submitSearch)
	}


  submitSearch() {
    //handling empyty string or undefing with an empty result
    if (this.state.query === "" || this.state.query === undefined) {
      return this.setState({ results: [] })
    }
    BooksAPI.search(this.state.query.trim()).then(response => {
      //handling error with undefined response or error
      //we will give an empy book with no title no image no auhor
      if (response === undefined || response.error ) {
        return this.setState({ results: [""] });
      } else {
        response.forEach(bk => {
          let fltr = this.state.lib.filter(Bk => Bk.id === bk.id);
          if (fltr[0]) {
            bk.shelf = fltr[0].shelf;
          }
        })
        return this.setState({ results: response })
      }
    });
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
              <button className="close-search">Close</button>
            </Link>
            <div className="search-books-input-wrapper">
              {/*Fix a type into the name error TypeError: _this3.updateQuery is not a function///
                ===== adding value and monitoring the changes when we have changes ======
                ======= call this.updateQuery passing in the new value ==========/////=/=//==/ */}
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={event => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.results.map((book, key) => (
                <Book bookReloader={this.bookReloader} book={book} key={key} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
//importing Link from library 'react-router-dom'
import { Link } from 'react-router-dom'
// import BooksAPI
import * as BooksAPI from '../../BooksAPI'
//importing Rack Component
import Rack from '../Rack'

export default class HomePage extends Component {
  //introducing state
  constructor(props) {
    super(props);
    this.state = {
      lib: []
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

  render() {
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {/*adding props to the components based on the data received from the api call */}
              <Rack name="Currently Reading" books={this.state.lib.filter(f => f.shelf === "currentlyReading")} />
              <Rack name="Want to Read" books={this.state.lib.filter(f => f.shelf === "wantToRead")} />
              <Rack name="Read" books={this.state.lib.filter(f => f.shelf === "read")} />
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

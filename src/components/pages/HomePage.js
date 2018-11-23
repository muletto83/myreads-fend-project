import React, { Component } from 'react'
//importing Link from library 'react-router-dom'
import { Link } from 'react-router-dom'
//importing Rack Component
import Rack from '../Rack'
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    <Rack />
                    <Rack />
                    <Rack />
                  </div>
                </div>
                <div className="open-search">
                  <Link to="/search">
                    <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                  </Link>
                </div>
              </div>
            )}
          </div>
    )
  }
}

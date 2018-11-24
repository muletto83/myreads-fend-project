import React, { Component } from 'react';
//importing the Book Component
import Book from './Book'

export default class Rack extends Component {
  // componentDidMount() {
  //   //logging this to evaluate our next moves
  //   //console.log(this)
  // }
  render() {
    //building the Racks
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.props.books.map((book, key) => <Book bookReloader={this.props.bookReloader} book={book} key={key} />)
            }
          </ol>
        </div>
      </div>
    )
  }
}

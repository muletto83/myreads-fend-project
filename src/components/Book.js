import React, { Component } from 'react'

export default class Book extends Component {
  // componentDidMount() {
  //   //logging this to evaluate our next moves
  //   //console.log(this)
  // }
  //
  // //Composing every single book using authors - title - imageLinks
  // //found thanks to the logging of console.log(this)
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${(this.props.book.imageLinks && this.props.book.imageLinks.thumbnail) || ""}")` }}></div>
            <div className="book-shelf-changer">
              {/*Handling the correct default selected rack for the book and its future*/}
              <select value={this.props.book.shelf || "none"}
                      onChange={(event) => {this.props.bookReloader(this.props.book, event.target.value)}}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title || "Title Disappeared O_O"}</div>
          <div className="book-authors">
          {(this.props.book.authors && this.props.book.authors[0]) || "No Author :("}</div>
        </div>
      </li>
    )
  }
}

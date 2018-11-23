import React from 'react'
import './App.css'
//importing Router from the library
import { Route } from 'react-router-dom'
//importing HomePage component
import HomePage from './components/pages/HomePage'
//importing SearchPage component
import SearchPage from './components/pages/SearchPage'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div>
        <Route exact path="/" component= { HomePage } />
        <Route exact path="/search" component= { SearchPage } />
      </div>
    )
  }
}

export default BooksApp

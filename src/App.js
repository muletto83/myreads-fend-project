import React, { Component } from 'react'
import './App.css'
//importing Router from the library
import { Route } from 'react-router-dom'
//importing HomePage component
import HomePage from './components/pages/HomePage'
//importing SearchPage component
import SearchPage from './components/pages/SearchPage'

export default class BooksApp extends Component {

  render() {
    /*Setting up the Routing */
    return (
      <div>
        <Route exact path="/" component= { HomePage } />
        <Route exact path="/search" component= { SearchPage } />
      </div>
    )
  }
}

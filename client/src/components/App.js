import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../styles/base.css'
import CategoryList from './CategoryList'
import CurrentCategory from './CurrentCategory'
import Listing from './Listing'
import Header from './Header'
import LeftBar from './LeftBar'
import RightBar from './RightBar'
import AddListing from './AddListing'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <LeftBar />
          <RightBar />
          <div className="app">
            <Route exact path="/" component={CategoryList} />
            <Route exact path="/:slug" component={CurrentCategory} />
            <Route path="/listing/:id" component={Listing} />
            <Route path="/add/:categoryId" component={AddListing} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App

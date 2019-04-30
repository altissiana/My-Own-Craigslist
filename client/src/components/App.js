import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../styles/base.css'
import CategoryList from './CategoryList'
import ChildCategories from './ChildCategories'
import Header from './Header'
import LeftBar from './LeftBar'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <LeftBar />
          {/* <RightBar /> */}
          <div className="app">
            <Route path="/" component={CategoryList} />
            {/* <Route path="/:slug" component={ChildCategories} /> */}
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App

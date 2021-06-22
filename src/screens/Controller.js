import React, { Component } from 'react';
import Home from './home/Home';
import Details from './details/Details';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BookShow from '../screens/bookshow/BookShow';
import moviesData from '../assets/moviesData';

class Controller extends Component {

  
  render() {
    return (
      <Router>
        <div className="main-container">
        <Route exact path='/' render={(props) => <Home {...props} movieData={moviesData} />} />
          <Route path='/movie/:id' render={(props) => <Details {...props}  />} />
          <Route path='/bookshow/:id' render={(props) => <BookShow {...props}  />} />
        </div>
      </Router>
    )
  }
}

export default Controller;
import React from 'react';
import Home from './home/Home';
import Details from './details/Details';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BookShow from '../screens/bookshow/BookShow';
import moviesData from '../assets/moviesData';
import Confirmation from './confirmation/Confirmation';

const Controller =()=> {
  const baseUrl = 'http://localhost:8085/api/v1';
    return (
      <Router>
        <div className="main-container">
        <Route exact path='/' render={(props) => <Home {...props} movieData={moviesData} baseUrl={ baseUrl} />} />
          <Route path='/movie/:id' render={(props) => <Details {...props} baseUrl={ baseUrl} />} />
          <Route path='/bookshow/:id' render={(props) => <BookShow {...props} baseUrl={ baseUrl} />} />
          <Route path='/confirm/:id' render={(props) => <Confirmation {...props} baseUrl={ baseUrl} />} />
        </div>
      </Router>
    )
}

export default Controller;
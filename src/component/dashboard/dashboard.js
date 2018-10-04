import React, { Component } from 'react';
import './dashboard.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 
import CityData from '../citydata/citydata';
import OtherPage from '../otherpage/OtherPage';

class Dashboard extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="Dashboard">
            <header className="Dashboard-header">
              <Link to="/">NOLA Data</Link>
              <Link to="/otherpage">Other Page</Link>
            </header>
          </div>
          <div>
            <Route exact path="/" component={CityData}/>
            <Route path="/otherpage" component={OtherPage}/>
          </div> 
        </div>
      </Router>
    );
  }
}

export default Dashboard;

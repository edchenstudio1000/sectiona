import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Appclassny from './Appclassny';
import Appclassdub from './Appclassdub';
class TopNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            APIB : 'https://hbc-frontend-challenge.hbccommon.private.hbc.com/coffee-week/users?department=engineering&location=dub'

          
        };
      
    }
    render() {
        return (
  <Router>
    <div id="topnav">
      <ul className="container">
      
        <li>
          <Link to="/NYUsers">NY Engineer Users</Link>
        </li>
        <li>
          <Link to="/DUBUsers">DUB Engineer Users</Link>
        </li>
      </ul>

      <hr/>

  
      <Route path="/NYUsers" component={Appclassny} />
      <Route path="/DUBUsers" component={Appclassdub} />
    </div>
  </Router>
)
        } }
export default TopNav;
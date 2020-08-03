import './App.css';
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import HomePage from "./homepage";
import Contact from "./contact";
// import MyPhotos from "./myphotos";


class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <h1>ABOUT ME</h1>
        <ul className="header">
          <li><NavLink to="/">HOMEPAGE</NavLink></li>
          <li><NavLink to="/contact">CONTACT</NavLink></li>
          <li><NavLink to="/myphotos">MY PHOTOS</NavLink></li>
        </ul>
        
        <div className="content">
            <Route exact path="/" component={HomePage}/>
            <Route path="/contact" component={Contact}/>
            {/* <Route path="/myphotos" component={MyPhotos}/>  */}
        </div>
      </div>
    </HashRouter>
    );
  }
}
 
export default App;

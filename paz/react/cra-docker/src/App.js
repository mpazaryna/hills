import React, { Component } from 'react';
import About from './containers/about/aboutContainer';
import Nav from './containers/nav';
import Footer from './containers/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Nav />
        </div>
        <div className="body">
          <About />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

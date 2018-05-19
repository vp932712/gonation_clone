import React, { Component } from 'react';
import Footer from "./Footer.js"
import './App.css';
import Header from "./Header.js"
import WhoWeAre from "./WhoWeAre.js"
import Discover from "./Discover.js"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Discover />
      <WhoWeAre />
      <Footer />
      </div>
    );
  }
}

export default App;

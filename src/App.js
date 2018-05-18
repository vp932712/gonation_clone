import React, { Component } from 'react';
import Footer from "./Footer.js"
import './App.css';
import Header from "./Header.js"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Footer />
      </div>
    );
  }
}

export default App;

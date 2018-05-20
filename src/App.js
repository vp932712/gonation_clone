import React, { Component } from 'react';
import Footer from "./Footer.js"
import './App.css';
import Header from "./Header.js"
import WhoWeAre from "./WhoWeAre.js"
import Discover from "./Discover.js"
import WorkWithUs from "./WorkWithUs.js"
import DownloadTheApp from "./DownloadTheApp.js"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Discover />
      <WhoWeAre />
      <WorkWithUs />
      <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './css/App.css';
import Header from "./javascript/header/Header.js"
import Discover from "./javascript/discover/Discover.js"
import WhoWeAre from "./javascript/whoWeAre/WhoWeAre.js"
import WorkWithUs from "./javascript/workWithUs/WorkWithUs.js"
import DownloadTheApp from "./javascript/downloadApp/DownloadTheApp.js"
import Footer from "./javascript/footer/Footer.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Discover />
        <WhoWeAre />
        <WorkWithUs />
        <DownloadTheApp />
        <Footer />
      </div>
    );
  }
}

export default App;

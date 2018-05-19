import React, { Component } from 'react'
import "./Discover.css"
import DiscoverBackground from "./DiscoverBackground.js"
import DiscoverSearchBox from "./DiscoverSearchBox.js"

class Discover extends Component {

render() {
  return (
    <div>
      <div class="SiteSearchPanel">
      <video id="video-el"  alt="GoNation" loop autoPlay>
        <source src="https://gonation.com/videos/discover-now-2.mp4" type="video/mp4" />
      </video>
      <DiscoverBackground />
      <DiscoverSearchBox />
      </div>
    </div>
  )
}

}


export default Discover

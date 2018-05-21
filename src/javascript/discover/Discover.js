import React, { Component } from 'react'
import "../../css/Discover.css"
// import DiscoverBackground from "./DiscoverBackground.js" <-- come back if you need to change this
import DiscoverSearchBox from "./DiscoverSearchBox.js"

class Discover extends Component {

render() {
  return (

    <div>
        <video className="Video" loop autoPlay>
          <source src="https://gonation.com/videos/discover-now-2.mp4" type="video/mp4" />
        </video>
        <div className="SiteSearchPanel">
       
        <DiscoverSearchBox />
      </div>
</div>
  )
}

}


export default Discover

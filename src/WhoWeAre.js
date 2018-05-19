import React, { Component } from 'react'
import "./WhoWeAre.css"
import WhoWeAreReasons from "./WhoWeAreReasons.js"


class WhoWeAre extends Component {

render() {
  return (
    <div>
      <div class="WhyOrderPanel">
        <h2 class="Light">What is GoNation </h2>
        <div class="HomepageDivider"> </div>
        <WhoWeAreReasons />
      </div>
    </div>
  )
}

}


export default WhoWeAre

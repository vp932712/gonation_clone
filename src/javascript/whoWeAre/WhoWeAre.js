import React, { Component } from 'react'
import "../../css/WhoWeAre.css"
import WhoWeAreReasons from "./WhoWeAreReasons.js"


class WhoWeAre extends Component {

render() {
  return (
    <div>
      <div className="Main__Us">
        <h2 className="Light">What is GoNation </h2>
        <div className="HomepageDivider"> </div>
        <WhoWeAreReasons />
      </div>
    </div>
  )
}

}


export default WhoWeAre

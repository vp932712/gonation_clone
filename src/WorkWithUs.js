import React, { Component } from 'react'
import "./WorkWithUs.css"
import WorkWithUsReasons from "./WorkWithUsReasons.js"
import "./WhoWeAre.css"

class WorkWithUs extends Component {

render() {
  return (
    <div>
      <div class="WhyOrderPanel">
        <h2 class="Light">Work with us </h2>
        <div class="HomepageDivider"> </div>
        <WorkWithUsReasons />
      </div>
    </div>
  )
}

}


export default WorkWithUs

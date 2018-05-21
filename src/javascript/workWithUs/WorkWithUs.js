import React, { Component } from 'react'
import "../../css/WorkWithUs.css"
import WorkWithUsReasons from "./WorkWithUsReasons.js"
import "../../css/WhoWeAre.css"

class WorkWithUs extends Component {

render() {
  return (
    <div>
      <div className="Main__Us">
        <h2 className="Light">Work with us </h2>
        <div className="HomepageDivider"> </div>
        <WorkWithUsReasons />
      </div>
    </div>
   );
  }
}


export default WorkWithUs;

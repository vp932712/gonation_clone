import React, { Component } from 'react'
import "../../css/DownloadTheApp.css"
import "../../css/WhoWeAre.css"
import TheApp from "./TheApp.js"


class DownloadTheApp extends Component {

render() {
  return (
    <div>
    <div className="Main__Us">
      <h2 className="Light">Every city is alive</h2>
      <div className="HomepageDivider"> </div>
      <TheApp />
    </div>

    </div>
  )
}

}


export default DownloadTheApp

import React, { Component } from 'react'
import "./DownloadTheApp.css"
import first from'./images/1.png';
import second from'./images/2.png';
import third from'./images/3.png';
import apple from './images/apple.png'
import android from './images/android.png'

class TheApp extends Component {

render() {
  return (
    <div className="MobileAppPanel">
    <div className="MobileAppPanel__Container">
      <div className="MobileAppPanel__Layers">
        <img className="MobileAppPanel__Layers__Layer" src={first} />
        <img className="MobileAppPanel__Layers__Layer_2" src={second}/>
        <img className="MobileAppPanel__Layers__Layer_3" src={third}/>
      </div>
      <div className="MobileAppForm">
        <h1 className="MobileAppForm__Title">Tap into the pulse. </h1>
        <p className="MobileAppForm__Tagline">Always know what’s happening at your favorite places, or discover something amazing in the moment. </p>
        <div className="MobileAppForm__Buttons">
          <a className="MobileAppForm__Buttons__Button">
            <img className="MobileAppForm__Buttons__Button__Image" src={apple} />
          </a>
          <a className="MobileAppForm__Buttons__Button">
            <img className="MobileAppForm__Buttons__Button__Image" src={android} />
          </a>
        </div>
      </div>

    </div>
    </div>
  )
}

}


export default TheApp

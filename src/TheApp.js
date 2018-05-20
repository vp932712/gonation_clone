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
    <div class="MobileAppPanel">
    <div class="MobileAppPanel__Container">
      <div class="MobileAppPanel__Layers">
        <img class="MobileAppPanel__Layers__Layer" src={first} />
        <img class="MobileAppPanel__Layers__Layer_2" src={second}/>
        <img class="MobileAppPanel__Layers__Layer_3" src={third}/>
      </div>
      <div class="MobileAppForm">
        <h1 class="MobileAppForm__Title">Tap into the pulse. </h1>
        <p class="MobileAppForm__Tagline">Always know what’s happening at your favorite places, or discover something amazing in the moment. </p>
        <div class="MobileAppForm__Buttons">
          <a class="MobileAppForm__Buttons__Button">
            <img class="MobileAppForm__Buttons__Button__Image" src={apple} />
          </a>
          <a class="MobileAppForm__Buttons__Button">
            <img class="MobileAppForm__Buttons__Button__Image" src={android} />
          </a>
        </div>
      </div>

    </div>
    </div>
  )
}

}


export default TheApp

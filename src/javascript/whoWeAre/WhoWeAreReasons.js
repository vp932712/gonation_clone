import React, { Component } from 'react'
import '../../css/WhoWeAre.css'

class WhoWeAreReasons extends Component {

render() {
  return (
      <div className="WhoWeArePanel">
        <div className="Bubbles__First">
          <span className="First__Bubble"> </span>
          <span className="Second__Bubble"> </span>
          <span className="Third__Bubble"> </span>
          <span className="Fourth__Bubble"> </span>
          <span className="Fifth__Bubble"> </span>
          <span className="Sixth__Bubble"> </span>
          <span className="Seventh__Bubble"> </span>
          <span className="Eighth__Bubble"> </span>
          <span className="Nineth__Bubble"> </span>
        </div>
        <div className="Bubbles__Second">
          <span className="First__Bubble"> </span>
          <span className="Second__Bubble"> </span>
          <span className="Third__Bubble"> </span>
          <span className="Fourth__Bubble"> </span>
          <span className="Fifth__Bubble"> </span>
          <span className="Sixth__Bubble"> </span>
          <span className="Seventh__Bubble"> </span>
          <span className="Eighth__Bubble"> </span>
          <span className="Nineth__Bubble"> </span>
        </div>
        <div className="WhoWeAre__Reasons">
          <div className="WhoWeAre__Reasons__Reason__Discover">
            <div className="WhoWeAre__Reasons__Reason__Discover__ImageWrap">
              <img className="Discover__Image" src="https://smart.servier.com/wp-content/uploads/2016/10/ECGentier5.png"/>
            </div>
            <h3 className="WhoWeAre__Reasons__Reason__Headline">DISCOVER</h3>
            <p className="P">Know where the amazing things are in your city right now.</p>
          </div>
          <div className="WhoWeAre__Reasons__Reason__Discover">
            <div className="WhoWeAre__Reasons__Reason__Discover__ImageWrap">
              <img className="Discover__Image" src="https://www.cajabancaria.gov.py/v4/templates/rt_supra/images/home/showcase/magnifier-1724298_960_720.png"/>
            </div>
            <h3 className="WhoWeAre__Reasons__Reason__Headline">EXPLORE</h3>
            <p className="P">Uncover what you desire in the city with an advanced real-time local search.</p>
          </div>
          <div className="WhoWeAre__Reasons__Reason__Discover">
            <div className="WhoWeAre__Reasons__Reason__Discover__ImageWrap">
              <img className="Discover__Image" src="https://s3.amazonaws.com/coursestorm/live/media/872c79e0efe311e7987212b5ca500252"/>
            </div>
            <h3 className="WhoWeAre__Reasons__Reason__Headline">SHARE</h3>
            <p className="P">Inspire others with your experience and help them discover what the area has to offer.</p>
          </div>
        </div>
      </div>
    );
  }
}


export default WhoWeAreReasons;

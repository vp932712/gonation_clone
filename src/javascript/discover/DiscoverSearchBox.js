import React, { Component } from 'react'
import "../../css/Discover.css"

class DiscoverSearchBox extends Component {

render() {
  return (
    <div>
      <div className="Discover_Search_Box">
        <div className="Discover_Search_Box_Inner">
          <div className="Discover_Search_Box_Opacity"> </div>
          <div className="Discover_Search_Box_OpacityContainer">
            <div className="Discover_Search_Box_Inner__Logo"> </div>
            <h1 className="Discover_Search_Box_Inner_Title">Life's too short to miss out.</h1>
            <div>
              <form className="Discover_Search_Box_Inner_Autocomplete">
                <div className="AddressAutocomplete">
                  <div className="AutocompleteInput">
                    <input className="AutocompleteInput__input" placeholder="What city would you like to experience?" />
                  </div>
                </div>
                <button type="submit" className="Button">
                  <div>
                    <span>Discover Now</span>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
 }
}


export default DiscoverSearchBox;

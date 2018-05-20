import React, { Component } from 'react'
import "./Discover.css"


class DiscoverSearchBox extends Component {

render() {
  return (
    <div>
      <div className="SiteSearchPanel__SearchBlock">

        <div className="SiteSearchPanel__SearchBlock__Inner">
          <div className="SiteSearchPanel__SearchBlock__OpacityCover"> </div>
          <div className="SiteSearchPanel__SearchBlock__OpacityContainer">
            <div className="SiteSearchPanel__SearchBlock__Inner__Logo icon-delivery-logo"> </div>
            <h1 className="SiteSearchPanel__SearchBlock__Inner__Title">Life's too short to miss out.</h1>
            <div>
              <form className="SiteSearchPanel__SearchBlock__Inner__Autocomplete">
                <div className="AddressAutocomplete">
                  <div className="AutocompleteInput">
                    <input className="AutocompleteInput__input" placeholder="What city would you like to experience?" />
                  </div>
                </div>
                <button type="submit" className="Button">
                  <div>
                    <span>Discover Now !! </span>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

}


export default DiscoverSearchBox

import React, { Component } from 'react'
import "./Discover.css"


class DiscoverSearchBox extends Component {

render() {
  return (
    <div>
      <div class="SiteSearchPanel__SearchBlock">

        <div class="SiteSearchPanel__SearchBlock__Inner">
          <div class="SiteSearchPanel__SearchBlock__OpacityCover"> </div>
          <div class="SiteSearchPanel__SearchBlock__OpacityContainer">
            <div class="SiteSearchPanel__SearchBlock__Inner__Logo icon-delivery-logo"> </div>
            <h1 class="SiteSearchPanel__SearchBlock__Inner__Title">Life's too short to miss out.</h1>
            <div>
              <form class="SiteSearchPanel__SearchBlock__Inner__Autocomplete">
                <div class="AddressAutocomplete">
                  <div class="AutocompleteInput">
                    <input class="AutocompleteInput__input" placeholder="What city would you like to experience?" />
                  </div>
                </div>
                <button type="submit" class="Button">
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

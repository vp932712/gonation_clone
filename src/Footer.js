import React, { Component } from 'react'
import './Footer.css';


class Footer extends Component {

render() {
  return (
    <div class="SiteFooter">
    <div class="SiteFooter__Nav__Links">
      <a class = "SiteFooter__Nav__Links__Link">About Us</a>
      <a class = "SiteFooter__Nav__Links__Link">Contact</a>
      <a class = "SiteFooter__Nav__Links__Link">Careers </a>
      <a class = "SiteFooter__Nav__Links__Link">FAQ</a>
    </div>
    <div class="SiteFooter__Nav__SocialMobileContainer">
      <div class="SiteFooter__Nav__SocialMobileContainer"  >
      <a class="SiteFooter__Nav__SocialMobileContainer__Icons__Icon"> F</a>
      <a class="SiteFooter__Nav__SocialMobileContainer__Icons__Icon">G </a>
      <a class="SiteFooter__Nav__SocialMobileContainer__Icons__Icon">L </a>
      <a class="SiteFooter__Nav__SocialMobileContainer__Icons__Icon">M </a>
      </div>
      <div class="SiteFooter__Nav__SocialMobileContainer" >
      <a class="SiteFooter__Nav__SocialMobileContainer__MobileLinks__Link--apple"></a>
      <a class="SiteFooter__Nav__SocialMobileContainer__MobileLinks__Link--google">Android</a>
      </div>


    </div>


    </div>
  )
}

}


export default Footer

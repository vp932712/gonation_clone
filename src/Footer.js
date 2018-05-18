import React, { Component } from 'react'
import './Footer.css';


class Footer extends Component {

render() {
  return (
    <div class="SiteFooter">
      <div class="Company__Links">
        <a class = "CompanyLinks__A__Tags">About Us</a>
        <a class = "CompanyLinks__A__Tags">Cities</a>
        <a class = "CompanyLinks__A__Tags">Discover </a>
        <a class = "CompanyLinks__A__Tags">Be Discovered</a>
      </div>
      <div class="Icons__Div">
        <div class="Icons__Div"  >
          <a class="Socialmedia__Icons"> F</a>
          <a class="Socialmedia__Icons">G </a>
          <a class="Socialmedia__Icons">L </a>
          <a class="Socialmedia__Icons">M </a>
         </div>
         <div class="Icons__Div" >
          <a class="Apple__Icon"></a>
          <a class="Google__Icon"></a>
         </div>
      </div>
    </div>
    )
  }
}


export default Footer

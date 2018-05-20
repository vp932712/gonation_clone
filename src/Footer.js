import React, { Component } from 'react'
import './Footer.css';


class Footer extends Component {

render() {
  return (
    <div className="SiteFooter">
      <div className="Company__Links">
        <a className = "CompanyLinks__A__Tags">About Us</a>
        <a className = "CompanyLinks__A__Tags">Cities</a>
        <a className = "CompanyLinks__A__Tags">Discover </a>
        <a className = "CompanyLinks__A__Tags">Be Discovered</a>
      </div>
      <div className="Icons__Div">
        <div className="Icons__Div"  >
          <a className="Socialmedia__Icons"> F</a>
          <a className="Socialmedia__Icons">G </a>
          <a className="Socialmedia__Icons">L </a>
          <a className="Socialmedia__Icons">M </a>
         </div>
         <div className="Icons__Div" >
          <a className="Apple__Icon"></a>
          <a className="Google__Icon"></a>
         </div>
      </div>
    </div>
    )
  }
}


export default Footer

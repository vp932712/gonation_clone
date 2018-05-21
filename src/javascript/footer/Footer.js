import React, { Component } from 'react'
import '../../css/Footer.css';
import { SocialIcon } from 'react-social-icons';


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
          <a className="Socialmedia__Icons"> {<SocialIcon url="https://www.facebook.com/GoNation" />}</a>
          <a className="Socialmedia__Icons">{<SocialIcon url="https://www.instagram.com/GoNation/" />}</a>
          <a className="Socialmedia__Icons">{<SocialIcon url="https://twitter.com/gonation?lang=en" />} </a>
          <a className="Socialmedia__Icons">{<SocialIcon url="support@gonation.com" />} </a>
        </div>
         <div className="Icons__Div" >
          <a className="Apple__Icon"></a>
          <a className="Google__Icon"></a>
        </div>
      </div>
        <p className="Site__Note__To__Viewers">Made with ❤️ by Vic Patel for Chaz</p>
    </div>
   );
  }
}


export default Footer;

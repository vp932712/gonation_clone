import React, { Component } from 'react'
import '../../css/Header.css';

class Header extends Component {

  render() {
    return (
     <div>
      <div className="Header">
        <div className="Header__header">
          <div className="Header__header__container">
            <div className="Header__header__container__block--right">
              <ul className="Header__header__links">
                <li className="Header__header__links__link">
                  <button className="Header__header__links__link__link Header__header__border Header__header__color--mode-page-reverse ">LOGIN</button>
                </li>
                <li className="Header__header__links__link">
                  <button className="Header__header__links__link__link Header__header__border Header__header__color--mode-page-reverse ">SIGN UP</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
     </div>
    );
  }
}

export default Header;


 // come back for the logo or create a logo for the company

import React, { Component } from 'react'
import './Header.css';


class Header extends Component {

  render() {
    return (
      <div>
      <div class="Header">
        <div class="Header__header--mode-page-reverse">
          <div class="Header__header__container">
            <div class="Header__header__container__block--right">
              <ul class="Header__header__links">
              <li class="Header__header__links__link">
                <button class="GoNation__Icon"></button>
              </li>
                <li class="Header__header__links__link">
                  <button class="Header__header__links__link__link Header__header__border Header__header__color--mode-page-reverse ">LOGIN</button>
                </li>
                <li class="Header__header__links__link">
                  <button class="Header__header__links__link__link Header__header__border Header__header__color--mode-page-reverse ">SIGN UP</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }

}

export default Header;

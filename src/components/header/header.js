
import React, {Component} from 'react';
import './header.css';

export default class Header extends Component {
  render () {
    return (
        <header className="header">
            <img className="header__headshot" src="./src/imgs/AniDave.jpg" alt=""/>
            <h1 className="header__name">David Chung</h1>
            <ul className="header__contact list-unstyled">
              <li className="header__contact-item"><span className="icon fa fa-phone"></span>(908) 930 - 8054</li>
              <li className="header__contact-item"><span className="icon fa fa-envelope"></span>davidc4747@yahoo.com</li>
              <li className="header__contact-item"><span className="icon fa fa-map-marker"></span>San Francisco, CA</li>
            </ul>
            <ul className="header__social list-unstyled">
              <li className="header__social-item"><span className="icon fa fa-twitter-square"></span></li>
              <li className="header__social-item"><span className="icon fa fa-linkedin-square"></span></li>
              <li className="header__social-item"><span className="icon fa fa-github-square"></span></li>
            </ul>
        </header>
    );
  }
}
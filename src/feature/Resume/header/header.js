
import React, {Component} from 'react';
import './header.css';

export default class Header extends Component {
  render () {
    return (
        <header className="header">

            <img className="header__headshot" src="./assets/imgs/AniDave.jpg" alt=""/>

            <div className="header__top">
              <h1 className="header__name">David Chung</h1>
              <ul className="header__social list-unstyled">
                {/* <li className="header__social-item"><a target="_blank" href="https://app.pluralsight.com/profile/davidc4747"><span className="icon fa fa-share-alt-square"></span></a></li> */}
                {/* <li className="header__social-item"><a target="_blank" href="https://linkedin.com/in/davidc4747/"><span className="icon fab fa-linkedin-square"></span></a></li> */}
                {/* <li className="header__social-item"><a target="_blank" href="https://github.com/davidc4747"><span className="icon fab fa-github-square"></span></a></li> */}
                {/* <li className="header__social-item"><a target="_blank" href="https://twitter.com/davidc4747"><span className="icon fab fa-twitter-square"></span></a></li> */}
                {/* <li className="header__social-item"><a target="_blank" href="https://codepen.io/davidc4747/"><span className="icon fa fa-square"></span></a></li> */}
              </ul>
            </div>

            <ul className="header__contact list-unstyled">
              <li className="header__contact-item"><span className="icon fa fa-phone"></span>(908) 930 - 8054</li>
              <li className="header__contact-item"><span className="icon fa fa-envelope"></span>davidc4747@yahoo.com</li>
              <li className="header__contact-item"><span className="icon fa fa-map-marker"></span>San Francisco, CA</li>
            </ul>
        </header>
    );
  }
}
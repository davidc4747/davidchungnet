
import React from 'react';
import './header.css';

export default () => (
    <header className="header">

        <img className="header__headshot" src="/imgs/AniDave.jpg" alt="Image of David Chung" />

        <div className="header__top">
            <h1 className="header__name">David Chung</h1>
            <ul className="header__social list-unstyled">
                <li className="icon header__social-item"><a target="_blank" rel="nofollow" href="https://twitter.com/davidc4747"><i className="fab fa-twitter"></i></a></li>
                <li className="icon header__social-item"><a target="_blank" rel="nofollow" href="https://www.linkedin.com/in/davidc4747/"><i className="fab fa-linkedin-in"></i></a></li>
                <li className="icon header__social-item"><a target="_blank" rel="nofollow" href="https://github.com/davidc4747"><i className="fab fa-github"></i></a></li>
                <li className="icon header__social-item"><a target="_blank" rel="nofollow" href="https://codepen.io/davidc4747/"><i className="fab fa-codepen"></i></a></li>
                <li className="icon header__social-item"><a target="_blank" rel="nofollow" href="https://www.youtube.com/user/MeNumber47/featured"><i className="fab fa-youtube"></i></a></li>
            </ul>
        </div>

        <ul className="header__contact list-unstyled">
            <li className="header__contact-item"><span className="icon fa fa-phone"></span>(908) 930 - 8054</li>
            <li className="header__contact-item"><span className="icon fa fa-envelope"></span>davidc4747@yahoo.com</li>
            <li className="header__contact-item"><span className="icon fa fa-map-marker"></span>San Francisco, CA</li>
        </ul>
    </header>
);
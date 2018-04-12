
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

import Navbar from '../../components/navbar/navbar.js';

export default class Header extends Component {
    render() {
        return (
            <section className="home">

                <div className="welcome">
                    <img className="welcome__img" src="./src/assets/imgs/AniDave.jpg" alt="Image of David Chung" />
                    <div className="welcome__chatbox">
                        <h3 className="welcome__name-tag">David Chung</h3>
                        <div className="welcome__message">Hey guys, welcome to my site! <p>I've a lot of stuff here so let me know what you wanna see.</p></div>

                        <div className="welcome__contact-info">
                            <div className="welcome__contact-info-link"><i className="fas fa-envelope icon"></i> <a href="mailto:davidc4747@yahoo.com">davidc4747@yahoo.com</a></div>
                            <ul className="welcome__social">
                                <li className="welcome__social-item"><a target="_blank" rel="nofollow" href="https://twitter.com/davidc4747"><i className="fab fa-twitter"></i></a></li>
                                <li className="welcome__social-item"><a target="_blank" rel="nofollow" href="https://www.linkedin.com/in/davidc4747/"><i className="fab fa-linkedin-in"></i></a></li>
                                <li className="welcome__social-item"><a target="_blank" rel="nofollow" href="https://github.com/davidc4747"><i className="fab fa-github"></i></a></li>
                                <li className="welcome__social-item"><a target="_blank" rel="nofollow" href="https://codepen.io/davidc4747/"><i className="fab fa-codepen"></i></a></li>
                                <li className="welcome__social-item"><a target="_blank" rel="nofollow" href="https://www.youtube.com/user/MeNumber47/featured"><i className="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>


                <ul className="home-nav">
                    <Link to="resume"><li className="home-nav__item"><i className="home-nav__icon fa fa-briefcase"></i> Resume</li></Link>
                    <Link to="projects"><li className="home-nav__item"><i className="home-nav__icon fa fa-code"></i> Projects</li></Link>
                    <Link to="journal"><li className="home-nav__item"><i className="home-nav__icon fa fa-book"></i> Journal</li></Link>
                    <Link to="faq"><li className="home-nav__item"><i className="home-nav__icon fa fa-compass"></i> FAQ</li></Link>
                </ul>


            </section>
        );
    }
}